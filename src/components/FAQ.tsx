"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "كيف تختلف Duck Agency عن أي وكالة تسويق أخرى؟",
      a: "نحن لا نعتمد حلولاً جاهزة أو قوالب معلبة. نبدأ بدراسة عميقة لنشاطك التجاري ومنافسيك وسلوك جمهورك الحقيقي، ثم نصمم استراتيجية نمو مخصصة بالكامل تركز على تحقيق أعلى عائد استثماري (ROI).",
    },
    {
      q: "كم يستغرق إطلاق الحملة الإعلانية أو المتجر الإلكتروني؟",
      a: "يعتمد على حجم المشروع؛ فالحملات الإعلانية السريعة تبدأ خلال 48 إلى 72 ساعة بعد إعداد البنية التحتية والتحليلات. أما المتاجر الإلكترونية المتكاملة فتستغرق عادة بين 7 إلى 14 يوم عمل مع الاختبارات الكاملة.",
    },
    {
      q: "هل تدعمون العملاء خارج مصر والمملكة العربية السعودية؟",
      a: "نعم بكل تأكيد! نحن ندير حملات ومشاريع لعملاء في مصر، السعودية، الإمارات، والكويت وقطر، ونفهم الطبيعة الاستهلاكية لكل سوق عربي بعناية.",
    },
    {
      q: "كيف أضمن متابعة نتائج الإعلانات والمبيعات؟",
      a: "نوفر لوحات تحكم تفاعلية وتقارير دورية شفافة توضح كل دولار أُنفق، عدد الزيارات، تكلفة الاكتساب (CPA)، والمبيعات المباشرة المحققة.",
    },
  ];

  return (
    <section id="faq" className="py-20 sm:py-28 bg-[#12030A] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-base sm:text-lg mb-2"
        >
          <HelpCircle className="w-5 h-5" />
          <span>الأسئلة الشائعة</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-white leading-tight mb-10 text-center"
        >
          الأسئلة الأكثر شيوعاً
        </motion.h2>

        {/* FAQ Accordion */}
        <div className="w-full text-right space-y-4 max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-[#3A0C15] rounded-xl bg-[#1A0509]/80 overflow-hidden transition-colors hover:border-[#FF0A2B]/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-right font-extrabold text-base sm:text-lg text-white hover:text-[#FF0A2B] transition-colors focus:outline-none"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#FF0A2B] shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-sm sm:text-base text-[#C9A4A8] leading-relaxed border-t border-[#3A0C15]/50 pt-3">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
