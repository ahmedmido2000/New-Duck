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

  return (
    <footer className="bg-[#0A0103] border-t border-[#3A0C15] py-16 px-4 sm:px-8 lg:px-16 text-neutral-300 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14 text-right">
          {/* Brand Info */}
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
            <div
              className="text-xs tracking-[3px] text-[#C9A4A8] font-bold"
              style={{ direction: "ltr", textAlign: "right" }}
            >
              DIGITAL MEDIA AGENCY
            </div>
            <p className="text-sm text-[#C9A4A8] leading-relaxed mt-2">
              وكالة رائدة في بناء العلامات التجارية وإدارة الحملات الإعلانية وتطوير المتاجر الإلكترونية في مصر والخليج العربي.
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

          {/* Our Services */}
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
              تواصل معنا
            </h4>
            <p className="text-sm text-[#C9A4A8] mb-4">
              تابعنا على منصات التواصل لمشاهدة آخر أعمالنا ونصائح النمو التسويقي.
            </p>
            <div className="flex gap-2.5 mb-6">
              {[
                { name: "IG", label: "Instagram", href: "https://instagram.com" },
                { name: "FB", label: "Facebook", href: "https://facebook.com" },
                { name: "X", label: "X / Twitter", href: "https://x.com" },
                { name: "TT", label: "TikTok", href: "https://tiktok.com" },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  whileHover={{ y: -4, scale: 1.1, backgroundColor: "#FF0A2B", color: "#ffffff" }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 rounded-xl bg-[#1A0509] border border-[#3A0C15] text-neutral-300 flex items-center justify-center font-extrabold text-sm transition-colors shadow-md"
                >
                  {social.name}
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
            <span className="text-[#FF0A2B] font-bold">Duck Agency</span>.
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
