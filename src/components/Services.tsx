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
  },
];

export default function Services() {
  const sectionRef = useRef<HTMLElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (typeof window === "undefined") return;
    gsap.registerPlugin(ScrollTrigger);

    const section = sectionRef.current;
    if (!section) return;

    const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];
    const scrollPerCard = window.innerHeight * 0.9;
    const totalScroll = scrollPerCard * (services.length - 1);

    // Initial state: card 0 visible, rest peeking from bottom
    gsap.set(cards[0], { yPercent: 0 });
    cards.slice(1).forEach((card) => gsap.set(card, { yPercent: 100 }));

    const ctx = gsap.context(() => {
      // Pin the whole section for the scroll duration
      ScrollTrigger.create({
        trigger: section,
        start: "top top",
        end: `+=${totalScroll}`,
        pin: true,
        pinSpacing: true,
      });

      // Animate card transitions one-by-one
      cards.forEach((_, i) => {
        if (i >= cards.length - 1) return;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: `top+=${i * scrollPerCard} top`,
            end: `top+=${(i + 1) * scrollPerCard} top`,
            scrub: 0.6,
            onEnter: () => setActiveIndex(i + 1),
            onLeaveBack: () => setActiveIndex(i),
          },
        });

        // Current card slides out to top
        tl.to(cards[i], { yPercent: -100, ease: "none" }, 0);
        // Next card slides up to fill
        tl.to(cards[i + 1], { yPercent: 0, ease: "none" }, 0);
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="bg-[#12030A] overflow-hidden"
    >
      {/* 100vh inner layout */}
      <div className="h-screen flex items-center">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-10 lg:gap-16 h-full py-12">

          {/* ── Left: Stacking Cards ── */}
          <div className="relative w-full lg:w-[45%] shrink-0 h-[55vw] max-h-[520px] min-h-[340px] overflow-hidden rounded-[28px]">
            {services.map((svc, index) => {
              const isEven = index % 2 === 1;
              return (
                <div
                  key={svc.id}
                  ref={(el) => { cardRefs.current[index] = el; }}
                  className="absolute inset-0 rounded-[28px] overflow-hidden will-change-transform"
                  style={{ zIndex: services.length - index }}
                >
                  <div
                    className="w-full h-full flex flex-col p-6 sm:p-8 relative overflow-hidden"
                    style={{
                      background: isEven ? "#7A0B1A" : "#FF0A2B",
                      color: "#fff",
                    }}
                  >
                    {/* Pill */}
                    <div
                      className="self-start rounded-[10px] px-6 py-1.5 font-extrabold text-sm sm:text-base tracking-[3px] mb-4"
                      style={{ background: "#fff", color: isEven ? "#7A0B1A" : "#FF0A2B" }}
                    >
                      خـــدمـــة
                    </div>

                    {/* Ghost watermark */}
                    <div
                      className="absolute -right-2 bottom-16 text-[64px] sm:text-[80px] font-black whitespace-nowrap select-none pointer-events-none"
                      style={{ color: "rgba(255,255,255,0.12)" }}
                    >
                      {svc.ghost}
                    </div>

                    {/* Title */}
                    <h3 className="relative z-10 text-2xl sm:text-4xl font-black leading-snug mt-auto">
                      {svc.title}
                    </h3>

                    {/* Read More */}
                    <button
                      type="button"
                      onClick={() => setActiveModal(svc)}
                      className="relative z-10 mt-5 self-start inline-flex items-center gap-2 bg-white text-[#1A0509] px-5 py-2.5 rounded-lg font-extrabold text-sm sm:text-base hover:bg-neutral-100 transition-colors shadow-md"
                    >
                      <span>اقرأ المزيد</span>
                      <ArrowLeft className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              );
            })}

            {/* Card counter dots — inside but visible via pb space */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {services.map((_, i) => (
                <div
                  key={i}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === activeIndex ? 20 : 8,
                    height: 8,
                    background: i === activeIndex ? "#FF0A2B" : "rgba(255,255,255,0.4)",
                  }}
                />
              ))}
            </div>
          </div>

          {/* ── Right: Sticky section info + active card description ── */}
          <div className="flex-1 text-right flex flex-col gap-5 sm:gap-6">
            <div className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-base sm:text-lg">
              <Sparkles className="w-5 h-5" />
              <span>حوّل ميزانيتك إلى نمو</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
              خدمات متكاملة تصنع الفارق
            </h2>

            {/* Active service description — fades on change */}
            <AnimatePresence mode="wait">
              <motion.p
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="text-base sm:text-xl font-semibold text-[#E6CDD0] leading-relaxed"
              >
                {services[activeIndex].description}
              </motion.p>
            </AnimatePresence>

            <div className="pt-1">
              <MagneticButton
                href="https://wa.me/201064544080"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#FF0A2B] hover:bg-[#E00020] text-white px-7 py-3.5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-glow-red shimmer-hover"
              >
                <span>خُد خطوتك الأولى معانا</span>
              </MagneticButton>
            </div>
          </div>
        </div>
      </div>

      {/* ── Service Details Modal ── */}
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
