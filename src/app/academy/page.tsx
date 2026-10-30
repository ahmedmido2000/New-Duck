"use client";

import { motion } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Users,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import Consultation from "@/components/Consultation";
import { useLanguage } from "@/context/LanguageContext";

export default function AcademyPage() {
  const { lang, t, isRTL } = useLanguage();

  const featureIcons = [Award, Briefcase, Users];

  return (
    <div>
      <PageHeader
        kicker={t.academy.kicker}
        title={lang === "ar" ? "أكاديمية Duck —" : "Duck Academy —"}
        titleHighlight={lang === "ar" ? "للتعليم الرقمي" : "Digital Excellence"}
        subtitle={t.academy.subtitle}
        breadcrumbCurrent={lang === "ar" ? "الأكاديمية" : "Academy"}
      />

      <div className="bg-white text-[#0D0204]">
        {/* ═══════════════ Courses Grid ═══════════════ */}
        <section className="w-full py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
              <span className="text-xs font-bold text-[#FF0A2B] uppercase tracking-wider block mb-2">
                {lang === "ar" ? "برامج تدريبية معتمدة" : "Accredited Career Programs"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0204] tracking-tight">
                {lang === "ar"
                  ? "اختر مسارك الاحترافي وابدأ رحلتك"
                  : "Choose Your Professional Track"}
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
              {t.academy.courses.map((course, idx) => (
                <motion.div
                  key={course.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  className="h-full"
                >
                  <TiltCard maxTilt={6} glare={false} className="h-full">
                    <div
                      className={`h-full rounded-3xl p-7 sm:p-8 flex flex-col justify-between bg-white border border-gray-200/90 shadow-sm hover:border-[#FF0A2B] hover:shadow-[0_20px_45px_-10px_rgba(255,10,43,0.2)] transition-all duration-300 ${
                        isRTL ? "text-right" : "text-left"
                      }`}
                    >
                      <div>
                        {/* Discount Badge & Certification Pill */}
                        <div className="flex items-center justify-between mb-4">
                          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-red-50 text-[#FF0A2B] font-black text-xs border border-red-200/80">
                            <Sparkles className="w-3.5 h-3.5" />
                            <span>{course.discount}</span>
                          </span>

                          <span className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                            <GraduationCap className="w-4 h-4 text-[#FF0A2B]" />
                            <span>{t.academy.certifiedBadge.split(" ")[0]}</span>
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl sm:text-2xl font-black text-[#0D0204] mb-2 leading-snug">
                          {course.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm text-[#555555] leading-relaxed mb-6 font-medium">
                          {course.desc}
                        </p>

                        {/* Price */}
                        <div className="flex items-baseline gap-3 mb-6 p-4 rounded-2xl bg-gray-50 border border-gray-100">
                          <span className="text-3xl sm:text-4xl font-black text-[#FF0A2B] font-mono">
                            {course.price}
                          </span>
                          <span className="text-sm text-gray-400 line-through font-mono">
                            {course.oldPrice}
                          </span>
                          <span className="text-xs text-gray-500 font-semibold mr-auto rtl:mr-auto rtl:ml-0 ltr:ml-auto">
                            {lang === "ar" ? "شامل الاختبار والشهادة" : "Includes exam & certificate"}
                          </span>
                        </div>

                        {/* Curriculum Highlights */}
                        <ul className="space-y-2.5 text-xs sm:text-sm">
                          {course.features.map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5">
                              <CheckCircle2 className="w-4 h-4 text-[#FF0A2B] shrink-0 mt-0.5" />
                              <span className="text-[#444444] font-medium">{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Enroll Button */}
                      <div className="pt-6 mt-6 border-t border-gray-100">
                        <MagneticButton
                          href={`https://wa.me/201064544080?text=${encodeURIComponent(
                            lang === "ar"
                              ? `مرحباً أكاديمية Duck، أرغب في الالتحاق والتسجيل في: ${course.title} (${course.price})`
                              : `Hello Duck Academy, I want to enroll in: ${course.title} (${course.price})`
                          )}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3.5 rounded-xl bg-[#0D0204] hover:bg-[#FF0A2B] text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-xs"
                        >
                          <span>{t.academy.enrollBtn}</span>
                          <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg]" />
                        </MagneticButton>
                      </div>
                    </div>
                  </TiltCard>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ═══════════════ Academy Value Pillars ═══════════════ */}
        <section className="w-full py-16 sm:py-20 bg-[#FAFAFA] border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
              {t.academy.features.map((feat, idx) => {
                const Icon = featureIcons[idx] || Award;
                return (
                  <div
                    key={idx}
                    className={`p-6 sm:p-8 rounded-2xl bg-white border border-gray-200/90 shadow-xs flex flex-col gap-3 ${
                      isRTL ? "text-right" : "text-left"
                    }`}
                  >
                    <div className="w-12 h-12 rounded-xl bg-red-50 border border-red-200/60 flex items-center justify-center text-[#FF0A2B]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-black text-[#0D0204] mt-1">
                      {feat.title}
                    </h3>
                    <p className="text-sm text-[#555555] leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <Consultation />
      </div>
    </div>
  );
}
