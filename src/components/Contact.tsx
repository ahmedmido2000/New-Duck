"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Headphones, MessageCircle, ExternalLink } from "lucide-react";
import RegionalGlobe from "./RegionalGlobe";

export default function Contact() {
  const socialChannels = [
    {
      name: "Instagram",
      label: "إنستغرام",
      href: "https://instagram.com/duckagency",
      handle: "@duckagency",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      label: "تيك توك",
      href: "https://tiktok.com/@duckagency",
      handle: "@duckagency",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.75 1.34-.04 2.57-.86 3.07-2.11.23-.53.33-1.11.33-1.69.04-4.87.02-9.75.02-14.63z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      label: "فيسبوك",
      href: "https://facebook.com/duckagency",
      handle: "Duck Agency",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "X (Twitter)",
      label: "إكس (تويتر)",
      href: "https://x.com/duckagency",
      handle: "@duckagency",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      label: "لينكد إن",
      href: "https://linkedin.com/company/duckagency",
      handle: "Duck Agency",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

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
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-6 lg:gap-8">
          {/* Branches Cards Column (Right in RTL) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full lg:w-[45%] flex flex-col justify-between gap-5 text-right shrink-0"
          >
            {/* Egypt Branch */}
            <motion.div
              whileHover={{ y: -3, borderColor: "#FF0A2B" }}
              className="border border-[#FF0A2B]/40 rounded-2xl p-6 bg-[#1A0509]/90 flex flex-col gap-4 text-base transition-all shadow-xl"
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
              whileHover={{ y: -3, borderColor: "#FF0A2B" }}
              className="border border-[#FF0A2B]/40 rounded-2xl p-6 bg-[#1A0509]/90 flex flex-col gap-4 text-base transition-all shadow-xl"
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

        {/* Social Media Channels Row */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.75 }}
          className="border border-[#3A0C15] rounded-2xl p-6 sm:p-8 bg-[#1A0509]/70"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <div className="text-xl sm:text-2xl font-black text-white">
                تابعنا وتواصل معنا عبر وسائل التواصل الاجتماعي
              </div>
              <div className="text-sm text-[#C9A4A8] mt-1">
                نشارك يومياً استراتيجيات تسويقية ملهمة، أحدث تصاميمنا، ونتائج نجاح عملائنا.
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {socialChannels.map((ch) => (
                <motion.a
                  key={ch.name}
                  href={ch.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-2.5 bg-[#2A0509] hover:bg-[#FF0A2B] text-neutral-200 hover:text-white px-4 py-2.5 rounded-xl border border-[#3A0C15] hover:border-[#FF0A2B] transition-all shadow-md text-xs sm:text-sm font-bold"
                >
                  {ch.icon}
                  <span>{ch.name}</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </motion.a>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
