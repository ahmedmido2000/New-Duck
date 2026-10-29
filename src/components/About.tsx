"use client";

import { motion } from "framer-motion";
import { Target, CheckCircle2, Compass } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0D0204] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Text Content (Enters from Right) */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex-1 w-full flex flex-col items-start gap-6 text-right"
        >
          <div className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-base sm:text-lg">
            <Compass className="w-5 h-5" />
            <span>رؤيتنا ومنهجنا</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            من نحن؟
          </h2>

          <p className="text-lg sm:text-2xl text-[#E6CDD0] leading-relaxed font-normal">
            Duck شركة دعاية وتسويق تقدم حلولاً متكاملة للشركات والمشاهير والأفراد، تبدأ من بناء الهوية البصرية وإدارة الصفحات على السوشيال ميديا، وحتى المونتاج والتصميم وباقات الخدمات الجاهزة. كما تقدم الشركة أكاديمية تعليمية متخصصة.
          </p>

          <motion.div
            whileHover={{ scale: 1.02 }}
            className="w-full bg-[#FF0A2B] text-white py-3.5 px-6 rounded-xl font-extrabold text-base sm:text-xl text-center shadow-glow-red shimmer-hover cursor-default"
          >
            للرؤية أثر — شريكك الإبداعي لصناعة أثر حقيقي لعلامتك التجارية
          </motion.div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 w-full">
            <motion.div
              whileHover={{ y: -4, borderColor: "#FF0A2B66" }}
              className="flex items-start gap-3 bg-[#1A0509] p-4 rounded-xl border border-[#3A0C15] transition-all"
            >
              <CheckCircle2 className="w-5 h-5 text-[#FF0A2B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-base">استراتيجيات مبنية على بيانات</h4>
                <p className="text-sm text-[#C9A4A8]">قرارات تسويقية تستند لأرقام حقيقية وسلوك الجمهور المستهدف.</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ y: -4, borderColor: "#FF0A2B66" }}
              className="flex items-start gap-3 bg-[#1A0509] p-4 rounded-xl border border-[#3A0C15] transition-all"
            >
              <Target className="w-5 h-5 text-[#FF0A2B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-base">تركيز كامل على العائد (ROI)</h4>
                <p className="text-sm text-[#C9A4A8]">كل قرش يُنفق في الإعلانات محسوب بهدف مضاعفة الأرباح.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Circular Floating Brand Artwork — Real Photo (Enters from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -60, scale: 0.9 }}
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
              alt="Duck Agency – المسار الصحيح لنمو علامتك التجارية"
              className="w-full h-full object-cover object-center"
            />
            {/* Subtle red overlay vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0204]/60 via-transparent to-transparent" />
            {/* Caption badge */}
            <div className="absolute bottom-6 inset-x-0 flex justify-center">
              <span className="text-xs sm:text-sm text-white font-extrabold bg-[#FF0A2B]/85 px-4 py-1.5 rounded-full backdrop-blur-sm shadow-glow-red">
                المسار الصحيح لنمو علامتك التجارية
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
