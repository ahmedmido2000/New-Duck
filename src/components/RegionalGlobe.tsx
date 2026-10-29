"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageCircle, MapPin } from "lucide-react";

interface RegionalGlobeProps {
  highlightedBranch?: "egypt" | "ksa" | null;
  onHoverBranch?: (branch: "egypt" | "ksa" | null) => void;
}

export default function RegionalGlobe({
  highlightedBranch,
  onHoverBranch,
}: RegionalGlobeProps) {
  const [activePin, setActivePin] = useState<"egypt" | "ksa" | null>(null);

  const effectivePin = activePin || highlightedBranch;

  const pins = [
    {
      id: "egypt" as const,
      name: "فرع جمهورية مصر العربية",
      city: "مدينة 6 أكتوبر - الحصري",
      country: "مصر",
      phone: "+20 10 6454 4080",
      tel: "+201064544080",
      wa: "https://wa.me/201064544080?text=مرحباً%20Duck%20Agency%20مصر،%20أود%20الاستفسار%20عن%20خدماتكم",
      // Exact geographic position of Egypt on the globe (Nile / Cairo / 6th October)
      left: "37.5%",
      top: "33.5%",
      flagSvg: (
        // Egypt Flag Tricolor (Red, White with Eagle, Black)
        <svg viewBox="0 0 36 36" className="w-full h-full rounded-full">
          <rect width="36" height="12" fill="#CE1126" />
          <rect y="12" width="36" height="12" fill="#FFFFFF" />
          <rect y="24" width="36" height="12" fill="#000000" />
          {/* Golden Eagle emblem in center */}
          <circle cx="18" cy="18" r="3.2" fill="#C09300" />
          <path d="M16.5 16.5 L19.5 16.5 L18 19.5 Z" fill="#7D6000" />
        </svg>
      ),
    },
    {
      id: "ksa" as const,
      name: "فرع المملكة العربية السعودية",
      city: "الرياض، المملكة العربية السعودية",
      country: "السعودية",
      phone: "+966 57 939 8098",
      tel: "+966579398098",
      wa: "https://wa.me/966579398098?text=مرحباً%20Duck%20Agency%20السعودية،%20أود%20الاستفسار%20عن%20خدماتكم",
      // Exact geographic position of Saudi Arabia on the globe (Riyadh / Najd)
      left: "49.5%",
      top: "37.5%",
      flagSvg: (
        // Saudi Arabia Flag (Green with White Palm & Swords emblem)
        <svg viewBox="0 0 36 36" className="w-full h-full rounded-full bg-[#006C35]">
          <circle cx="18" cy="18" r="18" fill="#006C35" />
          {/* White emblem */}
          <path
            d="M18 10 C18 12 16 13 15 14 C17 14 18 15 18 16 C18 15 19 14 21 14 C20 13 18 12 18 10 Z"
            fill="#FFFFFF"
          />
          <line x1="18" y1="14" x2="18" y2="21" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
          <path d="M13 22 L23 22 M14 24 L22 24" stroke="#FFFFFF" strokeWidth="1" strokeLinecap="round" />
        </svg>
      ),
    },
  ];

  return (
    <div
      className="relative w-full max-w-[460px] sm:max-w-[500px] aspect-square flex items-center justify-center select-none"
      dir="rtl"
    >
      {/* Ambient Red Glow Halo behind the Globe */}
      <div className="absolute w-[85%] h-[85%] rounded-full bg-[radial-gradient(circle,rgba(255,10,43,0.25)_0%,rgba(122,11,26,0.12)_45%,transparent_70%)] blur-2xl pointer-events-none animate-pulse" />

      {/* Outer Subtle Orbit / Radar Halo Ring */}
      <div className="absolute w-[94%] h-[94%] rounded-full border border-[#FF0A2B]/20 pointer-events-none" />
      <div className="absolute w-[98%] h-[98%] rounded-full border border-dashed border-[#FF0A2B]/15 pointer-events-none" />

      {/* 3D Glowing Earth Globe Image */}
      <motion.div
        animate={{ y: [-4, 4, -4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="relative w-[92%] h-[92%] flex items-center justify-center"
      >
        <img
          src="/images/duck-masar-globe.png"
          alt="Duck Agency 3D Regional Globe"
          className="w-full h-full object-contain filter drop-shadow-[0_0_35px_rgba(255,10,43,0.45)] pointer-events-none"
        />

        {/* Interactive Location Pins */}
        {pins.map((pin) => {
          const isHighlighted = effectivePin === pin.id;

          return (
            <div
              key={pin.id}
              className="absolute z-20"
              style={{
                left: pin.left,
                top: pin.top,
                transform: "translate(-50%, -100%)",
              }}
              onMouseEnter={() => {
                setActivePin(pin.id);
                onHoverBranch?.(pin.id);
              }}
              onMouseLeave={() => {
                setActivePin(null);
                onHoverBranch?.(null);
              }}
            >
              <div className="relative group flex flex-col items-center cursor-pointer">
                {/* Teardrop Pin Marker Container */}
                <motion.div
                  animate={
                    isHighlighted
                      ? { scale: 1.18, y: -4 }
                      : { scale: 1, y: 0 }
                  }
                  transition={{ type: "spring", stiffness: 350, damping: 22 }}
                  className="relative w-11 h-14 sm:w-12 sm:h-15 flex items-center justify-center"
                >
                  {/* Teardrop SVG Pin Body (Masar-style shape in Duck Red) */}
                  <svg
                    viewBox="0 0 48 60"
                    className="absolute inset-0 w-full h-full filter drop-shadow-[0_0_12px_rgba(255,10,43,0.85)]"
                    fill="none"
                  >
                    <defs>
                      <linearGradient id={`pinGrad_${pin.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF4D6D" />
                        <stop offset="60%" stopColor="#FF0A2B" />
                        <stop offset="100%" stopColor="#9E0518" />
                      </linearGradient>
                    </defs>

                    {/* Dark backing */}
                    <path
                      d="M 24 4 C 13 4 4 13 4 24 C 4 37 24 56 24 56 C 24 56 44 37 44 24 C 44 13 35 4 24 4 Z"
                      fill="#1E0308"
                    />

                    {/* Glowing Neon Red Border */}
                    <path
                      d="M 24 4 C 13 4 4 13 4 24 C 4 37 24 56 24 56 C 24 56 44 37 44 24 C 44 13 35 4 24 4 Z"
                      stroke={`url(#pinGrad_${pin.id})`}
                      strokeWidth={isHighlighted ? "3" : "2.4"}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>

                  {/* Circular Flag Badge inside the Teardrop */}
                  <div className="relative z-10 w-7 h-7 sm:w-8 sm:h-8 rounded-full overflow-hidden border border-white/40 shadow-inner -translate-y-1.5 flex items-center justify-center">
                    {pin.flagSvg}
                  </div>
                </motion.div>

                {/* Ground Touch Target Pulse Dot */}
                <div className="relative -mt-1 flex items-center justify-center">
                  <span className="w-3.5 h-3.5 rounded-full bg-[#FF0A2B] animate-ping opacity-75 absolute pointer-events-none" />
                  <span className="w-2 h-2 rounded-full bg-[#FF0A2B] shadow-[0_0_10px_#FF0A2B]" />
                </div>

                {/* Interactive Tooltip Card on Hover */}
                <AnimatePresence>
                  {isHighlighted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.9 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.9 }}
                      transition={{ duration: 0.2 }}
                      className="absolute -top-28 z-40 min-w-[210px] sm:min-w-[230px] p-3.5 rounded-2xl bg-[#1A0509]/95 border border-[#FF0A2B]/60 shadow-[0_10px_35px_-5px_rgba(255,10,43,0.5)] backdrop-blur-xl text-right"
                    >
                      <div className="font-black text-xs sm:text-sm text-white leading-snug">
                        {pin.name}
                      </div>
                      <div className="flex items-center gap-1.5 text-[11px] text-[#C9A4A8] mt-1">
                        <MapPin className="w-3 h-3 text-[#FF0A2B] shrink-0" />
                        <span>{pin.city}</span>
                      </div>

                      {/* Quick action buttons inside tooltip */}
                      <div className="pt-2.5 mt-2 border-t border-[#3A0C15] flex items-center justify-between gap-2">
                        <a
                          href={`tel:${pin.tel}`}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#FF0A2B] hover:bg-[#E00020] text-white py-1.5 px-2 rounded-lg font-bold text-[11px] transition-colors shadow-glow-red"
                        >
                          <Phone className="w-3 h-3" />
                          <span>اتصال</span>
                        </a>
                        <a
                          href={pin.wa}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-1 inline-flex items-center justify-center gap-1.5 bg-[#25D366] hover:bg-[#20BA5A] text-white py-1.5 px-2 rounded-lg font-bold text-[11px] transition-colors shadow-md"
                        >
                          <MessageCircle className="w-3 h-3" />
                          <span>واتساب</span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </motion.div>


    </div>
  );
}
