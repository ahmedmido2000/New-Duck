"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Copy,
  Check,
  UploadCloud,
  CheckCircle2,
  Video,
  FileCheck2,
  Headphones,
  History,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  X,
  CreditCard,
  MessageCircle,
  FileText,
} from "lucide-react";
import MagneticButton from "./MagneticButton";
import TiltCard from "./TiltCard";
import { useLanguage } from "@/context/LanguageContext";

interface BankTransferSectionProps {
  defaultCourseId?: string;
}

export default function BankTransferSection({
  defaultCourseId,
}: BankTransferSectionProps) {
  const { lang, t, isRTL } = useLanguage();
  const [copied, setCopied] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState(
    defaultCourseId || "graphic-design"
  );
  const [studentName, setStudentName] = useState("");
  const [studentPhone, setStudentPhone] = useState("");
  const [receiptFile, setReceiptFile] = useState<File | null>(null);
  const [receiptPreview, setReceiptPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const b = t.booking;
  const accountNumber = "4133012119700900016";
  const accountHolder =
    lang === "ar"
      ? "إسلام محمد عبدالمحسن محمد"
      : "Islam Mohamed Abdelmohsen Mohamed";

  const handleCopy = () => {
    navigator.clipboard.writeText(accountNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setReceiptFile(file);
      if (file.type.startsWith("image/")) {
        setReceiptPreview(URL.createObjectURL(file));
      } else {
        setReceiptPreview(null);
      }
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      setReceiptFile(file);
      if (file.type.startsWith("image/")) {
        setReceiptPreview(URL.createObjectURL(file));
      } else {
        setReceiptPreview(null);
      }
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName || !studentPhone) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccessModalOpen(true);
    }, 700);
  };

  const studyIcons = [Video, FileCheck2, Headphones, History];

  const courseOptions = t.academy.courses.map((c) => ({
    id: c.id,
    label: `${c.title} (${c.price} ${c.discount ? `— ${c.discount}` : ""})`,
  }));

  const selectedCourseObj = t.academy.courses.find(
    (c) => c.id === selectedCourse
  );

  return (
    <section
      id="booking"
      className="w-full py-16 sm:py-24 bg-[#0D0204] text-white relative overflow-hidden"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#FF0A2B]/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 -left-20 w-96 h-96 bg-[#FF0A2B]/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#FF0A2B] text-xs sm:text-sm font-extrabold uppercase tracking-wider mb-4">
            <Sparkles className="w-4 h-4" />
            <span>{b.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            {b.heading}
          </h2>

          <p className="text-base sm:text-lg text-neutral-300 mt-4 leading-relaxed font-normal">
            {b.subtitle}
          </p>
        </div>

        {/* ══════════════ 1. نظام الدراسة (Study System) ══════════════ */}
        <div className="mb-14 sm:mb-20">
          <div className="text-center sm:text-start mb-6">
            <span className="text-xs font-bold text-[#FF0A2B] uppercase tracking-wider block">
              {b.studySystem.badge}
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white mt-1">
              {b.studySystem.title}
            </h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {b.studySystem.points.map((point, idx) => {
              const Icon = studyIcons[idx] || Video;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="p-6 rounded-2xl bg-[#160408]/90 border border-[#3A0C15] hover:border-[#FF0A2B]/60 shadow-lg flex flex-col justify-between group transition-all"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2A050A] border border-[#FF0A2B]/40 text-[#FF0A2B] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <p className="text-sm sm:text-base font-semibold text-neutral-200 leading-relaxed">
                    {point}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* ══════════════ 2. طرق الدفع والتحويل البنكي + رفع الإيصال ══════════════ */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: Official Bank Wire Card */}
          <div className="lg:col-span-5 space-y-6">
            <TiltCard maxTilt={8} glare={true} className="rounded-3xl">
              <div className="p-7 sm:p-9 rounded-3xl bg-gradient-to-br from-[#1C050B] via-[#120206] to-[#0A0103] border border-[#FF0A2B]/40 shadow-[0_20px_50px_-10px_rgba(255,10,43,0.3)] relative overflow-hidden">
                <div className="absolute top-0 inset-x-8 h-[2px] bg-gradient-to-r from-transparent via-[#FF0A2B] to-transparent" />
                <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#FF0A2B]/20 rounded-full blur-3xl pointer-events-none" />

                {/* Card Top */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-2 text-xs font-bold px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white">
                    <CreditCard className="w-4 h-4 text-[#FF0A2B]" />
                    <span>{b.bankTransfer.badge}</span>
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400">
                    BANK WIRE
                  </span>
                </div>

                {/* Account Holder */}
                <div className="mb-6">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider block mb-1">
                    {b.bankTransfer.holderLabel}
                  </span>
                  <p className="text-lg sm:text-xl font-black text-white tracking-wide">
                    {accountHolder}
                  </p>
                </div>

                {/* Account Number with 1-Click Copy */}
                <div className="mb-6 p-4 rounded-2xl bg-black/50 border border-white/10 flex flex-col gap-2">
                  <span className="text-xs font-bold text-neutral-400 uppercase tracking-wider">
                    {b.bankTransfer.accountLabel}
                  </span>
                  <div className="flex items-center justify-between gap-2">
                    <span
                      className="text-lg sm:text-2xl font-mono font-black text-[#FF0A2B] tracking-wider select-all"
                      style={{ direction: "ltr" }}
                    >
                      {accountNumber}
                    </span>
                    <button
                      type="button"
                      onClick={handleCopy}
                      className={`inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all shrink-0 cursor-pointer ${
                        copied
                          ? "bg-green-600 text-white"
                          : "bg-white/10 hover:bg-[#FF0A2B] text-white"
                      }`}
                      aria-label="Copy bank account number"
                    >
                      {copied ? (
                        <>
                          <Check className="w-4 h-4" />
                          <span>{b.bankTransfer.copiedBtn}</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-4 h-4" />
                          <span>{b.bankTransfer.copyBtn}</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>

                {/* Bank Instructions */}
                <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed border-t border-white/10 pt-4">
                  {b.bankTransfer.instruction}
                </p>
              </div>
            </TiltCard>

            {/* Quick WhatsApp Support Box */}
            <div className="p-5 rounded-2xl bg-[#160408] border border-[#3A0C15] flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-green-500/10 text-green-400 flex items-center justify-center shrink-0">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white">
                    {lang === "ar" ? "تحتاج مساعدة بالحجز؟" : "Need help with booking?"}
                  </h4>
                  <p className="text-xs text-neutral-400">
                    {lang === "ar" ? "فريقنا متاح 24/7 عبر واتساب" : "Support available 24/7 on WhatsApp"}
                  </p>
                </div>
              </div>
              <a
                href="https://wa.me/201064544080?text=مرحباً%20Duck%20أحتاج%20مساعدة%20في%20الحجز%20والدفع"
                target="_blank"
                rel="noopener noreferrer"
                className="px-3.5 py-2 rounded-xl bg-white/5 hover:bg-[#FF0A2B] text-white text-xs font-bold transition-colors shrink-0"
              >
                {lang === "ar" ? "تواصل معنا" : "Contact"}
              </a>
            </div>
          </div>

          {/* Right Column: Receipt Upload Form */}
          <div className="lg:col-span-7">
            <div className="p-7 sm:p-9 rounded-3xl bg-[#140307]/95 border border-[#3A0C15] shadow-2xl relative">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-bold text-[#FF0A2B] uppercase tracking-wider block mb-1">
                    {b.receiptUpload.badge}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-black text-white">
                    {b.receiptUpload.title}
                  </h3>
                </div>
                <FileText className="w-6 h-6 text-[#FF0A2B]" />
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Course Selection */}
                <div>
                  <label className="text-xs font-bold text-neutral-300 block mb-2">
                    {b.receiptUpload.courseLabel}
                  </label>
                  <select
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                    className="w-full bg-[#0D0204] border border-white/15 focus:border-[#FF0A2B] rounded-xl px-4 py-3 text-sm text-white focus:outline-none transition-colors"
                  >
                    {courseOptions.map((opt) => (
                      <option key={opt.id} value={opt.id} className="bg-[#120206] text-white">
                        {opt.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Phone in 2 Columns */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-neutral-300 block mb-2">
                      {b.receiptUpload.nameLabel}
                    </label>
                    <input
                      type="text"
                      required
                      value={studentName}
                      onChange={(e) => setStudentName(e.target.value)}
                      placeholder={b.receiptUpload.namePlaceholder}
                      className="w-full bg-[#0D0204] border border-white/15 focus:border-[#FF0A2B] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-neutral-300 block mb-2">
                      {b.receiptUpload.phoneLabel}
                    </label>
                    <input
                      type="tel"
                      required
                      value={studentPhone}
                      onChange={(e) => setStudentPhone(e.target.value)}
                      placeholder={b.receiptUpload.phonePlaceholder}
                      className="w-full bg-[#0D0204] border border-white/15 focus:border-[#FF0A2B] rounded-xl px-4 py-3 text-sm text-white placeholder-neutral-500 focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                {/* Drag and Drop File Upload Area */}
                <div>
                  <label className="text-xs font-bold text-neutral-300 block mb-2">
                    {b.receiptUpload.subtitle}
                  </label>
                  <div
                    onDragOver={(e) => e.preventDefault()}
                    onDrop={handleDrop}
                    onClick={() => fileInputRef.current?.click()}
                    className={`border-2 border-dashed rounded-2xl p-6 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-2 ${
                      receiptFile
                        ? "border-green-500 bg-green-500/5"
                        : "border-white/20 hover:border-[#FF0A2B] bg-[#0D0204]/70 hover:bg-[#0D0204]"
                    }`}
                  >
                    <input
                      ref={fileInputRef}
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={handleFileChange}
                      className="hidden"
                    />

                    {receiptFile ? (
                      <div className="flex flex-col items-center gap-2">
                        <CheckCircle2 className="w-10 h-10 text-green-400" />
                        <span className="text-sm font-bold text-green-300">
                          {receiptFile.name} ({(receiptFile.size / 1024).toFixed(1)} KB)
                        </span>
                        {receiptPreview && (
                          <div className="mt-2 w-32 h-20 rounded-lg overflow-hidden border border-white/20 relative">
                            {/* eslint-disable-next-line @next/next/no-img-element */}
                            <img
                              src={receiptPreview}
                              alt="Receipt Preview"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                        <span className="text-xs text-neutral-400 mt-1">
                          {lang === "ar" ? "انقر لتغيير الصورة" : "Click to change file"}
                        </span>
                      </div>
                    ) : (
                      <>
                        <UploadCloud className="w-10 h-10 text-[#FF0A2B] animate-bounce" />
                        <span className="text-sm font-bold text-neutral-200">
                          {b.receiptUpload.dropzoneText}
                        </span>
                        <span className="text-xs text-neutral-500 font-mono">
                          {b.receiptUpload.dropzoneHint}
                        </span>
                      </>
                    )}
                  </div>
                </div>

                {/* Notice text */}
                <p className="text-xs text-neutral-400 leading-relaxed">
                  {b.receiptUpload.note}
                </p>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 rounded-xl bg-[#FF0A2B] hover:bg-[#E00020] text-white font-black text-base transition-all shadow-glow-red shimmer-hover flex items-center justify-center gap-2 disabled:opacity-60 cursor-pointer"
                >
                  {isSubmitting ? (
                    <span>{lang === "ar" ? "جارٍ الإرسال..." : "Submitting..."}</span>
                  ) : (
                    <>
                      <span>{b.receiptUpload.submitBtn}</span>
                      {isRTL ? (
                        <ArrowLeft className="w-5 h-5" />
                      ) : (
                        <ArrowRight className="w-5 h-5" />
                      )}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* ══════════════ Success Confirmation Modal ══════════════ */}
      <AnimatePresence>
        {isSuccessModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-[#180409] border border-[#FF0A2B]/60 rounded-3xl p-8 max-w-lg w-full text-center relative shadow-2xl"
            >
              <button
                type="button"
                onClick={() => setIsSuccessModalOpen(false)}
                className="absolute top-5 right-5 p-2 rounded-lg text-neutral-400 hover:text-white hover:bg-white/10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-16 h-16 rounded-2xl bg-green-500/10 text-green-400 flex items-center justify-center mx-auto mb-4 border border-green-500/30">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl font-black text-white mb-2">
                {b.receiptUpload.successTitle}
              </h3>

              <p className="text-sm text-neutral-300 leading-relaxed mb-6">
                {b.receiptUpload.successDesc}
              </p>

              <div className="p-4 rounded-2xl bg-black/40 border border-white/10 text-start text-xs space-y-1.5 mb-6">
                <div>
                  <span className="text-neutral-400">{lang === "ar" ? "الطالب:" : "Student:"}</span>{" "}
                  <strong className="text-white">{studentName}</strong>
                </div>
                <div>
                  <span className="text-neutral-400">{lang === "ar" ? "الهاتف:" : "Phone:"}</span>{" "}
                  <strong className="text-white font-mono">{studentPhone}</strong>
                </div>
                <div>
                  <span className="text-neutral-400">{lang === "ar" ? "الكورس:" : "Track:"}</span>{" "}
                  <strong className="text-[#FF0A2B]">
                    {selectedCourseObj ? selectedCourseObj.title : selectedCourse}
                  </strong>
                </div>
              </div>

              <a
                href={`https://wa.me/201064544080?text=${encodeURIComponent(
                  lang === "ar"
                    ? `مرحباً فريق Duck، أرسلت إيصال تحويل بنكي لحجز كورس: ${
                        selectedCourseObj?.title || ""
                      }\nالاسم: ${studentName}\nالهاتف: ${studentPhone}`
                    : `Hello Duck Team, I submitted bank wire proof for: ${
                        selectedCourseObj?.title || ""
                      }\nName: ${studentName}\nPhone: ${studentPhone}`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-3.5 rounded-xl bg-green-600 hover:bg-green-700 text-white font-bold text-sm flex items-center justify-center gap-2 transition-all shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                <span>{b.receiptUpload.waConfirmBtn}</span>
              </a>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
