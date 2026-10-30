"use client";

import PageHeader from "@/components/PageHeader";
import Portfolio from "@/components/Portfolio";
import Partners from "@/components/Partners";
import Consultation from "@/components/Consultation";
import { useLanguage } from "@/context/LanguageContext";

export default function PortfolioPage() {
  const { lang, t } = useLanguage();

  return (
    <div>
      <PageHeader
        kicker={t.portfolio.kicker}
        title={t.portfolio.heading}
        titleHighlight={t.portfolio.headingHighlight}
        subtitle={t.portfolio.subtitle}
        breadcrumbCurrent={lang === "ar" ? "أعمالنا" : "Portfolio"}
      />

      <div className="bg-white text-[#0D0204]">
        {/* Filterable Portfolio Grid */}
        <Portfolio />

        {/* Partners Marquee Strip */}
        <Partners />

        {/* Free Consultation */}
        <Consultation />
      </div>
    </div>
  );
}
