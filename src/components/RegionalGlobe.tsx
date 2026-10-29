"use client";

import dynamic from "next/dynamic";

// GlobeCanvas uses Three.js (WebGL) — must be client-only, no SSR
const GlobeCanvas = dynamic(() => import("./GlobeCanvas"), { ssr: false });

interface RegionalGlobeProps {
  highlightedBranch?: "egypt" | "ksa" | null;
  onHoverBranch?: (branch: "egypt" | "ksa" | null) => void;
}

export default function RegionalGlobe({
  highlightedBranch,
}: RegionalGlobeProps) {
  return (
    <div className="relative w-full max-w-[460px] sm:max-w-[500px] aspect-square flex items-center justify-center select-none">
      {/* Ambient pulsing glow halo */}
      <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,10,43,0.22)_0%,rgba(122,11,26,0.10)_50%,transparent_70%)] blur-2xl pointer-events-none animate-pulse" />

      {/* Outer orbit rings */}
      <div className="absolute w-[96%] h-[96%] rounded-full border border-[#FF0A2B]/18 pointer-events-none" />
      <div className="absolute w-[100%] h-[100%] rounded-full border border-dashed border-[#FF0A2B]/10 pointer-events-none" />

      {/* The real WebGL 3D globe */}
      <div className="relative w-[92%] h-[92%]">
        <GlobeCanvas highlightedBranch={highlightedBranch} />
      </div>
    </div>
  );
}
