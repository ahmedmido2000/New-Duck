"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Sparkles } from "lucide-react";

export default function Consultation() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
  };

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#12030A] to-[#3A0610] text-center overflow-hidden">
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
          <span>استشارة مجانية</span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4 text-glow-red"
        >
          ابدأ مشروعك الآن
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-base sm:text-xl text-[#FFB3BE] leading-relaxed max-w-2xl mb-8 font-normal"
        >
          احصل على استشارة تسويقية مجانية وحوّل أفكارك إلى واقع رقمي مربح. ادخل بريدك الإلكتروني وسيتواصل معك خبراؤنا خلال 24 ساعة.
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
              className="bg-[#1A0509] border border-[#FF0A2B] rounded-2xl p-6 flex items-center justify-center gap-3 text-white text-lg font-bold shadow-glow-red"
            >
              <CheckCircle2 className="w-6 h-6 text-[#FF0A2B] shrink-0" />
              <span>شكراً لتسجيلك! سيتواصل معك فريق Duck Agency قريباً.</span>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-0 shadow-2xl">
              <label htmlFor="emailInput" className="sr-only">
                البريد الإلكتروني
              </label>
              <input
                id="emailInput"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني..."
                className="flex-1 min-h-[56px] bg-white text-black px-5 rounded-xl sm:rounded-l-none sm:rounded-r-xl text-base sm:text-lg outline-none font-cairo placeholder:text-neutral-500 text-right focus:ring-2 focus:ring-[#FF0A2B]"
                dir="rtl"
              />
              <button
                type="submit"
                className="min-h-[56px] bg-[#FF0A2B] hover:bg-[#E00020] text-white px-8 rounded-xl sm:rounded-r-none sm:rounded-l-xl font-extrabold text-base sm:text-lg transition-colors flex items-center justify-center gap-2 shrink-0 active:scale-95 shadow-glow-red shimmer-hover"
              >
                <span>سجّل الآن</span>
                <Send className="w-4 h-4 rotate-180" />
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
