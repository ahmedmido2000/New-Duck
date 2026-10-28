"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, Sparkles, X, MessageCircle } from "lucide-react";
import MagneticButton from "./MagneticButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ServiceItem {
  id: number;
  title: string;
  description: string;
  details: string[];
  gradient: string;
  borderColor: string;
  pillBg: string;
  pillColor: string;
  titleColor: string;
  descColor: string;
  btnBg: string;
  btnColor: string;
  btnHoverBg: string;
}

const services: ServiceItem[] = [
  {
    id: 1,
    title: "إنشاء المتاجر الإلكترونية",
    description:
      "نصمم متجرك باحترافية لعرض منتجاتك بطريقة جذابة وسهلة الاستخدام، مع ربط بوابات الدفع والشحن.",
    details: [
      "تصميم متوافق 100% مع الجوال والتابلت",
      "تكامل مع سلة، زد، وشوبيفاي و WooCommerce",
      "ربط بوابات الدفع الإلكتروني وشركات الشحن",
      "تحسين سرعة التصفح وتجربة الشراء السريعة",
    ],
    gradient: "linear-gradient(145deg, #661022 0%, #420814 55%, #240209 100%)",
    borderColor: "rgba(255, 10, 43, 0.45)",
    pillBg: "#ffffff",
    pillColor: "#661022",
    titleColor: "#ffffff",
    descColor: "rgba(255, 255, 255, 0.9)",
    btnBg: "#ffffff",
    btnColor: "#1A0509",
    btnHoverBg: "#f5f5f5",
  },
  {
    id: 2,
    title: "تصميم واجهة موقع",
    description:
      "واجهات عصرية وتجربة مستخدم سلسة تحوّل الزائر لعميل، بتصاميم حديثة ومدروسة سيكولوجياً.",
    details: [
      "دراسة سلوك المستخدم (UX Research)",
      "تصميم واجهات تفاعلية مبهجة (UI Design)",
      "تصاميم نماذج أولية تفاعلية على Figma",
      "مراعاة أعلى معايير سهولة الاستخدام والوصول",
    ],
    gradient: "linear-gradient(145deg, #F0A203 0%, #D48B00 55%, #A86D00 100%)",
    borderColor: "rgba(255, 220, 100, 0.5)",
    pillBg: "#ffffff",
    pillColor: "#A86D00",
    titleColor: "#ffffff",
    descColor: "rgba(255, 255, 255, 0.95)",
    btnBg: "#ffffff",
    btnColor: "#1A0509",
    btnHoverBg: "#f5f5f5",
  },
  {
    id: 3,
    title: "التطبيقات الإلكترونية",
    description:
      "نطوّر تطبيقات ذكية ومتجاوبة تناسب احتياجات عملك وتصل لعملائك بسهولة وسرعة فائقة.",
    details: [
      "تطوير لتطبيقات iOS و Android",
      "لوحة تحكم ذكية لإدارة الطلبات والبيانات",
      "إشعارات فورية لزيادة تفاعل وإعادة شراء العملاء",
      "دعم فني وصيانة دورية وأمان عالي",
    ],
    gradient: "linear-gradient(145deg, #540D1D 0%, #380712 55%, #1C0208 100%)",
    borderColor: "rgba(255, 10, 43, 0.35)",
    pillBg: "#ffffff",
    pillColor: "#540D1D",
    titleColor: "#ffffff",
    descColor: "rgba(255, 255, 255, 0.9)",
    btnBg: "#ffffff",
    btnColor: "#1A0509",
    btnHoverBg: "#f5f5f5",
  },
  {
    id: 4,
    title: "إدارة الحملات الإعلانية",
    description:
      "ندير حملاتك باحترافية للوصول لجمهورك المستهدف بأفضل نتيجة وبأعلى عائد استثماري ممكن.",
    details: [
      "إعلانات Meta (فيسبوك وإنستغرام)",
      "إعلانات TikTok و Snapchat و Google Ads",
      "إعادة استهداف ذكية لزوار المتجر",
      "تقارير دورية وشفافة توضح العائد والمبيعات",
    ],
    gradient: "linear-gradient(145deg, #FFFFFF 0%, #F9F5F6 100%)",
    borderColor: "rgba(99, 23, 45, 0.3)",
    pillBg: "#520C1A",
    pillColor: "#ffffff",
    titleColor: "#520C1A",
    descColor: "#520C1A",
    btnBg: "#520C1A",
    btnColor: "#ffffff",
    btnHoverBg: "#3D0813",
  },
  {
    id: 5,
    title: "تحسين محركات البحث (SEO)",
    description:
      "يظهر نشاطك أمام العملاء اللي بيدوّروا على خدماتك، ونرتقي بترتيبه للصفحات الأولى في جوجل.",
    details: [
      "دراسة الكلمات المفتاحية الأكثر ربحية ونية شراء",
      "تحسين البنية التقنية للموقع والسرعة (Technical SEO)",
      "بناء روابط خلفية قوية وموثوقة (Backlinks)",
      "تحسين محركات البحث المحلية (Local SEO)",
    ],
    gradient: "linear-gradient(145deg, #4A0817 0%, #2E030C 55%, #170105 100%)",
    borderColor: "rgba(255, 10, 43, 0.35)",
    pillBg: "#ffffff",
    pillColor: "#4A0817",
    titleColor: "#ffffff",
    descColor: "rgba(255, 255, 255, 0.9)",
    btnBg: "#ffffff",
    btnColor: "#1A0509",
    btnHoverBg: "#f5f5f5",
  },
  {
    id: 6,
    title: "تصميم الهوية البصرية",
    description:
      "نصمّم لك هوية مميزة تعكس شخصية علامتك وتجذب جمهورك وترسخ في أذهانهم لفترة طويلة.",
    details: [
      "تصميم الشعار وتطبيقاته المختلفة",
      "دليل استخدام الهوية البصرية (Brand Guidelines)",
      "تصاميم السوشيال ميديا والمطبوعات الإعلانية",
      "نبرة الصوت والرسائل التسويقية للعلامة",
    ],
    gradient: "linear-gradient(145deg, #F0A203 0%, #D48B00 55%, #A86D00 100%)",
    borderColor: "rgba(255, 220, 100, 0.5)",
    pillBg: "#ffffff",
    pillColor: "#A86D00",
    titleColor: "#ffffff",
    descColor: "rgba(255, 255, 255, 0.95)",
    btnBg: "#ffffff",
    btnColor: "#1A0509",
    btnHoverBg: "#f5f5f5",
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardFrameRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    const cardFrame = cardFrameRef.current;
    if (!section || !cardFrame) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    if (cards.length < 2) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    const ctx = gsap.context(() => {
      if (prefersReducedMotion) {
        cards.forEach((card, i) => {
          gsap.set(card, { y: i * 14 });
        });
        return;
      }

      const isMobile = window.innerWidth < 640;
      const containerHeight = isMobile ? 470 : 510;
      const stackGap = isMobile ? 12 : 14;

      // ── Step 1: Initial Positions ──
      // Card 0 rests at y: 0. It is 100% visible with its button and description completely unobstructed!
      gsap.set(cards[0], { y: 0 });

      // All remaining cards (1..5) wait completely below the container frame!
      // No card peeks inside the viewing area, guaranteeing ZERO overlap on any button!
      for (let i = 1; i < cards.length; i++) {
        gsap.set(cards[i], { y: containerHeight + 40 });
      }

      // ── Step 2: Main Scrub Timeline Pinned to Main Page Scroll ──
      const scrollDistancePerCard = window.innerHeight * 0.85;
      const totalScroll = scrollDistancePerCard * (cards.length - 1);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.6,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 1; i < cards.length; i++) {
        const targetY = i * stackGap;

        // 1. Dwell Phase: The current card remains 100% fully visible, readable, and clickable with its button
        // before the next card even starts moving!
        tl.to({}, { duration: 0.45 });

        // 2. Rising Phase: Card i enters from below the container and slides smoothly over the previous card
        tl.to(cards[i], {
          y: targetY,
          ease: "power2.inOut",
          duration: 1.0,
        });
      }

      // Final dwell phase for the last card
      tl.to({}, { duration: 0.6 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-[#0D0204] relative overflow-hidden h-screen flex items-center justify-center"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF0A2B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#7A0B1A]/15 rounded-full blur-[130px] pointer-events-none" />

      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 py-6 sm:py-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16">

          {/* ═══════════════ RIGHT COLUMN: Stationary Section Info & CTA (Right in RTL) ═══════════════ */}
          <div className="w-full lg:w-[46%] flex flex-col items-start text-right gap-4 sm:gap-6 order-1 lg:order-1 shrink-0">
            {/* Kicker */}
            <div className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-sm sm:text-base">
              <Sparkles className="w-4 h-4 sm:w-5 sm:h-5 text-[#FF0A2B]" />
              <span>حوّل ميزانيتك إلى نمو</span>
              <span className="w-6 h-[2px] bg-[#FF0A2B]" />
            </div>

            {/* Main Section Heading */}
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-white leading-[1.3] tracking-tight">
              في عالم التسويق الرقمي، نكون الشريك الذي يبدأ معك من الفكرة الأولى، لا من مرحلة التنفيذ فقط
            </h2>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#C9A4A8] leading-relaxed font-normal max-w-xl">
              حيث نبدأ بفهم لطبيعة نشاطك والسوق السعودي وجمهورك المستهدف، لنرسم لك اتجاهًا واضحًا نحو النمو المستدام.
            </p>

            {/* CTA Button without Arrow */}
            <div className="pt-1">
              <MagneticButton
                href="https://wa.me/201064544080"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center bg-[#FF0A2B] hover:bg-[#E00020] text-white px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all shadow-glow-red shimmer-hover"
              >
                <span>خُذ خطوتك الأولى معنا</span>
              </MagneticButton>
            </div>
          </div>

          {/* ═══════════════ LEFT COLUMN: Masar Stacking Cards Frame (Left in RTL) ═══════════════ */}
          <div className="w-full lg:w-[54%] flex justify-center lg:justify-start order-2 lg:order-2">
            {/* Card Frame: Extra vertical height guarantees full button visibility on all stacked cards */}
            <div
              ref={cardFrameRef}
              className="relative w-full max-w-[540px] h-[470px] sm:h-[510px] overflow-hidden rounded-[28px] sm:rounded-[34px]"
            >
              {services.map((svc, index) => {
                const zIndex = (index + 1) * 10;

                return (
                  <div
                    key={svc.id}
                    ref={(el) => {
                      cardRefs.current[index] = el;
                    }}
                    className="absolute inset-x-0 top-0 will-change-transform"
                    style={{ zIndex }}
                  >
                    {/* The Visual Card: Compact, perfectly proportioned so button & description are always 100% visible */}
                    <div
                      className="group relative w-full h-[295px] sm:h-[315px] rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden"
                      style={{
                        background: svc.gradient,
                        border: `1.5px solid ${svc.borderColor}`,
                        boxShadow:
                          "0 -10px 28px rgba(0, 0, 0, 0.65), 0 14px 32px rgba(0, 0, 0, 0.45)",
                      }}
                    >
                      {/* Head Content */}
                      <div className="relative z-10 flex flex-col items-start gap-2 sm:gap-2.5">
                        {/* "خـــــــــــدمـــــــــــــــــــة" Pill Badge */}
                        <div
                          className="inline-block px-4 sm:px-5 py-1 sm:py-1.5 rounded-lg font-black text-xs sm:text-xs tracking-[3px] shadow-sm"
                          style={{
                            backgroundColor: svc.pillBg,
                            color: svc.pillColor,
                          }}
                        >
                          خـــــــــــدمـــــــــــــــــــة
                        </div>

                        {/* Service Title */}
                        <h3
                          className="text-lg sm:text-2xl font-black leading-snug mt-0.5"
                          style={{ color: svc.titleColor }}
                        >
                          {svc.title}
                        </h3>
                      </div>

                      {/* Body Content: Description + Read More Button 100% visible and unobstructed */}
                      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pt-3 border-t border-black/10 dark:border-white/10">
                        {/* Description */}
                        <p
                          className="text-xs sm:text-[13px] leading-relaxed max-w-full sm:max-w-[70%] font-medium"
                          style={{ color: svc.descColor }}
                        >
                          {svc.description}
                        </p>

                        {/* Read More Button */}
                        <button
                          type="button"
                          onClick={() => setActiveModal(svc)}
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs transition-all duration-300 shadow-md shrink-0 active:scale-95 group/btn"
                          style={{
                            backgroundColor: svc.btnBg,
                            color: svc.btnColor,
                          }}
                        >
                          <span>اقرأ المزيد</span>
                          <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover/btn:-translate-x-1" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>

      {/* ═══════════════ Service Details Modal ═══════════════ */}
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
