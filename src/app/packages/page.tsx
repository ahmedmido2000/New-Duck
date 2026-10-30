"use client";

import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import {
  Check,
  Sparkles,
  Calculator,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  TrendingUp,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import Consultation from "@/components/Consultation";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceType {
  labelAr: string;
  labelEn: string;
  basePrice: number;
}

const serviceTypes: ServiceType[] = [
  { labelAr: "إنشاء وتطوير المتاجر والمنصات", labelEn: "E-Commerce & Platforms", basePrice: 600 },
  { labelAr: "إنتاج فيديو وموشن جرافيك 4K", labelEn: "4K Video & Motion", basePrice: 450 },
  { labelAr: "الهوية البصرية وتصميم البراند", labelEn: "Brand Identity & Design", basePrice: 300 },
  { labelAr: "إدارة الحملات الإعلانية ومضاعفة المبيعات", labelEn: "Ad Campaigns & Growth", basePrice: 400 },
];

export default function PackagesPage() {
  const { lang, t, isRTL } = useLanguage();

  // Calculator State
  const [selectedBaseIndex, setSelectedBaseIndex] = useState<number>(0);
  const [scopeUnits, setScopeUnits] = useState<number>(4);
  const [isFastTrack, setIsFastTrack] = useState<boolean>(false);

  const currentBase = serviceTypes[selectedBaseIndex].basePrice;
  const speedMultiplier = isFastTrack ? 1.3 : 1;

  const { totalUsd, totalSar, totalEgp, waLink } = useMemo(() => {
    const usd = Math.round((currentBase + scopeUnits * 200) * speedMultiplier);
    const sar = Math.round(usd * 3.75);
    const egp = Math.round(usd * 49.5);
    const serviceName =
      lang === "ar"
        ? serviceTypes[selectedBaseIndex].labelAr
        : serviceTypes[selectedBaseIndex].labelEn;
    const msg = encodeURIComponent(
      lang === "ar"
        ? `مرحباً وكالة Duck، أجريت حساباً تقديرياً لمشروعي (${serviceName}) بمبلغ $${usd.toLocaleString()} (نطاق ${scopeUnits} مهام). أود مناقشة التفاصيل والبدء.`
        : `Hello Duck Agency, I calculated a project estimate for (${serviceName}) at $${usd.toLocaleString()} (${scopeUnits} scope units). I would like to discuss and get started.`
    );
    const link = `https://wa.me/201064544080?text=${msg}`;
    return {
      totalUsd: usd,
      totalSar: sar,
      totalEgp: egp,
      waLink: link,
    };
  }, [currentBase, scopeUnits, speedMultiplier, selectedBaseIndex, lang]);

  return (
    <div>
      <PageHeader
        kicker={t.packages.kicker}
        title={lang === "ar" ? "باقات النمو و" : "Growth Packages &"}
        titleHighlight={lang === "ar" ? "حاسبة التكلفة" : "Cost Calculator"}
        subtitle={t.packages.subtitle}
        breadcrumbCurrent={lang === "ar" ? "الباقات والأسعار" : "Packages"}
      />

      <div className="bg-white text-[#0D0204]">
        {/* ═══════════════ The 3 Main Tier Packages ═══════════════ */}
        <section className="w-full py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
              {t.packages.items.map((pkg, idx) => (
                <motion.div
                  key={pkg.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <TiltCard maxTilt={6} glare={false} className="h-full">
                    <div
                      className={`relative h-full rounded-3xl p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                        pkg.popular
                          ? "bg-gradient-to-b from-[#120306] to-[#0D0204] text-white border-2 border-[#FF0A2B] shadow-[0_20px_50px_-10px_rgba(255,10,43,0.3)] scale-[1.02]"
                          : "bg-white text-[#0D0204] border border-gray-200/90 shadow-sm hover:border-[#FF0A2B]/60 hover:shadow-xl"
                      }`}
                    >
                      {/* Popular Badge */}
                      {pkg.popular && (
                        <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#FF0A2B] text-white text-xs font-black shadow-glow-red flex items-center gap-1.5 uppercase">
                          <Sparkles className="w-3.5 h-3.5" />
                          <span>{lang === "ar" ? "الأكثر طلباً" : "Most Popular"}</span>
                        </div>
                      )}

                      <div>
                        {/* Tier Subtitle */}
                        <span
                          className={`text-xs font-bold uppercase tracking-wider block mb-1 ${
                            pkg.popular ? "text-[#FF0A2B]" : "text-gray-500"
                          }`}
                        >
                          {pkg.tier}
                        </span>

                        {/* Package Name */}
                        <h3 className="text-2xl font-black mb-4">{pkg.name}</h3>

                        {/* Price */}
                        <div className="flex items-baseline gap-2 mb-6">
                          <span className="text-4xl sm:text-5xl font-black font-mono tracking-tight text-[#FF0A2B]">
                            {pkg.price}
                          </span>
                          <span
                            className={`text-xs font-semibold ${
                              pkg.popular ? "text-neutral-400" : "text-gray-500"
                            }`}
                          >
                            {t.packages.monthly}
                          </span>
                        </div>

                        {/* Features List */}
                        <ul className="space-y-3 pt-6 border-t border-gray-100/20 text-xs sm:text-sm">
                          {pkg.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5">
                              <span className="w-5 h-5 rounded-full bg-[#FF0A2B]/10 text-[#FF0A2B] flex items-center justify-center shrink-0 mt-0.5">
                                <Check className="w-3.5 h-3.5" />
                              </span>
                              <span
                                className={
                                  pkg.popular ? "text-neutral-200" : "text-[#555555]"
                                }
                              >
                                {feat}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Request CTA Button */}
                      <div className="pt-8 mt-6 border-t border-gray-100/20">
                        <MagneticButton
                          href={`https://wa.me/201064544080?text=${encodeURIComponent(
                            lang === "ar"
                              ? `مرحباً Duck Agency، أرغب في حجز واستفسار عن: ${pkg.name}`
                              : `Hello Duck Agency, I want to book: ${pkg.name}`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`w-full py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 transition-all ${
                            pkg.popular
                              ? "bg-[#FF0A2B] hover:bg-[#E00020] text-white shadow-glow-red"
                              : "bg-gray-100 hover:bg-[#0D0204] hover:text-white text-[#0D0204]"
                          }`}
                        >
                          <span>{t.packages.requestBtn}</span>
                          <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
                        </MagneticButton>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ Interactive Live Cost Calculator ═══════════════ */}
        <section className="w-full py-16 sm:py-24 bg-[#0D0204] text-white relative overflow-hidden">
          {/* Subtle Ambient Red Flares */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF0A2B]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF0A2B]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#2A0509] border border-[#FF0A2B]/30 text-[#FF0A2B] text-xs font-bold mb-3 shadow-xs">
                <Calculator className="w-4 h-4" />
                <span>{lang === "ar" ? "حساب فوري وتفاعلي" : "Instant Interactive Estimate"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
                {t.packages.calculator.title}
              </h2>
              <p className="text-neutral-400 text-sm sm:text-base mt-3">
                {t.packages.calculator.subtitle}
              </p>
            </div>

            {/* Calculator Card Container */}
            <div className="bg-[#141414] border border-[#3A0C15] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Controls (Left on LTR / Right on RTL) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Step 1: Service Type */}
                  <div>
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2.5">
                      {t.packages.calculator.serviceTypeLabel}
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {serviceTypes.map((st, idx) => (
                        <button
                          key={idx}
                          type="button"
                          onClick={() => setSelectedBaseIndex(idx)}
                          className={`p-3.5 rounded-xl text-xs sm:text-sm font-bold border transition-all text-right rtl:text-right ltr:text-left ${
                            selectedBaseIndex === idx
                              ? "bg-[#FF0A2B]/15 border-[#FF0A2B] text-white shadow-sm"
                              : "bg-[#1E1E1E] border-neutral-800 text-neutral-300 hover:border-neutral-700"
                          }`}
                        >
                          {lang === "ar" ? st.labelAr : st.labelEn}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Step 2: Scope Slider */}
                  <div className="pt-2">
                    <div className="flex items-center justify-between mb-2">
                      <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                        {t.packages.calculator.scopeLabel}
                      </label>
                      <span className="text-sm font-mono font-bold text-[#FF0A2B] bg-[#2A0509] px-2.5 py-0.5 rounded-md border border-[#FF0A2B]/30">
                        {scopeUnits} {lang === "ar" ? "وحدات / مهام" : "Scope Units"}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={scopeUnits}
                      onChange={(e) => setScopeUnits(Number(e.target.value))}
                      className="w-full h-2 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-[#FF0A2B]"
                    />
                    <div className="flex justify-between text-[11px] text-neutral-500 font-mono mt-1">
                      <span>{lang === "ar" ? "مشروع مبسط (1)" : "Compact (1)"}</span>
                      <span>{lang === "ar" ? "نطاق قياسي (5)" : "Standard (5)"}</span>
                      <span>{lang === "ar" ? "منظومة شاملة (10)" : "Enterprise (10)"}</span>
                    </div>
                  </div>

                  {/* Step 3: Priority Delivery Velocity */}
                  <div className="pt-2">
                    <label className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2.5">
                      {t.packages.calculator.timelineLabel}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setIsFastTrack(false)}
                        className={`p-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                          !isFastTrack
                            ? "bg-[#FF0A2B]/15 border-[#FF0A2B] text-white"
                            : "bg-[#1E1E1E] border-neutral-800 text-neutral-400"
                        }`}
                      >
                        {t.packages.calculator.standard}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsFastTrack(true)}
                        className={`p-3 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center justify-center gap-1.5 ${
                          isFastTrack
                            ? "bg-[#FF0A2B]/15 border-[#FF0A2B] text-white"
                            : "bg-[#1E1E1E] border-neutral-800 text-neutral-400"
                        }`}
                      >
                        <Zap className="w-3.5 h-3.5 text-[#FF0A2B]" />
                        <span>{t.packages.calculator.fast}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live Results Panel */}
                <div className="lg:col-span-5 bg-[#0D0204] border border-[#3A0C15] rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
                  <div>
                    <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-2">
                      {t.packages.calculator.estimateTotal}
                    </span>

                    {/* USD Total */}
                    <div className="text-4xl sm:text-5xl font-black font-mono text-[#FF0A2B] tracking-tight mb-2">
                      ${totalUsd.toLocaleString()}
                    </div>

                    {/* Multi-currency breakdown */}
                    <div className="space-y-1.5 text-xs text-neutral-300 font-mono pt-3 border-t border-neutral-800">
                      <div className="flex justify-between">
                        <span>≈ {totalSar.toLocaleString()} SAR</span>
                        <span className="text-neutral-500">{t.packages.calculator.sarApprox}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>≈ {totalEgp.toLocaleString()} EGP</span>
                        <span className="text-neutral-500">{t.packages.calculator.egpApprox}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-neutral-500 mt-4 leading-relaxed">
                      {lang === "ar"
                        ? "* التسعير تقديري استرشادي يخضع لمراجعة متطلبات المشروع الدقيقة وموافقة العميل."
                        : "* Estimate is indicative and subject to exact project requirement verification."}
                    </p>
                  </div>

                  {/* Book On WhatsApp CTA */}
                  <div className="pt-6 mt-6 border-t border-neutral-800">
                    <MagneticButton
                      href={waLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full py-4 rounded-xl bg-[#FF0A2B] hover:bg-[#E00020] text-white font-bold text-sm flex items-center justify-center gap-2 shadow-glow-red transition-all"
                    >
                      <span>{t.packages.calculator.bookBtn}</span>
                      <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
                    </MagneticButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Consultation />
      </div>
    </div>
  );
}
