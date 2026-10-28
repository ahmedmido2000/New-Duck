"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";

export default function BackToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { scrollTo } = useSmoothScroll();

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.scrollY;
      if (totalScroll > 0) {
        setScrollProgress((currentScroll / totalScroll) * 100);
      }
      setIsVisible(currentScroll > 350);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    scrollTo(0, { duration: 1.4 });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
          aria-label="الرجوع للأعلى"
          className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#1A0509] border border-[#3A0C15] text-white flex items-center justify-center shadow-lg hover:border-[#FF0A2B] transition-colors group cursor-pointer"
        >
          {/* Circular progress SVG */}
          <svg className="absolute inset-0 w-full h-full -rotate-90 pointer-events-none p-0.5">
            <circle
              cx="22"
              cy="22"
              r="20"
              stroke="#2A0509"
              strokeWidth="2.5"
              fill="transparent"
            />
            <circle
              cx="22"
              cy="22"
              r="20"
              stroke="#FF0A2B"
              strokeWidth="2.5"
              strokeDasharray={125.6}
              strokeDashoffset={125.6 - (125.6 * scrollProgress) / 100}
              strokeLinecap="round"
              fill="transparent"
              className="transition-all duration-75"
            />
          </svg>
          <ArrowUp className="w-5 h-5 text-gray-300 group-hover:text-[#FF0A2B] transition-colors" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
