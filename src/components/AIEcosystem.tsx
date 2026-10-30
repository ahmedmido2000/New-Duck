"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, Zap } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function AIEcosystem() {
  const { t } = useLanguage();
  const nodes = t.aiEcosystem.nodes;
  const [activeNode, setActiveNode] = useState<number | null>(null);

  const paths = [
    "M550,260 L260,100",
    "M550,260 L840,100",
    "M550,260 L150,260",
    "M550,260 L950,260",
    "M550,260 L260,420",
    "M550,260 L840,420",
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
            <Cpu className="w-5 h-5 animate-pulse" />
            <span>{t.aiEcosystem.kicker}</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-[#0D0204] leading-tight tracking-tight">
            {t.aiEcosystem.heading}
          </h2>

          <p className="text-base sm:text-xl text-[#444444] leading-relaxed max-w-2xl font-normal">
            {t.aiEcosystem.subtitle}
          </p>
        </motion.div>

        {/* Interactive Responsive SVG Network Diagram */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] as const }}
          className="w-full overflow-hidden rounded-3xl bg-gray-50 border border-gray-200/90 p-3 sm:p-7 shadow-xl relative"
        >
          {/* Ambient Corner Glows */}
          <div className="absolute top-0 right-0 w-60 h-60 bg-[#FF0A2B]/6 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-60 h-60 bg-[#FF0A2B]/6 rounded-full blur-3xl pointer-events-none" />

          <svg
            viewBox="0 0 1100 520"
            role="img"
            aria-label="رسم يوضح منظومة الذكاء الاصطناعي متصلة بمركز Duck"
            className="w-full h-auto select-none relative z-10"
          >
            <defs>
              <filter id="aiGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="4" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
              {/* Circular clip path for logo */}
              <clipPath id="centerCircleClip">
                <circle cx="550" cy="260" r="58" />
              </clipPath>
            </defs>

            {/* Connecting dashed paths with interactive highlight */}
            <g fill="none">
              {paths.map((p, idx) => {
                const isSelected = activeNode === idx;
                return (
                  <path
                    key={idx}
                    d={p}
                    stroke="#FF0A2B"
                    strokeOpacity={isSelected ? 1 : 0.35}
                    strokeWidth={isSelected ? 3.5 : 1.5}
                    strokeDasharray={isSelected ? "none" : "6 6"}
                    filter={isSelected ? "url(#aiGlow)" : undefined}
                    className="transition-all duration-300"
                  />
                );
              })}
            </g>

            {/* Glowing Traveling Data Pulses */}
            <g fill="#FF0A2B">
              {paths.map((p, idx) => (
                <circle key={idx} r={activeNode === idx ? 7 : 5} filter="url(#aiGlow)">
                  <animateMotion
                    dur={activeNode === idx ? "1.6s" : `${2.8 + idx * 0.2}s`}
                    repeatCount="indefinite"
                    path={p}
                  />
                </circle>
              ))}
            </g>

            {/* Radar Expanding Rings from Center Duck Hub */}
            <g fill="none" stroke="#FF0A2B">
              <circle cx="550" cy="260" r="70">
                <animate
                  attributeName="r"
                  values="70;135"
                  dur="2.8s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="0.65;0"
                  dur="2.8s"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="550" cy="260" r="90">
                <animate
                  attributeName="r"
                  values="90;175"
                  dur="2.8s"
                  begin="1.1s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  values="0.45;0"
                  dur="2.8s"
                  begin="1.1s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>

            {/* Center Duck Hub */}
            <circle
              cx="550"
              cy="260"
              r="66"
              fill="#0D0204"
              stroke="#FF0A2B"
              strokeWidth="3"
              className="drop-shadow-[0_0_25px_rgba(255,10,43,0.45)] cursor-pointer"
            />
            {/* Duck Logo inside the center circle */}
            <image
              href="/images/duck-logo.png"
              x="484"
              y="228"
              width="132"
              height="64"
              preserveAspectRatio="xMidYMid meet"
              clipPath="url(#centerCircleClip)"
              className="pointer-events-none"
            />

            {/* Outer Service Hub Rectangles (Interactive on hover) */}
            {[
              { x: 220, y: 66, idx: 0 },
              { x: 800, y: 66, idx: 1 },
              { x: 110, y: 226, idx: 2 },
              { x: 910, y: 226, idx: 3 },
              { x: 220, y: 386, idx: 4 },
              { x: 800, y: 386, idx: 5 },
            ].map((box) => {
              const isSelected = activeNode === box.idx;
              return (
                <rect
                  key={box.idx}
                  x={box.x}
                  y={box.y}
                  width="80"
                  height="68"
                  rx="18"
                  fill={isSelected ? "#FF0A2B" : "#FFFFFF"}
                  stroke="#FF0A2B"
                  strokeWidth={isSelected ? "2.5" : "1.5"}
                  className="cursor-pointer transition-all duration-300 drop-shadow-md"
                  onMouseEnter={() => setActiveNode(box.idx)}
                  onMouseLeave={() => setActiveNode(null)}
                />
              );
            })}

            {/* Service Labels */}
            <g
              fill="#0D0204"
              fontSize="16"
              fontWeight="800"
              textAnchor="middle"
              fontFamily="var(--font-cairo), Cairo, sans-serif"
              className="pointer-events-none"
            >
              <text x="260" y="158" fill={activeNode === 0 ? "#FF0A2B" : "#0D0204"}>{nodes[0]?.title}</text>
              <text x="840" y="158" fill={activeNode === 1 ? "#FF0A2B" : "#0D0204"}>{nodes[1]?.title}</text>
              <text x="150" y="318" fill={activeNode === 2 ? "#FF0A2B" : "#0D0204"}>{nodes[2]?.title}</text>
              <text x="950" y="318" fill={activeNode === 3 ? "#FF0A2B" : "#0D0204"}>{nodes[3]?.title}</text>
              <text x="260" y="478" fill={activeNode === 4 ? "#FF0A2B" : "#0D0204"}>{nodes[4]?.title}</text>
              <text x="840" y="478" fill={activeNode === 5 ? "#FF0A2B" : "#0D0204"}>{nodes[5]?.title}</text>
            </g>

            {/* Service Icons inside boxes */}
            <g strokeWidth="2" strokeLinecap="round" className="pointer-events-none">
              <path d="M240 112 L252 96 L262 106 L280 84" fill="none" stroke={activeNode === 0 ? "#FFFFFF" : "#FF0A2B"} />
              <circle cx="840" cy="100" r="16" fill="none" stroke={activeNode === 1 ? "#FFFFFF" : "#FF0A2B"} />
              <circle cx="840" cy="100" r="6" fill="none" stroke={activeNode === 1 ? "#FFFFFF" : "#FF0A2B"} />
              <path d="M138 276 L138 246 L168 261 Z" fill={activeNode === 2 ? "#FFFFFF" : "#FF0A2B"} stroke={activeNode === 2 ? "#FFFFFF" : "#FF0A2B"} />
              <circle cx="950" cy="256" r="10" fill="none" stroke={activeNode === 3 ? "#FFFFFF" : "#FF0A2B"} />
              <path d="M932 282 Q950 266 968 282" fill="none" stroke={activeNode === 3 ? "#FFFFFF" : "#FF0A2B"} />
              <rect x="242" y="408" width="36" height="24" rx="4" fill="none" stroke={activeNode === 4 ? "#FFFFFF" : "#FF0A2B"} />
              <path d="M820 410 L860 410 M820 420 L850 420 M820 430 L840 430" fill="none" stroke={activeNode === 5 ? "#FFFFFF" : "#FF0A2B"} />
            </g>
          </svg>
        </motion.div>

        {/* Interactive Responsive Feature Grid with Stagger & Micro Lift */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 mt-8 w-full">
          {nodes.map((item, idx) => {
            const isSelected = activeNode === idx;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.07, duration: 0.5 }}
                whileHover={{ y: -4, scale: 1.03 }}
                onMouseEnter={() => setActiveNode(idx)}
                onMouseLeave={() => setActiveNode(null)}
                className={`p-4 rounded-2xl border transition-all duration-300 text-center cursor-pointer shadow-xs ${
                  isSelected
                    ? "bg-[#FF0A2B] text-white border-[#FF0A2B] shadow-lg shadow-red-500/25"
                    : "bg-white text-[#0D0204] border-gray-200/90 hover:border-[#FF0A2B]/50"
                }`}
              >
                <div className={`text-sm sm:text-base font-black mb-1 ${isSelected ? "text-white" : "text-[#0D0204]"}`}>
                  {item.title}
                </div>
                <div className={`text-xs ${isSelected ? "text-white/90" : "text-[#666666]"}`}>
                  {item.desc}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
