"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Sparkles,
  ArrowUpRight,
  Share2,
  Video,
  PenTool,
  Palette,
  Users,
  Globe,
  Layers,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

export default function Portfolio() {
  const { lang, t, isRTL } = useLanguage();
  const [activeFilter, setActiveFilter] = useState("all");

  const p = t.portfolio;

  const filters = [
    { id: "all", name: p.filterAll, icon: Layers },
    { id: "social", name: p.filterSocial, icon: Share2 },
    { id: "video", name: p.filterVideo, icon: Video },
    { id: "design", name: p.filterDesign, icon: PenTool },
    { id: "branding", name: p.filterBranding, icon: Palette },
    { id: "celebrity", name: p.filterCelebrity, icon: Users },
    { id: "web", name: p.filterWeb, icon: Globe },
  ];

  const filteredItems =
    activeFilter === "all"
      ? p.items
      : p.items.filter((item) => item.category === activeFilter);

  return (
    <section
      id="portfolio"
      className="w-full py-16 sm:py-24 bg-white text-[#0D0204] relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-10 right-0 w-96 h-96 bg-[#FF0A2B]/4 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-10 left-0 w-96 h-96 bg-[#FF0A2B]/4 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-[#FF0A2B] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>{p.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0D0204] tracking-tight leading-tight">
            {p.heading}{" "}
            <span className="text-[#FF0A2B]">{p.headingHighlight}</span>
          </h2>

          <p className="text-base sm:text-lg text-[#555555] mt-4 leading-relaxed font-normal">
            {p.subtitle}
          </p>
        </div>

        {/* Filter Pills with Micro Interactions */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5 mb-12">
          {filters.map((f) => {
            const isSelected = activeFilter === f.id;
            const Icon = f.icon;
            return (
              <button
                key={f.id}
                type="button"
                onClick={() => setActiveFilter(f.id)}
                className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? "bg-[#FF0A2B] text-white shadow-glow-red scale-105"
                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                }`}
              >
                <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                <span>{f.name}</span>
              </button>
            );
          })}
        </div>

        {/* Works Grid with 3D Tilt Cards */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredItems.map((item, idx) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className="h-full"
              >
                <TiltCard maxTilt={6} glare={false} className="h-full">
                  <div
                    className={`h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white border border-gray-200/90 shadow-sm hover:border-[#FF0A2B] hover:shadow-[0_20px_45px_-10px_rgba(255,10,43,0.22)] transition-all duration-300 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    <div>
                      {/* Top Metric Pill */}
                      <div className="flex items-center justify-between mb-4">
                        <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                          {item.client}
                        </span>

                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#FF0A2B] font-black text-xs border border-red-200/80 font-mono">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{item.metric}</span>
                        </div>
                      </div>

                      {/* Project Title */}
                      <h3 className="text-lg sm:text-xl font-black text-[#0D0204] mb-2 leading-snug">
                        {item.title}
                      </h3>

                      {/* Metric description */}
                      <p className="text-xs font-bold text-[#FF0A2B] mb-3">
                        {item.metricLabel}
                      </p>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-6 font-medium">
                        {item.desc}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="px-2.5 py-1 rounded-lg bg-gray-50 border border-gray-200 text-[11px] font-semibold text-gray-600"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom CTA */}
                    <div className="pt-4 border-t border-gray-100">
                      <a
                        href={`https://wa.me/201064544080?text=${encodeURIComponent(
                          lang === "ar"
                            ? `مرحباً فريق Duck، شاهدت مشروع "${item.title}" في معرض الأعمال وأود طلب مشروع مماثل لعلامتي.`
                            : `Hello Duck Team, I saw "${item.title}" in your portfolio and want to build a similar project.`
                        )}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 px-4 rounded-xl bg-[#0D0204] hover:bg-[#FF0A2B] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs group"
                      >
                        <span>
                          {lang === "ar" ? "طلب مشروع مماثل" : "Request Similar Project"}
                        </span>
                        <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </a>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Global CTA button */}
        <div className="mt-14 sm:mt-16 text-center">
          <MagneticButton
            href="https://wa.me/201064544080"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 bg-[#FF0A2B] hover:bg-[#E00020] text-white px-8 py-4 rounded-xl font-bold text-sm sm:text-base transition-all shadow-glow-red shimmer-hover"
          >
            <span>{p.ctaButton}</span>
            <ArrowUpRight className="w-5 h-5 rtl:rotate-[-90deg]" />
          </MagneticButton>
        </div>
      </div>
    </section>
  );
}
