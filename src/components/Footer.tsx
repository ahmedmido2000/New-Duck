"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useSmoothScroll } from "./SmoothScrollProvider";

export default function Footer() {
  const { scrollTo } = useSmoothScroll();

  const handleScrollToTop = () => {
    scrollTo(0, { duration: 1.4 });
  };

  const socialLinks = [
    {
      name: "Instagram",
      label: "Instagram",
      href: "https://instagram.com/duckagency",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
        </svg>
      ),
    },
    {
      name: "TikTok",
      label: "TikTok",
      href: "https://tiktok.com/@duckagency",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.24 1.07-.14 1.61.24 1.64 1.82 2.89 3.5 2.75 1.34-.04 2.57-.86 3.07-2.11.23-.53.33-1.11.33-1.69.04-4.87.02-9.75.02-14.63z" />
        </svg>
      ),
    },
    {
      name: "Facebook",
      label: "Facebook",
      href: "https://facebook.com/duckagency",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
        </svg>
      ),
    },
    {
      name: "X",
      label: "X (Twitter)",
      href: "https://x.com/duckagency",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      label: "LinkedIn",
      href: "https://linkedin.com/company/duckagency",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-[#0A0103] border-t border-[#3A0C15] py-16 text-neutral-300 overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14 text-right">
          {/* Brand Info & Slogan */}
          <div className="flex flex-col gap-3">
            <Link
              href="#top"
              className="group text-5xl sm:text-6xl font-black text-white tracking-tight"
              style={{ direction: "ltr", textAlign: "right" }}
            >
              <span className="text-[#FF0A2B] text-glow-red inline-block group-hover:scale-105 transition-transform">
                d
              </span>
              uck
            </Link>
            
            {/* Slogan from PDF: للرؤية أثر */}
            <div className="flex items-center gap-2">
              <span className="w-4 h-[2px] bg-[#FF0A2B]" />
              <span className="text-base font-black text-white tracking-wide">
                للرؤية <span className="text-[#FF0A2B]">أثر</span>
              </span>
            </div>

            <div
              className="text-xs tracking-[3px] text-[#C9A4A8] font-bold"
              style={{ direction: "ltr", textAlign: "right" }}
            >
              DIGITAL MEDIA AGENCY
            </div>
            <p className="text-sm text-[#C9A4A8] leading-relaxed mt-1">
              شركة دعاية وتسويق تقدم حلولاً متكاملة للشركات والمشاهير والأفراد، تبدأ من بناء الهوية وإدارة السوشيال ميديا وحتى المونتاج والتصميم والكورسات.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-[#FF0A2B] mb-4 text-glow-red">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-base font-semibold">
              {["الرئيسية", "من نحن", "الخدمات", "الأسئلة الشائعة", "تواصل معنا"].map((item, idx) => {
                const hrefs = ["#top", "#about", "#services", "#faq", "#contact"];
                return (
                  <li key={idx}>
                    <a
                      href={hrefs[idx]}
                      className="hover:text-[#FF0A2B] transition-colors hover:translate-x-1 inline-block"
                    >
                      {item}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Our Services (خدماتنا) */}
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-[#FF0A2B] mb-4 text-glow-red">
              خدماتنا
            </h4>
            <ul className="space-y-2.5 text-base font-semibold">
              {[
                "إنشاء المتاجر الإلكترونية",
                "إدارة الحملات الإعلانية",
                "تحسين محركات البحث (SEO)",
                "تصميم وتطوير المواقع والتطبيقات",
                "الهوية البصرية والموشن جرافيك",
              ].map((svc, idx) => (
                <li key={idx}>
                  <a
                    href="#services"
                    className="hover:text-[#FF0A2B] transition-colors hover:translate-x-1 inline-block"
                  >
                    {svc}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links & Back to top */}
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-[#FF0A2B] mb-4 text-glow-red">
              وسائل التواصل
            </h4>
            <p className="text-sm text-[#C9A4A8] mb-4">
              تابعنا على منصات التواصل الاجتماعي لمشاهدة آخر أعمالنا الإبداعية.
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1, backgroundColor: "#FF0A2B", color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-[#1A0509] border border-[#3A0C15] text-neutral-300 flex items-center justify-center transition-colors shadow-md hover:border-[#FF0A2B]"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>

            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleScrollToTop}
              className="inline-flex items-center gap-2 text-sm text-[#FFB3BE] hover:text-white bg-[#1A0509] border border-[#3A0C15] hover:border-[#FF0A2B] px-4 py-2.5 rounded-lg font-bold transition-all shadow-glow-red"
            >
              <span>العودة للأعلى</span>
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[#3A0C15] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-[#C9A4A8]">
          <div>
            جميع الحقوق محفوظة © {new Date().getFullYear()}{" "}
            <span className="text-[#FF0A2B] font-bold">Duck Agency</span> · للرؤية أثر.
          </div>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">
              سياسة الخصوصية
            </span>
            <span>·</span>
            <span className="hover:text-white cursor-pointer transition-colors">
              الشروط والأحكام
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
