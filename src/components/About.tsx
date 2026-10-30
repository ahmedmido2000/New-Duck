"use client";

import { motion } from "framer-motion";
import { Target, CheckCircle2, Compass } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function About() {
  const { t, isRTL } = useLanguage();

  return (
    <section id="about" className="py-20 sm:py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? 60 : -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
          className={`flex-1 w-full flex flex-col items-start gap-6 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <div className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-base sm:text-lg">
            <Compass className="w-5 h-5" />
            <span>{t.about.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0D0204] leading-tight">
            {t.about.heading}
          </h2>

          <p className="text-lg sm:text-2xl text-[#333333] leading-relaxed font-normal">
            {t.about.paragraph}
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full bg-[#FF0A2B] text-white py-3.5 px-6 rounded-xl font-extrabold text-base sm:text-xl text-center shadow-glow-red shimmer-hover cursor-default"
          >
            {t.about.sloganBadge}
          </motion.div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 w-full">
            <motion.div
              whileHover={{ y: -4, borderColor: "#FF0A2B66" }}
              className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm transition-all"
            >
              <CheckCircle2 className="w-5 h-5 text-[#FF0A2B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#0D0204] text-base">{t.about.val1Title}</h4>
                <p className="text-sm text-[#555555]">{t.about.val1Desc}</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, borderColor: "#FF0A2B66" }}
              className="flex items-start gap-3 bg-white p-4 rounded-xl border border-gray-200 shadow-sm transition-all"
            >
              <Target className="w-5 h-5 text-[#FF0A2B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-[#0D0204] text-base">{t.about.val2Title}</h4>
                <p className="text-sm text-[#555555]">{t.about.val2Desc}</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Circular Floating Brand Artwork */}
        <motion.div
          initial={{ opacity: 0, x: isRTL ? -60 : 60, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
          className="animate-float relative flex-1 max-w-[340px] sm:max-w-[420px] w-full"
        >
          {/* Outer dashed ring */}
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-[#FF0A2B]/40 pointer-events-none" />
          {/* Pulsing Radar Ring */}
          <div className="absolute inset-0 rounded-full border border-[#FF0A2B]/30 radar-ring pointer-events-none" />

          <div className="relative rounded-full overflow-hidden aspect-square shadow-2xl shadow-[#FF0A2B]/25">
            <img
              src="/images/duck-path-about.jpg"
              alt="Duck Agency"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0204]/60 via-transparent to-transparent" />
            {/* Caption badge */}
            <div className="absolute bottom-6 inset-x-0 flex justify-center px-4">
              <span className="text-xs sm:text-sm text-white font-extrabold bg-[#FF0A2B]/85 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-glow-red text-center">
                {t.about.artworkBadge}
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
