"use client";

import { useEffect, useRef } from "react";

interface FluidParticle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  maxRadius: number;
  alpha: number;
  decay: number;
  growth: number;
  hueOffset: number;
}

interface WavePulse {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  alpha: number;
  decay: number;
  wobblePhase: number;
}

export default function WaterRipples() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check reduced motion & coarse pointer
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const isCoarse = window.matchMedia("(pointer: coarse)").matches;
    if (isCoarse) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    let animId: number | null = null;
    let isRunning = false;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const particles: FluidParticle[] = [];
    const wavePulses: WavePulse[] = [];

    // Mouse velocity tracking
    let lastX = -100;
    let lastY = -100;
    let lastTime = performance.now();

    // Smooth ambient mouse aura
    let auraX = -100;
    let auraY = -100;
    let targetAuraX = -100;
    let targetAuraY = -100;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const spawnFluidStream = (x: number, y: number, vx: number, vy: number, speed: number) => {
      // Spawn smooth fluid particles along the cursor motion
      const count = Math.min(3, Math.max(1, Math.floor(speed * 0.4)));

      for (let i = 0; i < count; i++) {
        if (particles.length > 70) {
          particles.shift(); // Keep frame-budget ultra lean
        }

        const angleOffset = (Math.random() - 0.5) * 0.8;
        const spread = (Math.random() - 0.5) * 12;

        particles.push({
          x: x + spread,
          y: y + spread,
          vx: vx * 0.35 + Math.sin(angleOffset) * 1.5,
          vy: vy * 0.35 + Math.cos(angleOffset) * 1.5,
          radius: 18 + Math.random() * 16 + Math.min(25, speed * 4),
          maxRadius: 75 + Math.random() * 45,
          alpha: Math.min(0.38, 0.18 + speed * 0.05),
          decay: 0.012 + Math.random() * 0.008,
          growth: 0.85 + Math.random() * 0.6,
          hueOffset: Math.random() * 15,
        });
      }

      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(render);
      }
    };

    const spawnWavePulse = (x: number, y: number, power = 1.0) => {
      if (wavePulses.length > 8) {
        wavePulses.shift();
      }

      wavePulses.push({
        x,
        y,
        radius: 10,
        maxRadius: 180 * power,
        speed: 3.5 * power,
        alpha: 0.45 * power,
        decay: 0.012,
        wobblePhase: Math.random() * Math.PI * 2,
      });

      // Extra burst of fluid droplets
      for (let i = 0; i < 8; i++) {
        const theta = (i / 8) * Math.PI * 2 + Math.random() * 0.3;
        const vel = 3 + Math.random() * 4;
        particles.push({
          x,
          y,
          vx: Math.cos(theta) * vel,
          vy: Math.sin(theta) * vel,
          radius: 14 + Math.random() * 10,
          maxRadius: 65,
          alpha: 0.35,
          decay: 0.015,
          growth: 0.9,
          hueOffset: 0,
        });
      }

      if (!isRunning) {
        isRunning = true;
        animId = requestAnimationFrame(render);
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      const now = performance.now();
      const dt = Math.max(1, now - lastTime);
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      const dist = Math.hypot(dx, dy);

      targetAuraX = e.clientX;
      targetAuraY = e.clientY;

      if (dist > 12) {
        const speed = dist / dt; // pixels per ms
        spawnFluidStream(e.clientX, e.clientY, dx / dt, dy / dt, speed);

        lastX = e.clientX;
        lastY = e.clientY;
        lastTime = now;
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        spawnWavePulse(e.clientX, e.clientY, 1.2);
      }
    };

    const render = (time: number) => {
      ctx.clearRect(0, 0, width, height);

      // Smooth aura lag
      auraX += (targetAuraX - auraX) * 0.12;
      auraY += (targetAuraY - auraY) * 0.12;

      // 1. Draw Subtle Ambient Cursor Fluid Light
      if (targetAuraX > 0 && targetAuraY > 0) {
        const auraGrad = ctx.createRadialGradient(
          auraX,
          auraY,
          0,
          auraX,
          auraY,
          140
        );
        auraGrad.addColorStop(0, "rgba(255, 10, 43, 0.06)");
        auraGrad.addColorStop(0.6, "rgba(255, 10, 43, 0.02)");
        auraGrad.addColorStop(1, "rgba(255, 10, 43, 0)");

        ctx.fillStyle = auraGrad;
        ctx.beginPath();
        ctx.arc(auraX, auraY, 140, 0, Math.PI * 2);
        ctx.fill();
      }

      // 2. Draw Organic Liquid Wave Pulses (Undulating fluid surface ripples)
      for (let i = wavePulses.length - 1; i >= 0; i--) {
        const w = wavePulses[i];
        w.radius += w.speed;
        w.alpha -= w.decay;
        w.wobblePhase += 0.04;

        if (w.alpha <= 0.01 || w.radius >= w.maxRadius) {
          wavePulses.splice(i, 1);
          continue;
        }

        ctx.save();
        ctx.beginPath();
        const steps = 40;
        for (let s = 0; s <= steps; s++) {
          const theta = (s / steps) * Math.PI * 2;
          const wobble = Math.sin(theta * 6 + w.wobblePhase) * (w.radius * 0.035);
          const r = Math.max(1, w.radius + wobble);
          const px = w.x + Math.cos(theta) * r;
          const py = w.y + Math.sin(theta) * r;

          if (s === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        }
        ctx.closePath();

        // Wave crest highlight
        ctx.strokeStyle = `rgba(255, 10, 43, ${w.alpha * 0.6})`;
        ctx.lineWidth = Math.max(1, (1 - w.radius / w.maxRadius) * 2.8);
        ctx.stroke();

        // Inner specular refraction
        ctx.strokeStyle = `rgba(255, 255, 255, ${w.alpha * 0.4})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        ctx.restore();
      }

      // 3. Draw Silky Fluid Ink / Liquid Smoke Stream (Connected particle field)
      for (let j = particles.length - 1; j >= 0; j--) {
        const p = particles[j];

        // Hydrodynamic velocity + subtle curl
        p.x += p.vx;
        p.y += p.vy;
        p.vx *= 0.94;
        p.vy *= 0.94;

        // Subtle fluid curl drift
        p.vx += Math.sin(p.y * 0.02 + time * 0.002) * 0.15;
        p.vy += Math.cos(p.x * 0.02 + time * 0.002) * 0.15;

        p.radius += p.growth;
        p.alpha -= p.decay;

        if (p.alpha <= 0.01 || p.radius >= p.maxRadius) {
          particles.splice(j, 1);
          continue;
        }

        // Render soft glowing liquid fluid puff
        const grad = ctx.createRadialGradient(
          p.x,
          p.y,
          0,
          p.x,
          p.y,
          p.radius
        );

        grad.addColorStop(0, `rgba(255, 10, 43, ${p.alpha * 0.6})`);
        grad.addColorStop(0.45, `rgba(255, 60, 85, ${p.alpha * 0.3})`);
        grad.addColorStop(1, "rgba(255, 10, 43, 0)");

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Sleep loop when calm to save 100% CPU
      if (particles.length === 0 && wavePulses.length === 0) {
        isRunning = false;
        animId = null;
      } else {
        animId = requestAnimationFrame(render);
      }
    };

    window.addEventListener("resize", handleResize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mousedown", handleMouseDown, { passive: true });

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mousedown", handleMouseDown);
      if (animId) cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none z-30 w-full h-full select-none"
    />
  );
}
