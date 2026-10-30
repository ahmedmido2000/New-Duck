"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  Sparkles,
  X,
  MessageCircle,
  ShoppingBag,
  Layout,
  Smartphone,
  TrendingUp,
  Search,
  Palette,
} from "lucide-react";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";
import { useLanguage } from "@/context/LanguageContext";

interface ServiceItem {
  id: number;
  icon: React.ElementType;
  title: string;
  description: string;
  details: string[];
}

const services: ServiceItem[] = [
  {
    id: 1,
    icon: ShoppingBag,
    title: "إنشاء المتاجر الإلكترونية",
    description:
      "نصمم متجرك باحترافية لعرض منتجاتك بطريقة جذابة وسهلة الاستخدام، مع ربط بوابات الدفع والشحن.",
    details: [
      "تصميم متوافق 100% مع الجوال والتابلت",
      "تكامل مع سلة، زد، وشوبيفاي و WooCommerce",
      "ربط بوابات الدفع الإلكتروني وشركات الشحن",
      "تحسين سرعة التصفح وتجربة الشراء السريعة",
    ],
  },
  {
    id: 2,
    icon: Layout,
    title: "تصميم واجهة موقع",
    description:
      "واجهات عصرية وتجربة مستخدم سلسة تحوّل الزائر لعميل، بتصاميم حديثة ومدروسة سيكولوجياً.",
    details: [
      "دراسة سلوك المستخدم (UX Research)",
      "تصميم واجهات تفاعلية مبهجة (UI Design)",
      "تصاميم نماذج أولية تفاعلية على Figma",
      "مراعاة أعلى معايير سهولة الاستخدام والوصول",
    ],
  },
  {
    id: 3,
    icon: Smartphone,
    title: "التطبيقات الإلكترونية",
    description:
      "نطوّر تطبيقات ذكية ومتجاوبة تناسب احتياجات عملك وتصل لعملائك بسهولة وسرعة فائقة.",
    details: [
      "تطوير لتطبيقات iOS و Android",
      "لوحة تحكم ذكية لإدارة الطلبات والبيانات",
      "إشعارات فورية لزيادة تفاعل وإعادة شراء العملاء",
      "دعم فني وصيانة دورية وأمان عالي",
    ],
  },
  {
    id: 4,
    icon: TrendingUp,
    title: "إدارة الحملات الإعلانية",
    description:
      "ندير حملاتك باحترافية للوصول لجمهورك المستهدف بأفضل نتيجة وبأعلى عائد استثماري ممكن.",
    details: [
      "إعلانات Meta (فيسبوك وإنستغرام)",
      "إعلانات TikTok و Snapchat و Google Ads",
      "إعادة استهداف ذكية لزوار المتجر",
      "تقارير دورية وشفافة توضح العائد والمبيعات",
    ],
  },
  {
    id: 5,
    icon: Search,
    title: "تحسين محركات البحث (SEO)",
    description:
      "يظهر نشاطك أمام العملاء اللي بيدوّروا على خدماتك، ونرتقي بترتيبه للصفحات الأولى في جوجل.",
    details: [
      "دراسة الكلمات المفتاحية الأكثر ربحية ونية شراء",
      "تحسين البنية التقنية للموقع والسرعة (Technical SEO)",
      "بناء روابط خلفية قوية وموثوقة (Backlinks)",
      "تحسين محركات البحث المحلية (Local SEO)",
    ],
  },
  {
    id: 6,
    icon: Palette,
    title: "تصميم الهوية البصرية",
    description:
      "نصمّم لك هوية مميزة تعكس شخصية علامتك وتجذب جمهورك وترسخ في أذهانهم لفترة طويلة.",
    details: [
      "تصميم الشعار وتطبيقاته المختلفة",
      "دليل استخدام الهوية البصرية (Brand Guidelines)",
      "تصاميم السوشيال ميديا والمطبوعات الإعلانية",
      "نبرة الصوت والرسائل التسويقية للعلامة",
    ],
  },
];

export default function Services() {
  const [activeModalId, setActiveModalId] = useState<number | null>(null);
  const { t, isRTL, dir } = useLanguage();

  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <section
      id="services"
      dir={dir}
      className="bg-white relative overflow-hidden py-20 sm:py-28 border-t border-gray-100"
    >
      {/* Ambient Red Glows in Background */}
      <div className="absolute top-12 right-0 w-[550px] h-[550px] bg-[#FF0A2B]/4 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-12 left-0 w-[500px] h-[500px] bg-[#FF0A2B]/4 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col gap-12 sm:gap-16">
        {/* ═══════════════ Section Header ═══════════════ */}
        <div
          className={`flex flex-col gap-4 sm:gap-5 ${
            isRTL ? "text-right items-start" : "text-left items-start"
          }`}
        >
          {/* Kicker */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-sm sm:text-base"
          >
            <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0A2B]" />
            <span>{t.services.kicker}</span>
            <span className="w-6 h-[2px] bg-[#FF0A2B]" />
          </motion.div>

          {/* Main Section Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-2xl sm:text-4xl lg:text-[42px] font-black text-[#0D0204] leading-[1.3] tracking-tight max-w-4xl"
          >
            {t.services.heading}
          </motion.h2>

          {/* Subtitle & CTA Row */}
          <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-6 pt-1">
            <motion.p
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed font-normal max-w-2xl"
            >
              {t.services.subtitle}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="shrink-0"
            >
              <MagneticButton
                href="https://wa.me/201064544080"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#FF0A2B] hover:bg-[#E00020] text-white px-7 py-3.5 rounded-xl font-bold text-sm sm:text-base transition-all shadow-glow-red shimmer-hover"
              >
                <span>{t.services.cta}</span>
              </MagneticButton>
            </motion.div>
          </div>
        </div>

        {/* ═══════════════ Responsive Cards Grid with 3D Tilt & Spotlights ═══════════════ */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 lg:gap-8">
          {services.map((svc, index) => {
            const localized =
              t.services.items.find((item) => item.id === svc.id) || svc;
            const Icon = svc.icon;

            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="h-full"
              >
                <TiltCard maxTilt={8} glare={false} className="rounded-[26px] h-full">
                  <div
                    onMouseMove={handleCardMouseMove}
                    className={`spotlight-card group relative rounded-[26px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden bg-white border border-gray-200/90 hover:border-[#FF0A2B] transition-all duration-500 shadow-[0_10px_30px_-10px_rgba(0,0,0,0.06)] hover:shadow-[0_22px_50px_-10px_rgba(255,10,43,0.35)] min-h-[350px] sm:min-h-[370px] h-full ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    {/* Brand Red Background Gradient on Hover */}
                    <div className="absolute inset-0 pointer-events-none rounded-[26px] bg-gradient-to-br from-[#FF0A2B] via-[#E80022] to-[#B30018] opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-out" />

                    {/* Card Top: Icon & Clean Pill Badge */}
                    <div className="relative z-10 flex flex-col items-start gap-4">
                      <div className="w-full flex items-center justify-between">
                        {/* Service Icon Box with Spring Morph */}
                        <motion.div
                          whileHover={{ scale: 1.15, rotate: -4 }}
                          transition={{ type: "spring", stiffness: 400, damping: 15 }}
                          className="w-12 h-12 rounded-2xl bg-gray-50 border border-gray-200 group-hover:bg-white group-hover:border-white group-hover:shadow-md text-[#FF0A2B] flex items-center justify-center transition-all duration-500 shadow-sm"
                        >
                          <Icon className="w-6 h-6 text-[#FF0A2B] transition-transform duration-300" />
                        </motion.div>

                        {/* Clean Pill Badge + Number */}
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-bold text-[#0D0204] group-hover:bg-[#0D0204] group-hover:border-black/40 group-hover:text-white transition-all duration-500 shadow-xs">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#FF0A2B] animate-pulse" />
                          <span>{t.services.pill}</span>
                          <span className="text-gray-300 group-hover:text-white/40 transition-colors">·</span>
                          <span className="font-mono text-gray-400 group-hover:text-white font-bold transition-colors">
                            0{svc.id}
                          </span>
                        </div>
                      </div>

                      {/* Service Title */}
                      <h3 className="text-xl sm:text-2xl font-black text-[#0D0204] group-hover:text-white leading-snug transition-colors duration-500 mt-2">
                        {localized.title}
                      </h3>
                    </div>

                    {/* Card Body: Description */}
                    <p className="relative z-10 text-sm sm:text-[15px] text-[#555555] group-hover:text-white/95 leading-relaxed my-4 font-medium flex-1 transition-colors duration-500">
                      {localized.description}
                    </p>

                    {/* Card Bottom: Read More Button with Magnetic Spring */}
                    <div className="relative z-10 pt-4 border-t border-gray-100 group-hover:border-white/20 flex items-center justify-between transition-colors duration-500">
                      <motion.button
                        type="button"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setActiveModalId(svc.id)}
                        className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-gray-100 text-[#0D0204] group-hover:bg-[#0D0204] group-hover:text-white group-hover:shadow-md transition-all duration-500 shadow-xs group/btn"
                      >
                        <span>{t.services.readMore}</span>
                        {isRTL ? (
                          <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                        ) : (
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        )}
                      </motion.button>
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* ═══════════════ Service Details Modal with Spring Physics ═══════════════ */}
      <AnimatePresence>
        {activeModalId !== null && (() => {
          const activeSvc = services.find((s) => s.id === activeModalId);
          const activeLocalized =
            t.services.items.find((item) => item.id === activeModalId);
          if (!activeSvc || !activeLocalized) return null;

          return (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
              <motion.div
                initial={{ opacity: 0, scale: 0.92, y: 25 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.92, y: 25 }}
                transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] as const }}
                className={`relative bg-white border border-gray-200 rounded-3xl max-w-lg w-full p-6 sm:p-8 shadow-2xl ${
                  isRTL ? "text-right" : "text-left"
                }`}
                role="dialog"
                aria-modal="true"
              >
                <button
                  type="button"
                  onClick={() => setActiveModalId(null)}
                  className={`absolute top-4 p-2 text-neutral-400 hover:text-black rounded-xl hover:bg-gray-100 transition-colors ${
                    isRTL ? "left-4" : "right-4"
                  }`}
                  aria-label="Close"
                >
                  <X className="w-6 h-6" />
                </button>

                <div className="inline-block bg-[#FF0A2B]/10 text-[#FF0A2B] px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#FF0A2B]/20">
                  {t.services.modalKicker}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-[#0D0204] mb-3">
                  {activeLocalized.title}
                </h3>

                <p className="text-base text-[#444444] leading-relaxed mb-6">
                  {activeLocalized.description}
                </p>

                <div className="space-y-3 mb-8">
                  <h4 className="font-bold text-[#0D0204] text-base">
                    {t.services.modalIncludes}
                  </h4>
                  {activeLocalized.details.map((item, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, x: isRTL ? 15 : -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.15 + idx * 0.05 }}
                      className="flex items-center gap-2.5 text-sm sm:text-base text-[#333333]"
                    >
                      <Check className="w-5 h-5 text-[#FF0A2B] shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href={`https://wa.me/201064544080?text=${encodeURIComponent(
                      `Hello Duck Agency, I would like to inquire about: ${activeLocalized.title}`
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 bg-[#FF0A2B] hover:bg-[#E00020] text-white py-3 px-5 rounded-xl font-bold transition-all shadow-glow-red shimmer-hover"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>{t.services.modalWaCta}</span>
                  </a>

                  <button
                    type="button"
                    onClick={() => setActiveModalId(null)}
                    className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 font-bold text-[#0D0204]"
                  >
                    {t.services.modalClose}
                  </button>
                </div>
              </motion.div>
            </div>
          );
        })()}
      </AnimatePresence>
    </section>
  );
}
