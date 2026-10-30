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
                        </MagneticButton>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ Feature Comparison Table (أساسية - متوسطة - متقدمة) ═══════════════ */}
        <section className="w-full py-12 sm:py-16 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-bold text-[#FF0A2B] uppercase tracking-wider block mb-2">
                {lang === "ar" ? "مقارنة شاملة بين الباقات" : "Full Tier Comparison"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0D0204] tracking-tight">
                {lang === "ar"
                  ? "جدول مقارنة باقات Duck (أساسية • متوسطة • متقدمة)"
                  : "Compare Duck Packages (Basic • Pro • Enterprise)"}
              </h2>
              <p className="text-xs sm:text-sm text-gray-500 mt-2">
                {lang === "ar"
                  ? "اختر الباقة الأنسب لأهداف شركتك مع إمكانية الترقية أو التخصيص في أي وقت."
                  : "Choose the package tailored to your business goals with easy scaling anytime."}
              </p>
            </div>

            <div className="overflow-x-auto rounded-3xl border border-gray-200/90 bg-white shadow-sm">
              <table className="w-full text-right rtl:text-right ltr:text-left text-xs sm:text-sm border-collapse min-w-[650px]">
                <thead>
                  <tr className="border-b border-gray-200 bg-gray-50/70">
                    <th className="p-4 sm:p-5 font-black text-[#0D0204] w-2/5">
                      {lang === "ar" ? "المميزات والخدمات المشمولة" : "Included Features"}
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-center text-gray-700 w-1/5">
                      <div className="font-black text-sm sm:text-base text-[#0D0204]">
                        {lang === "ar" ? "الأساسية" : "Basic"}
                      </div>
                      <div className="text-xs text-[#FF0A2B] font-mono font-bold">$490</div>
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-center bg-red-50/50 text-[#FF0A2B] border-x border-red-100 w-1/5 relative">
                      <span className="inline-block px-2 py-0.5 rounded-full bg-[#FF0A2B] text-white text-[10px] font-black uppercase mb-1">
                        {lang === "ar" ? "الأكثر طلباً" : "Popular"}
                      </span>
                      <div className="font-black text-sm sm:text-base text-[#0D0204]">
                        {lang === "ar" ? "المتوسطة Pro" : "Growth Pro"}
                      </div>
                      <div className="text-xs text-[#FF0A2B] font-mono font-bold">$890</div>
                    </th>
                    <th className="p-4 sm:p-5 font-bold text-center text-gray-700 w-1/5">
                      <div className="font-black text-sm sm:text-base text-[#0D0204]">
                        {lang === "ar" ? "المتقدمة Enterprise" : "Enterprise"}
                      </div>
                      <div className="text-xs text-[#FF0A2B] font-mono font-bold">$1,690</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {[
                    {
                      featAr: "منصات التواصل المدارة",
                      featEn: "Managed Social Platforms",
                      basic: "2 منصات",
                      pro: "4 منصات",
                      ent: "جميع المنصات",
                    },
                    {
                      featAr: "التصاميم الإعلانية الشهرية",
                      featEn: "Monthly Graphic Creatives",
                      basic: "12 تصميماً مخصصاً",
                      pro: "24 تصميماً + موشن",
                      ent: "تصاميم غير محدودة",
                    },
                    {
                      featAr: "إنتاج ومونتاج الفيديوهات والريلز",
                      featEn: "Video Editing & Reels",
                      basic: "غير مشمول",
                      pro: "4 فيديوهات Reels/TikTok",
                      ent: "فيديو سينمائي 4K + ريلز",
                    },
                    {
                      featAr: "إدارة الحملات الإعلانية الممولة",
                      featEn: "Paid Ad Campaigns",
                      basic: "حملتان ممولتان",
                      pro: "Meta, Google & TikTok",
                      ent: "قمع تسويقي شامل Funnel",
                    },
                    {
                      featAr: "كتابة المحتوى والسيناريوهات",
                      featEn: "Content & Copywriting",
                      basic: "كتابة محتوى إبداعي",
                      pro: "محتوى وسيناريوهات تصوير",
                      ent: "استراتيجية نمو ربع سنوية",
                    },
                    {
                      featAr: "تحسين معدل التحويل (CRO) وتتبع البكسل",
                      featEn: "Conversion Optimization & Pixels",
                      basic: "تتبع أساسي",
                      pro: "متقدم مع اختبارات A/B",
                      ent: "مخصص شامل ومستمر",
                    },
                    {
                      featAr: "مدير حسابات واستشارات مخصصة",
                      featEn: "Account Manager & Support",
                      basic: "دعم فني بريدي",
                      pro: "دعم مخصص 24/7",
                      ent: "مدير حساب تنفيذي مباشر",
                    },
                    {
                      featAr: "تقارير الأداء ولوحة التحكم",
                      featEn: "Reporting & Dashboards",
                      basic: "تقرير شهري",
                      pro: "أسبوعي تفاعلي",
                      ent: "لوحة تحكم حية 24/7",
                    },
                  ].map((row, rIdx) => (
                    <tr
                      key={rIdx}
                      className={rIdx % 2 === 0 ? "bg-white" : "bg-gray-50/40"}
                    >
                      <td className="p-4 sm:p-5 font-bold text-[#0D0204]">
                        {lang === "ar" ? row.featAr : row.featEn}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-gray-600 font-medium">
                        {row.basic === "غير مشمول" ? (
                          <span className="text-gray-300 font-bold">—</span>
                        ) : (
                          row.basic
                        )}
                      </td>
                      <td className="p-4 sm:p-5 text-center bg-red-50/30 border-x border-red-100 text-[#0D0204] font-bold">
                        {row.pro}
                      </td>
                      <td className="p-4 sm:p-5 text-center text-gray-700 font-semibold">
                        {row.ent}
                      </td>
                    </tr>
                  ))}
                  {/* Action Row */}
                  <tr className="bg-gray-50/70 border-t border-gray-200">
                    <td className="p-4 sm:p-5 font-black text-[#0D0204]">
                      {lang === "ar" ? "طلب الاشتراك المباشر" : "Direct Subscription"}
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      <a
                        href="https://wa.me/201064544080?text=مرحباً%20Duck%20أرغب%20بالاشتراك%20في%20الباقة%20الأساسية%20($490)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-2 px-4 rounded-xl bg-[#0D0204] hover:bg-[#FF0A2B] text-white font-bold text-xs transition-colors"
                      >
                        {lang === "ar" ? "اشترك الآن" : "Subscribe"}
                      </a>
                    </td>
                    <td className="p-4 sm:p-5 text-center bg-red-50/50 border-x border-red-100">
                      <a
                        href="https://wa.me/201064544080?text=مرحباً%20Duck%20أرغب%20بالاشتراك%20في%20باقة%20النمو%20Pro%20($890)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-2.5 px-5 rounded-xl bg-[#FF0A2B] hover:bg-[#E00020] text-white font-black text-xs transition-all shadow-glow-red"
                      >
                        {lang === "ar" ? "اشترك الآن" : "Subscribe"}
                      </a>
                    </td>
                    <td className="p-4 sm:p-5 text-center">
                      <a
                        href="https://wa.me/201064544080?text=مرحباً%20Duck%20أرغب%20بالاشتراك%20في%20الباقة%20المؤسسية%20Enterprise%20($1690)"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block py-2 px-4 rounded-xl bg-[#0D0204] hover:bg-[#FF0A2B] text-white font-bold text-xs transition-colors"
                      >
                        {lang === "ar" ? "اشترك الآن" : "Subscribe"}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* ═══════════════ Interactive Live Cost Calculator ═══════════════ */}
        <section className="w-full py-16 sm:py-24 border-t border-gray-100 relative overflow-hidden">
          {/* Subtle Ambient Red Flares */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#FF0A2B]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-[#FF0A2B]/5 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#FF0A2B]/10 border border-[#FF0A2B]/20 text-[#FF0A2B] text-xs font-bold mb-3 shadow-xs">
                <Calculator className="w-4 h-4" />
                <span>{lang === "ar" ? "حساب فوري وتفاعلي" : "Instant Interactive Estimate"}</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#0D0204] tracking-tight">
                {t.packages.calculator.title}
              </h2>
              <p className="text-gray-500 text-sm sm:text-base mt-3">
                {t.packages.calculator.subtitle}
              </p>
            </div>

            {/* Calculator Card Container */}
            <div className="bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-10 lg:p-12 shadow-sm relative">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                {/* Controls (Left on LTR / Right on RTL) */}
                <div className="lg:col-span-7 space-y-6">
                  {/* Step 1: Service Type */}
                  <div>
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2.5">
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
                              ? "bg-[#FF0A2B]/10 border-[#FF0A2B] text-[#FF0A2B] shadow-sm"
                              : "bg-gray-50 border-gray-200 text-gray-700 hover:border-gray-300"
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
                      <label className="text-xs font-bold text-gray-500 uppercase tracking-wider">
                        {t.packages.calculator.scopeLabel}
                      </label>
                      <span className="text-sm font-mono font-bold text-[#FF0A2B] bg-[#FF0A2B]/10 px-2.5 py-0.5 rounded-md border border-[#FF0A2B]/20">
                        {scopeUnits} {lang === "ar" ? "وحدات / مهام" : "Scope Units"}
                      </span>
                    </div>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={scopeUnits}
                      onChange={(e) => setScopeUnits(Number(e.target.value))}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-[#FF0A2B]"
                    />
                    <div className="flex justify-between text-[11px] text-gray-400 font-mono mt-1">
                      <span>{lang === "ar" ? "مشروع مبسط (1)" : "Compact (1)"}</span>
                      <span>{lang === "ar" ? "نطاق قياسي (5)" : "Standard (5)"}</span>
                      <span>{lang === "ar" ? "منظومة شاملة (10)" : "Enterprise (10)"}</span>
                    </div>
                  </div>

                  {/* Step 3: Priority Delivery Velocity */}
                  <div className="pt-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2.5">
                      {t.packages.calculator.timelineLabel}
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      <button
                        type="button"
                        onClick={() => setIsFastTrack(false)}
                        className={`p-3 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                          !isFastTrack
                            ? "bg-[#FF0A2B]/10 border-[#FF0A2B] text-[#FF0A2B]"
                            : "bg-gray-50 border-gray-200 text-gray-500"
                        }`}
                      >
                        {t.packages.calculator.standard}
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsFastTrack(true)}
                        className={`p-3 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center justify-center gap-1.5 ${
                          isFastTrack
                            ? "bg-[#FF0A2B]/10 border-[#FF0A2B] text-[#FF0A2B]"
                            : "bg-gray-50 border-gray-200 text-gray-500"
                        }`}
                      >
                        <Zap className="w-3.5 h-3.5 text-[#FF0A2B]" />
                        <span>{t.packages.calculator.fast}</span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Live Results Panel */}
                <div className="lg:col-span-5 bg-gray-50 border border-gray-200 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-sm">
                  <div>
                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider block mb-2">
                      {t.packages.calculator.estimateTotal}
                    </span>

                    {/* USD Total */}
                    <div className="text-4xl sm:text-5xl font-black font-mono text-[#FF0A2B] tracking-tight mb-2">
                      ${totalUsd.toLocaleString()}
                    </div>

                    {/* Multi-currency breakdown */}
                    <div className="space-y-1.5 text-xs text-gray-600 font-mono pt-3 border-t border-gray-200">
                      <div className="flex justify-between">
                        <span>≈ {totalSar.toLocaleString()} SAR</span>
                        <span className="text-gray-400">{t.packages.calculator.sarApprox}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>≈ {totalEgp.toLocaleString()} EGP</span>
                        <span className="text-gray-400">{t.packages.calculator.egpApprox}</span>
                      </div>
                    </div>

                    <p className="text-[11px] text-gray-400 mt-4 leading-relaxed">
                      {lang === "ar"
                        ? "* التسعير تقديري استرشادي يخضع لمراجعة متطلبات المشروع الدقيقة وموافقة العميل."
                        : "* Estimate is indicative and subject to exact project requirement verification."}
                    </p>
                  </div>

                  {/* Book On WhatsApp CTA */}
                  <div className="pt-6 mt-6 border-t border-gray-200">
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
