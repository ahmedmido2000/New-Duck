"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";

export default function AIEcosystem() {
  const nodes = [
    { title: "السوشيال", desc: "أتمتة النشر والتفاعل" },
    { title: "الإعلانات", desc: "تحسين الميزانيات الذكي" },
    { title: "الفيديو", desc: "توليد نصوص ومونتاج سريع" },
    { title: "الهوية", desc: "توليد تصاميم وأفكار بصرية" },
    { title: "المواقع", desc: "تخصيص تجربة كل زائر" },
    { title: "المحتوى", desc: "تحليل نبرة الصوت والمشاعر" },
  ];

  return (
    <section className="py-20 sm:py-28 bg-white relative overflow-hidden border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }}
          className="text-center flex flex-col gap-3 items-center max-w-3xl mb-8 sm:mb-12"
        >
          <div className="inline-flex items-center gap-2 text-[#FF0A2B] font-extrabold text-base sm:text-lg">
            <Cpu className="w-5 h-5" />
            <span>من يتبنّاه اليوم، يقود السوق غدًا</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0D0204] leading-tight">
            مستقبل التسويق يبدأ بالذكاء الاصطناعي
          </h2>

          <p className="text-base sm:text-xl text-[#444444] leading-relaxed max-w-2xl font-normal">
            الذكاء الاصطناعي لم يعد اختيارًا بل ضرورة: تحليل سلوك العملاء، تخصيص المحتوى، وتحسين الحملات لزيادة المبيعات بأقل تكلفة ممكنة.
          </p>
        </motion.div>

        {/* Interactive Responsive SVG Network Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full overflow-hidden rounded-2xl bg-gray-50 border border-gray-200 p-2 sm:p-6 shadow-lg relative"
        >
          {/* Ambient Corner Glows */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF0A2B]/5 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF0A2B]/5 rounded-full blur-3xl pointer-events-none" />

          <svg
            viewBox="0 0 1100 520"
            role="img"
            aria-label="رسم يوضح أن Duck في المركز متصلة بخدماتها الست بالذكاء الاصطناعي"
            className="w-full h-auto select-none relative z-10"
          >
            {/* Connecting dashed paths */}
            <g stroke="#FF0A2B" strokeOpacity="0.45" strokeDasharray="6 6" fill="none" strokeWidth="1.5">
              <path d="M550 260 L260 100" />
              <path d="M550 260 L840 100" />
              <path d="M550 260 L150 260" />
              <path d="M550 260 L950 260" />
              <path d="M550 260 L260 420" />
              <path d="M550 260 L840 420" />
            </g>

            {/* Glowing Traveling Data Pulses */}
            <g fill="#FF0A2B">
              <circle r="5">
                <animateMotion dur="3s" repeatCount="indefinite" path="M550,260 L260,100" />
              </circle>
              <circle r="5">
                <animateMotion dur="3.4s" repeatCount="indefinite" path="M550,260 L840,100" />
              </circle>
              <circle r="5">
                <animateMotion dur="2.8s" repeatCount="indefinite" path="M550,260 L150,260" />
              </circle>
              <circle r="5">
                <animateMotion dur="3.2s" repeatCount="indefinite" path="M550,260 L950,260" />
              </circle>
              <circle r="5">
                <animateMotion dur="3.6s" repeatCount="indefinite" path="M550,260 L260,420" />
              </circle>
              <circle r="5">
                <animateMotion dur="3s" repeatCount="indefinite" path="M550,260 L840,420" />
              </circle>
            </g>

            {/* Radar Expanding Rings from Center Duck Hub */}
            <g fill="none" stroke="#FF0A2B">
              <circle cx="550" cy="260" r="70">
                <animate
                  attributeName="r"
                  values="70;125"
                  dur="3s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="0.65;0"
                  dur="3s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="550" cy="260" r="90">
                <animate
                  attributeName="r"
                  values="90;160"
                  dur="3s"
                  begin="1.2s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="0.45;0"
                  dur="3s"
                  begin="1.2s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Center Duck Hub */}
            <circle
              cx="550"
              cy="260"
              r="64"
              fill="#0D0204"
              stroke="#FF0A2B"
              strokeWidth="2.5"
              className="drop-shadow-[0_0_20px_rgba(255,10,43,0.35)]"
            />
            <text
              x="550"
              y="274"
              textAnchor="middle"
              fill="#ffffff"
              fontSize="40"
              fontWeight="900"
              fontFamily="Cairo, sans-serif"
              direction="ltr"
            >
              <tspan fill="#FF0A2B">d</tspan>uck
            </text>

            {/* Outer Service Hub Rectangles */}
            <g fill="#FFFFFF" stroke="#FF0A2B" strokeOpacity="0.85" strokeWidth="1.5">
              <rect x="220" y="66" width="80" height="68" rx="16" />
              <rect x="800" y="66" width="80" height="68" rx="16" />
              <rect x="110" y="226" width="80" height="68" rx="16" />
              <rect x="910" y="226" width="80" height="68" rx="16" />
              <rect x="220" y="386" width="80" height="68" rx="16" />
              <rect x="800" y="386" width="80" height="68" rx="16" />
            </g>

            {/* Service Labels */}
            <g
              fill="#0D0204"
              fontSize="16"
              fontWeight="700"
              textAnchor="middle"
              fontFamily="var(--font-cairo), Cairo, sans-serif"
            >
              <text x="260" y="156">السوشيال</text>
              <text x="840" y="156">الإعلانات</text>
              <text x="150" y="316">الفيديو</text>
              <text x="950" y="316">الهوية</text>
              <text x="260" y="476">المواقع</text>
              <text x="840" y="476">المحتوى</text>
            </g>

            {/* Service Icons inside boxes */}
            <g fill="none" stroke="#FF0A2B" strokeWidth="2" strokeLinecap="round">
              <path d="M240 112 L252 96 L262 106 L280 84" />
              <circle cx="840" cy="100" r="16" />
              <circle cx="840" cy="100" r="6" />
              <path d="M138 276 L138 246 L168 261 Z" />
              <circle cx="950" cy="256" r="10" />
              <path d="M932 282 Q950 266 968 282" />
              <rect x="242" y="408" width="36" height="24" rx="3" />
              <path d="M820 410 L860 410 M820 420 L850 420 M820 430 L840 430" />
            </g>
          </svg>
        </motion.div>

        {/* Mobile/Responsive Cards Helper with Stagger */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mt-8 w-full">
          {nodes.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08, duration: 0.5 }}
              whileHover={{ y: -3, borderColor: "#FF0A2B88" }}
              className="bg-white p-3 rounded-xl border border-gray-200 shadow-sm text-center transition-all cursor-default"
            >
              <div className="text-sm font-bold text-[#0D0204] mb-0.5">{item.title}</div>
              <div className="text-[11px] text-[#666666]">{item.desc}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
