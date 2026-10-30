"use client";

import { useEffect, useRef } from "react";

interface TrailPoint {
  x: number;
  y: number;
  vx: number;
  vy: number;
  speed: number;
  time: number;
}

interface CausticRipple {
  x: number;
  y: number;
  radius: number;
  maxRadius: number;
  speed: number;
  alpha: number;
  decay: number;
  rings: number;
}

export default function WaterRipples() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    // Check reduced motion & coarse pointer (mobile/touch)
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

    // Trail and Ripples state
    const trail: TrailPoint[] = [];
    const ripples: CausticRipple[] = [];

    let lastX = -100;
    let lastY = -100;
    let lastTime = performance.now();
    let distSinceLastRipple = 0;

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const addRipple = (x: number, y: number, maxRadius = 140, strength = 0.5, rings = 2) => {
      if (ripples.length > 20) {
        ripples.shift();
      }

      ripples.push({
        x,
        y,
        radius: 6,
        maxRadius,
        speed: 2.2 + strength * 1.6,
        alpha: Math.min(0.5, strength),
        decay: 0.014,
        rings,
      });

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

      if (dist > 3) {
        const speed = Math.min(25, dist / dt * 10);
        trail.push({
          x: e.clientX,
          y: e.clientY,
          vx: dx / dt,
          vy: dy / dt,
          speed,
          time: now,
        });

        // Spawn periodic water ripples along the movement path
        distSinceLastRipple += dist;
        if (distSinceLastRipple > 45) {
          addRipple(
            e.clientX,
            e.clientY,
            Math.min(180, 90 + speed * 4),
            Math.min(0.45, 0.2 + speed * 0.015),
            2
          );
          distSinceLastRipple = 0;
        }

        lastX = e.clientX;
        lastY = e.clientY;
        lastTime = now;

        if (!isRunning) {
          isRunning = true;
          animId = requestAnimationFrame(render);
        }
      }
    };

    const handleMouseDown = (e: MouseEvent) => {
      if (e.button === 0) {
        // Impact splash with 3 concentric caustic rings
        addRipple(e.clientX, e.clientY, 220, 0.75, 3);
      }
    };

    const render = (currentTime: number) => {
      ctx.clearRect(0, 0, width, height);

      const now = performance.now();
      const TRAIL_LIFETIME = 520; // ms

      // ── 1. Clean up old trail points ──
      while (trail.length > 0 && now - trail[0].time > TRAIL_LIFETIME) {
        trail.shift();
      }

      // ── 2. Render Continuous Liquid Ribbon Wave ──
      if (trail.length > 2) {
        // Draw the fluid water ribbon
        for (let i = 1; i < trail.length; i++) {
          const p0 = trail[i - 1];
          const p1 = trail[i];
          const age = now - p1.time;
          const progress = age / TRAIL_LIFETIME; // 0 (new) to 1 (old)
          const alpha = Math.max(0, (1 - progress) * 0.35);

          if (alpha <= 0.005) continue;

          // Liquid ribbon width tapers from head to tail
          const baseWidth = Math.max(2, (1 - progress) * 16 + p1.speed * 0.6);

          // Subtle harmonic wave undulation
          const waveOffset = Math.sin(currentTime * 0.008 + i * 0.4) * (baseWidth * 0.3);

          // 2.1 Outer Ambient Liquid Sheen
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.strokeStyle = `rgba(255, 10, 43, ${alpha * 0.55})`;
          ctx.lineWidth = baseWidth + waveOffset;
          ctx.lineCap = "round";
          ctx.lineJoin = "round";
          ctx.stroke();

          // 2.2 Specular Water Crest Highlight (Crisp liquid center)
          ctx.beginPath();
          ctx.moveTo(p0.x, p0.y);
          ctx.lineTo(p1.x, p1.y);
          ctx.strokeStyle = `rgba(255, 255, 255, ${alpha * 0.6})`;
          ctx.lineWidth = Math.max(1, (baseWidth + waveOffset) * 0.25);
          ctx.stroke();
        }
      }

      // ── 3. Render Concentric Caustic Water Ripples ──
      for (let rIdx = ripples.length - 1; rIdx >= 0; rIdx--) {
        const rip = ripples[rIdx];
        rip.radius += rip.speed;
        rip.alpha -= rip.decay;

        if (rip.alpha <= 0.005 || rip.radius >= rip.maxRadius) {
          ripples.splice(rIdx, 1);
          continue;
        }

        const waveLife = rip.radius / rip.maxRadius;

        for (let k = 0; k < rip.rings; k++) {
          const ringR = rip.radius - k * 18;
          if (ringR <= 2) continue;

          const ringAlpha = rip.alpha * (1 - k * 0.28) * (1 - waveLife * 0.5);
          if (ringAlpha <= 0.005) continue;

          // Primary Water Wave Ring in Duck Neon Red
          ctx.beginPath();
          ctx.arc(rip.x, rip.y, ringR, 0, Math.PI * 2);
          ctx.strokeStyle = `rgba(255, 10, 43, ${ringAlpha * 0.6})`;
          ctx.lineWidth = Math.max(1, (1 - waveLife) * 2.4);
          ctx.stroke();

          // Liquid Specular Highlight on wave crest (top-left arc)
          ctx.beginPath();
          ctx.arc(rip.x, rip.y, ringR, Math.PI * 1.1, Math.PI * 1.7);
          ctx.strokeStyle = `rgba(255, 255, 255, ${ringAlpha * 0.75})`;
          ctx.lineWidth = Math.max(0.8, (1 - waveLife) * 1.6);
          ctx.stroke();

          // Liquid Trough Refraction on bottom-right arc
          ctx.beginPath();
          ctx.arc(rip.x, rip.y, ringR, Math.PI * 0.1, Math.PI * 0.7);
          ctx.strokeStyle = `rgba(13, 2, 4, ${ringAlpha * 0.25})`;
          ctx.lineWidth = Math.max(0.8, (1 - waveLife) * 1.2);
          ctx.stroke();
        }
      }

      // ── 4. Zero CPU Sleep mode when no motion active ──
      if (trail.length === 0 && ripples.length === 0) {
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
