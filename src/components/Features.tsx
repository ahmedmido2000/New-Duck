"use client";

import { motion } from "framer-motion";
import { Lightbulb, CheckCheck, Headphones } from "lucide-react";

export default function Features() {
  const features = [
    {
      num: "01",
      title: "حلول مبتكرة",
      desc: "خدمات رقمية حديثة تناسب احتياجات السوق وتواكب التطور السريع لأدوات التسويق.",
      icon: Lightbulb,
    },
    {
      num: "02",
      title: "جودة عالية",
      desc: "تنفيذ بأعلى معايير الجودة لتجربة مستخدم ممتعة ونتائج إعلانية متفوقة.",
      icon: CheckCheck,
    },
    {
      num: "03",
      title: "دعم مستمر وشراكة حقيقية",
      desc: "متابعة وتقارير وتحسين دائم لضمان استمرار نجاح مشروعك ونموه على المدى الطويل.",
      icon: Headphones,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-[#12030A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border border-[#3A0C15] rounded-3xl overflow-hidden bg-[#0D0204]/60 shadow-2xl">
          <div className="flex flex-col lg:flex-row items-stretch">
          {/* Features Side */}
          <div className="flex-1 flex flex-col justify-between">
            {/* Heading Header */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="p-6 sm:p-10 border-b border-[#3A0C15]"
            >
              <h2 className="text-3xl sm:text-5xl font-black text-[#FF0A2B] mb-3 text-glow-red">
                مميزات تصنع الفرق
              </h2>
              <p className="text-base sm:text-lg text-[#C9A4A8] leading-relaxed max-w-xl">
                نحوّل أفكارك إلى مشاريع ناجحة بخدمات احترافية تجمع بين الإبداع الفني والتقنية المتطورة والاستراتيجية المدروسة.
              </p>
            </motion.div>

            {/* Features 01 & 02 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x sm:divide-x-reverse divide-[#3A0C15] border-b border-[#3A0C15]">
              {features.slice(0, 2).map((item, idx) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: idx * 0.15 }}
                    className="p-6 sm:p-8 flex flex-col gap-3.5 hover:bg-[#FF0A2B]/5 transition-colors group cursor-default"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8A0F20] to-[#2A0309] border border-[#FF0A2B]/40 flex items-center justify-center text-[#FF0A2B] font-black text-xl shadow-md group-hover:scale-110 transition-transform">
                        {item.num}
                      </div>
                      <Icon className="w-6 h-6 text-[#6C4B50] group-hover:text-[#FF0A2B] transition-colors" />
                    </div>
                    <h3 className="text-2xl font-black text-[#FF0A2B] group-hover:text-white transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>

            {/* Feature 03 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center gap-5 hover:bg-[#FF0A2B]/5 transition-colors group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8A0F20] to-[#2A0309] border border-[#FF0A2B]/40 flex items-center justify-center text-[#FF0A2B] font-black text-xl shadow-md shrink-0 group-hover:scale-110 transition-transform">
                03
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-black text-[#FF0A2B] group-hover:text-white transition-colors mb-1">
                  دعم مستمر وشراكة حقيقية
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  متابعة ودعم دائم لضمان نجاح مشروعك، مع تقارير أداء دورية واجتماعات استراتيجية منتظمة.
                </p>
              </div>
            </motion.div>
          </div>

          {/* Cybernetic AI Visual Side with Animated Scanline */}
          <div className="lg:w-[420px] min-h-[340px] sm:min-h-[420px] bg-[#12030A] border-t lg:border-t-0 lg:border-r border-[#3A0C15] relative flex items-center justify-center p-8 overflow-hidden">
            {/* Scanlines Background Effect */}
            <div
              className="absolute inset-0 pointer-events-none opacity-40"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(0deg, rgba(255,10,43,0.15) 0px, rgba(255,10,43,0.15) 1px, transparent 1px, transparent 6px)",
              }}
            />

            {/* Moving Laser Beam Sweep */}
            <div className="absolute inset-x-0 h-10 bg-gradient-to-b from-transparent via-[#FF0A2B]/20 to-transparent animate-scanline pointer-events-none" />

            {/* Radial Core Glow */}
            <div className="absolute w-64 h-64 bg-[#FF0A2B]/20 rounded-full blur-3xl pointer-events-none" />

            {/* Cybernetic Eye / Neural Lens SVG Illustration */}
            <div className="relative z-10 flex flex-col items-center text-center">
              <svg
                viewBox="0 0 240 240"
                className="w-48 h-48 sm:w-56 sm:h-56 text-[#FF0A2B]"
                fill="none"
              >
                {/* Outer Concentric Scanning Rings */}
                <circle
                  cx="120"
                  cy="120"
                  r="105"
                  stroke="#FF0A2B"
                  strokeWidth="1.5"
                  strokeDasharray="6 8"
                  className="animate-spin"
                  style={{ animationDuration: "25s" }}
                />
                <circle
                  cx="120"
                  cy="120"
                  r="88"
                  stroke="#FFB3BE"
                  strokeWidth="1"
                  strokeOpacity="0.4"
                />

                {/* Cyber Eye Outline */}
                <path
                  d="M 25 120 Q 120 40 215 120 Q 120 200 25 120 Z"
                  stroke="#FF0A2B"
                  strokeWidth="2.5"
                  fill="#2A0309"
                  fillOpacity="0.5"
                />

                {/* Iris & Digital Core */}
                <circle cx="120" cy="120" r="42" fill="#7A0B1A" stroke="#FF0A2B" strokeWidth="2" />
                <circle cx="120" cy="120" r="28" fill="#FF0A2B" fillOpacity="0.8" />
                <circle cx="120" cy="120" r="14" fill="#ffffff" />

                {/* Digital Target Reticles */}
                <line x1="120" y1="50" x2="120" y2="70" stroke="#FF0A2B" strokeWidth="2" />
                <line x1="120" y1="170" x2="120" y2="190" stroke="#FF0A2B" strokeWidth="2" />
                <line x1="50" y1="120" x2="70" y2="120" stroke="#FF0A2B" strokeWidth="2" />
                <line x1="170" y1="120" x2="190" y2="120" stroke="#FF0A2B" strokeWidth="2" />

                {/* Scanning Laser Line */}
                <line
                  x1="60"
                  y1="120"
                  x2="180"
                  y2="120"
                  stroke="#FFB3BE"
                  strokeWidth="1.5"
                  strokeDasharray="2 4"
                />
              </svg>

              <div className="mt-4 font-mono text-xs tracking-widest text-[#FF0A2B] bg-[#2A0509] px-3.5 py-1 rounded-full border border-[#FF0A2B]/30 shadow-glow-red">
                AI PERFORMANCE MONITOR
              </div>
              <div className="text-white font-extrabold text-base mt-2">
                دقة في الاستهداف والتحليل
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
