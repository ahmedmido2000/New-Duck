"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3, DollarSign } from "lucide-react";
import TiltCard from "./TiltCard";
import Counter from "./Counter";

export default function Metrics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="py-20 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#0D0204] overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {/* Card 1: ROAS */}
          <motion.div variants={itemVariants}>
            <TiltCard maxTilt={8} glare={true} className="rounded-2xl h-full">
              <div className="border border-[#3A0C15] rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#2A0509] to-[#12030A] flex flex-col justify-between hover:border-[#FF0A2B]/40 transition-all shadow-xl h-full">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-extrabold text-lg sm:text-xl text-white">
                      العائد على الإنفاق (ROAS)
                    </div>
                    <div className="text-xs sm:text-sm text-[#C9A4A8] mt-0.5">
                      كفاءة الحملات الإعلانية
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#FF0A2B]/10 border border-[#FF0A2B]/30 flex items-center justify-center text-[#FF0A2B] shadow-glow-red">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                </div>

                {/* Gauge SVG with Animated Counter */}
                <div className="my-4 relative">
                  <svg viewBox="0 0 240 140" role="img" aria-label="عداد العائد على الإنفاق" className="w-full h-auto">
                    <path
                      d="M20 130 A100 100 0 0 1 220 130"
                      fill="none"
                      stroke="#4A0A14"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 130 A100 100 0 0 1 170 42"
                      fill="none"
                      stroke="#FF0A2B"
                      strokeWidth="20"
                      strokeLinecap="round"
                      className="filter drop-shadow-[0_0_8px_rgba(255,10,43,0.6)]"
                    />
                  </svg>
                  <div className="absolute inset-x-0 bottom-4 text-center">
                    <span className="text-3xl sm:text-4xl font-black text-white text-glow-red">
                      <Counter to={4.8} decimals={1} suffix="x" />
                    </span>
                  </div>
                </div>

                <div className="text-center text-xs text-[#FFB3BE] font-semibold bg-[#FF0A2B]/10 py-1.5 px-3 rounded-md border border-[#FF0A2B]/20">
                  متوسط العائد لمتاجر عملائنا
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 2: Direct Sales Growth */}
          <motion.div variants={itemVariants}>
            <TiltCard maxTilt={8} glare={true} className="rounded-2xl h-full">
              <div className="border border-[#3A0C15] rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#2A0509] to-[#12030A] flex flex-col justify-between hover:border-[#FF0A2B]/40 transition-all shadow-xl h-full">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-extrabold text-lg sm:text-xl text-white">
                      المبيعات المباشرة
                    </div>
                    <div className="text-xs sm:text-sm text-[#C9A4A8] mt-0.5">
                      التصاعد الشهري لعملائنا
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#FF0A2B]/10 border border-[#FF0A2B]/30 flex items-center justify-center text-[#FF0A2B] shadow-glow-red">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                </div>

                {/* Growth Bars SVG */}
                <div className="my-4 relative">
                  <svg viewBox="0 0 260 140" role="img" aria-label="أعمدة نمو المبيعات" className="w-full h-auto">
                    <g stroke="#C9A4A8" strokeWidth="2.5" strokeLinecap="round">
                      <path d="M30 130V100" />
                      <path d="M65 130V85" />
                      <path d="M100 130V70" />
                      <path d="M135 130V45" stroke="#FF0A2B" strokeWidth="3" />
                      <path d="M170 130V75" />
                      <path d="M205 130V50" stroke="#FF0A2B" strokeWidth="3" />
                      <path d="M240 130V32" stroke="#FF0A2B" strokeWidth="4" />
                    </g>
                    <g fill="#ffffff">
                      <circle cx="30" cy="100" r="4" />
                      <circle cx="65" cy="85" r="4" />
                      <circle cx="100" cy="70" r="4" />
                      <circle cx="170" cy="75" r="4" />
                      <circle cx="205" cy="50" r="5" fill="#FF0A2B" />
                      <circle cx="240" cy="32" r="6" fill="#FF0A2B" />
                    </g>
                    <circle cx="135" cy="45" r="6" fill="#FF0A2B">
                      <animate
                        attributeName="r"
                        values="6;10;6"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                      <animate
                        attributeName="opacity"
                        values="1;0.4;1"
                        dur="2s"
                        repeatCount="indefinite"
                      />
                    </circle>
                  </svg>
                  <div className="absolute inset-x-0 bottom-4 text-center">
                    <span className="text-3xl sm:text-4xl font-black text-white text-glow-red">
                      <Counter to={185} prefix="+" suffix="%" />
                    </span>
                  </div>
                </div>

                <div className="text-center text-xs text-[#FFB3BE] font-semibold bg-[#FF0A2B]/10 py-1.5 px-3 rounded-md border border-[#FF0A2B]/20">
                  نمو المبيعات الربع سنوية
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Card 3: Managed Budgets */}
          <motion.div variants={itemVariants}>
            <TiltCard maxTilt={8} glare={true} className="rounded-2xl h-full">
              <div className="border border-[#3A0C15] rounded-2xl p-6 sm:p-7 bg-gradient-to-br from-[#2A0509] to-[#12030A] flex flex-col justify-between hover:border-[#FF0A2B]/40 transition-all shadow-xl h-full">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <div className="font-extrabold text-lg sm:text-xl text-white">
                      الميزانيات المدارة
                    </div>
                    <div className="text-xs sm:text-sm text-[#C9A4A8] mt-0.5">
                      أقصى ربح في المواسم والتخفيضات
                    </div>
                  </div>
                  <div className="w-10 h-10 rounded-lg bg-[#FF0A2B]/10 border border-[#FF0A2B]/30 flex items-center justify-center text-[#FF0A2B] shadow-glow-red">
                    <DollarSign className="w-5 h-5" />
                  </div>
                </div>

                {/* Scale Gauge SVG */}
                <div className="my-4 relative">
                  <svg viewBox="0 0 240 140" role="img" aria-label="عداد الميزانيات المدارة" className="w-full h-auto">
                    <path
                      d="M20 130 A100 100 0 0 1 220 130"
                      fill="none"
                      stroke="#4A0A14"
                      strokeWidth="20"
                      strokeLinecap="round"
                    />
                    <path
                      d="M20 130 A100 100 0 0 1 190 62"
                      fill="none"
                      stroke="#FF0A2B"
                      strokeWidth="20"
                      strokeLinecap="round"
                      className="filter drop-shadow-[0_0_8px_rgba(255,10,43,0.6)]"
                    />
                  </svg>
                  <div className="absolute inset-x-0 bottom-4 text-center">
                    <span className="text-3xl sm:text-4xl font-black text-white text-glow-red">
                      +$<Counter to={3.5} decimals={1} suffix="M" />
                    </span>
                  </div>
                </div>

                <div className="text-center text-xs text-[#FFB3BE] font-semibold bg-[#FF0A2B]/10 py-1.5 px-3 rounded-md border border-[#FF0A2B]/20">
                  ميزانيات تم تحويلها لمبيعات مضاعفة
                </div>
              </div>
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
