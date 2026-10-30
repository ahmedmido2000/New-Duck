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
    gradient: "linear-gradient(145deg, #FF0A2B 0%, #C70820 55%, #7D0010 100%)",
    borderColor: "rgba(255, 255, 255, 0.4)",
    pillBg: "#ffffff",
    pillColor: "#FF0A2B",
    titleColor: "#ffffff",
    descColor: "rgba(255, 255, 255, 0.95)",
    btnBg: "#ffffff",
    btnColor: "#0D0204",
    btnHoverBg: "#f0f0f0",
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
    gradient: "linear-gradient(145deg, #1C0307 0%, #100204 55%, #080102 100%)",
    borderColor: "rgba(255, 10, 43, 0.55)",
    pillBg: "#FF0A2B",
    pillColor: "#ffffff",
    titleColor: "#ffffff",
    descColor: "rgba(255, 255, 255, 0.88)",
    btnBg: "#ffffff",
    btnColor: "#0D0204",
    btnHoverBg: "#f0f0f0",
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
    gradient: "linear-gradient(145deg, #FFFFFF 0%, #F8F3F5 100%)",
    borderColor: "rgba(255, 10, 43, 0.35)",
    pillBg: "#FF0A2B",
    pillColor: "#ffffff",
    titleColor: "#0D0204",
    descColor: "#2A040A",
    btnBg: "#0D0204",
    btnColor: "#ffffff",
    btnHoverBg: "#FF0A2B",
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
    gradient: "linear-gradient(145deg, #E60021 0%, #B80018 55%, #70000D 100%)",
    borderColor: "rgba(255, 255, 255, 0.35)",
    pillBg: "#ffffff",
    pillColor: "#E60021",
    titleColor: "#ffffff",
    descColor: "rgba(255, 255, 255, 0.95)",
    btnBg: "#ffffff",
    btnColor: "#0D0204",
    btnHoverBg: "#f0f0f0",
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
    gradient: "linear-gradient(145deg, #1C0307 0%, #100205 55%, #080102 100%)",
    borderColor: "rgba(255, 10, 43, 0.5)",
    pillBg: "#FF0A2B",
    pillColor: "#ffffff",
    titleColor: "#ffffff",
    descColor: "rgba(255, 255, 255, 0.88)",
    btnBg: "#ffffff",
    btnColor: "#0D0204",
    btnHoverBg: "#f0f0f0",
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
    gradient: "linear-gradient(145deg, #FFFFFF 0%, #F8F3F5 100%)",
    borderColor: "rgba(255, 10, 43, 0.35)",
    pillBg: "#0D0204",
    pillColor: "#ffffff",
    titleColor: "#0D0204",
    descColor: "#2A040A",
    btnBg: "#FF0A2B",
    btnColor: "#ffffff",
    btnHoverBg: "#E00020",
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
      const cardHeight = isMobile ? 310 : 335;
      const containerHeight = isMobile ? 435 : 475;
      const stackGap = isMobile ? 12 : 14;

      // Calculate tight peek position for the incoming card so cards are close to each other
      // while ensuring the docked card's button is 100% visible
      const getPeekY = (cardIndex: number) => {
        const prevCardBottom = (cardIndex - 1) * stackGap + cardHeight;
        return Math.min(containerHeight - 55, prevCardBottom + 12);
      };

      // ── Step 1: Initial Positions ──
      // Card 0 rests at y: 0. Its button and description are 100% visible!
      gsap.set(cards[0], { y: 0 });

      // Card 1 peeks immediately below Card 0 (close to each other, exactly like Image 1!)
      gsap.set(cards[1], { y: getPeekY(1) });

      // Cards 2..5 wait below the container
      for (let i = 2; i < cards.length; i++) {
        gsap.set(cards[i], { y: containerHeight + 80 });
      }

      // ── Step 2: Responsive, Fast, Snappy Scrub Timeline ──
      const scrollDistancePerCard = Math.min(window.innerHeight * 0.42, 380);
      const totalScroll = scrollDistancePerCard * (cards.length - 1);

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: `+=${totalScroll}`,
          pin: true,
          pinSpacing: true,
          scrub: 0.35,
          anticipatePin: 1,
          invalidateOnRefresh: true,
        },
      });

      for (let i = 1; i < cards.length; i++) {
        const targetY = i * stackGap;

        // Dwell phase: Card (i - 1) stays visible with button clearly visible
        tl.to({}, { duration: 0.2 });

        // Card i slides up from its peek position into its docked stack slot
        tl.to(cards[i], {
          y: targetY,
          ease: "power1.inOut",
          duration: 1.0,
        });

        // Simultaneously, if there is a next card (i + 1), bring it smoothly into its peek position!
        if (i + 1 < cards.length) {
          tl.to(
            cards[i + 1],
            {
              y: getPeekY(i + 1),
              ease: "power1.inOut",
              duration: 1.0,
            },
            "<" // Run in parallel so cards are always close to each other
          );
        }
      }

      // Small unpin cushion
      tl.to({}, { duration: 0.25 });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-white relative overflow-hidden h-screen flex items-center justify-center border-t border-gray-100"
    >
      {/* Background Ambience */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#FF0A2B]/5 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[450px] h-[450px] bg-[#FF0A2B]/5 rounded-full blur-[130px] pointer-events-none" />

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
            <h2 className="text-2xl sm:text-4xl lg:text-[40px] font-black text-[#0D0204] leading-[1.3] tracking-tight">
              في عالم التسويق الرقمي، نكون الشريك الذي يبدأ معك من الفكرة الأولى، لا من مرحلة التنفيذ فقط
            </h2>

            {/* Subtitle / Description */}
            <p className="text-sm sm:text-base lg:text-lg text-[#444444] leading-relaxed font-normal max-w-xl">
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
            {/* Card Frame: Clips cards outside its bounds, keeping cards close and cohesive */}
            <div
              ref={cardFrameRef}
              className="relative w-full max-w-[540px] h-[435px] sm:h-[475px] overflow-hidden rounded-[28px] sm:rounded-[34px]"
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
                    {/* The Visual Card: Compact, cohesive spacing, button 100% visible */}
                    <div
                      className="group relative w-full h-[310px] sm:h-[335px] rounded-[24px] sm:rounded-[28px] p-5 sm:p-6 flex flex-col justify-between overflow-hidden"
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
                          className="inline-block px-4 sm:px-5 py-1 sm:py-1.5 rounded-lg font-black text-xs tracking-[3px] shadow-sm"
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

                      {/* Body Content: Description + Read More Button fully visible and unobstructed */}
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
              className="relative bg-white border border-gray-200 rounded-2xl max-w-lg w-full p-6 sm:p-8 text-right shadow-2xl"
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                onClick={() => setActiveModal(null)}
                className="absolute top-4 left-4 p-2 text-neutral-400 hover:text-black rounded-lg hover:bg-gray-100 transition-colors"
                aria-label="إغلاق النافذة"
              >
                <X className="w-6 h-6" />
              </button>

              <div className="inline-block bg-[#FF0A2B]/10 text-[#FF0A2B] px-3.5 py-1 rounded-full text-xs font-bold mb-3 border border-[#FF0A2B]/20">
                تفاصيل الخدمة
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-[#0D0204] mb-3">
                {activeModal.title}
              </h3>

              <p className="text-base text-[#444444] leading-relaxed mb-6">
                {activeModal.description}
              </p>

              <div className="space-y-3 mb-8">
                <h4 className="font-bold text-[#0D0204] text-base">ماذا يشمل تنفيذ الخدمة؟</h4>
                {activeModal.details.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-sm sm:text-base text-[#333333]">
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
                  className="px-5 py-3 rounded-xl border border-gray-300 hover:bg-gray-50 font-bold text-[#0D0204]"
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
