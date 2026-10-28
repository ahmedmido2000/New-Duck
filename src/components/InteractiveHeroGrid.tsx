"use client";

import React, { useEffect, useRef } from "react";

interface InteractiveHeroGridProps {
  containerRef: React.RefObject<HTMLElement | null>;
  gridSize?: number;
  influenceRadius?: number;
  distortionStrength?: number;
}

interface Point {
  ox: number; // original rest x
  oy: number; // original rest y
  x: number;  // current animated x
  y: number;  // current animated y
}

export default function InteractiveHeroGrid({
  containerRef,
  gridSize = 52,
  influenceRadius = 240,
  distortionStrength = 0.45,
}: InteractiveHeroGridProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d", { alpha: true });
    if (!ctx) return;

    const isTouch =
      window.matchMedia("(hover: none)").matches ||
      window.matchMedia("(pointer: coarse)").matches;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let animationFrameId: number;
    let width = 0;
    let height = 0;
    let nx = 0;
    let ny = 0;
    let points: Point[][] = [];

    let isHovering = false;
    let targetX = -1000;
    let targetY = -1000;
    let currentX = -1000;
    let currentY = -1000;

    const initGrid = () => {
      const rect = container.getBoundingClientRect();
      width = rect.width;
      height = rect.height;

      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.scale(dpr, dpr);

      nx = Math.ceil(width / gridSize) + 2;
      ny = Math.ceil(height / gridSize) + 2;
      points = [];

      for (let i = 0; i < nx; i++) {
        points[i] = [];
        for (let j = 0; j < ny; j++) {
          const ox = i * gridSize;
          const oy = j * gridSize;
          points[i][j] = {
            ox,
            oy,
            x: ox,
            y: oy,
          };
        }
      }
    };

    const drawStaticGrid = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.strokeStyle = "rgba(255, 10, 43, 0.08)";
      ctx.lineWidth = 1;

      for (let j = 0; j < ny; j++) {
        ctx.beginPath();
        ctx.moveTo(points[0][j].ox, points[0][j].oy);
        for (let i = 1; i < nx; i++) {
          ctx.lineTo(points[i][j].ox, points[i][j].oy);
        }
        ctx.stroke();
      }

      for (let i = 0; i < nx; i++) {
        ctx.beginPath();
        ctx.moveTo(points[i][0].ox, points[i][0].oy);
        for (let j = 1; j < ny; j++) {
          ctx.lineTo(points[i][j].ox, points[i][j].oy);
        }
        ctx.stroke();
      }
    };

    const render = () => {
      currentX += (targetX - currentX) * 0.12;
      currentY += (targetY - currentY) * 0.12;

      ctx.clearRect(0, 0, width, height);

      // Distort grid points towards cursor
      for (let i = 0; i < nx; i++) {
        for (let j = 0; j < ny; j++) {
          const pt = points[i][j];

          if (isHovering && currentX > -500) {
            const dx = currentX - pt.ox;
            const dy = currentY - pt.oy;
            const dist = Math.sqrt(dx * dx + dy * dy);

            if (dist < influenceRadius && dist > 0.01) {
              const t = 1 - dist / influenceRadius;
              const pull = t * t * (3 - 2 * t) * distortionStrength;

              const tx = pt.ox + dx * pull;
              const ty = pt.oy + dy * pull;

              pt.x += (tx - pt.x) * 0.2;
              pt.y += (ty - pt.y) * 0.2;
            } else {
              pt.x += (pt.ox - pt.x) * 0.1;
              pt.y += (pt.oy - pt.y) * 0.1;
            }
          } else {
            pt.x += (pt.ox - pt.x) * 0.1;
            pt.y += (pt.oy - pt.y) * 0.1;
          }
        }
      }

      // Render glowing distorted red grid lines
      ctx.lineWidth = 1;
      ctx.strokeStyle = "rgba(255, 10, 43, 0.13)";

      for (let j = 0; j < ny; j++) {
        ctx.beginPath();
        ctx.moveTo(points[0][j].x, points[0][j].y);
        for (let i = 1; i < nx; i++) {
          ctx.lineTo(points[i][j].x, points[i][j].y);
        }
        ctx.stroke();
      }

      for (let i = 0; i < nx; i++) {
        ctx.beginPath();
        ctx.moveTo(points[i][0].x, points[i][0].y);
        for (let j = 1; j < ny; j++) {
          ctx.lineTo(points[i][j].x, points[i][j].y);
        }
        ctx.stroke();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    initGrid();

    if (isTouch || prefersReducedMotion) {
      drawStaticGrid();
      return () => {
        if (animationFrameId) cancelAnimationFrame(animationFrameId);
      };
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      isHovering = true;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      targetX = e.clientX - rect.left;
      targetY = e.clientY - rect.top;
      currentX = targetX;
      currentY = targetY;
      isHovering = true;
    };

    const handleMouseLeave = () => {
      isHovering = false;
      targetX = -1000;
      targetY = -1000;
    };

    container.addEventListener("mousemove", handleMouseMove, { passive: true });
    container.addEventListener("mouseenter", handleMouseEnter, { passive: true });
    container.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    const resizeObserver = new ResizeObserver(() => {
      initGrid();
    });
    resizeObserver.observe(container);

    animationFrameId = requestAnimationFrame(render);

    return () => {
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
      resizeObserver.disconnect();
    };
  }, [containerRef, gridSize, influenceRadius, distortionStrength]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none [mask-image:radial-gradient(ellipse_90%_80%_at_50%_50%,black_40%,transparent_90%)] [-webkit-mask-image:radial-gradient(ellipse_90%_80%_at_50%_50%,black_40%,transparent_90%)]"
      style={{ zIndex: 1 }}
    />
  );
}
