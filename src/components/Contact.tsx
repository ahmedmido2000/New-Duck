"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Headphones } from "lucide-react";
import RegionalGlobe from "./RegionalGlobe";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#12030A] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-6 sm:gap-8">
        {/* Header Block (Right-aligned, positioned directly above the cards) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="w-full flex justify-start text-right"
        >
          <div className="flex flex-col items-start max-w-xl">
            <div className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-sm sm:text-base mb-2">
              <span className="w-5 h-[2px] bg-[#FF0A2B]" />
              <span>تواصل مباشر</span>
              <span className="w-5 h-[2px] bg-[#FF0A2B]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              أينما كان نشاطك، نحن قريبون منك
            </h2>
          </div>
        </motion.div>

        {/* Content Row: Cards on Right (decreased width), Video on Left (increased width) */}
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8">
          {/* Cards Column (Decreased width ~38%, enters from Right) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full lg:w-[40%] lg:max-w-[450px] flex flex-col justify-between gap-4 sm:gap-5 text-right shrink-0"
          >
            {/* Egypt Branch */}
            <motion.div
              whileHover={{ y: -3, borderColor: "#FF0A2B" }}
              className="border border-[#FF0A2B]/40 rounded-2xl p-5 sm:p-6 bg-[#1A0509]/80 flex flex-col gap-3.5 text-base sm:text-lg transition-all shadow-lg"
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-[#3A0C15]">
                <span className="font-black text-lg sm:text-xl text-white">
                  فرع جمهورية مصر العربية
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF0A2B]">
                  <span>رئيسي</span>
                  <Headphones className="w-4 h-4" />
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0A2B] shrink-0" />
                <span className="font-extrabold text-sm sm:text-base text-[#FF0A2B]">رقم الهاتف:</span>
                <a
                  href="tel:+201064544080"
                  className="hover:text-[#FF0A2B] transition-colors font-mono font-bold text-sm sm:text-base"
                  style={{ direction: "ltr" }}
                >
                  +20 10 4567 8900
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0A2B] shrink-0" />
                <span className="font-extrabold text-sm sm:text-base text-[#FF0A2B]">البريد الإلكتروني:</span>
                <a
                  href="mailto:info@duckagency.com"
                  className="hover:text-[#FF0A2B] transition-colors font-sans text-sm sm:text-base"
                >
                  info@duckagency.com
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0A2B] shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base">
                  <span className="font-extrabold text-[#FF0A2B]">العنوان:</span>{" "}
                  <span className="text-neutral-200">
                    مدينة نصر، القاهرة، مصر
                  </span>
                </div>
              </div>
            </motion.div>

            {/* KSA Branch */}
            <motion.div
              whileHover={{ y: -3, borderColor: "#FF0A2B" }}
              className="border border-[#FF0A2B]/40 rounded-2xl p-5 sm:p-6 bg-[#1A0509]/80 flex flex-col gap-3.5 text-base sm:text-lg transition-all shadow-lg"
            >
              <div className="flex items-center justify-between pb-2.5 border-b border-[#3A0C15]">
                <span className="font-black text-lg sm:text-xl text-white">
                  فرع المملكة العربية السعودية
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#FF0A2B]">
                  <span>شريك</span>
                  <Headphones className="w-4 h-4" />
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0A2B] shrink-0" />
                <span className="font-extrabold text-sm sm:text-base text-[#FF0A2B]">رقم الهاتف:</span>
                <a
                  href="tel:+966579398098"
                  className="hover:text-[#FF0A2B] transition-colors font-mono font-bold text-sm sm:text-base"
                  style={{ direction: "ltr" }}
                >
                  +966 57 539 8099
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0A2B] shrink-0 mt-0.5" />
                <div className="text-sm sm:text-base">
                  <span className="font-extrabold text-[#FF0A2B]">العنوان:</span>{" "}
                  <span className="text-neutral-200">
                    طريق الملك فهد، حي العليا، الرياض
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Regional Globe Animation (Left column) */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex-1 w-full flex flex-col self-stretch"
          >
            <RegionalGlobe />
          </motion.div>
        </div>

        {/* Commented out original circle:
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
          className="animate-float relative flex-1 max-w-[320px] sm:max-w-[380px] w-full aspect-square rounded-full flex items-center justify-center"
        >
          <div className="absolute inset-0 rounded-full border border-[#FF0A2B]/40 radar-ring pointer-events-none" />

          <div
            className="w-full h-full rounded-full flex flex-col items-center justify-center p-6 text-center text-white relative shadow-2xl transition-transform"
            style={{
              background:
                "radial-gradient(circle at 35% 30%, #FF6B80, #FF0A2B 25%, #3A0610 65%, #12030A)",
              boxShadow: "0 0 75px rgba(255, 10, 43, 0.5)",
            }}
          >
            <div className="text-3xl sm:text-4xl font-black mb-2 tracking-tight text-glow-red">
              Duck
            </div>
            <div className="text-base sm:text-xl font-black tracking-wide leading-relaxed">
              القاهرة · الرياض · دبي
            </div>
            <div className="text-xs sm:text-sm text-white/80 font-semibold mt-3 max-w-[200px]">
              تغطية تسويقية إقليمية شاملة لأسواق الشرق الأوسط
            </div>
          </div>
        </motion.div>
        */}
      </div>
    </section>
  );
}
