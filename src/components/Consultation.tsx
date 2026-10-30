"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
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
      className="py-20 sm:py-28 bg-gradient-to-b from-white via-red-50/20 to-white text-center overflow-hidden border-t border-gray-100 relative"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#FF0A2B]/4 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center relative z-10">
        {/* Kicker */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-base sm:text-lg mb-2"
        >
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span>{t.consultation.kicker}</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-[#0D0204] leading-tight mb-4 tracking-tight"
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
          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="submitted"
                initial={{ opacity: 0, scale: 0.9, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ type: "spring", stiffness: 350, damping: 22 }}
                className="bg-white border-2 border-[#FF0A2B] rounded-2xl p-6 sm:p-7 flex items-center justify-center gap-3.5 text-[#0D0204] text-base sm:text-lg font-bold shadow-xl shadow-red-500/10"
              >
                <div className="w-10 h-10 rounded-full bg-[#FF0A2B]/10 flex items-center justify-center text-[#FF0A2B] shrink-0">
                  <CheckCircle2 className="w-6 h-6 text-[#FF0A2B]" />
                </div>
                <span>{t.consultation.success}</span>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-0 shadow-xl rounded-2xl overflow-hidden border border-gray-200/90 focus-within:border-[#FF0A2B] focus-within:shadow-[0_0_25px_rgba(255,10,43,0.2)] transition-all duration-300"
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
                  className={`flex-1 min-h-[58px] bg-white text-black px-6 text-base sm:text-lg outline-none font-cairo placeholder:text-neutral-400 ${
                    isRTL ? "text-right" : "text-left"
                  }`}
                  dir={dir}
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.96 }}
                  className="min-h-[58px] bg-[#FF0A2B] hover:bg-[#E00020] text-white px-8 font-extrabold text-base sm:text-lg transition-colors flex items-center justify-center gap-2 shrink-0 shadow-glow-red shimmer-hover cursor-pointer"
                >
                  <span>{t.consultation.btn}</span>
                  <Send className={`w-4 h-4 ${isRTL ? "rotate-180" : "rotate-0"}`} />
                </motion.button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
