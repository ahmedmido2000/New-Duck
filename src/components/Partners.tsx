"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import {
  Handshake,
  Sparkles,
  Building2,
  TrendingUp,
  ShieldCheck,
  Globe2,
  ArrowUpRight,
  ChevronRight,
  CheckCircle2,
} from "lucide-react";
import TiltCard from "./TiltCard";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

export interface PartnerItem {
  id: string;
  slug: string;
  arName: string;
  enName: string;
  category: "gov" | "corp" | "consumer";
  categoryAr: string;
  categoryEn: string;
  country: "sa" | "ae" | "eg";
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
    category: "gov",
    categoryAr: "اتصالات وتقنية وطنية",
    categoryEn: "Gov & Telecom",
    country: "sa",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "sec",
    slug: "sec",
    arName: "الشركة السعودية للكهرباء",
    enName: "Saudi Electricity Co.",
    category: "gov",
    categoryAr: "طاقة وبنية تحتية",
    categoryEn: "Energy & Infrastructure",
    country: "sa",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "nwc",
    slug: "nwc",
    arName: "شركة المياه الوطنية NWC",
    enName: "National Water Company",
    category: "gov",
    categoryAr: "مرافق وبنية وطنية",
    categoryEn: "National Utilities",
    country: "sa",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "dubai-chambers",
    slug: "dubai-chambers",
    arName: "غرف دبي Dubai Chambers",
    enName: "Dubai Chambers",
    category: "gov",
    categoryAr: "غرف وهيئات تجارية",
    categoryEn: "Chambers & Institutional",
    country: "ae",
    countryAr: "الإمارات العربية المتحدة",
    countryEn: "United Arab Emirates",
    flag: "🇦🇪",
  },
  {
    id: "almajdouie",
    slug: "almajdouie",
    arName: "المجدوعي Almajdouie",
    enName: "Almajdouie Group",
    category: "corp",
    categoryAr: "لوجستيات ومجموعات كبرى",
    categoryEn: "Logistics & Conglomerate",
    country: "sa",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "sadara",
    slug: "sadara",
    arName: "صدارة Sadara",
    enName: "Sadara Chemical Co.",
    category: "corp",
    categoryAr: "صناعات بتروكيماوية عالمية",
    categoryEn: "Global Petrochemicals",
    country: "sa",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "osuss",
    slug: "osuss",
    arName: "أسس العقارية Osuss",
    enName: "Osuss Real Estate",
    category: "corp",
    categoryAr: "تطوير واستثمار عقاري",
    categoryEn: "Real Estate Development",
    country: "sa",
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
    category: "consumer",
    categoryAr: "فنون وإنتاج رقمي",
    categoryEn: "Digital Arts & Media",
    country: "eg",
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
    category: "consumer",
    categoryAr: "صناعات غذائية وتصدير",
    categoryEn: "Food & FMCG Export",
    country: "eg",
    countryAr: "جمهورية مصر العربية",
    countryEn: "Egypt",
    flag: "🇪🇬",
  },
  {
    id: "alnada",
    slug: "alnada",
    arName: "الندى للصناعات الغذائية",
    enName: "Alnada Food Industries",
    category: "consumer",
    categoryAr: "أغذية ومشروبات استهلاكية",
    categoryEn: "Food & Beverages",
    country: "eg",
    countryAr: "جمهورية مصر العربية",
    countryEn: "Egypt",
    flag: "🇪🇬",
  },
  {
    id: "amani",
    slug: "amani",
    arName: "د. أماني أحمد الدوسري",
    enName: "Dr. Amani Al Dosari",
    category: "consumer",
    categoryAr: "رعاية طبية وتجميل",
    categoryEn: "Medical & Aesthetics",
    country: "sa",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "sweet-jolita",
    slug: "sweet-jolita",
    arName: "سويت جوليتا Sweet Jolita",
    enName: "Sweet Jolita Sweets",
    category: "consumer",
    categoryAr: "حلويات وتجزئة فاخرة",
    categoryEn: "Luxury Confectionery",
    country: "sa",
    countryAr: "المملكة العربية السعودية",
    countryEn: "Saudi Arabia",
    flag: "🇸🇦",
  },
  {
    id: "hetra",
    slug: "hetra",
    arName: "هيترا Hetra",
    enName: "Hetra Industrial & Tech",
    category: "consumer",
    categoryAr: "حلول تقنية وصناعية",
    categoryEn: "Industrial & Tech Solutions",
    country: "eg",
    countryAr: "جمهورية مصر العربية",
    countryEn: "Egypt",
    flag: "🇪🇬",
    bgDark: true,
  },
];

type CategoryFilter = "all" | "gov" | "corp" | "consumer";

export default function Partners() {
  const { lang, t, isRTL } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const filteredPartners =
    activeCategory === "all"
      ? partnersData
      : partnersData.filter((p) => p.category === activeCategory);

  // Split for dual row marquee stream
  const marqueeRow1 = [...partnersData.slice(0, 7), ...partnersData.slice(0, 7)];
  const marqueeRow2 = [...partnersData.slice(7), ...partnersData.slice(0, 3), ...partnersData.slice(7), ...partnersData.slice(0, 3)];

  const categories: { key: CategoryFilter; label: string; count: number }[] = [
    { key: "all", label: t.partners.filterAll, count: partnersData.length },
    {
      key: "gov",
      label: t.partners.filterGov,
      count: partnersData.filter((p) => p.category === "gov").length,
    },
    {
      key: "corp",
      label: t.partners.filterCorp,
      count: partnersData.filter((p) => p.category === "corp").length,
    },
    {
      key: "consumer",
      label: t.partners.filterConsumer,
      count: partnersData.filter((p) => p.category === "consumer").length,
    },
  ];

  return (
    <section
      id="partners"
      className="w-full py-20 sm:py-28 lg:py-32 bg-gradient-to-b from-white via-[#FCFCFD] to-white text-[#0D0204] relative overflow-hidden border-b border-gray-100"
    >
      {/* Background Decorative Ambient Flares */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-red-100/40 rounded-full blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-100/30 rounded-full blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* ═══════════════ Header Section ═══════════════ */}
        <div className={`flex flex-col items-center text-center max-w-4xl mx-auto mb-14 sm:mb-16`}>
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

          {/* Main Title with Expanding Gradient Underline */}
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

        {/* ═══════════════ Cinematic Dual Marquee Ribbon Streams ═══════════════ */}
        <div className="relative mb-16 sm:mb-20 overflow-hidden py-3">
          {/* Left & Right Smooth Edge Fade Out Masks */}
          <div className="absolute top-0 bottom-0 left-0 w-24 sm:w-36 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
          <div className="absolute top-0 bottom-0 right-0 w-24 sm:w-36 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

          {/* Marquee Row 1 (Drifts Left) */}
          <div className="animate-marquee-left gap-4 sm:gap-6 pb-4 select-none">
            {marqueeRow1.map((p, idx) => (
              <div
                key={`m1-${p.id}-${idx}`}
                className="group/card flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white border border-gray-200/90 shadow-xs hover:border-[#FF0A2B] hover:shadow-[0_12px_30px_-8px_rgba(255,10,43,0.25)] transition-all duration-300 cursor-pointer shrink-0"
              >
                <div
                  className={`w-14 h-10 sm:w-16 sm:h-11 rounded-xl flex items-center justify-center p-1.5 border transition-all duration-300 ${
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
                      sizes="64px"
                      className="object-contain group-hover/card:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-right rtl:text-right ltr:text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs">{p.flag}</span>
                    <span className="text-sm font-black text-[#0D0204] group-hover/card:text-[#FF0A2B] transition-colors whitespace-nowrap">
                      {lang === "ar" ? p.arName.split(" ")[0] : p.enName.split(" ")[0]}
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-semibold whitespace-nowrap">
                    {lang === "ar" ? p.categoryAr : p.categoryEn}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Marquee Row 2 (Drifts Right) */}
          <div className="animate-marquee-right gap-4 sm:gap-6 select-none">
            {marqueeRow2.map((p, idx) => (
              <div
                key={`m2-${p.id}-${idx}`}
                className="group/card flex items-center gap-3.5 px-5 py-3 rounded-2xl bg-white border border-gray-200/90 shadow-xs hover:border-[#FF0A2B] hover:shadow-[0_12px_30px_-8px_rgba(255,10,43,0.25)] transition-all duration-300 cursor-pointer shrink-0"
              >
                <div
                  className={`w-14 h-10 sm:w-16 sm:h-11 rounded-xl flex items-center justify-center p-1.5 border transition-all duration-300 ${
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
                      sizes="64px"
                      className="object-contain group-hover/card:scale-110 transition-transform duration-300"
                    />
                  </div>
                </div>

                <div className="flex flex-col text-right rtl:text-right ltr:text-left">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs">{p.flag}</span>
                    <span className="text-sm font-black text-[#0D0204] group-hover/card:text-[#FF0A2B] transition-colors whitespace-nowrap">
                      {lang === "ar" ? p.arName.split(" ")[0] : p.enName.split(" ")[0]}
                    </span>
                  </div>
                  <span className="text-[11px] text-gray-400 font-semibold whitespace-nowrap">
                    {lang === "ar" ? p.categoryAr : p.categoryEn}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ═══════════════ Filter Tabs ═══════════════ */}
        <div className="flex items-center justify-center flex-wrap gap-2 sm:gap-3 mb-10 sm:mb-12">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`relative px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? "text-white shadow-glow-red"
                    : "bg-white text-gray-600 hover:text-[#0D0204] hover:bg-gray-50 border border-gray-200"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="activePartnerFilter"
                    className="absolute inset-0 bg-[#FF0A2B] rounded-full -z-10"
                    transition={{ type: "spring", stiffness: 400, damping: 25 }}
                  />
                )}
                <span>{cat.label}</span>
                <span
                  className={`text-[11px] px-1.5 py-0.5 rounded-full font-mono font-bold ${
                    isActive ? "bg-white/25 text-white" : "bg-gray-100 text-gray-500"
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* ═══════════════ Filterable 3D Bento Partner Grid ═══════════════ */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 mb-16 sm:mb-20"
        >
          <AnimatePresence mode="popLayout">
            {filteredPartners.map((p, index) => (
              <motion.div
                key={p.id}
                layout
                initial={{ opacity: 0, scale: 0.92, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: -20 }}
                transition={{ duration: 0.45, delay: index * 0.04 }}
                className="h-full"
              >
                <TiltCard maxTilt={10} glare={false} className="rounded-3xl h-full">
                  <div
                    className={`group relative rounded-3xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden bg-white border border-gray-200/90 hover:border-[#FF0A2B] transition-all duration-500 shadow-xs hover:shadow-[0_20px_45px_-10px_rgba(255,10,43,0.22)] h-full min-h-[260px] ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {/* Top Ambient Glow on Hover */}
                    <div className="absolute inset-0 pointer-events-none rounded-3xl bg-[radial-gradient(120%_90%_at_50%_-20%,rgba(255,10,43,0.08),transparent_65%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Card Top Pill: Country & Category */}
                    <div className="relative z-10 flex items-center justify-between mb-4">
                      {/* Flag & Region */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-600">
                        <span>{p.flag}</span>
                        <span>{lang === "ar" ? p.countryAr : p.countryEn}</span>
                      </div>

                      {/* Verified Badge */}
                      <div className="w-7 h-7 rounded-full bg-red-50 border border-red-200/60 flex items-center justify-center text-[#FF0A2B] group-hover:scale-110 transition-transform">
                        <CheckCircle2 className="w-4 h-4 text-[#FF0A2B]" />
                      </div>
                    </div>

                    {/* Logo Showcase Center Box */}
                    <div
                      className={`relative z-10 w-full h-28 rounded-2xl flex items-center justify-center p-4 border transition-all duration-300 my-auto ${
                        p.bgDark
                          ? "bg-[#0D0204] border-neutral-800 group-hover:border-red-950 shadow-inner"
                          : "bg-white border-gray-100 group-hover:border-red-50 shadow-xs"
                      }`}
                    >
                      <div className="relative w-full h-full">
                        <Image
                          src={`/images/partners/${p.slug}.png`}
                          alt={lang === "ar" ? p.arName : p.enName}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                          className="object-contain group-hover:scale-108 transition-transform duration-500"
                        />
                      </div>
                    </div>

                    {/* Card Bottom: Partner Names & Sector */}
                    <div className="relative z-10 pt-4 mt-3 border-t border-gray-100 flex flex-col gap-1">
                      <h3 className="text-base sm:text-lg font-black text-[#0D0204] group-hover:text-[#FF0A2B] transition-colors leading-snug">
                        {lang === "ar" ? p.arName : p.enName}
                      </h3>
                      <p className="text-xs text-gray-400 font-semibold">
                        {lang === "ar" ? p.categoryAr : p.categoryEn}
                      </p>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* ═══════════════ Bottom Strategic Impact Bar ═══════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="relative rounded-3xl bg-[#0D0204] text-white p-6 sm:p-10 lg:p-12 border border-[#3A0C15] shadow-2xl overflow-hidden"
        >
          {/* Subtle Ambient Red Flare */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#FF0A2B]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#FF0A2B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 w-full lg:w-3/4">
              {/* Stat 1 */}
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FF0A2B] tracking-tight font-mono">
                  {t.partners.stats.partnersCount}
                </span>
                <span className="text-xs sm:text-sm text-neutral-300 font-bold mt-1">
                  {t.partners.stats.partnersCountLabel}
                </span>
              </div>

              {/* Stat 2 */}
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-mono">
                  {t.partners.stats.satisfaction}
                </span>
                <span className="text-xs sm:text-sm text-neutral-300 font-bold mt-1">
                  {t.partners.stats.satisfactionLabel}
                </span>
              </div>

              {/* Stat 3 */}
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#FF0A2B] tracking-tight font-mono">
                  {t.partners.stats.projects}
                </span>
                <span className="text-xs sm:text-sm text-neutral-300 font-bold mt-1">
                  {t.partners.stats.projectsLabel}
                </span>
              </div>

              {/* Stat 4 */}
              <div className="flex flex-col">
                <span className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight font-mono">
                  {t.partners.stats.countries}
                </span>
                <span className="text-xs sm:text-sm text-neutral-300 font-bold mt-1">
                  {t.partners.stats.countriesLabel}
                </span>
              </div>
            </div>

            {/* CTA Button */}
            <div className="w-full lg:w-auto shrink-0 flex justify-center lg:justify-end">
              <MagneticButton
                href="https://wa.me/201064544080"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#FF0A2B] hover:bg-[#E00020] text-white px-7 py-4 rounded-2xl font-bold text-sm sm:text-base transition-all shadow-glow-red shimmer-hover"
              >
                <span>{t.partners.ctaButton}</span>
                <ArrowUpRight className="w-5 h-5 rtl:rotate-[-90deg]" />
              </MagneticButton>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
