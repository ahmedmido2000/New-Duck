"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Sparkles, Navigation2 } from "lucide-react";

export default function RegionalGlobe() {
  const [activePin, setActivePin] = useState<string | null>(null);

  const hubs = [
    {
      id: "egypt",
      name: "جمهورية مصر العربية",
      city: "مدينة 6 أكتوبر - الحصري",
      country: "مصر",
      flag: "🇪🇬",
      phone: "+20 10 6454 4080",
      top: "42%",
      left: "40%",
      color: "#FF0A2B",
    },
    {
      id: "ksa",
      name: "المملكة العربية السعودية",
      city: "الرياض",
      country: "السعودية",
      flag: "🇸🇦",
      phone: "+966 57 939 8098",
      top: "46%",
      left: "62%",
      color: "#00A651",
    },
  ];

  return (
    <div className="relative w-full h-full min-h-[380px] sm:min-h-[440px] rounded-2xl overflow-hidden border border-[#FF0A2B]/40 bg-gradient-to-br from-[#1A0509]/90 via-[#0D0204] to-[#140206] shadow-2xl flex items-center justify-center p-4 select-none">
      {/* Background Starfield / Particle Dust */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div
          className="w-full h-full"
          style={{
            backgroundImage:
              "radial-gradient(1px 1px at 20px 30px, #FFB800 50%, transparent 100%), radial-gradient(1px 1px at 60px 120px, #ffffff 50%, transparent 100%), radial-gradient(1.5px 1.5px at 150px 80px, #FF0A2B 50%, transparent 100%), radial-gradient(1px 1px at 280px 200px, #FFB800 50%, transparent 100%)",
            backgroundSize: "300px 300px",
          }}
        />
      </div>

      {/* Atmospheric Core Glows */}
      <div className="absolute w-[360px] h-[360px] sm:w-[420px] sm:h-[420px] rounded-full bg-gradient-to-tr from-[#FF0A2B]/20 via-[#FF9500]/25 to-transparent blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute w-[280px] h-[280px] rounded-full bg-[#FFB800]/15 blur-2xl pointer-events-none" />

      {/* 3D Holographic Globe Outer Housing */}
      <div className="relative w-[300px] h-[300px] sm:w-[360px] sm:h-[360px] flex items-center justify-center">
        {/* Outer Orbit Rings (Tilted 3D Orbit) */}
        <div
          className="absolute inset-[-20px] rounded-full border border-[#FFB800]/25 border-dashed pointer-events-none"
          style={{
            transform: "rotateX(72deg) rotateY(-18deg)",
            animation: "spin 30s linear infinite",
          }}
        />
        <div
          className="absolute inset-[-35px] rounded-full border border-[#FF0A2B]/20 pointer-events-none"
          style={{
            transform: "rotateX(65deg) rotateY(25deg)",
            animation: "spin 45s linear infinite reverse",
          }}
        />

        {/* Orbiting Satellite Particle */}
        <div
          className="absolute inset-[-20px] rounded-full pointer-events-none"
          style={{
            transform: "rotateX(72deg) rotateY(-18deg)",
            animation: "spin 12s linear infinite",
          }}
        >
          <div className="w-2.5 h-2.5 rounded-full bg-[#FFB800] shadow-[0_0_12px_#FFB800] absolute -top-1 left-1/2 -translate-x-1/2" />
        </div>

        {/* The 3D Sphere Body */}
        <div
          className="relative w-full h-full rounded-full overflow-hidden shadow-[0_0_80px_rgba(255,149,0,0.35)]"
          style={{
            background:
              "radial-gradient(circle at 35% 30%, rgba(255, 184, 0, 0.45) 0%, rgba(255, 10, 43, 0.4) 28%, rgba(122, 11, 26, 0.7) 60%, #0D0204 88%)",
            boxShadow:
              "inset 0 0 60px rgba(255, 184, 0, 0.45), inset -25px -25px 70px rgba(0, 0, 0, 0.95), 0 0 65px rgba(255, 149, 0, 0.35)",
          }}
        >
          {/* Luminous Atmospheric Edge Halo */}
          <div className="absolute inset-0 rounded-full border-2 border-[#FFB800]/50 pointer-events-none shadow-[inset_0_0_30px_rgba(255,184,0,0.5)]" />

          {/* SVG Map of Middle East and Rotating Holographic Grid */}
          <svg
            viewBox="0 0 400 400"
            className="w-full h-full relative z-10"
            fill="none"
          >
            <defs>
              <linearGradient id="goldLaserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#FFB800" />
                <stop offset="50%" stopColor="#FF0A2B" />
                <stop offset="100%" stopColor="#FF9500" />
              </linearGradient>
              <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
            </defs>

            {/* Latitude Grid Circles */}
            <ellipse cx="200" cy="100" rx="155" ry="32" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 4" />
            <ellipse cx="200" cy="150" rx="188" ry="40" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="4 4" />
            <ellipse cx="200" cy="200" rx="198" ry="44" stroke="#FFB800" strokeWidth="1.2" strokeOpacity="0.45" />
            <ellipse cx="200" cy="250" rx="188" ry="40" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="4 4" />
            <ellipse cx="200" cy="300" rx="155" ry="32" stroke="#FFB800" strokeWidth="0.8" strokeOpacity="0.25" strokeDasharray="3 4" />

            {/* Longitude Grid Ellipses */}
            <ellipse cx="200" cy="200" rx="45" ry="198" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="3 5" />
            <ellipse cx="200" cy="200" rx="95" ry="198" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.35" strokeDasharray="4 5" />
            <ellipse cx="200" cy="200" rx="145" ry="198" stroke="#FFB800" strokeWidth="1" strokeOpacity="0.35" />
            <line x1="200" y1="2" x2="200" y2="398" stroke="#FFB800" strokeWidth="1.2" strokeOpacity="0.45" />

            {/* Stylized Luminous Continental Outlines (Middle East & North Africa) */}
            <g filter="url(#laserGlow)" stroke="#FFB800" strokeWidth="2" fill="#FF9500" fillOpacity="0.12">
              {/* North Africa / Egypt Landmass */}
              <path
                d="M 120 160 Q 150 145 180 155 Q 195 165 190 195 Q 170 215 150 210 Q 130 205 120 160 Z"
                className="transition-all"
              />
              {/* Nile / Delta Indicator */}
              <path d="M 175 165 Q 172 185 170 205" stroke="#FF0A2B" strokeWidth="2" fill="none" />

              {/* Arabian Peninsula */}
              <path
                d="M 205 170 Q 235 160 270 175 Q 295 195 285 235 Q 255 265 225 240 Q 210 210 205 170 Z"
                className="transition-all"
              />
              {/* Red Sea Trench (water division) */}
              <path d="M 192 170 Q 200 205 212 235" stroke="#0D0204" strokeWidth="4" fill="none" opacity="0.9" />

              {/* Levant / Gulf Coastline */}
              <path
                d="M 195 145 Q 225 140 260 148 Q 285 160 275 175"
                fill="none"
                stroke="#FFB800"
                strokeWidth="2.5"
              />
            </g>

            {/* Pulsing Inter-Hub Data Arc (Cairo -> Riyadh -> Dubai) */}
            <path
              d="M 172 175 Q 215 170 245 195 T 285 210"
              fill="none"
              stroke="url(#goldLaserGrad)"
              strokeWidth="2.5"
              strokeDasharray="4 6"
              className="animate-pulse"
            />

            {/* Glowing Pulse Rings on Nodes */}
            {/* Cairo Node */}
            <circle cx="172" cy="175" r="14" fill="none" stroke="#FF0A2B" strokeWidth="1.5" className="radar-ring" />
            <circle cx="172" cy="175" r="5" fill="#FF0A2B" />
            <circle cx="172" cy="175" r="2" fill="#ffffff" />

            {/* Riyadh Node */}
            <circle cx="245" cy="195" r="16" fill="none" stroke="#00A651" strokeWidth="1.5" className="radar-ring" />
            <circle cx="245" cy="195" r="5.5" fill="#00A651" />
            <circle cx="245" cy="195" r="2.5" fill="#ffffff" />

            {/* Dubai Node */}
            <circle cx="285" cy="210" r="14" fill="none" stroke="#FF9500" strokeWidth="1.5" className="radar-ring" />
            <circle cx="285" cy="210" r="4.5" fill="#FF9500" />
            <circle cx="285" cy="210" r="2" fill="#ffffff" />
          </svg>

          {/* Realistic Sphere Shading Highlight Overlay */}
          <div
            className="absolute inset-0 rounded-full pointer-events-none"
            style={{
              background:
                "radial-gradient(circle at 30% 25%, rgba(255,255,255,0.2) 0%, transparent 45%)",
            }}
          />
        </div>

        {/* 3D Floating Location Pin Badges (Exactly matching the reference image) */}
        {hubs.map((hub) => {
          const isSelected = activePin === hub.id;
          return (
            <motion.div
              key={hub.id}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.3, type: "spring", stiffness: 260, damping: 20 }}
              className="absolute z-20 cursor-pointer"
              style={{
                top: hub.top,
                left: hub.left,
                transform: "translate(-50%, -100%)",
              }}
              onMouseEnter={() => setActivePin(hub.id)}
              onMouseLeave={() => setActivePin(null)}
              onClick={() => setActivePin(isSelected ? null : hub.id)}
            >
              <div className="relative group flex flex-col items-center">
                {/* Pin Head Badge */}
                <motion.div
                  whileHover={{ scale: 1.15, y: -4 }}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#0D0204]/90 backdrop-blur-md border border-[#FFB800]/80 shadow-[0_0_20px_rgba(255,184,0,0.6)] text-white text-xs font-black transition-all"
                >
                  <span className="text-sm">{hub.flag}</span>
                  <span className="font-extrabold text-[11px] sm:text-xs tracking-tight">
                    {hub.country}
                  </span>
                </motion.div>

                {/* Pin Stem Needle */}
                <div className="w-0.5 h-3 bg-gradient-to-b from-[#FFB800] to-transparent shadow-[0_0_8px_#FFB800]" />

                {/* Ground Target Pulse Dot */}
                <div className="w-2 h-2 rounded-full bg-[#FFB800] shadow-[0_0_10px_#FFB800] animate-ping" />

                {/* Expanded Interactive Tooltip on Hover */}
                {isSelected && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 5, scale: 0.95 }}
                    className="absolute -top-14 z-30 min-w-[140px] p-2.5 rounded-xl bg-[#0D0204]/95 border border-[#FF0A2B]/60 shadow-2xl text-center backdrop-blur-lg"
                  >
                    <div className="text-white font-black text-xs">
                      {hub.name}
                    </div>
                    <div className="text-[10px] text-[#FFB800] font-bold mt-0.5">
                      {hub.city}
                    </div>
                  </motion.div>
                )}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Floating Bottom Status Pill */}
      <div className="absolute bottom-5 inset-x-5 z-20 flex items-center justify-center pointer-events-none">
        <div className="inline-flex items-center gap-2 bg-[#0D0204]/85 backdrop-blur-md px-4 py-1.5 rounded-full border border-[#FFB800]/40 shadow-[0_0_25px_rgba(255,184,0,0.25)]">
          <Navigation2 className="w-3.5 h-3.5 text-[#FFB800] animate-spin" style={{ animationDuration: "12s" }} />
          <span className="text-xs sm:text-sm font-extrabold text-white">
            فروعنا الرسمية: مدينة 6 أكتوبر (مصر) · الرياض (السعودية)
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#FF0A2B]" />
        </div>
      </div>
    </div>
  );
}
