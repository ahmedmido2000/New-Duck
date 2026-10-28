"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Check, Sparkles, X, MessageCircle } from "lucide-react";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";

interface ServiceItem {
  id: number;
  title: string;
  ghost: string;
  description: string;
  details: string[];
}

export default function Services() {
  const [activeModal, setActiveModal] = useState<ServiceItem | null>(null);

  const services: ServiceItem[] = [
    {
      id: 1,
      title: "إنشاء المتاجر الإلكترونية",
      ghost: "المتاجر الإلكترونية",
      description: "نصمم متجرك باحترافية لعرض منتجاتك بطريقة جذابة وسهلة الاستخدام، مع ربط بوابات الدفع والشحن.",
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
      description: "واجهات عصرية وتجربة مستخدم سلسة تحوّل الزائر لعميل، بتصاميم حديثة ومدروسة سيكولوجياً.",
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
      description: "نطوّر تطبيقات ذكية ومتجاوبة تناسب احتياجات عملك وتصل لعملائك بسهولة وسرعة فائقة.",
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
      description: "ندير حملاتك باحترافية للوصول لجمهورك المستهدف بأفضل نتيجة وبأعلى عائد استثماري ممكن.",
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
      description: "يظهر نشاطك أمام العملاء اللي بيدوّروا على خدماتك، ونرتقي بترتيبه للصفحات الأولى في جوجل.",
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
      description: "نصمّم لك هوية مميزة تعكس شخصية علامتك وتجذب جمهورك وترسخ في أذهانهم لفترة طويلة.",
      details: [
        "تصميم الشعار وتطبيقاته المختلفة",
        "دليل استخدام الهوية البصرية (Brand Guidelines)",
        "تصاميم السوشيال ميديا والمطبوعات الإعلانية",
        "نبرة الصوت والرسائل التسويقية للعلامة",
      ],
    },
  ];

  return (
    <section id="services" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#12030A] relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Header Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="flex flex-col gap-5 max-w-3xl mb-14 sm:mb-20 text-right"
        >
          <div className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-base sm:text-lg">
            <Sparkles className="w-5 h-5" />
            <span>حوّل ميزانيتك إلى نمو</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            خدمات متكاملة تصنع الفارق
          </h2>

          <p className="text-lg sm:text-2xl font-semibold text-[#E6CDD0] leading-relaxed">
            في عالم التسويق الرقمي، نكون الشريك الذي يبدأ معك من الفكرة الأولى، لا من مرحلة التنفيذ فقط. نفهم نشاطك وسوقك وجمهورك، لنرسم لك اتجاهًا واضحًا نحو النمو.
          </p>

          <div className="pt-2">
            <MagneticButton
              href="https://wa.me/201064544080"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FF0A2B] hover:bg-[#E00020] text-white px-7 py-3.5 rounded-xl font-bold text-base sm:text-lg transition-all duration-300 shadow-glow-red shimmer-hover"
            >
              <span>خُد خطوتك الأولى معانا</span>
              <ArrowLeft className="w-5 h-5" />
            </MagneticButton>
          </div>
        </motion.div>

        {/* Services Grid with 3D Stack Effect & Stagger */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-16 sm:gap-y-20 gap-x-8 pt-8">
          {services.map((svc, index) => {
            const isEven = index % 2 === 1;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: (index % 3) * 0.1, ease: [0.16, 1, 0.3, 1] as const }}
              >
                <TiltCard maxTilt={6} glare={false} className="h-full">
                  <div
                    className={`group relative overflow-hidden rounded-[26px] p-7 sm:p-8 min-h-[360px] flex flex-col justify-between transition-all duration-500 hover:-translate-y-3 cursor-pointer h-full ${
                      isEven ? "svc-even" : "svc-odd"
                    }`}
                  >
                    {/* Pill Tag */}
                    <div
                      className={`self-start rounded-lg px-6 py-1.5 font-extrabold text-sm sm:text-base tracking-widest shadow-sm ${
                        isEven ? "bg-white text-[#7A0B1A]" : "bg-white text-[#FF0A2B]"
                      }`}
                    >
                      خـــــدمـــــة
                    </div>

                    {/* Ghost Watermark Background Text */}
                    <div className="absolute -right-4 top-24 text-6xl sm:text-7xl font-black whitespace-nowrap text-white/10 select-none pointer-events-none transition-transform duration-700 group-hover:-translate-x-8">
                      {svc.ghost}
                    </div>

                    {/* Content */}
                    <div className="relative z-10 my-4">
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                        {svc.title}
                      </h3>
                      <p className="text-sm sm:text-base text-white/90 leading-relaxed max-w-[280px]">
                        {svc.description}
                      </p>
                    </div>

                    {/* Read More Button */}
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={() => setActiveModal(svc)}
                      className="relative z-10 self-start inline-flex items-center gap-2 bg-white text-[#1A0509] px-5 py-2.5 rounded-lg font-extrabold text-sm sm:text-base hover:bg-neutral-100 transition-colors shadow-md"
                    >
                      <span>اقرأ المزيد</span>
                      <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
                    </motion.button>
                  </div>
                </TiltCard>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Service Details Modal with AnimatePresence */}
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
