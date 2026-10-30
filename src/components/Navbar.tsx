"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, MessageCircle, Globe } from "lucide-react";
import MagneticButton from "./MagneticButton";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("top");
  const { lang, t, toggleLanguage, isRTL } = useLanguage();

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

  const navLinks = t.nav.links;

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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#top"
          className="group focus:outline-none flex items-center select-none"
          style={{ direction: "ltr" }}
          aria-label="Duck Agency"
        >
          <motion.div
            whileHover={{ scale: 1.06, rotate: -1 }}
            whileTap={{ scale: 0.96 }}
            transition={{ type: "spring", stiffness: 350, damping: 15 }}
            className="relative flex items-center"
          >
            <Image
              src="/images/duck-logo.png"
              alt="Duck Agency"
              width={160}
              height={59}
              priority
              className="h-9 sm:h-11 w-auto object-contain drop-shadow-[0_2px_12px_rgba(255,10,43,0.3)] transition-all duration-300 group-hover:drop-shadow-[0_4px_22px_rgba(255,10,43,0.65)]"
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden md:flex items-center gap-6 lg:gap-8 text-[15px] lg:text-base font-semibold"
          aria-label="Navigation"
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

        {/* Language Switcher + CTA Button (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          {/* Language Switcher Button */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={toggleLanguage}
            aria-label={`Switch language to ${lang === "ar" ? "English" : "العربية"}`}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/15 hover:border-[#FF0A2B]/60 text-white font-bold text-xs sm:text-sm transition-all shadow-sm cursor-pointer group"
          >
            <Globe className="w-3.5 h-3.5 text-[#FF0A2B] group-hover:rotate-45 transition-transform duration-300" />
            <span className="font-semibold tracking-wide">
              {lang === "ar" ? "English" : "العربية"}
            </span>
          </motion.button>

          {/* CTA Button */}
          <MagneticButton
            href="https://wa.me/201064544080"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#7A0B1A] hover:bg-[#FF0A2B] text-white px-5 py-2.5 rounded-lg font-bold text-sm lg:text-base transition-all duration-300 shadow-glow-red shimmer-hover"
          >
            <span>{t.nav.cta}</span>
          </MagneticButton>
        </div>

        {/* Mobile Actions: Language toggle + Hamburger Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            type="button"
            onClick={toggleLanguage}
            aria-label={`Switch language to ${lang === "ar" ? "English" : "العربية"}`}
            className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg bg-white/5 border border-white/15 text-white font-bold text-xs"
          >
            <Globe className="w-3.5 h-3.5 text-[#FF0A2B]" />
            <span>{lang === "ar" ? "EN" : "عربي"}</span>
          </button>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-lg text-neutral-300 hover:text-white hover:bg-[#2A0509] transition-colors focus:outline-none focus:ring-2 focus:ring-[#FF0A2B]"
            aria-expanded={isOpen}
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
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
                    initial={{ opacity: 0, x: isRTL ? 20 : -20 }}
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

              <div className="pt-3 border-t border-[#3A0C15] mt-2 flex flex-col gap-2.5">
                <button
                  type="button"
                  onClick={() => {
                    toggleLanguage();
                    setIsOpen(false);
                  }}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-lg border border-white/20 text-white font-bold text-sm bg-white/5"
                >
                  <Globe className="w-4 h-4 text-[#FF0A2B]" />
                  <span>{lang === "ar" ? "تبديل إلى English" : "Switch to العربية"}</span>
                </button>

                <a
                  href="https://wa.me/201064544080"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-center gap-2 w-full bg-[#FF0A2B] hover:bg-[#E00020] text-white py-3 rounded-lg font-extrabold text-base transition-colors shadow-glow-red shimmer-hover"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{t.nav.cta}</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
