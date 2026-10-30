"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  CheckCircle,
  Phone,
  Mail,
  MapPin,
  MessageSquare,
  Sparkles,
} from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Contact from "@/components/Contact";
import FAQ from "@/components/FAQ";
import Consultation from "@/components/Consultation";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactPage() {
  const { lang, t, isRTL } = useLanguage();

  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    const msg = encodeURIComponent(
      `رسالة من موقع Duck:\nالاسم: ${formState.name}\nالهاتف: ${formState.phone}\nالخدمة: ${formState.service || "عام"}\nالرسالة: ${formState.message}`
    );
    window.open(`https://wa.me/201064544080?text=${msg}`, "_blank");
  };

  return (
    <div>
      <PageHeader
        kicker={t.contact.kicker}
        title={t.contact.heading.split("،")[0] + "،"}
        titleHighlight={lang === "ar" ? "نحن قريبون منك" : "We Are Nearby"}
        subtitle={t.contact.subtitle}
        breadcrumbCurrent={lang === "ar" ? "تواصل معنا" : "Contact Us"}
      />

      <div className="bg-white text-[#0D0204]">
        {/* ═══════════════ Direct Interactive Message Form & Quick Channels ═══════════════ */}
        <section className="w-full py-16 sm:py-24 border-b border-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Form Column */}
              <div className="lg:col-span-7 bg-white border border-gray-200/90 rounded-3xl p-6 sm:p-10 shadow-sm">
                <div className="mb-6">
                  <span className="text-xs font-bold text-[#FF0A2B] uppercase tracking-wider block mb-1">
                    {lang === "ar" ? "إرسال استفسار مباشر" : "Direct Inquiry"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#0D0204]">
                    {lang === "ar" ? "أخبرنا عن مشروعك القادم" : "Tell Us About Your Next Project"}
                  </h3>
                </div>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="p-8 rounded-2xl bg-green-50 border border-green-200 text-center flex flex-col items-center gap-3"
                  >
                    <CheckCircle className="w-12 h-12 text-green-600" />
                    <h4 className="text-xl font-bold text-green-900">
                      {lang === "ar" ? "تم استلام رسالتك بنجاح!" : "Message Received Successfully!"}
                    </h4>
                    <p className="text-sm text-green-700">
                      {lang === "ar"
                        ? "سيتواصل معك فريق الاستشارات في Duck Agency خلال ساعات عمل قليلة."
                        : "The Duck Agency consulting team will contact you shortly."}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1.5">
                        {lang === "ar" ? "الاسم الكامل" : "Full Name"}
                      </label>
                      <input
                        type="text"
                        required
                        value={formState.name}
                        onChange={(e) =>
                          setFormState({ ...formState, name: e.target.value })
                        }
                        placeholder={lang === "ar" ? "محمد أحمد" : "John Doe"}
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#FF0A2B] text-sm font-medium transition-colors"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="text-xs font-bold text-gray-700 block mb-1.5">
                          {lang === "ar" ? "رقم الهاتف / واتساب" : "Phone / WhatsApp"}
                        </label>
                        <input
                          type="tel"
                          required
                          value={formState.phone}
                          onChange={(e) =>
                            setFormState({ ...formState, phone: e.target.value })
                          }
                          placeholder="+20 10... / +966 5..."
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#FF0A2B] text-sm font-medium transition-colors"
                        />
                      </div>

                      <div>
                        <label className="text-xs font-bold text-gray-700 block mb-1.5">
                          {lang === "ar" ? "الخدمة المطلوبة" : "Interested Service"}
                        </label>
                        <select
                          value={formState.service}
                          onChange={(e) =>
                            setFormState({ ...formState, service: e.target.value })
                          }
                          className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#FF0A2B] text-sm font-medium transition-colors"
                        >
                          <option value="">{lang === "ar" ? "اختر الخدمة..." : "Select Service..."}</option>
                          <option value="ecommerce">{lang === "ar" ? "إنشاء المتاجر الإلكترونية" : "E-Commerce Development"}</option>
                          <option value="ads">{lang === "ar" ? "إدارة الحملات الإعلانية" : "Paid Advertising Campaigns"}</option>
                          <option value="seo">{lang === "ar" ? "تحسين محركات البحث SEO" : "SEO Optimization"}</option>
                          <option value="branding">{lang === "ar" ? "الهوية البصرية والموشن" : "Branding & Motion"}</option>
                          <option value="academy">{lang === "ar" ? "أكاديمية دك التعليمية" : "Duck Academy Courses"}</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-bold text-gray-700 block mb-1.5">
                        {lang === "ar" ? "تفاصيل المشروع أو الاستفسار" : "Project Details or Message"}
                      </label>
                      <textarea
                        rows={4}
                        required
                        value={formState.message}
                        onChange={(e) =>
                          setFormState({ ...formState, message: e.target.value })
                        }
                        placeholder={
                          lang === "ar"
                            ? "أخبرنا باختصار عن أهدافك وميزانيتك المتوقعة..."
                            : "Briefly describe your objectives, budget, and timeline..."
                        }
                        className="w-full px-4 py-3 rounded-xl bg-white border border-gray-200 focus:outline-none focus:border-[#FF0A2B] text-sm font-medium transition-colors resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-xl bg-[#FF0A2B] hover:bg-[#E00020] text-white font-bold text-sm sm:text-base flex items-center justify-center gap-2 shadow-glow-red transition-all"
                    >
                      <Send className="w-4 h-4" />
                      <span>{lang === "ar" ? "إرسال الرسالة الآن" : "Send Inquiry Now"}</span>
                    </button>
                  </form>
                )}
              </div>

              {/* Direct Channels Column */}
              <div className="lg:col-span-5 space-y-6">
                <div className="p-6 sm:p-8 rounded-3xl bg-white text-[#0D0204] border border-gray-200/90 shadow-sm">
                  <span className="text-xs font-bold text-[#FF0A2B] uppercase tracking-wider block mb-2">
                    {lang === "ar" ? "قنوات اتصال سريعة" : "Rapid Response"}
                  </span>
                  <h3 className="text-2xl font-black mb-6 text-[#0D0204]">
                    {lang === "ar" ? "تواصل مباشر مع مستشارينا" : "Connect Directly"}
                  </h3>

                  <div className="space-y-4">
                    <a
                      href="https://wa.me/201064544080"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-red-50/40 border border-gray-200/80 hover:border-[#FF0A2B]/40 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-[#FF0A2B] text-white flex items-center justify-center shrink-0 shadow-sm">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 block">{lang === "ar" ? "واتساب الإدارة" : "WhatsApp Direct"}</span>
                        <span className="text-base font-bold text-[#0D0204] group-hover:text-[#FF0A2B] font-mono">+20 106 454 4080</span>
                      </div>
                    </a>

                    <a
                      href="tel:+201064544080"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-red-50/40 border border-gray-200/80 hover:border-[#FF0A2B]/40 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-red-50 text-[#FF0A2B] border border-red-100 flex items-center justify-center shrink-0">
                        <Phone className="w-6 h-6 text-[#FF0A2B]" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 block">{lang === "ar" ? "اتصال هاتفي" : "Direct Phone"}</span>
                        <span className="text-base font-bold text-[#0D0204] group-hover:text-[#FF0A2B] font-mono">+20 106 454 4080</span>
                      </div>
                    </a>

                    <a
                      href="mailto:contact@duckagency.com"
                      className="flex items-center gap-4 p-4 rounded-2xl bg-gray-50 hover:bg-red-50/40 border border-gray-200/80 hover:border-[#FF0A2B]/40 transition-all group"
                    >
                      <div className="w-12 h-12 rounded-xl bg-red-50 text-[#FF0A2B] border border-red-100 flex items-center justify-center shrink-0">
                        <Mail className="w-6 h-6 text-[#FF0A2B]" />
                      </div>
                      <div>
                        <span className="text-xs text-gray-500 block">{lang === "ar" ? "البريد الإلكتروني" : "Official Email"}</span>
                        <span className="text-base font-bold text-[#0D0204] group-hover:text-[#FF0A2B] font-mono">contact@duckagency.com</span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Regional Hubs & Interactive 3D Globe */}
        <Contact />

        {/* FAQs */}
        <FAQ />

        {/* Final Consultation */}
        <Consultation />
      </div>
    </div>
  );
}
