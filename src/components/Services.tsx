"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, Sparkles, X, MessageCircle, ChevronDown, ChevronUp } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface ServiceItem {
  id: number;
  title: string;
  ghost: string;
  description: string;
  details: string[];
  gradient: string;
  borderColor: string;
  pillColor: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "إنشاء المتاجر الإلكترونية",
    ghost: "المتاجر الإلكترونية",
    description:
      "نصمم متجرك باحترافية لعرض منتجاتك بطريقة جذابة وسهلة الاستخدام، مع ربط بوابات الدفع والشحن.",
    details: [
      "تصميم متوافق 100% مع الجوال والتابلت",
      "تكامل مع سلة، زد، وشوبيفاي و WooCommerce",
      "ربط بوابات الدفع الإلكتروني وشركات الشحن",
      "تحسين سرعة التصفح وتجربة الشراء السريعة",
    ],
    gradient: "linear-gradient(145deg, #7A0B1A 0%, #4A0610 50%, #240207 100%)",
    borderColor: "rgba(255, 10, 43, 0.45)",
    pillColor: "#7A0B1A",
  },
  {
    id: 2,
    title: "تصميم واجهة موقع",
    ghost: "تصميم واجهة موقع",
    description:
      "واجهات عصرية وتجربة مستخدم سلسة تحوّل الزائر لعميل، بتصاميم حديثة ومدروسة سيكولوجياً.",
    details: [
      "دراسة سلوك المستخدم (UX Research)",
      "تصميم واجهات تفاعلية مبهجة (UI Design)",
      "تصاميم نماذج أولية تفاعلية على Figma",
      "مراعاة أعلى معايير سهولة الاستخدام والوصول",
    ],
    gradient: "linear-gradient(145deg, #FF0A2B 0%, #B80018 55%, #6B000D 100%)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    pillColor: "#FF0A2B",
  },
  {
    id: 3,
    title: "التطبيقات الإلكترونية",
    ghost: "التطبيقات الإلكترونية",
    description:
      "نطوّر تطبيقات ذكية ومتجاوبة تناسب احتياجات عملك وتصل لعملائك بسهولة وسرعة فائقة.",
    details: [
      "تطوير لتطبيقات iOS و Android",
      "لوحة تحكم ذكية لإدارة الطلبات والبيانات",
      "إشعارات فورية لزيادة تفاعل وإعادة شراء العملاء",
      "دعم فني وصيانة دورية وأمان عالي",
    ],
    gradient: "linear-gradient(145deg, #5C0813 0%, #36030A 55%, #180104 100%)",
    borderColor: "rgba(255, 10, 43, 0.4)",
    pillColor: "#7A0B1A",
  },
  {
    id: 4,
    title: "إدارة الحملات الإعلانية",
    ghost: "الحملات الإعلانية",
    description:
      "ندير حملاتك باحترافية للوصول لجمهورك المستهدف بأفضل نتيجة وبأعلى عائد استثماري ممكن.",
    details: [
      "إعلانات Meta (فيسبوك وإنستغرام)",
      "إعلانات TikTok و Snapchat و Google Ads",
      "إعادة استهداف ذكية لزوار المتجر",
      "تقارير دورية وشفافة توضح العائد والمبيعات",
    ],
    gradient: "linear-gradient(145deg, #B8081E 0%, #750412 55%, #3D0108 100%)",
    borderColor: "rgba(255, 255, 255, 0.25)",
    pillColor: "#B8081E",
  },
  {
    id: 5,
    title: "تحسين محركات البحث (SEO)",
    ghost: "تحسين محركات البحث",
    description:
      "يظهر نشاطك أمام العملاء اللي بيدوّروا على خدماتك، ونرتقي بترتيبه للصفحات الأولى في جوجل.",
    details: [
      "دراسة الكلمات المفتاحية الأكثر ربحية ونية شراء",
      "تحسين البنية التقنية للموقع والسرعة (Technical SEO)",
      "بناء روابط خلفية قوية وموثوقة (Backlinks)",
      "تحسين محركات البحث المحلية (Local SEO)",
    ],
    gradient: "linear-gradient(145deg, #4A050E 0%, #2B0207 55%, #140003 100%)",
    borderColor: "rgba(255, 10, 43, 0.35)",
    pillColor: "#7A0B1A",
  },
  {
    id: 6,
    title: "تصميم الهوية البصرية",
    ghost: "الهوية البصرية",
    description:
      "نصمّم لك هوية مميزة تعكس شخصية علامتك وتجذب جمهورك وترسخ في أذهانهم لفترة طويلة.",
    details: [
      "تصميم الشعار وتطبيقاته المختلفة",
      "دليل استخدام الهوية البصرية (Brand Guidelines)",
      "تصاميم السوشيال ميديا والمطبوعات الإعلانية",
      "نبرة الصوت والرسائل التسويقية للعلامة",
    ],
    gradient: "linear-gradient(145deg, #E60021 0%, #990014 55%, #52000A 100%)",
    borderColor: "rgba(255, 255, 255, 0.3)",
    pillColor: "#FF0A2B",
  },
];

export default function Services() {
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Monitor scroll inside cards container to update indicator
  useEffect(() => {
    const el = scrollContainerRef.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollPos = el.scrollTop;
      const cardHeight = 380;
      const index = Math.min(
        services.length - 1,
        Math.max(0, Math.round(scrollPos / cardHeight))
      );
      setCurrentSlide(index);
    };

    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSlide = (index: number) => {
    const el = scrollContainerRef.current;
    if (!el) return;
    const targetScroll = index * 390;
    el.scrollTo({ top: targetScroll, behavior: "smooth" });
  };

  const handleNext = () => {
    if (currentSlide < services.length - 1) {
      scrollToSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      scrollToSlide(currentSlide - 1);
    }
  };

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0D0204] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF0A2B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#7A0B1A]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
          
          {/* ═══════════════ RIGHT COLUMN: Sticky Information & CTA (RTL: Starts on Right) ═══════════════ */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full lg:w-[45%] flex flex-col items-start text-right gap-6 order-1 lg:order-2"
          >
            {/* Kicker badge */}
            <div className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-base sm:text-lg">
              <Sparkles className="w-5 h-5 text-[#FF0A2B]" />
              <span>حوّل ميزانيتك إلى نمو</span>
              <span className="w-6 h-[2px] bg-[#FF0A2B]" />
            </div>

            {/* Main Section Heading */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black text-white leading-[1.3] tracking-tight">
              في عالم التسويق الرقمي، نكون الشريك الذي يبدأ معك من الفكرة الأولى، لا من مرحلة التنفيذ فقط
            </h2>

            {/* Description */}
            <p className="text-base sm:text-lg text-[#C9A4A8] leading-relaxed font-normal max-w-xl">
              حيث نبدأ بفهم عميق لطبيعة نشاطك والسوق وجمهورك المستهدف، لنرسم لك اتجاهًا واضحًا نحو النمو المستدام ومضاعفة مبيعاتك وأرباحك.
            </p>

            {/* Primary Action Button */}
            <div className="pt-2">
              <MagneticButton
                href="https://wa.me/201064544080"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FF0A2B] hover:bg-[#E00020] text-white px-8 py-4 rounded-xl font-bold text-base sm:text-lg transition-all shadow-glow-red shimmer-hover"
              >
                <span>خُذ خطوتك الأولى معانا</span>
                <ArrowLeft className="w-5 h-5" />
              </MagneticButton>
            </div>

            {/* Helpful Scroll Tip & Step Indicator */}
            <div className="pt-4 flex items-center gap-3 text-xs sm:text-sm text-[#E6CDD0]/80">
              <span className="inline-block w-2 h-2 rounded-full bg-[#FF0A2B] animate-ping" />
              <span>مرر على البطاقات لاستعراض كافة خدماتنا المبتكرة ({currentSlide + 1} من {services.length})</span>
            </div>
          </motion.div>

          {/* ═══════════════ LEFT COLUMN: Masar-Style Stacking Sticky Cards ═══════════════ */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
            className="w-full lg:w-[55%] flex flex-col order-2 lg:order-1 relative"
          >
            {/* The Dedicated Scroll Parent (Masar Agency .custom-parent Architecture) */}
            <div
              ref={scrollContainerRef}
              data-lenis-prevent="true"
              className="custom-parent relative w-full h-[540px] sm:h-[580px] overflow-y-auto overflow-x-hidden rounded-[32px] p-2 sm:p-3 select-none"
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              <style jsx>{`
                .custom-parent::-webkit-scrollbar {
                  display: none;
                }
                .sticky-slide-1 { top: 0px !important; z-index: 10; }
                .sticky-slide-2 { top: 18px !important; z-index: 20; }
                .sticky-slide-3 { top: 36px !important; z-index: 30; }
                .sticky-slide-4 { top: 54px !important; z-index: 40; }
                .sticky-slide-5 { top: 72px !important; z-index: 50; }
                .sticky-slide-6 { top: 90px !important; z-index: 60; }
              `}</style>

              {services.map((svc, index) => {
                const stickyClass = `sticky-slide-${index + 1}`;

                return (
                  <div key={svc.id}>
                    {/* Sticky Card Slide Container */}
                    <div
                      className={`sticky ${stickyClass} w-full transition-transform duration-300`}
                    >
                      {/* Card Body (.all-content) */}
                      <div
                        className="group relative w-full min-h-[380px] sm:min-h-[410px] rounded-[28px] sm:rounded-[32px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden transition-all duration-300 hover:-translate-y-1"
                        style={{
                          background: svc.gradient,
                          border: `1.5px solid ${svc.borderColor}`,
                          boxShadow:
                            "0 -12px 30px rgba(0, 0, 0, 0.55), 0 16px 36px rgba(0, 0, 0, 0.4)",
                        }}
                      >
                        {/* ── Background Large Ghost Watermark Text (Masar style) ── */}
                        <div
                          className="absolute -right-4 top-24 text-[65px] sm:text-[88px] font-black whitespace-nowrap text-white/[0.08] pointer-events-none select-none transition-transform duration-700 group-hover:-translate-x-6"
                          style={{ direction: "rtl" }}
                        >
                          {svc.ghost}
                        </div>

                        {/* ── Head Content ── */}
                        <div className="relative z-10 flex flex-col items-start gap-4">
                          {/* "خـــــــــــدمـــــــــــــــــــة" Pill Badge */}
                          <div
                            className="inline-block bg-white px-5 sm:px-6 py-1.5 sm:py-2 rounded-xl font-black text-sm sm:text-base tracking-[4px] shadow-sm"
                            style={{ color: svc.pillColor }}
                          >
                            خـــــــــــدمـــــــــــــــــــة
                          </div>

                          {/* Service Title */}
                          <h3 className="text-2xl sm:text-3xl lg:text-[34px] font-black text-white leading-snug mt-1">
                            {svc.title}
                          </h3>
                        </div>

                        {/* ── Body Content ── */}
                        <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mt-6 pt-4 border-t border-white/10">
                          {/* Short Description */}
                          <p className="text-xs sm:text-sm lg:text-[15px] text-white/90 leading-relaxed max-w-full sm:max-w-[70%] font-medium">
                            {svc.description}
                          </p>

                          {/* Read More Button */}
                          <button
                            type="button"
                            onClick={() => setActiveModal(svc)}
                            className="inline-flex items-center gap-2 bg-white text-[#1A0509] hover:bg-neutral-100 px-5 py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all duration-300 shadow-md shrink-0 active:scale-95 group/btn"
                          >
                            <span>اقرأ المزيد</span>
                            <ArrowLeft className="w-4 h-4 transition-transform group-hover/btn:-translate-x-1" />
                          </button>
                        </div>
                      </div>
                    </div>

                    {/* Spacer between slides */}
                    {index < services.length - 1 && (
                      <div className="h-4 sm:h-5" />
                    )}
                  </div>
                );
              })}

              {/* Extra Spacer at the Bottom (so the final slide stacks smoothly) */}
              <div className="h-44 sm:h-52" />
            </div>

            {/* ── Floating Controls Bar (Prev/Next & Dots Navigation) ── */}
            <div className="mt-4 flex items-center justify-between px-3">
              {/* Step indicator dots */}
              <div className="flex items-center gap-1.5">
                {services.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => scrollToSlide(i)}
                    aria-label={`انتقل للخدمة ${i + 1}`}
                    className="h-2 rounded-full transition-all duration-300"
                    style={{
                      width: i === currentSlide ? 28 : 8,
                      background: i === currentSlide ? "#FF0A2B" : "rgba(255, 255, 255, 0.25)",
                    }}
                  />
                ))}
              </div>

              {/* Next/Prev Mini Arrows */}
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handlePrev}
                  disabled={currentSlide === 0}
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-[#FF0A2B] hover:border-[#FF0A2B] text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="الخدمة السابقة"
                >
                  <ChevronUp className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentSlide === services.length - 1}
                  className="w-8 h-8 rounded-full border border-white/20 bg-white/5 hover:bg-[#FF0A2B] hover:border-[#FF0A2B] text-white flex items-center justify-center transition-colors disabled:opacity-30 disabled:pointer-events-none"
                  aria-label="الخدمة التالية"
                >
                  <ChevronDown className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* ═══════════════ Service Details Modal with AnimatePresence ═══════════════ */}
      <AnimatePresence>
        {activeModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
              className="relative bg-[#1A0509] border border-[#FF0A2B]/40 rounded-2xl max-w-lg w-full p-6 sm:p-8 text-right shadow-2xl shadow-[#FF0A2B]/30"
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-4 left-4 p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-white/10 transition-colors"
                aria-label="إغلاق النافذة"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="inline-block bg-[#FF0A2B]/10 text-[#FF0A2B] px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#FF0A2B]/20">
                تفاصيل الخدمة
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                {activeModal.title}
              </h3>

              <p className="text-base text-[#E6CDD0] leading-relaxed mb-6">
                {activeModal.description}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="font-bold text-white text-base">ماذا يشمل تنفيذ الخدمة؟</h4>
                {activeModal.details.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base text-neutral-200">
                    <Check className="w-5 h-5 text-[#FF0A2B] shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={`https://wa.me/201064544080?text=${encodeURIComponent(
                    `مرحباً Duck Agency، أود الاستفسار عن خدمة: ${activeModal.title}`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 flex items-center justify-center gap-2 bg-[#FF0A2B] hover:bg-[#E00020] text-white py-3 px-5 rounded-xl font-bold transition-all shadow-glow-red shimmer-hover"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>طلب الخدمة عبر واتساب</span>
                </a>

                <button
                  type="button"
                  onClick={() => setActiveModal(null)}
                  className="px-5 py-3 rounded-xl border border-neutral-700 hover:bg-white/5 font-bold text-neutral-300"
                >
                  إغلاق
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
