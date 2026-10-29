"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/**
 * GlobeCanvas – True WebGL 3D spinning Earth globe (Three.js).
 * Brand palette: Duck neon red (#FF0A2B) continents on deep wine (#0D0204) ocean.
 * Two glowing pins: Egypt (Cairo/30°N 31°E) and Saudi Arabia (Riyadh/24°N 46°E).
 * Pins pulse brighter when highlightedBranch matches.
 */

interface GlobeCanvasProps {
  highlightedBranch?: "egypt" | "ksa" | null;
}

/** Convert geographic lat/lon (degrees) to a 3D unit-sphere position */
function latLonToVec3(lat: number, lon: number, r = 1.0): THREE.Vector3 {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
    r * Math.cos(phi),
    r * Math.sin(phi) * Math.sin(theta)
  );
}

/** Build the procedural Earth texture on a 2048×1024 canvas */
function buildEarthTexture(): HTMLCanvasElement {
  const W = 2048, H = 1024;
  const c = document.createElement("canvas");
  c.width = W; c.height = H;
  const ctx = c.getContext("2d")!;

  // Ocean
  ctx.fillStyle = "#080103";
  ctx.fillRect(0, 0, W, H);

  // Equirectangular helper: lat/lon → pixel
  const px = (lat: number, lon: number): [number, number] => [
    ((lon + 180) / 360) * W,
    ((90 - lat) / 180) * H,
  ];

  function land(pts: [number, number][], fill: string, glowColor?: string) {
    ctx.beginPath();
    pts.forEach(([la, lo], i) => {
      const [x, y] = px(la, lo);
      i === 0 ? ctx.moveTo(x, y) : ctx.lineTo(x, y);
    });
    ctx.closePath();
    if (glowColor) {
      ctx.shadowBlur = 24;
      ctx.shadowColor = glowColor;
    }
    ctx.fillStyle = fill;
    ctx.fill();
    ctx.shadowBlur = 0;
  }

  const BASE  = "#2A0810";
  const MID   = "#4A1018";
  const COAST = "#8B1A28";
  const HOT   = "#FF0A2B";   // neon red – highlight regions

  // ── Africa ──────────────────────────────────────────────────────────────
  land([
    [37,-5],[37,12],[32,32],[22,37],[12,43],[0,42],[-10,40],[-26,33],
    [-34,18],[-35,20],[-30,31],[-18,36],[-10,40],[0,42],[5,35],[12,43],
    [22,37],[32,32],[37,12],[37,-5],[30,-8],[20,-18],[10,-16],[5,-8],
    [0,8],[-5,11],[-10,13],[-20,14],[-30,16],[-34,18],
  ], BASE);
  land([
    [37,-5],[37,12],[32,32],[22,37],[12,43],[0,42],[5,35],[12,43],
    [22,37],[32,32],[37,12],[37,-5],[30,-8],[20,-18],[10,-16],[5,-8],[0,8],
  ], MID);

  // ── Europe ──────────────────────────────────────────────────────────────
  land([
    [71,28],[70,19],[62,4],[55,-5],[50,-10],[43,-10],[36,-8],[36,3],
    [40,3],[44,8],[44,15],[40,18],[38,25],[41,30],[46,30],[51,24],
    [55,22],[60,25],[65,28],[70,28],[71,28],
  ], MID);

  // ── Asia (main block) ────────────────────────────────────────────────────
  land([
    [70,28],[70,140],[60,145],[50,140],[40,130],[30,120],[20,110],
    [10,100],[0,100],[10,80],[20,70],[30,68],[24,55],[15,45],[12,43],
    [22,37],[32,32],[37,36],[40,40],[41,45],[43,50],[50,60],[60,62],
    [65,60],[68,70],[70,90],[72,105],[73,120],[72,140],[70,140],
  ], BASE);
  land([
    [70,28],[65,28],[60,25],[55,22],[51,24],[46,30],[41,30],[38,25],
    [37,36],[40,40],[41,45],[43,50],[50,60],[60,62],[65,60],[68,70],[70,28],
  ], MID);

  // ── Arabian Peninsula – bright red (Duck Saudi branch) ───────────────────
  land([
    [30,35],[29,35],[22,37],[12,43],[15,45],[24,55],[26,56],
    [22,59],[16,52],[12,45],[10,44],[12,43],
  ], COAST, HOT);
  land([
    [30,35],[29,35],[22,37],[15,43],[20,48],[26,56],[22,59],[16,52],
    [12,45],[10,44],[12,43],
  ], HOT, HOT);

  // ── Egypt / Nile Delta – bright red (Duck Egypt branch) ──────────────────
  land([
    [32,25],[31,27],[30,32],[25,35],[22,37],[24,33],[27,31],[30,30],[32,25],
  ], COAST, HOT);
  land([
    [31,29],[30,31],[27,31],[26,34],[22,37],[24,33],[28,31],[31,29],
  ], HOT, HOT);

  // ── North America ────────────────────────────────────────────────────────
  land([
    [70,-140],[70,-60],[60,-60],[55,-65],[48,-60],[45,-60],[42,-70],
    [38,-75],[30,-80],[25,-80],[20,-85],[15,-90],[20,-105],[25,-110],
    [30,-116],[35,-120],[42,-124],[48,-124],[54,-130],[60,-136],[65,-140],[70,-140],
  ], BASE);
  land([
    [60,-60],[55,-65],[48,-60],[45,-60],[42,-70],[38,-75],[30,-80],
    [25,-80],[20,-85],[15,-90],[20,-105],[25,-110],[30,-116],[35,-120],
    [42,-124],[48,-124],[60,-60],
  ], MID);

  // ── South America ────────────────────────────────────────────────────────
  land([
    [12,-72],[10,-62],[5,-52],[0,-50],[-10,-38],[-20,-40],[-30,-50],
    [-40,-65],[-55,-65],[-55,-68],[-45,-74],[-35,-73],[-18,-70],
    [-5,-80],[0,-78],[5,-77],[10,-75],[12,-72],
  ], BASE);

  // ── Australia ────────────────────────────────────────────────────────────
  land([
    [-15,130],[-14,136],[-12,140],[-18,148],[-28,154],[-38,148],
    [-40,145],[-36,137],[-34,115],[-22,114],[-18,122],[-15,130],
  ], MID);

  // ── Greenland ────────────────────────────────────────────────────────────
  land([
    [83,-30],[83,-60],[77,-72],[72,-56],[68,-52],[76,-18],[83,-18],[83,-30],
  ], MID);

  // ── Japan ────────────────────────────────────────────────────────────────
  land([[43,141],[40,141],[36,136],[34,130],[38,131],[42,140],[43,141]], MID);

  // ── Grid lines ───────────────────────────────────────────────────────────
  ctx.strokeStyle = "rgba(255,10,43,0.09)";
  ctx.lineWidth = 1.5;
  for (let la = -80; la <= 80; la += 20) {
    const y = ((90 - la) / 180) * H;
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }
  for (let lo = -180; lo <= 180; lo += 30) {
    const x = ((lo + 180) / 360) * W;
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }

  // ── Specular shine overlay (upper-left hemisphere light) ─────────────────
  const shine = ctx.createRadialGradient(W*0.28, H*0.22, 0, W*0.4, H*0.4, W*0.45);
  shine.addColorStop(0,   "rgba(255,255,255,0.07)");
  shine.addColorStop(0.5, "rgba(255,255,255,0.02)");
  shine.addColorStop(1,   "rgba(0,0,0,0)");
  ctx.fillStyle = shine;
  ctx.fillRect(0, 0, W, H);

  return c;
}

export default function GlobeCanvas({ highlightedBranch }: GlobeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  // Refs to objects we need to mutate per frame without re-mounting
  const pinMeshesRef = useRef<{ id: "egypt" | "ksa"; meshes: THREE.Mesh[] }[]>([]);
  const frameRef    = useRef<number>(0);
  const hlRef       = useRef(highlightedBranch);

  // Keep hlRef in sync with prop without restarting the whole effect
  useEffect(() => { hlRef.current = highlightedBranch; }, [highlightedBranch]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // ── Scene / Camera / Renderer ──────────────────────────────────────────
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100);
    camera.position.z = 2.7;

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true });
    const resize = () => {
      const s = canvas.clientWidth || 460;
      renderer.setSize(s, s, false);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    resize();
    renderer.setClearColor(0x000000, 0);

    // ── Earth Texture (procedural) ─────────────────────────────────────────
    const texCanvas  = buildEarthTexture();
    const earthTex   = new THREE.CanvasTexture(texCanvas);
    earthTex.colorSpace = THREE.SRGBColorSpace;

    // ── Globe Sphere ───────────────────────────────────────────────────────
    const globeGeo = new THREE.SphereGeometry(1, 96, 96);
    const globeMat = new THREE.MeshPhongMaterial({
      map:       earthTex,
      specular:  new THREE.Color(0xff2244),
      shininess: 22,
      bumpMap:   earthTex,
      bumpScale: 0.012,
    });
    const globe = new THREE.Mesh(globeGeo, globeMat);
    // Start rotated so the Middle-East faces front
    globe.rotation.y = -((46 + 180) * Math.PI / 180); // lon 46°E centered
    scene.add(globe);

    // ── Atmosphere shell ───────────────────────────────────────────────────
    const atmMat = new THREE.MeshPhongMaterial({
      color:       new THREE.Color(0xff0a2b),
      transparent: true,
      opacity:     0.055,
      side:        THREE.FrontSide,
      depthWrite:  false,
    });
    scene.add(new THREE.Mesh(new THREE.SphereGeometry(1.055, 64, 64), atmMat));

    // Outer glow ring (flat torus around equator)
    const torusMat = new THREE.MeshBasicMaterial({
      color:       0xff0a2b,
      transparent: true,
      opacity:     0.08,
      side:        THREE.DoubleSide,
      depthWrite:  false,
    });
    const torus = new THREE.Mesh(new THREE.TorusGeometry(1.08, 0.014, 8, 120), torusMat);
    torus.rotation.x = Math.PI / 2;
    scene.add(torus);

    // ── Location Pins ──────────────────────────────────────────────────────
    const PIN_BRANCHES: { id: "egypt" | "ksa"; lat: number; lon: number }[] = [
      { id: "egypt", lat: 30,  lon: 31 },
      { id: "ksa",   lat: 24,  lon: 46 },
    ];

    pinMeshesRef.current = PIN_BRANCHES.map(({ id, lat, lon }) => {
      const pos = latLonToVec3(lat, lon, 1.015);
      const dir = pos.clone().normalize();

      // Glowing sphere dot
      const dotGeo = new THREE.SphereGeometry(0.028, 16, 16);
      const dotMat = new THREE.MeshPhongMaterial({
        color:            0xff0a2b,
        emissive:         new THREE.Color(0xff0a2b),
        emissiveIntensity: 1.2,
      });
      const dot = new THREE.Mesh(dotGeo, dotMat);
      dot.position.copy(pos);
      globe.add(dot);

      // Cone spike pointing outward
      const coneGeo = new THREE.ConeGeometry(0.018, 0.11, 8);
      const coneMat = new THREE.MeshPhongMaterial({
        color:            0xff0a2b,
        emissive:         new THREE.Color(0xff0a2b),
        emissiveIntensity: 0.9,
      });
      const cone = new THREE.Mesh(coneGeo, coneMat);
      cone.position.copy(pos.clone().add(dir.multiplyScalar(0.055)));
      cone.quaternion.setFromUnitVectors(new THREE.Vector3(0, 1, 0), dir);
      globe.add(cone);

      // Halo ring at base
      const haloGeo = new THREE.RingGeometry(0.038, 0.055, 32);
      const haloMat = new THREE.MeshBasicMaterial({
        color:       0xff0a2b,
        transparent: true,
        opacity:     0.55,
        side:        THREE.DoubleSide,
        depthWrite:  false,
      });
      const halo = new THREE.Mesh(haloGeo, haloMat);
      halo.position.copy(pos.clone().multiplyScalar(1.01));
      halo.quaternion.setFromUnitVectors(new THREE.Vector3(0, 0, 1), pos.clone().normalize());
      globe.add(halo);

      return { id, meshes: [dot, cone, halo] };
    });

    // ── Lighting ───────────────────────────────────────────────────────────
    // Key – warm white from front-left
    const key = new THREE.DirectionalLight(0xffffff, 1.8);
    key.position.set(-3, 2, 5);
    scene.add(key);

    // Fill – neon red from right
    const fill = new THREE.DirectionalLight(0xff2244, 0.65);
    fill.position.set(5, -1, -3);
    scene.add(fill);

    // Rim – top-back cool white
    const rim = new THREE.DirectionalLight(0xffeedd, 0.4);
    rim.position.set(0, 6, -4);
    scene.add(rim);

    // Ambient
    scene.add(new THREE.AmbientLight(0x3a0c15, 1.4));

    // ── Star field ─────────────────────────────────────────────────────────
    const N = 800;
    const starPos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) {
      const r = 9 + Math.random() * 8;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      starPos[i*3]   = r * Math.sin(p) * Math.cos(t);
      starPos[i*3+1] = r * Math.sin(p) * Math.sin(t);
      starPos[i*3+2] = r * Math.cos(p);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    scene.add(new THREE.Points(starGeo, new THREE.PointsMaterial({
      color: 0xffffff, size: 0.055, transparent: true, opacity: 0.45,
    })));

    // ── Animation Loop ─────────────────────────────────────────────────────
    const BASE_SPEED = Math.PI * 2 / 22; // full rotation every 22 s
    let t0 = performance.now();

    const tick = () => {
      frameRef.current = requestAnimationFrame(tick);
      const elapsed = (performance.now() - t0) / 1000;

      // Smooth Y spin
      globe.rotation.y += BASE_SPEED / 60;
      // Gentle axial tilt oscillation
      globe.rotation.x = Math.sin(elapsed * 0.28) * 0.07;

      // Pulse pin brightness based on highlightedBranch
      const hl = hlRef.current;
      pinMeshesRef.current.forEach(({ id, meshes }) => {
        const active = hl === id;
        meshes.forEach((m) => {
          const mat = m.material as THREE.MeshPhongMaterial | THREE.MeshBasicMaterial;
          if ("emissiveIntensity" in mat) {
            (mat as THREE.MeshPhongMaterial).emissiveIntensity =
              active ? 2.8 : (1.0 + Math.sin(elapsed * 3) * 0.3);
          }
          if ("opacity" in mat) {
            (mat as THREE.MeshBasicMaterial).opacity =
              active ? 0.95 : (0.45 + Math.sin(elapsed * 3) * 0.12);
          }
        });
      });

      // Torus gentle pulse
      (torus.material as THREE.MeshBasicMaterial).opacity =
        0.06 + Math.sin(elapsed * 1.2) * 0.025;

      renderer.render(scene, camera);
    };
    tick();

    // ── Resize observer ────────────────────────────────────────────────────
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    return () => {
      cancelAnimationFrame(frameRef.current);
      ro.disconnect();
      renderer.dispose();
      earthTex.dispose();
      globeGeo.dispose();
      globeMat.dispose();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      aria-label="كرة أرضية ثلاثية الأبعاد تُظهر فروع Duck Agency في مصر والسعودية"
    />
  );
}
