"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Partners, { partnersData } from "@/components/Partners";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import Consultation from "@/components/Consultation";
import { useLanguage } from "@/context/LanguageContext";

export default function PartnersPage() {
  const { lang, t, isRTL } = useLanguage();

  return (
    <div>
      <PageHeader
        kicker={t.partners.kicker}
        title={t.partners.heading}
        titleHighlight={t.partners.headingHighlight}
        subtitle={t.partners.subtitle}
        breadcrumbCurrent={lang === "ar" ? "شركاء النجاح" : "Partners"}
      />

      <div className="bg-white text-[#0D0204]">
        {/* Cinematic Dual Moving Marquee */}
        <Partners />

        {/* In-Depth Institutional Partner Portfolio Grid */}
        <section className="w-full py-16 sm:py-24 bg-white border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold text-[#FF0A2B] uppercase tracking-wider block mb-2">
                {lang === "ar" ? "قائمة الشركاء والمؤسسات" : "Partner Directory"}
              </span>
              <h2 className="text-2xl sm:text-4xl font-black text-[#0D0204] tracking-tight">
                {lang === "ar"
                  ? "علامات وكيانات وثقت في مسار Duck"
                  : "Leading Organizations That Scaled With Duck"}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6">
              {partnersData.map((p, idx) => (
                <motion.div
                  key={p.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.04 }}
                  className="h-full"
                >
                  <TiltCard maxTilt={8} glare={false} className="rounded-2xl h-full">
                    <div
                      className={`group relative rounded-2xl p-5 sm:p-6 flex flex-col justify-between overflow-hidden bg-white border border-gray-200/90 hover:border-[#FF0A2B] shadow-xs hover:shadow-[0_16px_35px_-8px_rgba(255,10,43,0.25)] transition-all duration-300 min-h-[250px] h-full ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      <div className="flex items-center justify-between mb-4">
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-semibold text-gray-600">
                          <span>{p.flag}</span>
                          <span>{lang === "ar" ? p.countryAr : p.countryEn}</span>
                        </span>
                        <CheckCircle2 className="w-4 h-4 text-[#FF0A2B]" />
                      </div>

                      <div
                        className={`w-full h-24 rounded-xl flex items-center justify-center p-3 border my-auto transition-all ${
                          p.bgDark
                            ? "bg-[#0D0204] border-neutral-800"
                            : "bg-white border-gray-100"
                        }`}
                      >
                        <div className="relative w-full h-full">
                          <Image
                            src={`/images/partners/${p.slug}.png`}
                            alt={lang === "ar" ? p.arName : p.enName}
                            fill
                            sizes="120px"
                            className="object-contain group-hover:scale-108 transition-transform duration-300"
                          />
                        </div>
                      </div>

                      <div className="pt-3 border-t border-gray-100 mt-3">
                        <h3 className="text-base font-black text-[#0D0204] group-hover:text-[#FF0A2B] transition-colors leading-snug">
                          {lang === "ar" ? p.arName : p.enName}
                        </h3>
                        <p className="text-xs text-gray-400 font-semibold mt-0.5">
                          {lang === "ar" ? p.categoryAr : p.categoryEn}
                        </p>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>

            {/* Bottom Partnership Invitation CTA */}
            <div className="mt-14 sm:mt-16 text-center">
              <MagneticButton
                href="https://wa.me/201064544080"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 bg-[#FF0A2B] hover:bg-[#E00020] text-white px-8 py-4 rounded-xl font-bold text-sm sm:text-base transition-all shadow-glow-red shimmer-hover"
              >
                <span>{t.partners.ctaButton}</span>
              </MagneticButton>
            </div>
          </div>
        </section>

        <Consultation />
      </div>
    </div>
  );
}
