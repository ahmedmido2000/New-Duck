"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle } from "lucide-react";
import MagneticButton from "./MagneticButton";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);

      const sections = ["top", "about", "services", "faq", "contact"];
      const scrollPosition = window.scrollY + 120;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "الرئيسية", href: "#top", id: "top" },
    { name: "من نحن", href: "#about", id: "about" },
    { name: "الخدمات", href: "#services", id: "services" },
    { name: "الأسئلة الشائعة", href: "#faq", id: "faq" },
    { name: "تواصل معنا", href: "#contact", id: "contact" },
  ];

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0204]/90 backdrop-blur-md border-b border-[#3A0C15]/80 py-3 sm:py-4 shadow-lg shadow-black/40"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#top"
          className="group text-3xl sm:text-4xl font-black tracking-tight select-none focus:outline-none flex items-center"
          style={{ direction: "ltr" }}
          aria-label="Duck Agency"
        >
          <motion.span
            whileHover={{ scale: 1.15, rotate: -5 }}
            transition={{ type: "spring", stiffness: 300, damping: 10 }}
            className="text-[#FF0A2B] inline-block text-glow-red"
          >
            d
          </motion.span>
          <span className="text-white group-hover:text-neutral-200 transition-colors">
            uck
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-[15px] lg:text-base font-semibold"
          aria-label="القائمة الرئيسية"
        >
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                className={`relative py-1 transition-colors duration-200 group ${
                  isActive
                    ? "text-[#FF0A2B]"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute bottom-0 right-0 left-0 h-[2.5px] bg-[#FF0A2B] rounded-full shadow-glow-red"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button (Desktop) with Magnetic Effect */}
        <div className="hidden sm:flex items-center gap-3">
          <MagneticButton
            href="https://wa.me/201064544080"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#7A0B1A] hover:bg-[#FF0A2B] text-white px-5 py-2.5 rounded-lg font-bold text-sm lg:text-base transition-all duration-300 shadow-glow-red shimmer-hover"
          >
            <span>ابدأ مسارك الآن</span>
          </MagneticButton>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-[#2A0509] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF0A2B]"
          aria-expanded={isOpen}
          aria-label={isOpen ? "إغلاق القائمة" : "فتح القائمة"}
        >
          {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer Menu with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] as const }}
            className="md:hidden bg-[#12030A]/95 backdrop-blur-xl border-b border-[#3A0C15] overflow-hidden shadow-2xl"
          >
            <div className="flex flex-col px-6 py-6 gap-3">
              {navLinks.map((link, idx) => {
                const isActive = activeSection === link.id;
                return (
                  <motion.a
                    key={link.id}
                    href={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.05 }}
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-lg font-bold transition-all ${
                      isActive
                        ? "text-[#FF0A2B] bg-[#2A0509]"
                        : "text-neutral-200 hover:text-white hover:bg-white/5"
                    }`}
                  >
                    <span>{link.name}</span>
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#FF0A2B] shadow-glow-red" />
                    )}
                  </motion.a>
                );
              })}

              <div className="pt-3 border-t border-[#3A0C15] mt-2">
                <a
                  href="https://wa.me/201064544080"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#FF0A2B] hover:bg-[#E00020] text-white py-3 rounded-lg font-extrabold text-base transition-colors shadow-glow-red shimmer-hover"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>ابدأ مسارك الآن عبر واتساب</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
