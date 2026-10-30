"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { t, isRTL } = useLanguage();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section
      ref={heroRef}
      id="top"
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 80%, #3A0610 0%, #0D0204 68%)",
      }}
    >
      {/* Hero Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/duck-hero-city.jpg"
          alt=""
          className="w-full h-full object-cover object-center"
          aria-hidden="true"
        />
        {/* Dark Overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0204]/70 via-[#0D0204]/55 to-[#0D0204]/90" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D0204]/60 via-transparent to-[#0D0204]/30" />
      </div>

      {/* Background Animated SVG Laser Streams */}
      <svg
        viewBox="0 0 1360 640"
        preserveAspectRatio="xMinYMax slice"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-90 pointer-events-none z-[2]"      >
        <defs>
          <linearGradient id="laserGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF0A2B" stopOpacity="0" />
            <stop offset="50%" stopColor="#FF0A2B" stopOpacity="1" />
            <stop offset="100%" stopColor="#FFB3BE" stopOpacity="1" />
          </linearGradient>
          <filter id="laserGlow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g fill="none" stroke="url(#laserGrad)" strokeLinecap="round">
          {/* Static Guides */}
          <path
            d="M-40 640 C300 560 560 300 1360 90"
            strokeWidth="2"
            opacity="0.3"
          />
          <path
            d="M-40 620 C340 520 640 250 1360 40"
            strokeWidth="2"
            opacity="0.3"
          />
          <path
            d="M-40 600 C380 540 600 360 1360 150"
            strokeWidth="2"
            opacity="0.3"
          />

          {/* Animated Flowing Laser Lines with Blur Filter */}
          <path
            className="st"
            pathLength="1"
            d="M-40 640 C300 560 560 300 1360 90"
            strokeWidth="5"
            filter="url(#laserGlow)"
          />
          <path
            className="st st2"
            pathLength="1"
            d="M-40 620 C340 520 640 250 1360 40"
            strokeWidth="4"
            filter="url(#laserGlow)"
          />
          <path
            className="st st3"
            pathLength="1"
            d="M-40 600 C380 540 600 360 1360 150"
            strokeWidth="6"
            filter="url(#laserGlow)"
          />

          {/* Crisp Core Overlays */}
          <path
            className="st"
            pathLength="1"
            d="M-40 640 C300 560 560 300 1360 90"
            strokeWidth="2"
          />
          <path
            className="st st2"
            pathLength="1"
            d="M-40 620 C340 520 640 250 1360 40"
            strokeWidth="2"
          />
        </g>
      </svg>

      {/* Main Content with Staggered Framer Motion */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 flex flex-col items-start gap-6 sm:gap-8"
      >
        {/* Kicker Tag */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FF0A2B]/10 border border-[#FF0A2B]/40 backdrop-blur-sm shadow-glow-red"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF0A2B] animate-ping" />
          <span className="text-[#FF0A2B] font-extrabold text-sm sm:text-base tracking-wide text-glow-red">
            {t.hero.kicker}
          </span>
          <Sparkles className="w-4 h-4 text-[#FF0A2B]" />
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          variants={itemVariants}
          className={`text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.3] sm:leading-[1.28] tracking-tight max-w-4xl ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {t.hero.titleLead}{" "}
          <span className="text-[#FF0A2B] text-glow-red inline-block hover:scale-105 transition-transform cursor-default">
            {t.hero.brand}
          </span>{" "}
          {t.hero.titleTail}
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p
          variants={itemVariants}
          className={`text-base sm:text-xl text-[#E6CDD0] max-w-2xl leading-relaxed font-medium ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {t.hero.subtitle}
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2 w-full sm:w-auto"
        >
          <MagneticButton
            href="https://wa.me/201064544080"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-center gap-3 bg-[#FF0A2B] hover:bg-[#E00020] text-white px-8 py-4 rounded-xl font-black text-lg sm:text-xl transition-all duration-300 shadow-glow-red shimmer-hover hover:-translate-y-1 active:translate-y-0 text-center"
          >
            <span>{t.hero.ctaPrimary}</span>
          </MagneticButton>

          <a
            href="#services"
            className="flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg sm:text-xl text-white border-2 border-white/70 hover:bg-white/10 hover:border-white transition-all duration-300 text-center"
          >
            {t.hero.ctaSecondary}
          </a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={itemVariants}
          className={`grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 sm:pt-12 border-t border-[#3A0C15]/80 w-full ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <motion.div
            whileHover={{ y: -3 }}
            className="flex items-center gap-3 group cursor-default"
          >
            <div className="w-10 h-10 rounded-lg bg-[#2A0509] border border-[#FF0A2B]/40 flex items-center justify-center text-[#FF0A2B] group-hover:bg-[#FF0A2B] group-hover:text-white transition-colors shrink-0">
              <TrendingUp className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white text-glow-red">
                {t.hero.badge1Num}
              </div>
              <div className="text-xs sm:text-sm text-[#C9A4A8]">
                {t.hero.badge1Label}
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="flex items-center gap-3 group cursor-default"
          >
            <div className="w-10 h-10 rounded-lg bg-[#2A0509] border border-[#FF0A2B]/40 flex items-center justify-center text-[#FF0A2B] group-hover:bg-[#FF0A2B] group-hover:text-white transition-colors shrink-0">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white">
                {t.hero.badge2Num}
              </div>
              <div className="text-xs sm:text-sm text-[#C9A4A8]">
                {t.hero.badge2Label}
              </div>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ y: -3 }}
            className="col-span-2 sm:col-span-1 flex items-center gap-3 group cursor-default"
          >
            <div className="w-10 h-10 rounded-lg bg-[#2A0509] border border-[#FF0A2B]/40 flex items-center justify-center text-[#FF0A2B] group-hover:bg-[#FF0A2B] group-hover:text-white transition-colors shrink-0">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white">
                {t.hero.badge3Num}
              </div>
              <div className="text-xs sm:text-sm text-[#C9A4A8]">
                {t.hero.badge3Label}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
