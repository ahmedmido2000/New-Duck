"use client";

import { motion } from "framer-motion";
import { Target, CheckCircle2, Compass, Sparkles } from "lucide-react";
import TiltCard from "./TiltCard";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      {/* Subtle background ambient warmth */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#FF0A2B]/3 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
          className={`flex-1 w-full flex flex-col items-start gap-6 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {/* Kicker Tag with Micro Glow */}
          <div className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-base sm:text-lg">
            <Compass className="w-5 h-5 animate-spin" style={{ animationDuration: "12s" }} />
            <span>{t.about.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0D0204] leading-tight">
            {t.about.heading}
          </h2>

          <p className="text-lg sm:text-2xl text-[#333333] leading-relaxed font-normal">
            {t.about.paragraph}
          </p>

          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="w-full bg-[#FF0A2B] text-white py-3.5 px-6 rounded-xl font-extrabold text-base sm:text-xl text-center shadow-glow-red shimmer-hover cursor-default flex items-center justify-center gap-2"
          >
            <Sparkles className="w-5 h-5 shrink-0" />
            <span>{t.about.sloganBadge}</span>
          </motion.div>

          {/* Core Values with 3D TiltCards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 w-full">
            <TiltCard maxTilt={8} glare={true} className="rounded-2xl h-full">
              <div className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-gray-200/90 shadow-sm hover:border-[#FF0A2B]/60 hover:shadow-md transition-all duration-300 h-full">
                <div className="w-9 h-9 rounded-xl bg-[#FF0A2B]/10 flex items-center justify-center text-[#FF0A2B] shrink-0 mt-0.5">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0D0204] text-base">{t.about.val1Title}</h4>
                  <p className="text-sm text-[#555555] mt-1 leading-relaxed">{t.about.val1Desc}</p>
                </div>
              </div>
            </TiltCard>

            <TiltCard maxTilt={8} glare={true} className="rounded-2xl h-full">
              <div className="flex items-start gap-3 bg-white p-5 rounded-2xl border border-gray-200/90 shadow-sm hover:border-[#FF0A2B]/60 hover:shadow-md transition-all duration-300 h-full">
                <div className="w-9 h-9 rounded-xl bg-[#FF0A2B]/10 flex items-center justify-center text-[#FF0A2B] shrink-0 mt-0.5">
                  <Target className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-[#0D0204] text-base">{t.about.val2Title}</h4>
                  <p className="text-sm text-[#555555] mt-1 leading-relaxed">{t.about.val2Desc}</p>
                </div>
              </div>
            </TiltCard>
          </div>
        </motion.div>

        {/* Circular Floating Brand Artwork with Masked Curtain Reveal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85, x: isRTL ? -50 : 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="animate-float relative flex-1 max-w-[340px] sm:max-w-[420px] w-full"
        >
          {/* Outer dashed ring with slow rotation */}
          <div
            className="absolute -inset-3 rounded-full border-2 border-dashed border-[#FF0A2B]/40 pointer-events-none animate-spin"
            style={{ animationDuration: "35s" }}
          />

          {/* Pulsing Radar Ring */}
          <div className="absolute inset-0 rounded-full border border-[#FF0A2B]/35 radar-ring pointer-events-none" />

          <motion.div
            whileHover={{ scale: 1.04 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="relative rounded-full overflow-hidden aspect-square shadow-2xl shadow-[#FF0A2B]/25 group cursor-pointer"
          >
            <img
              src="/images/duck-path-about.jpg"
              alt="Duck Agency"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0204]/70 via-transparent to-transparent" />

            {/* Caption badge */}
            <div className="absolute bottom-6 inset-x-0 flex justify-center px-4">
              <span className="text-xs sm:text-sm text-white font-extrabold bg-[#FF0A2B]/90 px-5 py-2 rounded-full backdrop-blur-md shadow-glow-red text-center group-hover:scale-105 transition-transform">
                {t.about.artworkBadge}
              </span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
