"use client";

import { Target, CheckCircle2, Compass, Award } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 sm:py-28 px-4 sm:px-8 lg:px-16 bg-[#0D0204] relative">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-16">
        {/* Text Content */}
        <div className="flex-1 flex flex-col gap-6 text-right">
          <div className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-base sm:text-lg">
            <Compass className="w-5 h-5" />
            <span>رؤيتنا ومنهجنا</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white leading-tight">
            من نحن؟
          </h2>

          <p className="text-lg sm:text-2xl text-[#E6CDD0] leading-relaxed font-normal">
            شريكك في بناء حضور رقمي يليق بطموحك. نؤمن أن لكل علامة طريقها الخاص، لذلك نعتمد أسلوبًا مخصصًا لكل علامة حسب هويتها واحتياجاتها، وليس بنهج واحد للجميع.
          </p>

          <div className="bg-[#FF0A2B] text-white py-3.5 px-6 rounded-xl font-extrabold text-base sm:text-xl text-center shadow-lg shadow-[#FF0A2B]/20 transform hover:scale-[1.01] transition-transform">
            هدفنا أن نكون الشريك الذي يسير معك في المسار الصحيح
          </div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex items-start gap-3 bg-[#1A0509] p-4 rounded-xl border border-[#3A0C15]">
              <CheckCircle2 className="w-5 h-5 text-[#FF0A2B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-base">استراتيجيات مبنية على بيانات</h4>
                <p className="text-sm text-[#C9A4A8]">قرارات تسويقية تستند لأرقام حقيقية وسلوك الجمهور المستهدف.</p>
              </div>
            </div>

            <div className="flex items-start gap-3 bg-[#1A0509] p-4 rounded-xl border border-[#3A0C15]">
              <Target className="w-5 h-5 text-[#FF0A2B] shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-white text-base">تركيز كامل على العائد (ROI)</h4>
                <p className="text-sm text-[#C9A4A8]">كل قرش يُنفق في الإعلانات محسوب بهدف مضاعفة الأرباح.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Circular Floating Brand Artwork (Replaces placeholder) */}
        <div className="fl relative flex-1 max-w-[340px] sm:max-w-[420px] w-full aspect-square rounded-full border-2 border-dashed border-[#FF0A2B]/40 p-4 sm:p-6 flex items-center justify-center">
          <div
            className="w-full h-full rounded-full flex flex-col items-center justify-center p-6 text-center relative overflow-hidden shadow-2xl shadow-[#FF0A2B]/20"
            style={{
              background:
                "radial-gradient(circle at 40% 35%, rgba(255,10,43,0.25), #1A0509 70%)",
            }}
          >
            {/* Ambient Background Glow */}
            <div className="absolute inset-0 bg-radial from-[#FF0A2B]/20 to-transparent pointer-events-none" />

            {/* Stylized Duck Emblem Graphic */}
            <svg
              viewBox="0 0 200 200"
              className="w-36 h-36 sm:w-44 sm:h-44 text-[#FF0A2B] drop-shadow-[0_0_25px_rgba(255,10,43,0.6)]"
              fill="none"
              stroke="currentColor"
            >
              {/* Glowing Road Path */}
              <path
                d="M 20 180 C 70 140, 110 170, 180 120"
                stroke="#FF0A2B"
                strokeWidth="6"
                strokeLinecap="round"
                className="opacity-60"
              />
              <path
                d="M 30 190 C 80 150, 120 180, 190 130"
                stroke="#FFB3BE"
                strokeWidth="2"
                strokeDasharray="4 6"
              />

              {/* Minimalist Modern Duck Figure */}
              <g fill="#FF0A2B" stroke="#ffffff" strokeWidth="2.5">
                {/* Duck Body */}
                <path
                  d="M 65 110 C 65 80, 95 70, 115 85 C 130 95, 140 115, 130 130 C 115 145, 75 140, 65 110 Z"
                  fill="#FF0A2B"
                />
                {/* Duck Head */}
                <circle cx="120" cy="70" r="22" fill="#FF0A2B" />
                {/* Eye */}
                <circle cx="127" cy="66" r="3.5" fill="#ffffff" />
                {/* Beak */}
                <path
                  d="M 140 70 L 165 74 L 140 82 Z"
                  fill="#FFD200"
                  stroke="#FFD200"
                />
                {/* Wing */}
                <path
                  d="M 85 105 C 105 100, 115 115, 95 125 C 80 120, 80 110, 85 105 Z"
                  fill="#7A0B1A"
                  stroke="#ffffff"
                  strokeWidth="1.5"
                />
              </g>

              {/* Sparkling Stars */}
              <circle cx="45" cy="50" r="2" fill="#FFB3BE" className="animate-ping" />
              <circle cx="160" cy="40" r="2" fill="#FFB3BE" />
              <circle cx="150" cy="160" r="3" fill="#FF0A2B" />
            </svg>

            <div className="relative z-10 mt-2">
              <span className="text-xl sm:text-2xl font-black text-white block">
                DUCK AGENCY
              </span>
              <span className="text-xs sm:text-sm text-[#FFB3BE] font-semibold mt-1 block">
                المسار الصحيح لنمو علامتك التجارية
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
