"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  GraduationCap,
  Sparkles,
  Award,
  CheckCircle2,
  ArrowUpRight,
  BookOpen,
  Briefcase,
  Users,
  Layers,
  Code2,
  Languages,
  PenTool,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import TiltCard from "@/components/TiltCard";
import MagneticButton from "@/components/MagneticButton";
import BankTransferSection from "@/components/BankTransferSection";
import Consultation from "@/components/Consultation";
import { useLanguage } from "@/context/LanguageContext";

export default function AcademyPage() {
  const { lang, t, isRTL } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedCourseForBooking, setSelectedCourseForBooking] = useState<string>("graphic-design");

  const featureIcons = [Award, Briefcase, Users];

  const categories = [
    { id: "all", name: t.academy.categories?.all || (lang === "ar" ? "جميع الكورسات" : "All Courses"), icon: Layers },
    { id: "design", name: t.academy.categories?.design || (lang === "ar" ? "التصميم الجرافيكي" : "Graphic Design"), icon: PenTool },
    { id: "tech", name: t.academy.categories?.tech || (lang === "ar" ? "البرمجة وتصميم المواقع" : "Web & UI/UX"), icon: Code2 },
    { id: "languages", name: t.academy.categories?.languages || (lang === "ar" ? "كورسات اللغات" : "Languages"), icon: Languages },
  ];

  const filteredCourses =
    selectedCategory === "all"
      ? t.academy.courses
      : t.academy.courses.filter((c) => c.category === selectedCategory);

  const handleEnrollClick = (courseId: string) => {
    setSelectedCourseForBooking(courseId);
    const target = document.getElementById("booking");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <PageHeader
        kicker={t.academy.kicker}
        title={lang === "ar" ? "أكاديمية Duck —" : "Duck Academy —"}
        titleHighlight={lang === "ar" ? "للتعليم الرقمي والمهارات" : "Digital Excellence"}
        subtitle={t.academy.subtitle}
        breadcrumbCurrent={lang === "ar" ? "الأكاديمية" : "Academy"}
      />

      <div className="bg-white text-[#0D0204]">
        {/* ═══════════════ Filter Tabs & Courses Grid ═══════════════ */}
        <section className="w-full py-16 sm:py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-14">
              <span className="text-xs font-bold text-[#FF0A2B] uppercase tracking-wider block mb-2">
                {lang === "ar" ? "برامج تدريبية معتمدة ومكثفة" : "Accredited Career Programs"}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-[#0D0204] tracking-tight">
                {lang === "ar"
                  ? "اختر مسارك التدريبي وسجّل مكانك"
                  : "Choose Your Professional Track"}
              </h2>
            </div>

            {/* Category Filter Pills */}
            <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 mb-12">
              {categories.map((cat) => {
                const isSelected = selectedCategory === cat.id;
                const Icon = cat.icon;
                return (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "bg-[#FF0A2B] text-white shadow-glow-red scale-105"
                        : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{cat.name}</span>
                  </button>
                );
              })}
            </div>

            {/* Courses Cards Grid */}
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
            >
              <AnimatePresence>
                {filteredCourses.map((course, idx) => (
                  <motion.div
                    key={course.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4, delay: idx * 0.05 }}
                    className="h-full"
                  >
                    <TiltCard maxTilt={6} glare={false} className="h-full">
                      <div
                        className={`h-full rounded-3xl p-6 sm:p-7 flex flex-col justify-between bg-white border border-gray-200/90 shadow-sm hover:border-[#FF0A2B] hover:shadow-[0_20px_45px_-10px_rgba(255,10,43,0.22)] transition-all duration-300 ${
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
                          <h3 className="text-lg sm:text-xl font-black text-[#0D0204] mb-2 leading-snug">
                            {course.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs sm:text-sm text-[#555555] leading-relaxed mb-5 font-medium line-clamp-2">
                            {course.desc}
                          </p>

                          {/* Price Display */}
                          <div className="flex items-baseline gap-3 mb-5 p-3.5 rounded-2xl bg-gray-50 border border-gray-100">
                            <span className="text-2xl sm:text-3xl font-black text-[#FF0A2B] font-mono">
                              {course.price}
                            </span>
                            <span className="text-xs sm:text-sm text-gray-400 line-through font-mono">
                              {course.oldPrice}
                            </span>
                            <span className="text-[11px] text-gray-500 font-semibold mr-auto rtl:mr-auto rtl:ml-0 ltr:ml-auto">
                              {lang === "ar" ? "شامل الاختبار والشهادة" : "Accredited"}
                            </span>
                          </div>

                          {/* Curriculum Highlights */}
                          <ul className="space-y-2 text-xs">
                            {course.features.map((feat, fIdx) => (
                              <li key={fIdx} className="flex items-start gap-2">
                                <CheckCircle2 className="w-3.5 h-3.5 text-[#FF0A2B] shrink-0 mt-0.5" />
                                <span className="text-[#444444] font-medium leading-tight">
                                  {feat}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Enroll Buttons */}
                        <div className="pt-5 mt-6 border-t border-gray-100 flex flex-col sm:flex-row gap-2.5">
                          <button
                            type="button"
                            onClick={() => handleEnrollClick(course.id)}
                            className="flex-1 py-3 px-4 rounded-xl bg-[#0D0204] hover:bg-[#FF0A2B] text-white font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-all shadow-xs cursor-pointer group"
                          >
                            <span>{t.academy.enrollBtn}</span>
                            <ArrowUpRight className="w-4 h-4 rtl:rotate-[-90deg] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </button>

                          <a
                            href={`https://wa.me/201064544080?text=${encodeURIComponent(
                              lang === "ar"
                                ? `مرحباً أكاديمية Duck، أود الاستفسار والتسجيل في: ${course.title} (${course.price})`
                                : `Hello Duck Academy, I want to inquire about: ${course.title} (${course.price})`
                            )}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-3.5 py-3 rounded-xl border border-gray-200 hover:border-[#FF0A2B] hover:bg-red-50 text-[#0D0204] text-xs font-bold transition-all text-center"
                          >
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </TiltCard>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>
          </div>
        </section>

        {/* ═══════════════ Official Bank Transfer & Receipt Upload Section ═══════════════ */}
        <BankTransferSection defaultCourseId={selectedCourseForBooking} />

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
