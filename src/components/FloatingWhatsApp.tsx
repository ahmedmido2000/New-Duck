"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Phone, X } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, isRTL, dir } = useLanguage();

  return (
    <aside
      aria-label={t.floatingWhatsApp.ariaLabel}
      className={`fixed bottom-6 ${isRTL ? "left-6" : "right-6"} z-50 flex flex-col items-start gap-3`}
      dir={dir}
    >
      {/* Quick Contact Popup Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className={`w-72 bg-white/95 backdrop-blur-xl border border-gray-200 rounded-2xl p-4 shadow-2xl ${
              isRTL ? "text-right" : "text-left"
            } text-[#0D0204]`}
          >
            <div className="flex items-center justify-between pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
                <span className="font-black text-sm text-[#0D0204]">
                  {t.floatingWhatsApp.title}
                </span>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-black p-1 rounded-lg hover:bg-gray-100 transition-colors"
                aria-label={t.floatingWhatsApp.closeLabel}
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-2.5 mt-3">
              {/* Egypt Branch */}
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-xs text-[#0D0204] flex items-center gap-1.5">
                    <span>🇪🇬</span>
                    <span>{t.floatingWhatsApp.egyptBranch}</span>
                  </div>
                  <div className="text-[11px] font-mono text-gray-500 mt-0.5" style={{ direction: "ltr" }}>
                    +20 10 6454 4080
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href="tel:+201064544080"
                    aria-label={isRTL ? "اتصال بفرع مصر" : "Call Egypt branch"}
                    className="w-8 h-8 rounded-lg bg-[#FF0A2B]/10 hover:bg-[#FF0A2B] text-[#FF0A2B] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`https://wa.me/201064544080?text=${encodeURIComponent(
                      isRTL
                        ? "مرحباً Duck Agency مصر، أود بدء مشروعي التسويقي"
                        : "Hello Duck Agency Egypt, I would like to start my project"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={isRTL ? "واتساب فرع مصر" : "WhatsApp Egypt branch"}
                    className="w-8 h-8 rounded-lg bg-[#25D366] hover:bg-[#20BA5A] text-white flex items-center justify-center transition-colors shadow-md"
                  >
                    <MessageCircle className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Saudi Arabia Branch */}
              <div className="p-2.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-between gap-2">
                <div>
                  <div className="font-bold text-xs text-[#0D0204] flex items-center gap-1.5">
                    <span>🇸🇦</span>
                    <span>{t.floatingWhatsApp.saudiBranch}</span>
                  </div>
                  <div className="text-[11px] font-mono text-gray-500 mt-0.5" style={{ direction: "ltr" }}>
                    +966 57 939 8098
                  </div>
                </div>
                <div className="flex items-center gap-1.5 shrink-0">
                  <a
                    href="tel:+966579398098"
                    aria-label={isRTL ? "اتصال بفرع السعودية" : "Call Saudi branch"}
                    className="w-8 h-8 rounded-lg bg-[#FF0A2B]/10 hover:bg-[#FF0A2B] text-[#FF0A2B] hover:text-white flex items-center justify-center transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={`https://wa.me/966579398098?text=${encodeURIComponent(
                      isRTL
                        ? "مرحباً Duck Agency السعودية، أود بدء مشروعي التسويقي"
                        : "Hello Duck Agency Saudi Arabia, I would like to start my project"
                    )}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={isRTL ? "واتساب فرع السعودية" : "WhatsApp Saudi branch"}
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
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label={t.floatingWhatsApp.ariaLabel}
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 pointer-events-none" />
        {isOpen ? (
          <X className="w-7 h-7" />
        ) : (
          <MessageCircle className="w-8 h-8 fill-current" />
        )}
      </button>
    </aside>
  );
}
