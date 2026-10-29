"use client";

import { useEffect, useRef } from "react";
import createGlobe, { COBEOptions } from "cobe";

interface GlobeCanvasProps {
  highlightedBranch?: "egypt" | "ksa" | null;
}

export default function GlobeCanvas({ highlightedBranch }: GlobeCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const hlRef     = useRef(highlightedBranch);
  const rafRef    = useRef<number>(0);

  useEffect(() => { hlRef.current = highlightedBranch; }, [highlightedBranch]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const SIZE = canvas.offsetWidth || 460;
    let phi = 0;

    const opts: COBEOptions = {
      devicePixelRatio: Math.min(window.devicePixelRatio, 2),
      width:  SIZE * 2,
      height: SIZE * 2,
      phi,
      theta: 0.25,        // slight tilt so Middle-East is visible
      dark:  1,
      diffuse:       1.6,
      mapSamples:    24000,
      mapBrightness: 5.5,
      mapBaseBrightness: 0.05,
      baseColor:   [0.08, 0.01, 0.03] as [number,number,number],
      markerColor: [1,    0.04, 0.17] as [number,number,number],
      glowColor:   [0.9,  0.07, 0.18] as [number,number,number],
      scale: 1.05,
      markers: [
        // Egypt — Cairo / 6 October City
        { location: [30.06, 31.24], size: 0.075 },
        // Saudi Arabia — Riyadh
        { location: [24.68, 46.72], size: 0.075 },
      ],
    };

    const globe = createGlobe(canvas, opts);

    // Animation loop — spin + pulse markers on highlight
    const tick = () => {
      rafRef.current = requestAnimationFrame(tick);
      phi += 0.0035;

      const hl = hlRef.current;
      const pulse = hl
        ? ([1 + Math.sin(Date.now() * 0.006) * 0.35, 0.04, 0.17] as [number,number,number])
        : ([1, 0.04, 0.17] as [number,number,number]);

      globe.update({ phi, markerColor: pulse });
    };
    tick();

    return () => {
      cancelAnimationFrame(rafRef.current);
      globe.destroy();
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{ width: "100%", height: "100%", aspectRatio: "1 / 1" }}
      aria-label="كرة أرضية ثلاثية الأبعاد تُظهر فروع Duck Agency في مصر والسعودية"
    />
  );
}
