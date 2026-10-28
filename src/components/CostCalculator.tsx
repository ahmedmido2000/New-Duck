"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calculator, MessageCircle, Sparkles, TrendingUp, DollarSign } from "lucide-react";
import MagneticButton from "./MagneticButton";

interface ServiceType {
  label: string;
  basePrice: number;
}

const serviceTypes: ServiceType[] = [
  { label: "متاجر إلكترونية", basePrice: 650 },
  { label: "حملات إعلانية ممولة", basePrice: 500 },
  { label: "تصميم واجهات ومواقع", basePrice: 550 },
  { label: "هوية بصرية كاملة", basePrice: 400 },
];

export default function CostCalculator() {
  const [selectedBase, setSelectedBase] = useState<number>(650);
  const [scopeUnits, setScopeUnits] = useState<number>(4);
  const [speedMultiplier, setSpeedMultiplier] = useState<number>(1);

  const { totalUsd, totalSar, totalEgp, waLink, currentServiceLabel } = useMemo(() => {
    const usd = Math.round((selectedBase + scopeUnits * 220) * speedMultiplier);
    const sar = Math.round(usd * 3.75);
    const egp = Math.round(usd * 49.5);
    const activeSvc = serviceTypes.find((s) => s.basePrice === selectedBase)?.label || "خدمات تسويقية";
    const msg = encodeURIComponent(
      `مرحباً وكالة داك (Duck Agency)، أجريت حساباً تقديرياً لمشروعي في (${activeSvc}) بمبلغ $${usd.toLocaleString()} (نطاق ${scopeUnits} مراحل). أود مناقشة التفاصيل وبدء التنفيذ.`
    );
    const link = `https://wa.me/201064544080?text=${msg}`;
    return {
      totalUsd: usd,
      totalSar: sar,
      totalEgp: egp,
      waLink: link,
      currentServiceLabel: activeSvc,
    };
  }, [selectedBase, scopeUnits, speedMultiplier]);

  return (
    <section className="w-full bg-[#12030A] py-20 sm:py-28 border-t border-[#3A0C15] overflow-hidden" id="cost-calculator">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.75, ease: [0.16, 1, 0.3, 1] as const }}
          className="bg-[#1A0509]/90 border border-[#3A0C15] rounded-3xl p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden"
        >
          {/* Subtle Red Top Accent Glow */}
          <div className="absolute top-0 inset-x-12 h-[2px] bg-gradient-to-r from-transparent via-[#FF0A2B] to-transparent shadow-glow-red" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Controls Column (Right) */}
            <motion.div
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:col-span-7 space-y-6 text-right"
            >
              <div>
                <span className="text-xs font-bold text-[#FF0A2B] uppercase tracking-wider block mb-1">
                  الشفافية التقديرية
                </span>
                <h2 className="text-2xl sm:text-4xl font-black text-white tracking-tight">
                  <span className="relative inline-block pb-2">
                    حاسبة العائد والتكلفة التقديرية لمشروعك
                    <motion.span
                      initial={{ scaleX: 0 }}
                      whileInView={{ scaleX: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.85, delay: 0.25, ease: [0.16, 1, 0.3, 1] as const }}
                      className="absolute bottom-0 left-0 right-0 h-[3px] bg-[#FF0A2B] origin-right rounded-full shadow-glow-red"
                    />
                  </span>
                </h2>
                <p className="text-[#C9A4A8] text-sm sm:text-base mt-2 leading-relaxed">
                  حدد نطاق مشروعك للحصول على تقدير استثماري فوري وتوقع العائد المالي في ثوانٍ معدودة.
                </p>
              </div>

              {/* Service Selection */}
              <div className="space-y-2.5">
                <label className="text-sm font-bold text-gray-200 block">
                  نوع الخدمة الرئيسية:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  {serviceTypes.map((st) => (
                    <motion.button
                      key={st.label}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedBase(st.basePrice)}
                      className={`px-3 py-3 rounded-xl text-xs sm:text-sm font-bold text-center border transition-all relative overflow-hidden ${
                        selectedBase === st.basePrice
                          ? "bg-[#FF0A2B] text-white border-[#FF0A2B] shadow-glow-red"
                          : "bg-[#12030A] text-gray-300 border-[#3A0C15] hover:border-[#FF0A2B] hover:text-white"
                      }`}
                      type="button"
                    >
                      {st.label}
                    </motion.button>
                  ))}
                </div>
              </div>

              {/* Scope Slider */}
              <div className="space-y-3 pt-2">
                <div className="flex items-center justify-between text-sm">
                  <span className="font-extrabold text-[#FF0A2B] bg-[#2A0509] px-3 py-1 rounded-lg border border-[#FF0A2B]/30 font-mono">
                    {scopeUnits} مستويات
                  </span>
                  <label className="font-bold text-gray-200">
                    حجم ونطاق الحملة أو المتجر:
                  </label>
                </div>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={scopeUnits}
                  onChange={(e) => setScopeUnits(Number(e.target.value))}
                  className="w-full h-2 bg-[#2A0509] rounded-lg appearance-none cursor-pointer accent-[#FF0A2B]"
                />
                <div className="flex justify-between text-[11px] text-[#C9A4A8] font-semibold">
                  <span>إطلاق تجريبي (1)</span>
                  <span>متوسط (5)</span>
                  <span>حملة ضخمة متكاملة (10)</span>
                </div>
              </div>

              {/* Delivery Speed Toggle */}
              <div className="space-y-2 pt-1">
                <label className="text-sm font-bold text-gray-200 block">
                  سرعة التنفيذ المطلوبة:
                </label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setSpeedMultiplier(1)}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all ${
                      speedMultiplier === 1
                        ? "bg-[#2A0509] border-[#FF0A2B] text-white shadow-glow-red"
                        : "bg-[#12030A] border-[#3A0C15] text-[#C9A4A8]"
                    }`}
                  >
                    جدول قياسي مدروس (الموصى به)
                  </button>
                  <button
                    type="button"
                    onClick={() => setSpeedMultiplier(1.25)}
                    className={`py-2.5 px-4 rounded-xl text-xs sm:text-sm font-bold border transition-all flex items-center justify-center gap-1.5 ${
                      speedMultiplier === 1.25
                        ? "bg-[#FF0A2B] border-[#FF0A2B] text-white shadow-glow-red"
                        : "bg-[#12030A] border-[#3A0C15] text-[#C9A4A8]"
                    }`}
                  >
                    <Sparkles className="w-4 h-4" />
                    <span>تسريع فوري طارئ (+25%)</span>
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Results Column (Left) */}
            <motion.div
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }}
              className="lg:col-span-5 bg-[#12030A] border border-[#FF0A2B]/40 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-[#3A0C15]">
                  <span className="text-xs font-bold text-[#FFB3BE] bg-[#FF0A2B]/10 py-1 px-3 rounded-full border border-[#FF0A2B]/20">
                    تقدير فوري
                  </span>
                  <span className="text-sm font-bold text-gray-300">
                    الاستثمار التقديري المتوقع
                  </span>
                </div>

                {/* Primary USD Value */}
                <div className="text-center py-2">
                  <div className="text-4xl sm:text-5xl font-black text-white text-glow-red tracking-tight font-mono">
                    ${totalUsd.toLocaleString()}
                  </div>
                  <div className="text-xs text-[#C9A4A8] mt-1 font-semibold">
                    USD تقريباً شامل خطة العمل والتحليلات
                  </div>
                </div>

                {/* Currencies Bar (SAR & EGP) */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="bg-[#1A0509] p-3 rounded-xl border border-[#3A0C15] text-center">
                    <div className="text-xs text-[#C9A4A8] mb-0.5">بالريال السعودي</div>
                    <div className="text-lg font-black text-white font-mono">
                      {totalSar.toLocaleString()} <span className="text-xs font-sans text-[#FF0A2B]">ر.س</span>
                    </div>
                  </div>
                  <div className="bg-[#1A0509] p-3 rounded-xl border border-[#3A0C15] text-center">
                    <div className="text-xs text-[#C9A4A8] mb-0.5">بالجنيه المصري</div>
                    <div className="text-lg font-black text-white font-mono">
                      {totalEgp.toLocaleString()} <span className="text-xs font-sans text-[#FF0A2B]">ج.م</span>
                    </div>
                  </div>
                </div>

                {/* Expected Return Indicator */}
                <div className="bg-[#2A0509]/80 border border-[#FF0A2B]/30 rounded-xl p-3 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#FF0A2B] text-white flex items-center justify-center shrink-0 shadow-glow-red">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <div className="text-xs font-extrabold text-white">العائد المتوقع المتكرر (ROAS):</div>
                    <div className="text-[11px] text-[#FFB3BE]">بين 3.8x إلى 5.2x ضعف الميزانية المنفقة</div>
                  </div>
                </div>
              </div>

              {/* Order via WhatsApp */}
              <div className="pt-6">
                <MagneticButton
                  href={waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2.5 bg-[#FF0A2B] hover:bg-[#E00020] text-white py-3.5 px-6 rounded-xl font-black text-base transition-all shadow-glow-red shimmer-hover"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>تأكيد هذا التقدير والبدء عبر واتساب</span>
                </MagneticButton>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
