"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const { t, isRTL } = useLanguage();
  const faqs = t.faq.items;

  return (
    <section id="faq" className="py-20 sm:py-28 bg-white overflow-hidden border-t border-gray-100 relative">
      {/* Background Ambience */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF0A2B]/3 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-base sm:text-lg mb-2"
        >
          <HelpCircle className="w-5 h-5 animate-pulse" />
          <span>{t.faq.kicker}</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-[#0D0204] leading-tight mb-10 sm:mb-12 text-center tracking-tight"
        >
          {t.faq.heading}
        </motion.h2>

        {/* FAQ Accordion */}
        <div className={`w-full space-y-4 max-w-3xl mx-auto ${isRTL ? "text-right" : "text-left"}`}>
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                layout
                className={`rounded-2xl bg-white overflow-hidden transition-all duration-300 border ${
                  isOpen
                    ? "border-[#FF0A2B] shadow-lg shadow-red-500/10"
                    : "border-gray-200/90 hover:border-[#FF0A2B]/50 shadow-sm"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className={`w-full flex items-center justify-between p-5 sm:p-6 font-extrabold text-base sm:text-lg transition-colors focus:outline-none ${
                    isOpen ? "text-[#FF0A2B]" : "text-[#0D0204] hover:text-[#FF0A2B]"
                  } ${isRTL ? "text-right" : "text-left"}`}
                >
                  <span className="pr-3 rtl:pr-0 rtl:pl-3">{faq.q}</span>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ type: "spring", stiffness: 350, damping: 20 }}
                    className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-200 group-hover:border-[#FF0A2B]/40"
                  >
                    <ChevronDown className="w-4 h-4 text-[#FF0A2B]" />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 sm:px-6 pb-6 text-sm sm:text-base text-[#444444] leading-relaxed border-t border-gray-100 pt-4 font-medium">
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
