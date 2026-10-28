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

          {/* Cybernetic Duck AI Video Side */}
          <div className="lg:w-[460px] xl:w-[500px] min-h-[380px] sm:min-h-[460px] bg-[#12030A] border-t lg:border-t-0 lg:border-r border-[#3A0C15] relative overflow-hidden flex items-center justify-center">
            <video
              src="/videos/duck-contact.mp4"
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="w-full h-full object-cover"
            />

            {/* Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0D0204]/85 via-transparent to-[#0D0204]/40 pointer-events-none" />

            {/* Moving Laser Beam Sweep */}
            <div className="absolute inset-x-0 h-12 bg-gradient-to-b from-transparent via-[#FF0A2B]/25 to-transparent animate-scanline pointer-events-none" />

            {/* Top Right Floating Tech Pill */}
            <div className="absolute top-5 right-5 z-10 flex items-center gap-2 bg-[#0D0204]/85 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-[#FF0A2B]/40 shadow-glow-red">
              <span className="w-2 h-2 rounded-full bg-[#FF0A2B] animate-ping" />
              <span className="text-[11px] font-mono tracking-widest text-[#FF0A2B] font-bold">
                AI ENGINE ACTIVE
              </span>
            </div>

            {/* Bottom Floating Caption */}
            <div className="absolute bottom-5 inset-x-5 z-10 bg-[#0D0204]/85 backdrop-blur-md p-3.5 rounded-xl border border-[#3A0C15] text-right">
              <div className="text-white font-extrabold text-sm sm:text-base">
                نظام Duck الذكي لإدارة وتحسين الحملات
              </div>
              <div className="text-xs text-[#C9A4A8] mt-0.5">
                استهداف متقدم، تحليل لحظي، ونتائج إعلانية تتفوق على منافسيك
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  );
}
