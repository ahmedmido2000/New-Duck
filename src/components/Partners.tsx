"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Handshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export interface PartnerItem {
  id: string;
  slug: string;
  arName: string;
  enName: string;
  categoryAr: string;
  categoryEn: string;
  countryAr: string;
  countryEn: string;
  flag: string;
  bgDark?: boolean;
}

export const partnersData: PartnerItem[] = [
  {
    id: "stc",
    slug: "stc",
    arName: "الاتصالات السعودية STC",
    enName: "stc Telecom Group",
    categoryAr: "اتصالات وتقنية وطنية",
    categoryEn: "Gov & Telecom",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "sec",
    slug: "sec",
    arName: "الشركة السعودية للكهرباء",
    enName: "Saudi Electricity Co.",
    categoryAr: "طاقة وبنية تحتية",
    categoryEn: "Energy & Infrastructure",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "nwc",
    slug: "nwc",
    arName: "شركة المياه الوطنية NWC",
    enName: "National Water Company",
    categoryAr: "مرافق وبنية وطنية",
    categoryEn: "National Utilities",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "dubai-chambers",
    slug: "dubai-chambers",
    arName: "غرف دبي Dubai Chambers",
    enName: "Dubai Chambers",
    categoryAr: "غرف وهيئات تجارية",
    categoryEn: "Chambers & Institutional",
    countryAr: "الإمارات العربية المتحدة",
    countryEn: "United Arab Emirates",
    flag: "🇦🇪",
  },
  {
    id: "almajdouie",
    slug: "almajdouie",
    arName: "المجدوعي Almajdouie",
    enName: "Almajdouie Group",
    categoryAr: "لوجستيات ومجموعات كبرى",
    categoryEn: "Logistics & Conglomerate",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "sadara",
    slug: "sadara",
    arName: "صدارة Sadara",
    enName: "Sadara Chemical Co.",
    categoryAr: "صناعات بتروكيماوية عالمية",
    categoryEn: "Global Petrochemicals",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "osuss",
    slug: "osuss",
    arName: "أسس العقارية Osuss",
    enName: "Osuss Real Estate",
    categoryAr: "تطوير واستثمار عقاري",
    categoryEn: "Real Estate Development",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
    bgDark: true,
  },
  {
    id: "cr8ive",
    slug: "cr8ive",
    arName: "كرييتف Cr8ive Digital Arts",
    enName: "Cr8ive Digital Arts",
    categoryAr: "فنون وإنتاج رقمي",
    categoryEn: "Digital Arts & Media",
    countryAr: "جمهورية مصر العربية",
    countryEn: "Egypt",
    flag: "🇪🇬",
    bgDark: true,
  },
  {
    id: "fruitland",
    slug: "fruitland",
    arName: "فروت لاند Fruit Land Co",
    enName: "Fruit Land Co.",
    categoryAr: "صناعات غذائية وتصدير",
    categoryEn: "Food & FMCG Export",
    countryAr: "جمهورية مصر العربية",
    countryEn: "Egypt",
    flag: "🇪🇬",
  },
  {
    id: "alnada",
    slug: "alnada",
    arName: "الندى للصناعات الغذائية",
    enName: "Alnada Food Industries",
    categoryAr: "أغذية ومشروبات استهلاكية",
    categoryEn: "Food & Beverages",
    countryAr: "جمهورية مصر العربية",
    countryEn: "Egypt",
    flag: "🇪🇬",
  },
  {
    id: "amani",
    slug: "amani",
    arName: "د. أماني أحمد الدوسري",
    enName: "Dr. Amani Al Dosari",
    categoryAr: "رعاية طبية وتجميل",
    categoryEn: "Medical & Aesthetics",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "sweet-jolita",
    slug: "sweet-jolita",
    arName: "سويت جوليتا Sweet Jolita",
    enName: "Sweet Jolita Sweets",
    categoryAr: "حلويات وتجزئة فاخرة",
    categoryEn: "Luxury Confectionery",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "hetra",
    slug: "hetra",
    arName: "هيترا Hetra",
    enName: "Hetra Industrial & Tech",
    categoryAr: "حلول تقنية وصناعية",
    categoryEn: "Industrial & Tech Solutions",
    countryAr: "جمهورية مصر العربية",
    countryEn: "Egypt",
    flag: "🇪🇬",
    bgDark: true,
  },
];

export default function Partners() {
  const { lang, t } = useLanguage();

  // Split into 2 rows and duplicate for continuous seamless marquee looping
  const row1Items = partnersData.slice(0, 7);
  const row2Items = [...partnersData.slice(7), partnersData[0]];

  const marqueeRow1 = [...row1Items, ...row1Items, ...row1Items];
  const marqueeRow2 = [...row2Items, ...row2Items, ...row2Items];

  return (
    <section
      id="partners"
      className="w-full py-16 sm:py-24 lg:py-28 bg-gradient-to-b from-white via-[#FCFCFD] to-white text-[#0D0204] relative overflow-hidden border-b border-gray-100"
    >
      {/* Background Subtle Ambient Flares */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/35 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-100/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ═══════════════ Header Section ═══════════════ */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-12 sm:mb-16">
          {/* Glowing Kicker Pill */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 border border-red-200/80 text-[#FF0A2B] text-xs sm:text-sm font-black mb-4 shadow-xs"
          >
            <Handshake className="w-4 h-4 text-[#FF0A2B] animate-pulse" />
            <span>{t.partners.kicker}</span>
            <span className="w-2 h-2 rounded-full bg-[#FF0A2B] animate-ping" />
          </motion.div>

          {/* Main Title with Expanding Underline */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.1 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D0204] tracking-tight leading-tight mb-4"
          >
            <span>{t.partners.heading} </span>
            <span className="text-[#FF0A2B] relative inline-block">
              {t.partners.headingHighlight}
              <motion.span
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
                className="absolute -bottom-1.5 left-0 right-0 h-[3px] bg-gradient-to-r from-[#FF0A2B] via-[#E80022] to-[#FF0A2B] rounded-full shadow-[0_0_12px_rgba(255,10,43,0.5)] origin-right rtl:origin-right ltr:origin-left"
              />
            </span>
          </motion.h2>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm sm:text-base lg:text-lg text-[#555555] leading-relaxed max-w-2xl font-normal"
          >
            {t.partners.subtitle}
          </motion.p>
        </div>

        {/* ═══════════════ Cinematic Dual Marquee Moving Strips ═══════════════ */}
        <div className="relative overflow-hidden py-4">
          {/* Left & Right Edge Fade Out Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-20 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-20 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Track 1 (Drifts Left) */}
          <div className="animate-marquee-left gap-4 sm:gap-6 pb-5 select-none items-center">
            {marqueeRow1.map((p, idx) => (
              <div
                key={`row1-${p.id}-${idx}`}
                className="group/card flex items-center gap-4 px-5 sm:px-6 py-3.5 rounded-2xl bg-white border border-gray-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-[#FF0A2B] hover:shadow-[0_16px_35px_-8px_rgba(255,10,43,0.28)] hover:-translate-y-1 transition-all duration-300 cursor-pointer shrink-0 min-w-[240px] sm:min-w-[270px]"
              >
                {/* Logo Frame */}
                <div
                  className={`w-16 h-12 sm:w-20 sm:h-14 rounded-xl flex items-center justify-center p-2 border transition-all duration-300 shrink-0 ${
                    p.bgDark
                      ? "bg-[#0D0204] border-neutral-800 group-hover/card:border-red-900"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={`/images/partners/${p.slug}.png`}
                      alt={lang === "ar" ? p.arName : p.enName}
                      fill
                      sizes="80px"
                      className="object-contain group-hover/card:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Info Text */}
                <div className="flex flex-col text-right rtl:text-right ltr:text-left overflow-hidden">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-sm shrink-0">{p.flag}</span>
                    <span className="text-sm sm:text-base font-black text-[#0D0204] group-hover/card:text-[#FF0A2B] transition-colors truncate">
                      {lang === "ar" ? p.arName : p.enName}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-semibold truncate">
                    {lang === "ar" ? p.categoryAr : p.categoryEn}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Marquee Track 2 (Drifts Right) */}
          <div className="animate-marquee-right gap-4 sm:gap-6 select-none items-center">
            {marqueeRow2.map((p, idx) => (
              <div
                key={`row2-${p.id}-${idx}`}
                className="group/card flex items-center gap-4 px-5 sm:px-6 py-3.5 rounded-2xl bg-white border border-gray-200/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:border-[#FF0A2B] hover:shadow-[0_16px_35px_-8px_rgba(255,10,43,0.28)] hover:-translate-y-1 transition-all duration-300 cursor-pointer shrink-0 min-w-[240px] sm:min-w-[270px]"
              >
                {/* Logo Frame */}
                <div
                  className={`w-16 h-12 sm:w-20 sm:h-14 rounded-xl flex items-center justify-center p-2 border transition-all duration-300 shrink-0 ${
                    p.bgDark
                      ? "bg-[#0D0204] border-neutral-800 group-hover/card:border-red-900"
                      : "bg-white border-gray-100"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <Image
                      src={`/images/partners/${p.slug}.png`}
                      alt={lang === "ar" ? p.arName : p.enName}
                      fill
                      sizes="80px"
                      className="object-contain group-hover/card:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Info Text */}
                <div className="flex flex-col text-right rtl:text-right ltr:text-left overflow-hidden">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <span className="text-sm shrink-0">{p.flag}</span>
                    <span className="text-sm sm:text-base font-black text-[#0D0204] group-hover/card:text-[#FF0A2B] transition-colors truncate">
                      {lang === "ar" ? p.arName : p.enName}
                    </span>
                  </div>
                  <span className="text-xs text-gray-400 font-semibold truncate">
                    {lang === "ar" ? p.categoryAr : p.categoryEn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
