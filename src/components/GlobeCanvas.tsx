"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

interface GlobeCanvasProps {
  highlightedBranch?: "egypt" | "ksa" | null;
}

export default function GlobeCanvas({ highlightedBranch }: GlobeCanvasProps) {
  const mountRef = useRef<HTMLDivElement>(null);
  const hlRef    = useRef(highlightedBranch);

  useEffect(() => { hlRef.current = highlightedBranch; }, [highlightedBranch]);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const W = mount.clientWidth  || 460;
    const H = mount.clientHeight || 460;

    // ── Scene / Camera / Renderer ─────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 50);
    camera.position.z = 2.55;

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    // ── Load the original globe PNG as the sphere texture ─────────────────
    // The image is already styled with Duck brand colors (neon-red holographic).
    // Mapping it onto a SphereGeometry gives a real 3D WebGL rotation.
    const loader  = new THREE.TextureLoader();
    const globeTex = loader.load("/images/duck-masar-globe.png");
    globeTex.colorSpace = THREE.SRGBColorSpace;

    // Main sphere — MeshStandardMaterial so lights add depth shading
    const globeGeo = new THREE.SphereGeometry(1, 128, 128);
    const globeMat = new THREE.MeshStandardMaterial({
      map:              globeTex,
      roughness:        0.55,
      metalness:        0.15,
      emissiveMap:      globeTex,   // makes bright parts glow on their own
      emissive:         new THREE.Color(0xff0a2b),
      emissiveIntensity: 0.18,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    scene.add(globe);

    // ── Atmosphere glow shell ─────────────────────────────────────────────
    const atmMat = new THREE.MeshPhongMaterial({
      color:       new THREE.Color(0xff0a2b),
      transparent: true,
      opacity:     0.06,
      side:        THREE.FrontSide,
      depthWrite:  false,
    });
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.055, 64, 64), atmMat));

    // Outer ring halo
    const ringMat = new THREE.MeshBasicMaterial({
      color:       0xff0a2b,
      transparent: true,
      opacity:     0.10,
      side:        THREE.DoubleSide,
      depthWrite:  false,
    });
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(1.075, 0.012, 8, 120),
      ringMat
    );
    ring.rotation.x = Math.PI / 2;
    scene.add(ring);

    // ── Location marker dots (Egypt + Saudi) ─────────────────────────────
    // lat/lon → unit-sphere position
    const ll2v = (lat: number, lon: number, r = 1.02) => {
      const phi   = (90 - lat)  * (Math.PI / 180);
      const theta = (lon + 180) * (Math.PI / 180);
      return new THREE.Vector3(
        -r * Math.sin(phi) * Math.cos(theta),
         r * Math.cos(phi),
         r * Math.sin(phi) * Math.sin(theta)
      );
    };

    const dotMat = new THREE.MeshBasicMaterial({
      color: 0xff0a2b,
      transparent: true,
      opacity: 1,
    });

    const markers = [
      { lat: 30.06, lon: 31.24 },  // Egypt
      { lat: 24.68, lon: 46.72 },  // Saudi Riyadh
    ].map(({ lat, lon }) => {
      const dot = new THREE.Mesh(new THREE.SphereGeometry(0.032, 16, 16), dotMat.clone());
      dot.position.copy(ll2v(lat, lon));
      globe.add(dot);          // child of globe → rotates with it

      // Halo ring around dot
      const halo = new THREE.Mesh(
        new THREE.RingGeometry(0.044, 0.065, 32),
        new THREE.MeshBasicMaterial({
          color: 0xff0a2b,
          transparent: true,
          opacity: 0.5,
          side: THREE.DoubleSide,
          depthWrite: false,
        })
      );
      halo.position.copy(ll2v(lat, lon, 1.021));
      const normal = ll2v(lat, lon).normalize();
      halo.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), normal);
      globe.add(halo);

      return { dot, halo };
    });

    // ── Lights ────────────────────────────────────────────────────────────
    // Key light (front-left, warm white)
    const key = new THREE.DirectionalLight(0xffffff, 2.0);
    key.position.set(-3, 2, 5);
    scene.add(key);

    // Fill (right, red tint)
    const fill = new THREE.DirectionalLight(0xff3355, 0.7);
    fill.position.set(4, -1, -3);
    scene.add(fill);

    // Rim (top-back)
    const rim = new THREE.DirectionalLight(0xffeedd, 0.4);
    rim.position.set(0, 5, -4);
    scene.add(rim);

    // Ambient
    scene.add(new THREE.AmbientLight(0x3a0c15, 1.6));

    // Point light that pulses on highlight
    const pointLight = new THREE.PointLight(0xff0a2b, 0, 3);
    pointLight.position.set(0, 0, 1.5);
    scene.add(pointLight);

    // ── Render loop ───────────────────────────────────────────────────────
    let raf: number;
    const tick = () => {
      raf = requestAnimationFrame(tick);

      globe.rotation.y += 0.004;                        // smooth continuous spin
      globe.rotation.x  = Math.sin(Date.now() * 0.00028) * 0.06; // gentle tilt

      // Pulse markers + point light when a branch is highlighted
      const hl = hlRef.current;
      const pulse = 0.9 + Math.sin(Date.now() * 0.006) * 0.35;
      markers.forEach(({ dot, halo }) => {
        (dot.material  as THREE.MeshBasicMaterial).opacity = hl ? pulse : 1;
        (halo.material as THREE.MeshBasicMaterial).opacity = hl ? pulse * 0.6 : 0.5;
      });
      pointLight.intensity = hl ? 0.9 * pulse : 0;

      // Ring slow counter-spin for depth effect
      ring.rotation.z += 0.0006;

      renderer.render(scene, camera);
    };
    tick();

    // ── Resize ────────────────────────────────────────────────────────────
    const ro = new ResizeObserver(() => {
      const s = mount.clientWidth;
      renderer.setSize(s, s, false);
    });
    ro.observe(mount);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      renderer.dispose();
      globeGeo.dispose();
      globeMat.dispose();
      globeTex.dispose();
      mount.removeChild(renderer.domElement);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={mountRef}
      className="w-full h-full"
      aria-label="كرة أرضية ثلاثية الأبعاد تُظهر فروع Duck Agency في مصر والسعودية"
    />
  );
}
