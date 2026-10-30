"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Globe, Share2, Video, Search, Smartphone, Layers, Check } from "lucide-react";
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
        staggerChildren: 0.08,
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

  return (
    <section className="py-16 sm:py-24 bg-white border-t border-gray-200 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-[#0D0204] text-center leading-relaxed max-w-4xl mx-auto mb-10 sm:mb-14"
        >
          {t.integrations.heading}
        </motion.h2>

        {/* Responsive Grid with Stagger & 3D TiltCards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          style={{ direction: "ltr" }}
        >
          {platformIcons.map((platform, idx) => {
            const Icon = platform.icon;
            const category = t.integrations.platforms[idx]?.category || "";
            return (
              <motion.div key={platform.name} variants={itemVariants}>
                <TiltCard
                  maxTilt={10}
                  glare={true}
                  className="rounded-xl overflow-hidden h-full"
                >
                  <div className="platform-cell group relative flex flex-col items-center justify-center min-h-[125px] sm:min-h-[150px] p-4 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gradient-to-br hover:from-[#FF0A2B]/10 hover:to-white hover:border-[#FF0A2B]/50 transition-all duration-300 cursor-pointer overflow-hidden h-full">
                    {/* Background Subtle Icon Glow */}
                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#FF0A2B]/5 rounded-full blur-xl group-hover:bg-[#FF0A2B]/20 transition-all" />

                    <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#FF0A2B]/50 group-hover:text-[#FF0A2B] transition-colors mb-2" />
                    <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#0D0204] group-hover:text-[#0D0204] transition-colors tracking-tight">
                      {platform.name}
                    </span>
                    <span className="text-[11px] sm:text-xs text-gray-500 group-hover:text-[#FF0A2B] transition-colors mt-1 font-semibold text-center font-cairo">
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
