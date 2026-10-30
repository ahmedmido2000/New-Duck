"use client";

import { useRef, useMemo } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Sparkles, TrendingUp, ShieldCheck } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

export default function Hero() {
  const heroRef = useRef<HTMLElement | null>(null);
  const { t, isRTL } = useLanguage();

  // Subtle mouse-tracking parallax
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 140, mass: 0.1 };
  const bgX = useSpring(mouseX, springConfig);
  const bgY = useSpring(mouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (typeof window === "undefined") return;
    const { clientX, clientY } = e;
    const centerX = window.innerWidth / 2;
    const centerY = window.innerHeight / 2;
    const factorX = (clientX - centerX) / centerX;
    const factorY = (clientY - centerY) / centerY;
    mouseX.set(factorX * -18);
    mouseY.set(factorY * -12);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Container orchestrator
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  // Word-by-word headline split
  const titleTailWords = useMemo(
    () => t.hero.titleTail.split(" ").filter(Boolean),
    [t.hero.titleTail]
  );

  // Atmospheric embers
  const embers = [
    { id: 1, left: "15%", delay: 0, duration: 7, size: 3.5 },
    { id: 2, left: "32%", delay: 1.5, duration: 8.5, size: 2.5 },
    { id: 3, left: "55%", delay: 3, duration: 6.5, size: 4 },
    { id: 4, left: "72%", delay: 0.8, duration: 9, size: 2 },
    { id: 5, left: "86%", delay: 2.2, duration: 7.5, size: 3 },
    { id: 6, left: "44%", delay: 4, duration: 8, size: 2.5 },
  ];

  return (
    <section
      ref={heroRef}
      id="top"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative min-h-[94vh] flex items-center justify-center pt-28 pb-20 sm:pt-36 sm:pb-28 overflow-hidden select-none"
      style={{
        background:
          "radial-gradient(ellipse at 20% 80%, #3A0610 0%, #0D0204 68%)",
      }}
    >
      {/* Hero Background Image with Parallax Drift */}
      <motion.div
        style={{ x: bgX, y: bgY, scale: 1.05 }}
        className="absolute inset-0 z-0 will-change-transform"
      >
        <picture className="w-full h-full block">
          {/* Mobile Background: Duck & Laptop centered and scaled for mobile */}
          <source
            media="(max-width: 639px)"
            srcSet="/images/duck-hero-mobile.jpg"
          />
          {/* Desktop & Tablet Background */}
          <img
            src={isRTL ? "/images/duck-hero-city.jpg" : "/images/duck-hero-en.jpg"}
            alt="Duck Agency Hero Background"
            className={`w-full h-full object-cover object-center ${
              !isRTL && "sm:object-[75%_center]"
            }`}
            aria-hidden="true"
          />
        </picture>
        {/* Dark Overlay to keep text readable */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0D0204]/70 via-[#0D0204]/50 to-[#0D0204]/90" />
        <div
          className={`absolute inset-0 ${
            isRTL
              ? "bg-gradient-to-r from-[#0D0204]/60 via-transparent to-[#0D0204]/30"
              : "bg-gradient-to-r from-[#0D0204]/85 via-[#0D0204]/40 to-transparent"
          }`}
        />
      </motion.div>

      {/* Floating Atmospheric Neon Embers */}
      {embers.map((ember) => (
        <motion.div
          key={ember.id}
          initial={{ y: "100%", opacity: 0, x: 0 }}
          animate={{
            y: "-30%",
            opacity: [0, 0.7, 0.9, 0],
            x: [0, 15, -15, 0],
          }}
          transition={{
            duration: ember.duration,
            repeat: Infinity,
            delay: ember.delay,
            ease: "easeInOut",
          }}
          style={{
            left: ember.left,
            width: ember.size,
            height: ember.size,
          }}
          className="absolute bottom-0 rounded-full bg-[#FF4D6D] pointer-events-none blur-[0.8px] shadow-[0_0_8px_#FF0A2B] z-[1]"
        />
      ))}

      {/* Background Animated SVG Laser Streams (Orbital Oval Loops - 100% Responsive) */}
      <svg
        viewBox="0 0 1000 600"
        preserveAspectRatio="none"
        aria-hidden="true"
        className="absolute inset-0 w-full h-full opacity-90 pointer-events-none z-[2]"
      >
        <defs>
          <linearGradient id="laserGrad" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#FF0A2B" stopOpacity="0.7" />
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
          {/* Static Orbital Guide Rings */}
          <path
            d="M 135.9 449.8 C 158.7 509.1, 340.1 494.6, 541.2 417.4 C 742.3 340.2, 886.9 229.5, 864.1 170.2 C 841.3 110.9, 659.9 125.4, 458.8 202.6 C 257.7 279.8, 113.1 390.5, 135.9 449.8 Z"
            strokeWidth="1.5"
            opacity="0.22"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 103.2 462.3 C 131.9 537.1, 332.8 529.5, 552.0 445.4 C 771.1 361.3, 925.5 232.5, 896.8 157.7 C 868.1 82.9, 667.2 90.5, 448.0 174.6 C 228.9 258.7, 74.5 387.5, 103.2 462.3 Z"
            strokeWidth="1.5"
            opacity="0.22"
            vectorEffect="non-scaling-stroke"
          />
          <path
            d="M 70.6 474.8 C 105.2 565.1, 325.5 564.4, 562.7 473.4 C 799.9 382.3, 964.1 235.4, 929.4 145.2 C 894.8 54.9, 674.5 55.6, 437.3 146.6 C 200.1 237.7, 35.9 384.6, 70.6 474.8 Z"
            strokeWidth="1.5"
            opacity="0.22"
            vectorEffect="non-scaling-stroke"
          />

          {/* Animated Flowing Oval Laser Lines with Blur Filter */}
          <path
            className="st"
            pathLength="1"
            d="M 135.9 449.8 C 158.7 509.1, 340.1 494.6, 541.2 417.4 C 742.3 340.2, 886.9 229.5, 864.1 170.2 C 841.3 110.9, 659.9 125.4, 458.8 202.6 C 257.7 279.8, 113.1 390.5, 135.9 449.8 Z"
            strokeWidth="5"
            filter="url(#laserGlow)"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="st st2"
            pathLength="1"
            d="M 103.2 462.3 C 131.9 537.1, 332.8 529.5, 552.0 445.4 C 771.1 361.3, 925.5 232.5, 896.8 157.7 C 868.1 82.9, 667.2 90.5, 448.0 174.6 C 228.9 258.7, 74.5 387.5, 103.2 462.3 Z"
            strokeWidth="4"
            filter="url(#laserGlow)"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="st st3"
            pathLength="1"
            d="M 70.6 474.8 C 105.2 565.1, 325.5 564.4, 562.7 473.4 C 799.9 382.3, 964.1 235.4, 929.4 145.2 C 894.8 54.9, 674.5 55.6, 437.3 146.6 C 200.1 237.7, 35.9 384.6, 70.6 474.8 Z"
            strokeWidth="6"
            filter="url(#laserGlow)"
            vectorEffect="non-scaling-stroke"
          />

          {/* Crisp Core Overlays */}
          <path
            className="st"
            pathLength="1"
            d="M 135.9 449.8 C 158.7 509.1, 340.1 494.6, 541.2 417.4 C 742.3 340.2, 886.9 229.5, 864.1 170.2 C 841.3 110.9, 659.9 125.4, 458.8 202.6 C 257.7 279.8, 113.1 390.5, 135.9 449.8 Z"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="st st2"
            pathLength="1"
            d="M 103.2 462.3 C 131.9 537.1, 332.8 529.5, 552.0 445.4 C 771.1 361.3, 925.5 232.5, 896.8 157.7 C 868.1 82.9, 667.2 90.5, 448.0 174.6 C 228.9 258.7, 74.5 387.5, 103.2 462.3 Z"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
          />
          <path
            className="st st3"
            pathLength="1"
            d="M 70.6 474.8 C 105.2 565.1, 325.5 564.4, 562.7 473.4 C 799.9 382.3, 964.1 235.4, 929.4 145.2 C 894.8 54.9, 674.5 55.6, 437.3 146.6 C 200.1 237.7, 35.9 384.6, 70.6 474.8 Z"
            strokeWidth="2"
            vectorEffect="non-scaling-stroke"
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
          whileHover={{ scale: 1.05 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#FF0A2B]/10 border border-[#FF0A2B]/40 backdrop-blur-sm shadow-glow-red cursor-default"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF0A2B] animate-ping" />
          <span className="text-[#FF0A2B] font-extrabold text-sm sm:text-base tracking-wide text-glow-red">
            {t.hero.kicker}
          </span>
          <Sparkles className="w-4 h-4 text-[#FF0A2B]" />
        </motion.div>

        {/* Hero Title with Cinematic Word Split Masking */}
        <h1
          className={`text-3xl sm:text-5xl lg:text-6xl font-black text-white leading-[1.45] sm:leading-[1.42] tracking-tight max-w-4xl ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <span className="inline-block overflow-hidden pb-[0.18em] mr-[0.25em] rtl:ml-[0.25em] rtl:mr-0 align-bottom">
            <motion.span
              variants={itemVariants}
              className="inline-block"
            >
              {t.hero.titleLead}
            </motion.span>
          </span>

          <span className="inline-block overflow-hidden pb-[0.18em] mr-[0.25em] rtl:ml-[0.25em] rtl:mr-0 align-bottom">
            <motion.span
              variants={itemVariants}
              whileHover={{ scale: 1.12, rotate: -3 }}
              transition={{ type: "spring", stiffness: 350, damping: 15 }}
              className="text-[#FF0A2B] text-glow-red inline-block cursor-default"
            >
              {t.hero.brand}
            </motion.span>
          </span>

          {titleTailWords.map((word, idx) => (
            <span
              key={idx}
              className="inline-block overflow-hidden pb-[0.18em] mr-[0.25em] rtl:ml-[0.25em] rtl:mr-0 align-bottom"
            >
              <motion.span
                variants={{
                  hidden: { y: "115%", opacity: 0 },
                  visible: {
                    y: "0%",
                    opacity: 1,
                    transition: {
                      duration: 0.65,
                      delay: 0.2 + idx * 0.025,
                      ease: [0.16, 1, 0.3, 1] as const,
                    },
                  },
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

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

          <motion.a
            href="#services"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center px-8 py-4 rounded-xl font-bold text-lg sm:text-xl text-white border-2 border-white/70 hover:bg-white/10 hover:border-white transition-all duration-300 text-center"
          >
            {t.hero.ctaSecondary}
          </motion.a>

          <motion.a
            href="/academy"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-lg sm:text-xl text-white bg-white/10 border-2 border-white/30 hover:bg-white/20 hover:border-white/60 transition-all duration-300 text-center"
          >
            <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
              <path d="M6 12v5c3 3 9 3 12 0v-5" />
            </svg>
            {t.hero.ctaAcademy}
          </motion.a>
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          variants={itemVariants}
          className={`grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-8 pt-8 sm:pt-12 border-t border-[#3A0C15]/80 w-full ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          <motion.div
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="flex items-center gap-3 group cursor-default p-2 rounded-xl transition-colors hover:bg-white/5"
          >
            <div className="w-10 h-10 rounded-lg bg-[#2A0509] border border-[#FF0A2B]/40 flex items-center justify-center text-[#FF0A2B] group-hover:bg-[#FF0A2B] group-hover:text-white transition-colors shrink-0 shadow-sm">
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
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="flex items-center gap-3 group cursor-default p-2 rounded-xl transition-colors hover:bg-white/5"
          >
            <div className="w-10 h-10 rounded-lg bg-[#2A0509] border border-[#FF0A2B]/40 flex items-center justify-center text-[#FF0A2B] group-hover:bg-[#FF0A2B] group-hover:text-white transition-colors shrink-0 shadow-sm">
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
            whileHover={{ y: -4, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 350, damping: 20 }}
            className="col-span-2 sm:col-span-1 flex items-center gap-3 group cursor-default p-2 rounded-xl transition-colors hover:bg-white/5"
          >
            <div className="w-10 h-10 rounded-lg bg-[#2A0509] border border-[#FF0A2B]/40 flex items-center justify-center text-[#FF0A2B] group-hover:bg-[#FF0A2B] group-hover:text-white transition-colors shrink-0 shadow-sm">
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
