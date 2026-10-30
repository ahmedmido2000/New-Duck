"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Home, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

interface PageHeaderProps {
  kicker: string;
  title: string;
  titleHighlight?: string;
  subtitle: string;
  breadcrumbCurrent: string;
}

export default function PageHeader({
  kicker,
  title,
  titleHighlight,
  subtitle,
  breadcrumbCurrent,
}: PageHeaderProps) {
  const { lang, isRTL } = useLanguage();

  return (
    <div className="relative w-full pt-32 sm:pt-40 pb-16 sm:pb-24 bg-[#0D0204] text-white overflow-hidden border-b border-[#3A0C15]/60">
      {/* Background Cybernetic Glows */}
      <div className="absolute top-0 right-1/3 w-[500px] h-[300px] bg-[#FF0A2B]/15 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[400px] h-[250px] bg-[#FF0A2B]/10 rounded-full blur-[80px] pointer-events-none" />

      {/* Cybernetic Grid Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-30 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
        {/* Breadcrumb Bar */}
        <motion.nav
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          aria-label="Breadcrumb"
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold mb-6 text-neutral-300"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-1 hover:text-[#FF0A2B] transition-colors"
          >
            <Home className="w-3.5 h-3.5" />
            <span>{lang === "ar" ? "الرئيسية" : "Home"}</span>
          </Link>
          {isRTL ? (
            <ChevronLeft className="w-3.5 h-3.5 text-neutral-500" />
          ) : (
            <ChevronRight className="w-3.5 h-3.5 text-neutral-500" />
          )}
          <span className="text-[#FF0A2B] font-bold">{breadcrumbCurrent}</span>
        </motion.nav>

        {/* Kicker Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#2A0509] border border-[#FF0A2B]/30 text-[#FF0A2B] text-xs sm:text-sm font-black mb-4 shadow-sm"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FF0A2B]" />
          <span>{kicker}</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF0A2B] animate-ping" />
        </motion.div>

        {/* Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.15 }}
          className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight mb-4 max-w-4xl"
        >
          <span>{title} </span>
          {titleHighlight && (
            <span className="text-[#FF0A2B] relative inline-block text-glow-red">
              {titleHighlight}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-[#FF0A2B] rounded-full shadow-[0_0_12px_rgba(255,10,43,0.7)] origin-right rtl:origin-right ltr:origin-left"
              />
            </span>
          )}
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-2xl font-light"
        >
          {subtitle}
        </motion.p>
      </div>
    </div>
  );
}
