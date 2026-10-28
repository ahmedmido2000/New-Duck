"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, ArrowLeft, MessageCircle } from "lucide-react";

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
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0D0204]/90 backdrop-blur-md border-b border-[#3A0C15]/70 py-3 sm:py-4 shadow-lg shadow-black/40"
          : "bg-transparent py-4 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <Link
          href="#top"
          className="text-3xl sm:text-4xl font-black tracking-tight select-none focus:outline-none"
          style={{ direction: "ltr" }}
          aria-label="Duck Agency"
        >
          <span className="text-[#FF0A2B]">d</span>
          <span className="text-white">uck</span>
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
                className={`relative py-1 transition-colors duration-200 ${
                  isActive
                    ? "text-[#FF0A2B]"
                    : "text-neutral-300 hover:text-white"
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 right-0 left-0 h-[2px] bg-[#FF0A2B] rounded-full animate-fadeIn" />
                )}
              </a>
            );
          })}
        </nav>

        {/* CTA Button (Desktop) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://wa.me/201064544080"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-[#7A0B1A] hover:bg-[#FF0A2B] text-white px-5 py-2.5 rounded-lg font-bold text-sm lg:text-base transition-all duration-300 shadow-md hover:shadow-[#FF0A2B]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>ابدأ مسارك الآن</span>
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
          </a>
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

      {/* Mobile Drawer Menu */}
      <div
        className={`md:hidden fixed inset-x-0 top-[65px] sm:top-[75px] bg-[#12030A]/95 backdrop-blur-xl border-b border-[#3A0C15] transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[420px] opacity-100 shadow-2xl py-6" : "max-h-0 opacity-0 py-0 border-none"
        }`}
      >
        <div className="flex flex-col px-6 gap-4">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between py-2.5 px-3 rounded-lg text-lg font-bold transition-all ${
                  isActive
                    ? "text-[#FF0A2B] bg-[#2A0509]"
                    : "text-neutral-200 hover:text-white hover:bg-white/5"
                }`}
              >
                <span>{link.name}</span>
                {isActive && (
                  <span className="w-2 h-2 rounded-full bg-[#FF0A2B]" />
                )}
              </a>
            );
          })}

          <div className="pt-2 border-t border-[#3A0C15] mt-2">
            <a
              href="https://wa.me/201064544080"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 w-full bg-[#FF0A2B] hover:bg-[#E00020] text-white py-3 rounded-lg font-extrabold text-base transition-colors shadow-lg shadow-[#FF0A2B]/20"
            >
              <MessageCircle className="w-5 h-5" />
              <span>ابدأ مسارك الآن عبر واتساب</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
