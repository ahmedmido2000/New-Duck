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
    gradient: "linear-gradient(145deg, #7A0B1A 0%, #4A0610 50%, #200206 100%)",
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
    borderColor: "rgba(255, 255, 255, 0.35)",
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
    borderColor: "rgba(255, 255, 255, 0.3)",
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
    borderColor: "rgba(255, 255, 255, 0.35)",
    pillColor: "#FF0A2B",
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
        // Fallback for reduced motion: show static stacked deck
        cards.forEach((card, i) => {
          gsap.set(card, { y: i * 15 });
        });
        return;
      }

      // Responsive dimensions
      const isMobile = window.innerWidth < 640;
      const cardHeight = isMobile ? 360 : 400;
      const peekOffset = isMobile ? 48 : 56; // Peeking tab height visible at bottom
      const stackGap = isMobile ? 12 : 15; // Vertical offset per stacked card at top

      // ── Step 1: Initial Positions ──
      // Card 0 sits at resting top position
      gsap.set(cards[0], { y: 0 });

      // Card 1 starts peeking from the bottom (Image 1)
      gsap.set(cards[1], { y: cardHeight - peekOffset });

      // Remaining cards (2..5) wait below the visible frame
      for (let i = 2; i < cards.length; i++) {
        gsap.set(cards[i], { y: cardHeight + 80 });
      }

      // ── Step 2: Main Scrub Timeline Pinned to Main Page Scroll ──
      const scrollDistancePerCard = window.innerHeight * 0.75;
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

      // Chain card transitions sequentially
      for (let i = 1; i < cards.length; i++) {
        const targetY = i * stackGap; // Docked stack position at top

        // Animate Card i from peek position up to its stacked position over the previous card
        tl.to(cards[i], {
          y: targetY,
          ease: "none",
          duration: 1,
        });

        // Simultaneously, bring Card i+1 into the peeking slot from below (if it exists)
        if (i + 1 < cards.length) {
          tl.to(
            cards[i + 1],
            {
              y: cardHeight - peekOffset + (i * stackGap * 0.3),
              ease: "none",
              duration: 1,
            },
            "<" // Run in parallel with Card i moving up!
          );
        }
      }
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

            {/* CTA Button */}
            <div className="pt-1">
              <MagneticButton
                href="https://wa.me/201064544080"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-[#FF0A2B] hover:bg-[#E00020] text-white px-7 sm:px-8 py-3.5 sm:py-4 rounded-xl font-bold text-sm sm:text-base transition-all shadow-glow-red shimmer-hover"
              >
                <span>خُذ خطوتك الأولى معنا</span>
                <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
              </MagneticButton>
            </div>
          </div>

          {/* ═══════════════ LEFT COLUMN: Masar Stacking Cards Frame (Left in RTL) ═══════════════ */}
          <div className="w-full lg:w-[54%] flex justify-center lg:justify-start order-2 lg:order-2">
            {/* Card Frame: clips cards outside its bounds, exactly like Masar Agency */}
            <div
              ref={cardFrameRef}
              className="relative w-full max-w-[540px] h-[410px] sm:h-[450px] overflow-hidden rounded-[30px] sm:rounded-[36px]"
            >
              {services.map((svc, index) => {
                // Ascending z-index so later cards slide ON TOP of earlier cards
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
                    {/* The Visual Card */}
                    <div
                      className="group relative w-full h-[360px] sm:h-[400px] rounded-[26px] sm:rounded-[30px] p-6 sm:p-8 flex flex-col justify-between overflow-hidden"
                      style={{
                        background: svc.gradient,
                        border: `1.5px solid ${svc.borderColor}`,
                        boxShadow:
                          "0 -10px 30px rgba(0, 0, 0, 0.65), 0 16px 36px rgba(0, 0, 0, 0.45)",
                      }}
                    >
                      {/* Ghost Watermark Text in Background */}
                      <div
                        className="absolute -right-4 top-20 sm:top-24 text-[60px] sm:text-[84px] font-black whitespace-nowrap text-white/[0.08] pointer-events-none select-none transition-transform duration-700 group-hover:-translate-x-6"
                        style={{ direction: "rtl" }}
                      >
                        {svc.ghost}
                      </div>

                      {/* Head Content */}
                      <div className="relative z-10 flex flex-col items-start gap-3 sm:gap-4">
                        {/* "خـــــــــــدمـــــــــــــــــــة" Pill Badge */}
                        <div
                          className="inline-block bg-white px-5 sm:px-6 py-1.5 sm:py-2 rounded-xl font-black text-xs sm:text-sm tracking-[4px] shadow-sm"
                          style={{ color: svc.pillColor }}
                        >
                          خـــــــــــدمـــــــــــــــــــة
                        </div>

                        {/* Service Title */}
                        <h3 className="text-xl sm:text-2xl lg:text-[32px] font-black text-white leading-snug mt-1">
                          {svc.title}
                        </h3>
                      </div>

                      {/* Body Content */}
                      <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 pt-4 border-t border-white/10">
                        {/* Description */}
                        <p className="text-xs sm:text-sm text-white/90 leading-relaxed max-w-full sm:max-w-[70%] font-medium">
                          {svc.description}
                        </p>

                        {/* Read More Button */}
                        <button
                          type="button"
                          onClick={() => setActiveModal(svc)}
                          className="inline-flex items-center gap-2 bg-white text-[#1A0509] hover:bg-neutral-100 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl font-black text-xs sm:text-sm transition-all duration-300 shadow-md shrink-0 active:scale-95 group/btn"
                        >
                          <span>اقرأ المزيد</span>
                          <ArrowLeft className="w-3.5 h-3.5 sm:w-4 sm:h-4 transition-transform group-hover/btn:-translate-x-1" />
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
