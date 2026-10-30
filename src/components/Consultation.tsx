"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Consultation() {
  const { t, isRTL, dir } = useLanguage();
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section
      dir={dir}
      className="py-20 sm:py-28 bg-gradient-to-b from-white via-red-50/20 to-white text-center overflow-hidden border-t border-gray-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-base sm:text-lg mb-2"
        >
          <Sparkles className="w-5 h-5" />
          <span>{t.consultation.kicker}</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-[#0D0204] leading-tight mb-4"
        >
          {t.consultation.heading}
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-[#444444] leading-relaxed max-w-2xl mb-8 font-normal"
        >
          {t.consultation.subtitle}
        </motion.p>

        {/* Email Consultation Form */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="w-full max-w-xl"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white border border-[#FF0A2B] rounded-2xl p-6 flex items-center justify-center gap-3 text-[#0D0204] text-lg font-bold shadow-md"
            >
              <CheckCircle2 className="w-6 h-6 text-[#FF0A2B] shrink-0" />
              <span>{t.consultation.success}</span>
            </motion.div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-0 shadow-lg rounded-xl overflow-hidden"
            >
              <label htmlFor="emailInput" className="sr-only">
                {isRTL ? "البريد الإلكتروني" : "Email Address"}
              </label>
              <input
                id="emailInput"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.consultation.placeholder}
                className={`flex-1 min-h-[56px] bg-white border border-gray-200 text-black px-5 rounded-xl text-base sm:text-lg outline-none font-cairo placeholder:text-neutral-400 focus:border-[#FF0A2B] ${
                  isRTL
                    ? "sm:border-l-0 sm:rounded-l-none sm:rounded-r-xl text-right"
                    : "sm:border-r-0 sm:rounded-r-none sm:rounded-l-xl text-left"
                }`}
                dir={dir}
              />
              <button
                type="submit"
                className={`min-h-[56px] bg-[#FF0A2B] hover:bg-[#E00020] text-white px-8 rounded-xl font-extrabold text-base sm:text-lg transition-colors flex items-center justify-center gap-2 shrink-0 active:scale-95 shadow-glow-red shimmer-hover ${
                  isRTL
                    ? "sm:rounded-r-none sm:rounded-l-xl"
                    : "sm:rounded-l-none sm:rounded-r-xl"
                }`}
              >
                <span>{t.consultation.btn}</span>
                <Send className={`w-4 h-4 ${isRTL ? "rotate-180" : "rotate-0"}`} />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
