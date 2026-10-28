"use client";

import { motion } from "framer-motion";
import { Users, CheckCircle, Building2, Award, Sparkles } from "lucide-react";
import Counter from "./Counter";

export default function NumbersImpact() {
  return (
    <section className="w-full bg-[#0D0204] py-20 sm:py-28 border-t border-[#3A0C15] overflow-hidden relative">
      {/* Ambient Red Glow Behind Map */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF0A2B]/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Right Column Content */}
          <motion.div
            initial={{ opacity: 0, x: 70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-5 space-y-6 text-right"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1A0509] border border-[#FF0A2B]/40 text-[#FF0A2B] text-xs font-bold shadow-glow-red">
              <Sparkles className="w-4 h-4 animate-pulse" />
              <span>الإحصائيات الموثقة وأثر النمو</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Duck Agency <br />
              <span className="relative inline-block text-[#FF0A2B] text-glow-red mt-2">
                في أرقام وإنجازات
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                  className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-[#FF0A2B] origin-right rounded-full shadow-glow-red"
                />
              </span>
            </h2>

            <p className="text-[#C9A4A8] text-base sm:text-lg leading-relaxed font-normal">
              منذ انطلاقنا، نحن الشريك التقني والإعلاني الموثوق لعشرات العلامات التجارية في مصر والمملكة العربية السعودية والإمارات، نبتكر حلول تسويق رقمي وحملات إعلانية تحقق مبيعات قياسية.
            </p>

            <div className="flex items-center gap-8 pt-4 border-t border-[#3A0C15]">
              <div>
                <span className="text-3xl sm:text-4xl font-black text-white block">
                  <Counter to={99.4} decimals={1} suffix="%" />
                </span>
                <span className="text-xs sm:text-sm text-[#C9A4A8] mt-1 block font-medium">
                  نسبة الرضا والاحتفاظ بالعملاء
                </span>
              </div>
              <div className="w-px h-12 bg-[#3A0C15]" />
              <div>
                <span className="text-3xl sm:text-4xl font-black text-[#FF0A2B] text-glow-red block">
                  <Counter to={180} prefix="+" suffix="K" />
                </span>
                <span className="text-xs sm:text-sm text-[#C9A4A8] mt-1 block font-medium">
                  وصول وتفاعل شهري لحملاتنا
                </span>
              </div>
            </div>
          </motion.div>

          {/* Left Column Map Graphic with Floating Statistics */}
          <motion.div
            initial={{ opacity: 0, x: -70 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
            className="lg:col-span-7 relative min-h-[460px] bg-[#12030A]/90 border border-[#3A0C15] rounded-3xl p-6 shadow-2xl flex items-center justify-center overflow-hidden"
          >
            {/* Regional Map Vector with Animated Red Accent Nodes */}
            <svg
              className="w-full h-full max-h-[380px] text-[#24050A] opacity-90 relative z-10"
              fill="none"
              viewBox="0 0 600 400"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M 80 120 Q 150 70 240 100 T 400 90 T 520 180 Q 480 300 360 340 T 180 310 Q 70 260 80 120 Z"
                fill="currentColor"
                stroke="#3A0C15"
                strokeWidth="1.5"
              />

              {/* Connecting Pulsing Data Stream Line */}
              <path
                d="M 210 180 L 340 220 L 430 190"
                opacity="0.85"
                stroke="#FF0A2B"
                strokeWidth="2.5"
                className="animate-data-stream"
              />

              {/* Cairo Node */}
              <circle cx="210" cy="180" r="18" fill="none" stroke="#FF0A2B" strokeWidth="1.5" className="radar-ring" />
              <circle cx="210" cy="180" r="8" fill="#FF0A2B" className="shadow-glow-red" />
              <circle cx="210" cy="180" r="3" fill="#ffffff" />
              <text x="210" y="210" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="Cairo">القاهرة</text>

              {/* Riyadh Node */}
              <circle cx="340" cy="220" r="18" fill="none" stroke="#FF0A2B" strokeWidth="1.5" className="radar-ring" />
              <circle cx="340" cy="220" r="8" fill="#FF0A2B" className="shadow-glow-red" />
              <circle cx="340" cy="220" r="3" fill="#ffffff" />
              <text x="340" y="250" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="Cairo">الرياض</text>

              {/* Dubai Node */}
              <circle cx="430" cy="190" r="18" fill="none" stroke="#FF0A2B" strokeWidth="1.5" className="radar-ring" />
              <circle cx="430" cy="190" r="8" fill="#FF0A2B" className="shadow-glow-red" />
              <circle cx="430" cy="190" r="3" fill="#ffffff" />
              <text x="430" y="220" textAnchor="middle" fill="#ffffff" fontSize="13" fontWeight="bold" fontFamily="Cairo">دبي</text>
            </svg>

            {/* Floating Stat 1 (Top Right) */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ scale: 1.05 }}
              className="animate-float absolute top-4 sm:top-6 right-4 sm:right-6 bg-[#1A0509]/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#3A0C15] shadow-xl flex items-center gap-3 z-20 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FF0A2B] text-white flex items-center justify-center shadow-glow-red">
                <Users className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="text-base sm:text-lg font-black text-white block leading-none">
                  <Counter to={180} prefix="+" suffix="K" />
                </span>
                <span className="text-[11px] text-[#C9A4A8]">تفاعل شهري لحملاتنا</span>
              </div>
            </motion.div>

            {/* Floating Stat 2 (Top Left) */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ scale: 1.05 }}
              className="animate-float-reverse absolute top-6 sm:top-8 left-4 sm:left-6 bg-[#1A0509]/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#3A0C15] shadow-xl flex items-center gap-3 z-20 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#FF0A2B] text-white flex items-center justify-center shadow-glow-red">
                <CheckCircle className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="text-base sm:text-lg font-black text-white block leading-none">
                  <Counter to={250} prefix="+" />
                </span>
                <span className="text-[11px] text-[#C9A4A8]">مشروع وحملة ناجحة</span>
              </div>
            </motion.div>

            {/* Floating Stat 3 (Bottom Right) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ scale: 1.05 }}
              className="animate-float absolute bottom-6 sm:bottom-8 right-4 sm:right-8 bg-[#1A0509]/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#3A0C15] shadow-xl flex items-center gap-3 z-20 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2A0509] text-[#FF0A2B] border border-[#FF0A2B]/30 flex items-center justify-center">
                <Building2 className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="text-base sm:text-lg font-black text-white block leading-none">
                  <Counter to={3} /> عواصم
                </span>
                <span className="text-[11px] text-[#C9A4A8]">القاهرة · الرياض · دبي</span>
              </div>
            </motion.div>

            {/* Floating Stat 4 (Bottom Left) */}
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.65, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ scale: 1.05 }}
              className="animate-float-reverse absolute bottom-6 sm:bottom-8 left-4 sm:left-6 bg-[#1A0509]/95 backdrop-blur-md px-4 py-3 rounded-2xl border border-[#3A0C15] shadow-xl flex items-center gap-3 z-20 cursor-default"
            >
              <div className="w-10 h-10 rounded-xl bg-[#2A0509] text-[#FF0A2B] border border-[#FF0A2B]/30 flex items-center justify-center">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-right">
                <span className="text-base sm:text-lg font-black text-white block leading-none">
                  <Counter to={60} prefix="+" />
                </span>
                <span className="text-[11px] text-[#C9A4A8]">شريك نجاح تجاري</span>
              </div>
            </motion.div>

            {/* Center Live Deliver Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.75, ease: [0.16, 1, 0.3, 1] as const }}
              whileHover={{ scale: 1.08 }}
              className="absolute inset-x-0 bottom-24 mx-auto w-fit bg-[#FF0A2B] px-4 py-1.5 rounded-full shadow-glow-red flex items-center gap-2 z-20 cursor-default shimmer-hover"
            >
              <span className="w-2 h-2 rounded-full bg-white animate-ping" />
              <span className="text-xs text-white font-black">100% تسليم دقيق في الموعد</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
