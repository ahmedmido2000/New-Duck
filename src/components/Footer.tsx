"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { scrollTo } = useSmoothScroll();
  const { t, isRTL, dir } = useLanguage();

  const handleScrollToTop = () => {
    scrollTo(0, { duration: 1.4 });
  };

  const socialLinks = [
    {
      name: "Instagram",
      label: "Instagram",
      href: "https://www.instagram.com/duck.agency12?srtk=MXB6YjBiOHBndzZldA==",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      label: "TikTok",
      href: "https://www.tiktok.com/@duck.agency?_r=1&_t=ZS-9AjmIwKc6dk",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.75 1.34-.04 2.57-.86 3.07-2.11.23-.53.33-1.11.33-1.69.04-4.87.02-9.75.02-14.63z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      label: "Facebook",
      href: "https://www.facebook.com/share/1BsYQg8BNX/",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "X",
      label: "X (Twitter)",
      href: "https://x.com/DuckAgencyen",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "Snapchat",
      label: "Snapchat",
      href: "https://www.snapchat.com/add/duck.agency?share_id=iB7Xi4mfXbA&locale=ar-EG",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12.017 24c6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641 0 12.017 0z" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      dir={dir}
      className="bg-white border-t border-gray-200 py-16 sm:py-20 text-neutral-800 overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Grid */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {/* Brand Info & Slogan */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="inline-block" aria-label="Duck Agency">
              <motion.div
                whileHover={{ scale: 1.06, rotate: -1 }}
                transition={{ type: "spring", stiffness: 350, damping: 12 }}
                className="relative inline-flex items-center justify-center bg-[#0D0204] rounded-xl px-4 py-2.5 border border-[#FF0A2B]/30 shadow-[0_4px_20px_rgba(255,10,43,0.12)] hover:shadow-[0_4px_24px_rgba(255,10,43,0.28)] transition-shadow duration-300"
              >
                <Image
                  src="/images/duck-logo.png"
                  alt="Duck Agency"
                  width={140}
                  height={52}
                  className="h-10 w-auto object-contain"
                />
              </motion.div>
            </Link>

            {/* Slogan */}
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#FF0A2B]" />
              <span className="text-base font-black text-[#0D0204] tracking-wide">
                {t.footer.sloganPart1}{" "}
                <span className="text-[#FF0A2B]">{t.footer.sloganPart2}</span>
              </span>
            </div>

            <div className="text-xs tracking-[3px] text-[#FF0A2B] font-extrabold uppercase">
              {t.footer.tagline}
            </div>
            <p className="text-sm text-[#555555] leading-relaxed mt-1">
              {t.footer.desc}
            </p>
          </div>

          {/* Quick Links with Sliding Animated Underline */}
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-[#0D0204] mb-4">
              {t.footer.quickLinksTitle}
            </h4>
            <ul className="space-y-2.5 text-base font-semibold">
              {t.nav.links.map((link) => (
                <li key={link.id}>
                  <Link
                    href={link.href}
                    className="relative text-[#444444] hover:text-[#FF0A2B] transition-colors inline-block group/link"
                  >
                    <span>{link.name}</span>
                    <span className="absolute bottom-0 right-0 rtl:right-0 rtl:left-auto left-0 w-0 group-hover/link:w-full h-[2px] bg-[#FF0A2B] transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services (خدماتنا) */}
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-[#0D0204] mb-4">
              {t.footer.servicesTitle}
            </h4>
            <ul className="space-y-2.5 text-base font-semibold">
              {t.footer.servicesList.map((svc, idx) => (
                <li key={idx}>
                  <Link
                    href="/services"
                    className="relative text-[#444444] hover:text-[#FF0A2B] transition-colors inline-block group/link"
                  >
                    <span>{svc}</span>
                    <span className="absolute bottom-0 right-0 rtl:right-0 rtl:left-auto left-0 w-0 group-hover/link:w-full h-[2px] bg-[#FF0A2B] transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Back to top */}
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-[#0D0204] mb-4">
              {t.footer.socialTitle}
            </h4>
            <p className="text-sm text-[#555555] mb-4">
              {t.footer.socialDesc}
            </p>
            <div className="flex flex-wrap gap-2.5 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -5, scale: 1.15, backgroundColor: "#FF0A2B", color: "#ffffff" }}
                  whileTap={{ scale: 0.92 }}
                  transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  className="w-10 h-10 rounded-xl bg-gray-100 border border-gray-200 text-[#0D0204] flex items-center justify-center transition-colors shadow-sm hover:border-[#FF0A2B] hover:shadow-lg hover:shadow-red-500/20"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-2 text-sm text-[#0D0204] hover:text-white bg-gray-100 hover:bg-[#FF0A2B] border border-gray-200 hover:border-[#FF0A2B] px-4 py-2.5 rounded-xl font-bold transition-all shadow-sm cursor-pointer"
            >
              <span>{t.footer.backToTop}</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-gray-500">
          <div>
            {t.footer.rights} {new Date().getFullYear()}{" "}
            <span className="text-[#FF0A2B] font-bold">Duck Agency</span> · {t.footer.rightsEnd}
          </div>
          <div className="flex gap-4">
            <span className="hover:text-black cursor-pointer transition-colors">
              {t.footer.privacy}
            </span>
            <span>·</span>
            <span className="hover:text-black cursor-pointer transition-colors">
              {t.footer.terms}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
