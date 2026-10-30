"use client";

import PageHeader from "@/components/PageHeader";
import Services from "@/components/Services";
import AIEcosystem from "@/components/AIEcosystem";
import Integrations from "@/components/Integrations";
import Consultation from "@/components/Consultation";
import { useLanguage } from "@/context/LanguageContext";

export default function ServicesPage() {
  const { lang, t } = useLanguage();

  return (
    <div>
      <PageHeader
        kicker={t.services.kicker}
        title={lang === "ar" ? "منظومة خدمات" : "Our Integrated"}
        titleHighlight={lang === "ar" ? "Duck المتكاملة" : "Digital Services"}
        subtitle={
          lang === "ar"
            ? "نبدأ معك من الفكرة وبناء الهوية، مروراً بإنشاء المتاجر والمنصات، وحتى إدارة الحملات الإعلانية الذكية لتحقيق أعلى عائد استثماري ونمو متواصل."
            : "From brand architecture to high-performance e-commerce and automated ad management, we engineer sustainable growth for your business."
        }
        breadcrumbCurrent={lang === "ar" ? "خدماتنا" : "Services"}
      />

      {/* Main Services Flow */}
      <div className="bg-white text-[#0D0204]">
        <Services />
        <AIEcosystem />
        <Integrations />
        <Consultation />
      </div>
    </div>
  );
}
