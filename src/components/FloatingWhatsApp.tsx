"use client";

import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  return (
    <aside
      aria-label="محادثة واتساب الفورية"
      className="fixed bottom-6 left-6 z-40 flex items-center gap-3 group"
    >
      <div className="hidden sm:block bg-[#1A0509]/95 text-white px-3.5 py-2 rounded-xl text-xs font-bold border border-[#FF0A2B]/40 shadow-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        تواصل معنا مباشرة عبر واتساب
      </div>

      <a
        href="https://wa.me/201064544080?text=مرحباً%20Duck%20Agency،%20أود%20بدء%20مشروعي%20التسويقي"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="تواصل معنا عبر واتساب"
        className="relative w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-2xl hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-40 pointer-events-none" />
        <MessageCircle className="w-8 h-8 fill-current" />
      </a>
    </aside>
  );
}
