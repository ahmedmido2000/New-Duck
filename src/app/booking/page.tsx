"use client";

import PageHeader from "@/components/PageHeader";
import BankTransferSection from "@/components/BankTransferSection";
import FAQ from "@/components/FAQ";
import Consultation from "@/components/Consultation";
import { useLanguage } from "@/context/LanguageContext";

export default function BookingPage() {
  const { lang, t } = useLanguage();

  return (
    <div>
      <PageHeader
        kicker={t.booking.kicker}
        title={lang === "ar" ? "نظام الدراسة،" : "Study System,"}
        titleHighlight={lang === "ar" ? "الحجز والدفع البنكي" : "Booking & Wire Payment"}
        subtitle={t.booking.subtitle}
        breadcrumbCurrent={lang === "ar" ? "الحجز والدفع" : "Booking & Payment"}
      />

      <div className="bg-white text-[#0D0204]">
        {/* Full Bank Transfer & Receipt Upload Component */}
        <BankTransferSection />

        {/* FAQ Section */}
        <FAQ />

        {/* Consultation Section */}
        <Consultation />
      </div>
    </div>
  );
}
