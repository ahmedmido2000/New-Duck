"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShoppingBag,
  Globe,
  Share2,
  Video,
  Search,
  Smartphone,
  Layers,
  Check,
  Layers3,
} from "lucide-react";
import TiltCard from "./TiltCard";
import { useLanguage } from "@/context/LanguageContext";

export default function Integrations() {
  const { t } = useLanguage();

  const platformIcons = [
    { name: "Shopify", icon: ShoppingBag },
    { name: "WordPress", icon: Globe },
    { name: "Salla", icon: Layers },
    { name: "Zid", icon: Check },
    { name: "Meta", icon: Share2 },
    { name: "TikTok", icon: Video },
    { name: "Google Ads", icon: Search },
    { name: "Snapchat", icon: Smartphone },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.07,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 25, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section className="py-20 sm:py-28 bg-white border-t border-gray-100 overflow-hidden relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-[#FF0A2B]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-sm sm:text-base mb-3"
          >
            <Layers3 className="w-4 h-4 text-[#FF0A2B]" />
            <span>ECOSYSTEM & INTEGRATIONS</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0204] leading-relaxed tracking-tight"
          >
            {t.integrations.heading}
          </motion.h2>
        </div>

        {/* Responsive Grid with Stagger & 3D Interactive TiltCards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3.5 sm:gap-5 lg:gap-6"
          style={{ direction: "ltr" }}
        >
          {platformIcons.map((platform, idx) => {
            const Icon = platform.icon;
            const category = t.integrations.platforms[idx]?.category || "";

            return (
              <motion.div key={platform.name} variants={itemVariants}>
                <TiltCard
                  maxTilt={12}
                  glare={false}
                  className="rounded-2xl overflow-hidden h-full"
                >
                  <div
                    onMouseMove={handleMouseMove}
                    className="spotlight-card platform-cell group relative flex flex-col items-center justify-center min-h-[135px] sm:min-h-[160px] p-5 rounded-2xl border border-gray-200/90 bg-white hover:border-[#FF0A2B]/60 shadow-sm hover:shadow-xl hover:shadow-red-500/10 transition-all duration-300 cursor-pointer overflow-hidden h-full"
                  >
                    {/* Background Subtle Icon Glow */}
                    <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-[#FF0A2B]/0 rounded-full blur-xl group-hover:bg-[#FF0A2B]/15 transition-all duration-500 pointer-events-none" />

                    <div className="w-11 h-11 sm:w-13 sm:h-13 rounded-2xl bg-gray-50 border border-gray-100 flex items-center justify-center mb-3 group-hover:bg-[#FF0A2B]/10 group-hover:border-[#FF0A2B]/30 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-6 h-6 text-[#FF0A2B] transition-transform duration-300" />
                    </div>

                    <span className="text-lg sm:text-2xl font-black text-[#0D0204] group-hover:text-[#FF0A2B] transition-colors tracking-tight">
                      {platform.name}
                    </span>

                    <span className="text-[11px] sm:text-xs text-gray-500 group-hover:text-[#0D0204] transition-colors mt-1 font-semibold text-center font-cairo">
                      {category}
                    </span>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
