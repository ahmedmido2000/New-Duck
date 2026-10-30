"use client";

import PageHeader from "@/components/PageHeader";
import About from "@/components/About";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
import Consultation from "@/components/Consultation";
import { useLanguage } from "@/context/LanguageContext";

export default function AboutPage() {
  const { lang, t } = useLanguage();

  return (
    <div>
      <PageHeader
        kicker={t.about.kicker}
        title={lang === "ar" ? "وكالة Duck —" : "Duck Agency —"}
        titleHighlight={lang === "ar" ? "للرؤية أثر" : "Impact Through Vision"}
        subtitle={
          lang === "ar"
            ? "نحن شريكك الإبداعي المتكامل لصناعة أثر حقيقي لعلامتك التجارية عبر استراتيجيات مبنية على بيانات وتحقيق أعلى عائد استثماري."
            : "Your integrated creative partner dedicated to engineering tangible brand impact through data-driven strategies and multiplied ROI."
        }
        breadcrumbCurrent={lang === "ar" ? "من نحن" : "About Us"}
      />

      {/* Light Theme Sections Content */}
      <div className="bg-white text-[#0D0204]">
        <About />
        <Features />
        <Metrics />
        {/* Regional Branches: Egypt & Saudi Arabia */}
        <Contact />
        <Consultation />
      </div>
    </div>
  );
}
