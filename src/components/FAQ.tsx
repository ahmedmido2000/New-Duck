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
    <section id="faq" className="py-20 sm:py-28 bg-white overflow-hidden border-t border-gray-100">
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
          <span>{t.faq.kicker}</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-[#0D0204] leading-tight mb-10 text-center"
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
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl bg-white shadow-sm overflow-hidden transition-colors hover:border-[#FF0A2B]/40"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? null : index)}
                  className={`w-full flex items-center justify-between p-5 font-extrabold text-base sm:text-lg text-[#0D0204] hover:text-[#FF0A2B] transition-colors focus:outline-none ${
                    isRTL ? "text-right" : "text-left"
                  }`}
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
                      <div className="px-5 pb-5 text-sm sm:text-base text-[#444444] leading-relaxed border-t border-gray-100 pt-3">
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
