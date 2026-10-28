"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#12030A] relative overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Contact Info Cards (Enters from Right) */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex-1 w-full flex flex-col gap-6 text-right"
        >
          <div>
            <span className="text-[#FF0A2B] font-extrabold text-base sm:text-lg block mb-2">
              تواصل مباشر
            </span>
            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              أينما كان نشاطك، نحن قريبون منك
            </h2>
          </div>

          {/* Egypt Branch */}
          <motion.div
            whileHover={{ y: -4, borderColor: "#FF0A2B66" }}
            className="border border-[#3A0C15] rounded-2xl p-6 sm:p-7 bg-[#1A0509] flex flex-col gap-4 text-base sm:text-lg transition-all shadow-lg"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#3A0C15]">
              <span className="font-black text-xl text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF0A2B] animate-ping" />
                فرع جمهورية مصر العربية
              </span>
              <a
                href="https://wa.me/201064544080"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#FF0A2B] hover:underline flex items-center gap-1 font-bold"
              >
                <span>واتساب</span>
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#FF0A2B] shrink-0" />
              <span className="font-extrabold text-[#FF0A2B]">رقم الهاتف:</span>
              <a
                href="tel:+201064544080"
                className="hover:text-[#FF0A2B] transition-colors font-mono font-bold"
                style={{ direction: "ltr" }}
              >
                +20 10 6454 4080
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-[#FF0A2B] shrink-0" />
              <span className="font-extrabold text-[#FF0A2B]">البريد الإلكتروني:</span>
              <a
                href="mailto:hello@duckagency.com"
                className="hover:text-[#FF0A2B] transition-colors font-sans"
              >
                hello@duckagency.com
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#FF0A2B] shrink-0 mt-1" />
              <div>
                <span className="font-extrabold text-[#FF0A2B]">العنوان:</span>{" "}
                <span className="text-neutral-200">
                  مدينة 6 أكتوبر، الحصري، القاهرة
                </span>
              </div>
            </div>
          </motion.div>

          {/* KSA Branch */}
          <motion.div
            whileHover={{ y: -4, borderColor: "#FF0A2B66" }}
            className="border border-[#3A0C15] rounded-2xl p-6 sm:p-7 bg-[#1A0509] flex flex-col gap-4 text-base sm:text-lg transition-all shadow-lg"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#3A0C15]">
              <span className="font-black text-xl text-white flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#FF0A2B] animate-ping" />
                فرع المملكة العربية السعودية
              </span>
              <a
                href="https://wa.me/966579398098"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs sm:text-sm text-[#FF0A2B] hover:underline flex items-center gap-1 font-bold"
              >
                <span>واتساب</span>
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-[#FF0A2B] shrink-0" />
              <span className="font-extrabold text-[#FF0A2B]">رقم الهاتف:</span>
              <a
                href="tel:+966579398098"
                className="hover:text-[#FF0A2B] transition-colors font-mono font-bold"
                style={{ direction: "ltr" }}
              >
                +966 57 939 8098
              </a>
            </div>

            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#FF0A2B] shrink-0 mt-1" />
              <div>
                <span className="font-extrabold text-[#FF0A2B]">العنوان:</span>{" "}
                <span className="text-neutral-200">
                  طريق الملك فهد، حي العليا، الرياض
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Global Hub Floating Sphere (Enters from Left) */}
        <motion.div
          initial={{ opacity: 0, x: -50, scale: 0.9 }}
          whileInView={{ opacity: 1, x: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
          className="animate-float relative flex-1 max-w-[320px] sm:max-w-[380px] w-full aspect-square rounded-full flex items-center justify-center"
        >
          {/* Radar Ring */}
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
      </div>
    </section>
  );
}
