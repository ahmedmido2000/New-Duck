"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Headphones, MessageCircle } from "lucide-react";
import RegionalGlobe from "./RegionalGlobe";

export default function Contact() {
  const [hoveredBranch, setHoveredBranch] = useState<"egypt" | "ksa" | null>(null);

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#12030A] relative overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10">
        {/* Header Block */}
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
            <p className="text-[#C9A4A8] text-sm sm:text-base mt-2">
              فروعنا الرسمية في مصر والمملكة العربية السعودية لتقديم حلول الدعاية والتسويق المتكاملة.
            </p>
          </div>
        </motion.div>

        {/* Content Row: Cards on Right, Interactive Globe on Left */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Branches Cards Column (Right in RTL) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full lg:w-[46%] flex flex-col justify-between gap-5 text-right shrink-0"
          >
            {/* Egypt Branch */}
            <motion.div
              whileHover={{ y: -3 }}
              onMouseEnter={() => setHoveredBranch("egypt")}
              onMouseLeave={() => setHoveredBranch(null)}
              className={`border rounded-2xl p-6 bg-[#1A0509]/90 flex flex-col gap-4 text-base transition-all shadow-xl ${
                hoveredBranch === "egypt"
                  ? "border-[#FF0A2B] shadow-[0_10px_30px_-5px_rgba(255,10,43,0.35)]"
                  : "border-[#FF0A2B]/40 hover:border-[#FF0A2B]"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#3A0C15]">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇪🇬</span>
                  <span className="font-black text-lg sm:text-xl text-white">
                    فرع جمهورية مصر العربية
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF0A2B] bg-[#FF0A2B]/10 px-2.5 py-1 rounded-md border border-[#FF0A2B]/20">
                  <span>الفرع الرئيسي</span>
                  <Headphones className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF0A2B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-[#FF0A2B] text-sm sm:text-base">العنوان:</span>{" "}
                  <span className="text-white font-medium text-sm sm:text-base">
                    مدينة 6 أكتوبر - الحصري، مصر
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF0A2B] shrink-0" />
                <span className="font-extrabold text-[#FF0A2B] text-sm sm:text-base">رقم الهاتف:</span>
                <a
                  href="tel:+201064544080"
                  className="hover:text-[#FF0A2B] transition-colors font-mono font-bold text-white text-sm sm:text-base"
                  style={{ direction: "ltr" }}
                >
                  +20 10 6454 4080
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF0A2B] shrink-0" />
                <span className="font-extrabold text-[#FF0A2B] text-sm sm:text-base">البريد الإلكتروني:</span>
                <a
                  href="mailto:info@duckagency.com"
                  className="hover:text-[#FF0A2B] transition-colors font-sans text-neutral-300 text-sm sm:text-base"
                >
                  info@duckagency.com
                </a>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href="tel:+201064544080"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF0A2B] hover:bg-[#E00020] text-white py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-glow-red shimmer-hover"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصال سريع</span>
                </a>
                <a
                  href="https://wa.me/201064544080?text=مرحباً%20Duck%20Agency%20مصر،%20أود%20الاستفسار%20عن%20خدماتكم"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>واتساب مصر</span>
                </a>
              </div>
            </motion.div>

            {/* KSA Branch */}
            <motion.div
              whileHover={{ y: -3 }}
              onMouseEnter={() => setHoveredBranch("ksa")}
              onMouseLeave={() => setHoveredBranch(null)}
              className={`border rounded-2xl p-6 bg-[#1A0509]/90 flex flex-col gap-4 text-base transition-all shadow-xl ${
                hoveredBranch === "ksa"
                  ? "border-[#FF0A2B] shadow-[0_10px_30px_-5px_rgba(255,10,43,0.35)]"
                  : "border-[#FF0A2B]/40 hover:border-[#FF0A2B]"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-[#3A0C15]">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇸🇦</span>
                  <span className="font-black text-lg sm:text-xl text-white">
                    فرع المملكة العربية السعودية
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF0A2B] bg-[#FF0A2B]/10 px-2.5 py-1 rounded-md border border-[#FF0A2B]/20">
                  <span>فرع السعودية</span>
                  <Headphones className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF0A2B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-[#FF0A2B] text-sm sm:text-base">العنوان:</span>{" "}
                  <span className="text-white font-medium text-sm sm:text-base">
                    الرياض، المملكة العربية السعودية
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF0A2B] shrink-0" />
                <span className="font-extrabold text-[#FF0A2B] text-sm sm:text-base">رقم الهاتف:</span>
                <a
                  href="tel:+966579398098"
                  className="hover:text-[#FF0A2B] transition-colors font-mono font-bold text-white text-sm sm:text-base"
                  style={{ direction: "ltr" }}
                >
                  +966 57 939 8098
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF0A2B] shrink-0" />
                <span className="font-extrabold text-[#FF0A2B] text-sm sm:text-base">البريد الإلكتروني:</span>
                <a
                  href="mailto:info@duckagency.com"
                  className="hover:text-[#FF0A2B] transition-colors font-sans text-neutral-300 text-sm sm:text-base"
                >
                  info@duckagency.com
                </a>
              </div>

              {/* Direct Quick Action Buttons */}
              <div className="pt-2 grid grid-cols-2 gap-3">
                <a
                  href="tel:+966579398098"
                  className="inline-flex items-center justify-center gap-2 bg-[#FF0A2B] hover:bg-[#E00020] text-white py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-glow-red shimmer-hover"
                >
                  <Phone className="w-4 h-4" />
                  <span>اتصال سريع</span>
                </a>
                <a
                  href="https://wa.me/966579398098?text=مرحباً%20Duck%20Agency%20السعودية،%20أود%20الاستفسار%20عن%20خدماتكم"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>واتساب السعودية</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Regional Globe Animation (Left column in RTL) */}
          <motion.div
            initial={{ opacity: 0, x: -50, scale: 0.95 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
            className="flex-1 w-full flex items-center justify-center"
          >
            <RegionalGlobe
              highlightedBranch={hoveredBranch}
              onHoverBranch={setHoveredBranch}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
