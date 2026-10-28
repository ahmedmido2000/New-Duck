"use client";

import { useState } from "react";
import { Send, CheckCircle2, ChevronDown, HelpCircle, Sparkles } from "lucide-react";

export default function Consultation() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "كيف تختلف Duck Agency عن أي وكالة تسويق أخرى؟",
      a: "نحن لا نعتمد حلولاً جاهزة أو قوالب معلبة. نبدأ بدراسة عميقة لنشاطك التجاري ومنافسيك وسلوك جمهورك الحقيقي، ثم نصمم استراتيجية نمو مخصصة بالكامل تركز على تحقيق أعلى عائد استثماري (ROI).",
    },
    {
      q: "كم يستغرق إطلاق الحملة الإعلانية أو المتجر الإلكتروني؟",
      a: "يعتمد على حجم المشروع؛ فالحملات الإعلانية السريعة تبدأ خلال 48 إلى 72 ساعة بعد إعداد البنية التحتية والتحليلات. أما المتاجر الإلكترونية المتكاملة فتستغرق عادة بين 7 إلى 14 يوم عمل مع الاختبارات الكاملة.",
    },
    {
      q: "هل تدعمون العملاء خارج مصر والمملكة العربية السعودية؟",
      a: "نعم بكل تأكيد! نحن ندير حملات ومشاريع لعملاء في مصر، السعودية، الإمارات، والكويت وقطر، ونفهم الطبيعة الاستهلاكية لكل سوق عربي بعناية.",
    },
    {
      q: "كيف أضمن متابعة نتائج الإعلانات والمبيعات؟",
      a: "نوفر لوحات تحكم تفاعلية وتقارير دورية شفافة توضح كل دولار أُنفق، عدد الزيارات، تكلفة الاكتساب (CPA)، والمبيعات المباشرة المحققة.",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    setSubmitted(true);
    setTimeout(() => {
      // Open WhatsApp or keep confirmation
    }, 1500);
  };

  return (
    <section id="faq" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-gradient-to-b from-[#12030A] to-[#3A0610] text-center">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Kicker */}
        <div className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-base sm:text-lg mb-2">
          <Sparkles className="w-5 h-5" />
          <span>استشارة مجانية</span>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight mb-4">
          ابدأ مشروعك الآن
        </h2>

        {/* Subtitle */}
        <p className="text-base sm:text-xl text-[#FFB3BE] leading-relaxed max-w-2xl mb-8 font-normal">
          احصل على استشارة تسويقية مجانية وحوّل أفكارك إلى واقع رقمي مربح. ادخل بريدك الإلكتروني وسيتواصل معك خبراؤنا خلال 24 ساعة.
        </p>

        {/* Email Consultation Form */}
        <div className="w-full max-w-xl mb-16">
          {submitted ? (
            <div className="bg-[#1A0509] border border-[#FF0A2B] rounded-2xl p-6 flex items-center justify-center gap-3 text-white text-lg font-bold shadow-xl animate-fadeIn">
              <CheckCircle2 className="w-6 h-6 text-[#FF0A2B] shrink-0" />
              <span>شكراً لتسجيلك! سيتواصل معك فريق Duck Agency قريباً.</span>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-stretch gap-2.5 sm:gap-0 shadow-2xl">
              <label htmlFor="emailInput" className="sr-only">
                البريد الإلكتروني
              </label>
              <input
                id="emailInput"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="أدخل بريدك الإلكتروني..."
                className="flex-1 min-h-[56px] bg-white text-black px-5 rounded-xl sm:rounded-l-none sm:rounded-r-xl text-base sm:text-lg outline-none font-cairo placeholder:text-neutral-500 text-right focus:ring-2 focus:ring-[#FF0A2B]"
                dir="rtl"
              />
              <button
                type="submit"
                className="min-h-[56px] bg-[#FF0A2B] hover:bg-[#E00020] text-white px-8 rounded-xl sm:rounded-r-none sm:rounded-l-xl font-extrabold text-base sm:text-lg transition-colors flex items-center justify-center gap-2 shrink-0 active:scale-95"
              >
                <span>سجّل الآن</span>
                <Send className="w-4 h-4 rotate-180" />
              </button>
            </form>
          )}
        </div>

        {/* FAQ Accordion Section */}
        <div className="w-full text-right mt-4 pt-12 border-t border-[#FF0A2B]/20">
          <div className="flex items-center gap-2 justify-center text-[#FF0A2B] font-extrabold text-base sm:text-lg mb-6">
            <HelpCircle className="w-5 h-5" />
            <span>الأسئلة الأكثر شيوعاً</span>
          </div>

          <div className="space-y-4 max-w-3xl mx-auto">
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div
                  key={index}
                  className="border border-[#3A0C15] rounded-xl bg-[#1A0509]/80 overflow-hidden transition-all"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    className="w-full flex items-center justify-between p-5 text-right font-extrabold text-base sm:text-lg text-white hover:text-[#FF0A2B] transition-colors focus:outline-none"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#FF0A2B] shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-sm sm:text-base text-[#C9A4A8] leading-relaxed border-t border-[#3A0C15]/50 pt-3 animate-fadeIn">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
