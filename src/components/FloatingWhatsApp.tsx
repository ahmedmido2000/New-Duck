"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      aria-label="محادثة واتساب والاتصال السريع"
      className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-3"
      dir="rtl"
    >
      {/* Quick Contact Popup Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="w-72 bg-[#1A0509]/95 backdrop-blur-xl border border-[#FF0A2B]/40 rounded-2xl p-4 shadow-2xl text-right text-white"
          >
            <div className="flex items-center justify-between pb-3 border-b border-[#3A0C15]">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-black text-sm text-white">تواصل سريع ومباشر</span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-[#C9A4A8] hover:text-white p-1 rounded-lg hover:bg-white/10 transition-colors"
                aria-label="إغلاق النافذة"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#C9A4A8] my-3 leading-relaxed">
              اختر الفرع الأنسب لك للمحادثة الفورية عبر واتساب أو الاتصال الهاتفي المباشر:
            </p>

            <div className="space-y-2.5">
              {/* Egypt Branch */}
              <div className="p-2.5 rounded-xl bg-[#2A0509] border border-[#3A0C15] flex items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-xs text-white flex items-center gap-1.5">
                    <span>🇪🇬</span>
                    <span>فرع مصر</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#C9A4A8] mt-0.5" style={{ direction: "ltr" }}>
                    +20 10 6454 4080
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href="tel:+201064544080"
                    aria-label="اتصال بفرع مصر"
                    className="w-8 h-8 rounded-lg bg-[#FF0A2B]/20 hover:bg-[#FF0A2B] text-[#FF0A2B] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://wa.me/201064544080?text=مرحباً%20Duck%20Agency%20مصر،%20أود%20بدء%20مشروعي%20التسويقي"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="واتساب فرع مصر"
                    className="w-8 h-8 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Saudi Arabia Branch */}
              <div className="p-2.5 rounded-xl bg-[#2A0509] border border-[#3A0C15] flex items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-xs text-white flex items-center gap-1.5">
                    <span>🇸🇦</span>
                    <span>فرع السعودية</span>
                  </div>
                  <div className="text-[11px] font-mono text-[#C9A4A8] mt-0.5" style={{ direction: "ltr" }}>
                    +966 57 939 8098
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href="tel:+966579398098"
                    aria-label="اتصال بفرع السعودية"
                    className="w-8 h-8 rounded-lg bg-[#FF0A2B]/20 hover:bg-[#FF0A2B] text-[#FF0A2B] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="https://wa.me/966579398098?text=مرحباً%20Duck%20Agency%20السعودية،%20أود%20بدء%20مشروعي%20التسويقي"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="واتساب فرع السعودية"
                    className="w-8 h-8 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Trigger Button */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="تواصل معنا عبر واتساب والاتصال السريع"
          className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
        >
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 pointer-events-none" />
          {isOpen ? (
            <X className="w-7 h-7" />
          ) : (
            <MessageCircle className="w-8 h-8 fill-current" />
          )}
        </button>

        {!isOpen && (
          <div className="hidden sm:block bg-[#1A0509]/95 text-white px-3.5 py-2 rounded-xl text-xs font-bold border border-[#FF0A2B]/40 shadow-xl pointer-events-none">
            تواصل معنا عبر واتساب 🇪🇬 🇸🇦
          </div>
        )}
      </div>
    </aside>
  );
}
