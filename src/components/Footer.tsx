"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#0A0103] border-t border-[#3A0C15] py-16 px-4 sm:px-8 lg:px-16 text-neutral-300">
      <div className="max-w-6xl mx-auto">
        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-14 text-right">
          {/* Brand Info */}
          <div className="flex flex-col gap-3">
            <Link
              href="#top"
              className="text-5xl sm:text-6xl font-black text-white tracking-tight"
              style={{ direction: "ltr", textAlign: "right" }}
            >
              <span className="text-[#FF0A2B]">d</span>uck
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
            <h4 className="text-xl sm:text-2xl font-black text-[#FF0A2B] mb-4">
              روابط سريعة
            </h4>
            <ul className="space-y-2.5 text-base font-semibold">
              <li>
                <a href="#top" className="hover:text-white transition-colors">
                  الرئيسية
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  من نحن
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  الخدمات
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-white transition-colors">
                  الأسئلة الشائعة
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  تواصل معنا
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-[#FF0A2B] mb-4">
              خدماتنا
            </h4>
            <ul className="space-y-2.5 text-base font-semibold">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  إنشاء المتاجر الإلكترونية
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  إدارة الحملات الإعلانية
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  تحسين محركات البحث (SEO)
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  تصميم وتطوير المواقع والتطبيقات
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  الهوية البصرية والموشن جرافيك
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links & Back to top */}
          <div>
            <h4 className="text-xl sm:text-2xl font-black text-[#FF0A2B] mb-4">
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
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-11 h-11 rounded-xl bg-[#1A0509] border border-[#3A0C15] hover:bg-[#FF0A2B] hover:text-white text-neutral-300 flex items-center justify-center font-extrabold text-sm transition-all hover:-translate-y-1 shadow-md"
                >
                  {social.name}
                </a>
              ))}
            </div>

            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-2 text-sm text-[#FFB3BE] hover:text-white bg-[#1A0509] border border-[#3A0C15] px-4 py-2 rounded-lg font-bold transition-colors"
            >
              <span>العودة للأعلى</span>
              <ArrowUp className="w-4 h-4" />
            </button>
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
