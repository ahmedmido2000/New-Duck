"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Headphones, MessageCircle } from "lucide-react";
import RegionalGlobe from "./RegionalGlobe";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const [hoveredBranch, setHoveredBranch] = useState<"egypt" | "ksa" | null>(null);
  const { t, isRTL, dir } = useLanguage();

  return (
    <section id="contact" className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-gray-100" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-8 sm:gap-10">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className={`w-full flex justify-start ${isRTL ? "text-right" : "text-left"}`}
        >
          <div className="flex flex-col items-start max-w-xl">
            <div className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-sm sm:text-base mb-2">
              <span className="w-5 h-[2px] bg-[#FF0A2B]" />
              <span>{t.contact.kicker}</span>
              <span className="w-5 h-[2px] bg-[#FF0A2B]" />
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-[#0D0204] leading-tight">
              {t.contact.heading}
            </h2>
            <p className="text-[#444444] text-sm sm:text-base mt-2">
              {t.contact.subtitle}
            </p>
          </div>
        </motion.div>

        {/* Content Row: Cards on Right (in RTL), Interactive Globe on Left */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Branches Cards Column */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
            className={`w-full lg:w-[46%] flex flex-col justify-between gap-5 shrink-0 ${
              isRTL ? "text-right" : "text-left"
            }`}
          >
            {/* Egypt Branch */}
            <motion.div
              whileHover={{ y: -3 }}
              onMouseEnter={() => setHoveredBranch("egypt")}
              onMouseLeave={() => setHoveredBranch(null)}
              className={`border rounded-2xl p-6 bg-white flex flex-col gap-4 text-base transition-all shadow-lg ${
                hoveredBranch === "egypt"
                  ? "border-[#FF0A2B] shadow-[0_10px_30px_-5px_rgba(255,10,43,0.2)]"
                  : "border-gray-200 hover:border-[#FF0A2B]/60"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇪🇬</span>
                  <span className="font-black text-lg sm:text-xl text-[#0D0204]">
                    {t.contact.egypt.title}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF0A2B] bg-[#FF0A2B]/10 px-2.5 py-1 rounded-md border border-[#FF0A2B]/20">
                  <span>{t.contact.egypt.badge}</span>
                  <Headphones className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF0A2B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-[#FF0A2B] text-sm sm:text-base">
                    {t.contact.addressLabel}
                  </span>{" "}
                  <span className="text-[#0D0204] font-medium text-sm sm:text-base">
                    {t.contact.egypt.address}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF0A2B] shrink-0" />
                <span className="font-extrabold text-[#FF0A2B] text-sm sm:text-base">
                  {t.contact.phoneLabel}
                </span>
                <a
                  href="tel:+201064544080"
                  className="hover:text-[#FF0A2B] transition-colors font-mono font-bold text-[#0D0204] text-sm sm:text-base"
                  style={{ direction: "ltr" }}
                >
                  +20 10 6454 4080
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF0A2B] shrink-0" />
                <span className="font-extrabold text-[#FF0A2B] text-sm sm:text-base">
                  {t.contact.emailLabel}
                </span>
                <a
                  href="mailto:info@duckagency.com"
                  className="hover:text-[#FF0A2B] transition-colors font-sans text-[#444444] text-sm sm:text-base"
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
                  <span>{t.contact.egypt.callBtn}</span>
                </a>
                <a
                  href="https://wa.me/201064544080?text=مرحباً%20Duck%20Agency%20مصر،%20أود%20الاستفسار%20عن%20خدماتكم"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.contact.egypt.waBtn}</span>
                </a>
              </div>
            </motion.div>

            {/* KSA Branch */}
            <motion.div
              whileHover={{ y: -3 }}
              onMouseEnter={() => setHoveredBranch("ksa")}
              onMouseLeave={() => setHoveredBranch(null)}
              className={`border rounded-2xl p-6 bg-white flex flex-col gap-4 text-base transition-all shadow-lg ${
                hoveredBranch === "ksa"
                  ? "border-[#FF0A2B] shadow-[0_10px_30px_-5px_rgba(255,10,43,0.2)]"
                  : "border-gray-200 hover:border-[#FF0A2B]/60"
              }`}
            >
              <div className="flex items-center justify-between pb-3 border-b border-gray-100">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🇸🇦</span>
                  <span className="font-black text-lg sm:text-xl text-[#0D0204]">
                    {t.contact.saudi.title}
                  </span>
                </div>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#FF0A2B] bg-[#FF0A2B]/10 px-2.5 py-1 rounded-md border border-[#FF0A2B]/20">
                  <span>{t.contact.saudi.badge}</span>
                  <Headphones className="w-3.5 h-3.5" />
                </span>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#FF0A2B] shrink-0 mt-0.5" />
                <div>
                  <span className="font-extrabold text-[#FF0A2B] text-sm sm:text-base">
                    {t.contact.addressLabel}
                  </span>{" "}
                  <span className="text-[#0D0204] font-medium text-sm sm:text-base">
                    {t.contact.saudi.address}
                  </span>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#FF0A2B] shrink-0" />
                <span className="font-extrabold text-[#FF0A2B] text-sm sm:text-base">
                  {t.contact.phoneLabel}
                </span>
                <a
                  href="tel:+966579398098"
                  className="hover:text-[#FF0A2B] transition-colors font-mono font-bold text-[#0D0204] text-sm sm:text-base"
                  style={{ direction: "ltr" }}
                >
                  +966 57 939 8098
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#FF0A2B] shrink-0" />
                <span className="font-extrabold text-[#FF0A2B] text-sm sm:text-base">
                  {t.contact.emailLabel}
                </span>
                <a
                  href="mailto:info@duckagency.com"
                  className="hover:text-[#FF0A2B] transition-colors font-sans text-[#444444] text-sm sm:text-base"
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
                  <span>{t.contact.saudi.callBtn}</span>
                </a>
                <a
                  href="https://wa.me/966579398098?text=مرحباً%20Duck%20Agency%20السعودية،%20أود%20الاستفسار%20عن%20خدماتكم"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20BA5A] text-white py-2.5 px-3 rounded-xl font-bold text-xs sm:text-sm transition-all shadow-md"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>{t.contact.saudi.waBtn}</span>
                </a>
              </div>
            </motion.div>
          </motion.div>

          {/* Regional Globe Animation */}
          <motion.div
            initial={{ opacity: 0, x: isRTL ? -50 : 50, scale: 0.95 }}
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
