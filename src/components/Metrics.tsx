"use client";

import { useEffect, useRef, useState, useId } from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";

// Helpers for Gauge SVG calculations
const CX = 150;
const CY = 150;
const R = 128;
const RI = R * 0.56; // 71.68
const RC = (R + RI) / 2; // 99.84
const BW = R - RI; // 56.32
const A_L = 180;
const A_R = 0;
const SPAN = 180;

const rad = (d: number) => (d * Math.PI) / 180;
const up = (a: number, r: number): [number, number] => [
  CX + r * Math.cos(rad(a)),
  CY - r * Math.sin(rad(a)),
];

function arcPath(aFrom: number, aTo: number, r: number) {
  const n = Math.max(8, Math.round(Math.abs(aTo - aFrom) / 2));
  let d = "";
  for (let i = 0; i <= n; i++) {
    const a = aFrom + ((aTo - aFrom) * i) / n;
    const p = up(a, r);
    d += (i === 0 ? "M " : "L ") + p[0].toFixed(2) + " " + p[1].toFixed(2) + " ";
  }
  return d;
}

// Precomputed static dots around gauge perimeter (85 dots)
const PERIMETER_DOTS = Array.from({ length: 85 }, (_, i) => {
  const a = A_R + (SPAN * i) / 84;
  return up(a, R + 4.5);
});

// Precomputed 13 radial ticks
const RADIAL_TICKS = Array.from({ length: 13 }, (_, j) => {
  const a = A_R + (SPAN * j) / 12;
  return {
    angle: a,
    pA: up(a, R - 2),
    pB: up(a, R - 16),
  };
});

interface GaugeCardProps {
  title: string;
  subtitle: string;
  stat: string;
  icon: React.ReactNode;
  target: number;
  suffix: string;
  litPercent: number;
  footRightNum: number;
  footRightSuffix: string;
  footRightLabel: string;
  footLeftNum: number;
  footLeftSuffix: string;
  footLeftLabel: string;
}

function MasarGaugeCard({
  title,
  subtitle,
  stat,
  icon,
  target,
  suffix,
  litPercent,
  footRightNum,
  footRightSuffix,
  footRightLabel,
  footLeftNum,
  footLeftSuffix,
  footLeftLabel,
}: GaugeCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const gradId = useId().replace(/:/g, "_");
  const [progress, setProgress] = useState(0);

  const bound = A_L - SPAN * (litPercent / 100);

  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    const DUR = 2300;
    const HOLD = 2400;
    const LOOP = DUR + HOLD;

    const frame = (now: number) => {
      if (startTime === null) startTime = now;
      if (isVisible) {
        const elapsed = (now - startTime) % LOOP;
        if (elapsed < DUR) {
          const t = elapsed / DUR;
          const ease = 1 - Math.pow(1 - t, 3);
          setProgress(ease);
        } else {
          setProgress(1);
        }
      }
      animId = requestAnimationFrame(frame);
    };

    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  // Needle deflection: subtle 4-degree sweep
  const needleAngle = 92 - 4 * progress;
  const needleTip = up(needleAngle, 30);

  // Lit arc sweep from A_L down towards bound
  const currentLitAngle = A_L - (A_L - bound) * progress;
  const litArc = arcPath(currentLitAngle, A_L, RC);

  // Counter values
  const currentCenterVal = Math.round(target * progress) + suffix;
  const currentRightNum = Math.round(footRightNum * progress) + footRightSuffix;
  const currentLeftNum = Math.round(footLeftNum * progress) + footLeftSuffix;

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col justify-between h-full rounded-[20px] p-5 sm:p-6 overflow-hidden border border-white/[0.09] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_18px_40px_-28px_#000] bg-gradient-to-b from-[#3a0810] via-[#2f0408] to-[#1f0205] transition-all hover:border-[#f0a203]/40"
    >
      {/* Background soft radial glow */}
      <div className="absolute inset-0 pointer-events-none rounded-[20px] bg-[radial-gradient(120%_90%_at_50%_-20%,rgba(240,162,3,0.08),transparent_60%)]" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-3 mb-2">
        <div className="flex items-start gap-3">
          <div className="w-[34px] h-[34px] rounded-[10px] bg-[#440b14] border border-white/[0.09] flex items-center justify-center text-[#f0a203] shrink-0 mt-0.5 shadow-sm">
            {icon}
          </div>
          <div>
            <div className="font-bold text-[16px] text-[#f3f3f3] leading-snug">
              {title}
            </div>
            <div className="text-[12.5px] text-[#f3f3f3]/50 mt-1 leading-relaxed">
              {subtitle}
            </div>
          </div>
        </div>
        <div className="font-mono text-[12px] text-[#f3f3f3]/50 tracking-wider shrink-0 pt-0.5">
          {stat}
        </div>
      </div>

      {/* Gauge SVG with needle and center value */}
      <div className="relative my-2 sm:my-3 w-full max-w-[300px] mx-auto aspect-[300/168]">
        <svg
          viewBox="0 0 300 168"
          aria-hidden="true"
          className="w-full h-full overflow-visible block"
        >
          <defs>
            <linearGradient
              id={gradId}
              gradientUnits="userSpaceOnUse"
              x1="0"
              y1="150"
              x2="0"
              y2="20"
            >
              <stop offset="0" stopColor="#e09600" />
              <stop offset="1" stopColor="#ffc24d" />
            </linearGradient>
          </defs>

          {/* Background unlit track arc */}
          <path
            d={arcPath(A_R, A_L, RC)}
            fill="none"
            stroke="#561425"
            strokeWidth={BW}
          />

          {/* Active lit gold arc with glow */}
          <path
            d={litArc}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth={BW}
            strokeLinecap="butt"
            style={{
              filter: "drop-shadow(0 0 6px rgba(240,162,3,0.5))",
            }}
          />

          {/* Border concentric arcs */}
          <path
            d={arcPath(A_R, A_L, R)}
            fill="none"
            stroke="rgba(255,210,120,0.45)"
            strokeWidth={1}
          />
          <path
            d={arcPath(A_R, A_L, RI)}
            fill="none"
            stroke="rgba(0,0,0,0.4)"
            strokeWidth={1.5}
          />

          {/* 85 Perimeter circle dots */}
          {PERIMETER_DOTS.map(([x, y], idx) => (
            <circle
              key={idx}
              cx={x}
              cy={y}
              r={1.05}
              fill="rgba(240,162,3,0.85)"
            />
          ))}

          {/* 13 Radial tick lines */}
          {RADIAL_TICKS.map(({ angle, pA, pB }, idx) => {
            const isLit = angle >= currentLitAngle;
            return (
              <line
                key={idx}
                x1={pA[0]}
                y1={pA[1]}
                x2={pB[0]}
                y2={pB[1]}
                stroke={isLit ? "rgba(48,3,2,0.65)" : "rgba(240,162,3,0.5)"}
                strokeWidth={1.6}
                strokeLinecap="round"
              />
            );
          })}

          {/* Center Hub */}
          <circle cx={CX} cy={CY} r={6} fill="#f0a203" />
          <circle cx={CX} cy={CY} r={2.6} fill="#2c0205" />

          {/* Needle */}
          <line
            x1={CX}
            y1={CY}
            x2={needleTip[0]}
            y2={needleTip[1]}
            stroke="#f0a203"
            strokeWidth={3.2}
            strokeLinecap="round"
          />
        </svg>

        {/* Center Target Display Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-[6%] pointer-events-none">
          <div className="text-[24px] sm:text-[26px] font-extrabold text-[#f0a203] drop-shadow-[0_0_16px_rgba(240,162,3,0.35)] leading-none tracking-tight">
            {currentCenterVal}
          </div>
        </div>
      </div>

      {/* Footer statistics row (RTL: right side first, left side second) */}
      <div className="relative z-10 flex items-end justify-between pt-2 border-t border-white/[0.05]">
        {/* Right Metric (Start of RTL layout) */}
        <div>
          <div className="text-[19px] sm:text-[20px] font-bold text-[#f3f3f3] leading-none">
            {currentRightNum}
          </div>
          <div className="text-[10.5px] text-[#f3f3f3]/50 mt-1.5 leading-snug">
            {footRightLabel}
          </div>
        </div>

        {/* Left Metric (End of RTL layout) */}
        <div className="text-left">
          <div className="text-[19px] sm:text-[20px] font-bold text-[#f3f3f3] leading-none">
            {currentLeftNum}
          </div>
          <div className="text-[10.5px] text-[#f3f3f3]/50 mt-1.5 leading-snug">
            {footLeftLabel}
          </div>
        </div>
      </div>
    </div>
  );
}

const SPIKE_HEIGHTS = [150, 120, 90, 70, 30, 95, 55, 40, 80];
const HOT_INDEX = 4;
const PAD = 40;
const SPAN_WIDTH = 520;
const SPIKES = SPIKE_HEIGHTS.map((y, i) => ({
  x: PAD + (SPAN_WIDTH * i) / (SPIKE_HEIGHTS.length - 1),
  y,
  isHot: i === HOT_INDEX,
}));

function MasarSpikesCard() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);
  const [slaData, setSlaData] = useState({ pct: 40, left: 10, top: 22 });

  useEffect(() => {
    let animId: number;
    let startTime: number | null = null;
    let isVisible = true;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
        isVisible = entry.isIntersecting;
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    const DUR = 5200;

    const frame = (now: number) => {
      if (startTime === null) startTime = now;
      if (isVisible) {
        const elapsed = (now - startTime) % DUR;
        const p = elapsed / DUR;
        const e = p < 0.7 ? p / 0.7 : 1;
        setSlaData({
          pct: Math.round(40 + e * 59), // 40 to 99
          left: 10 + e * 45, // moves across to ~55% right near the hot spike
          top: 24 - e * 6, // 24% to 18%
        });
      }
      animId = requestAnimationFrame(frame);
    };

    animId = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(animId);
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col justify-between h-full rounded-[20px] p-5 sm:p-6 overflow-hidden border border-white/[0.09] shadow-[0_1px_0_rgba(255,255,255,0.04)_inset,0_18px_40px_-28px_#000] bg-gradient-to-b from-[#3a0810] via-[#2f0408] to-[#1f0205] transition-all hover:border-[#f0a203]/40"
    >
      {/* Background soft radial glow */}
      <div className="absolute inset-0 pointer-events-none rounded-[20px] bg-[radial-gradient(120%_90%_at_50%_-20%,rgba(240,162,3,0.08),transparent_60%)]" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-3 mb-2">
        <div className="flex items-start gap-3">
          <div className="w-[34px] h-[34px] rounded-[10px] bg-[#440b14] border border-white/[0.09] flex items-center justify-center text-[#f0a203] shrink-0 mt-0.5 shadow-sm">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="w-4 h-4"
            >
              <path d="M3 17l5-6 4 4 5-9 4 6" />
            </svg>
          </div>
          <div>
            <div className="font-bold text-[16px] text-[#f3f3f3] leading-snug">
              حجم المبيعات المباشرة
            </div>
            <div className="text-[12.5px] text-[#f3f3f3]/50 mt-1 leading-relaxed">
              التصاعد الربحي السنوي لعملائنا
            </div>
          </div>
        </div>
        <div className="font-mono text-[12px] text-[#f3f3f3]/50 tracking-wider shrink-0 pt-0.5">
          99.99%
        </div>
      </div>

      {/* Plot Area with Spikes & Floating SLA Pill */}
      <div className="relative my-2 sm:my-3 w-full h-[150px] sm:h-[160px] flex items-center justify-center">
        <svg
          viewBox="0 0 600 182"
          preserveAspectRatio="none"
          className="w-full h-full"
          aria-hidden="true"
        >
          {/* Top dashed line */}
          <line
            x1="10"
            y1="40"
            x2="590"
            y2="40"
            stroke="rgba(243,243,243,0.16)"
            strokeDasharray="2 5"
            strokeWidth="1"
          />

          {/* Baseline */}
          <line
            x1="10"
            y1="178"
            x2="590"
            y2="178"
            stroke="rgba(243,243,243,0.09)"
            strokeWidth="1"
          />

          {/* Vertical Stems & Caps */}
          <g>
            {SPIKES.map((spike, idx) => (
              <g key={idx}>
                <line
                  x1={spike.x}
                  y1={178}
                  x2={spike.x}
                  y2={spike.y}
                  stroke="rgba(243,243,243,0.30)"
                  strokeWidth="1.4"
                  style={{
                    transformOrigin: `${spike.x}px 178px`,
                    transform: isInView ? "scaleY(1)" : "scaleY(0)",
                    transition:
                      "transform 0.75s cubic-bezier(0.3, 0.7, 0.2, 1)",
                    transitionDelay: `${300 + idx * 80}ms`,
                  }}
                />
                <circle
                  cx={spike.x}
                  cy={spike.y}
                  r={spike.isHot ? 5.5 : 4}
                  fill={spike.isHot ? "#f0a203" : "#f3f3f3"}
                  style={{
                    filter: spike.isHot
                      ? "drop-shadow(0 0 7px rgba(240,162,3,0.85))"
                      : undefined,
                    opacity: isInView ? 1 : 0,
                    transition: "opacity 0.4s ease",
                    transitionDelay: `${350 + idx * 80}ms`,
                  }}
                />
              </g>
            ))}
          </g>
        </svg>

        {/* Floating SLA Pill */}
        <div
          className="absolute z-10 pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-[#440b14] border border-[#f0a203]/25 text-[#f3f3f3] font-mono text-[11px] py-1 px-2.5 rounded-full whitespace-nowrap shadow-[0_6px_16px_-8px_#000]"
          style={{
            left: `${slaData.left}%`,
            top: `${slaData.top}%`,
            transition: "left 0.1s linear, top 0.1s linear",
          }}
        >
          SLA <b className="text-[#f0a203] font-bold">{slaData.pct}%</b>
        </div>
      </div>

      {/* Subtle bottom spacer for balanced card height */}
      <div className="pt-2 border-t border-transparent h-6" />
    </div>
  );
}

export default function Metrics() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.75,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    },
  };

  return (
    <section className="py-20 sm:py-24 bg-[#0D0204] overflow-hidden" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {/* Card 1 (Right in RTL): الميزانيات المدارة */}
          <motion.div variants={itemVariants} className="h-full">
            <TiltCard maxTilt={6} glare={true} className="rounded-[20px] h-full">
              <MasarGaugeCard
                title="الميزانيات المدارة"
                subtitle="ذروة المواسم البيعية لتحقيق أقصى ربح"
                stat="8.4M"
                target={40}
                suffix="M"
                litPercent={82}
                footRightNum={40}
                footRightSuffix="M"
                footRightLabel="ريال مستثمر بأعلى كفاءة"
                footLeftNum={200}
                footLeftSuffix="K"
                footLeftLabel="خفض في هدر الأموال"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="9" />
                    <path d="M12 7v5l3 2" />
                  </svg>
                }
              />
            </TiltCard>
          </motion.div>

          {/* Card 2 (Middle in RTL): حجم المبيعات المباشرة */}
          <motion.div variants={itemVariants} className="h-full">
            <TiltCard maxTilt={6} glare={true} className="rounded-[20px] h-full">
              <MasarSpikesCard />
            </TiltCard>
          </motion.div>

          {/* Card 3 (Left in RTL): العائد على الإنفاق (ROAS) */}
          <motion.div variants={itemVariants} className="h-full">
            <TiltCard maxTilt={6} glare={true} className="rounded-[20px] h-full">
              <MasarGaugeCard
                title="العائد على الإنفاق (ROAS)"
                subtitle="معدلات كفاءة الإعلانات"
                stat="98.7%"
                target={15}
                suffix="X"
                litPercent={92}
                footRightNum={12}
                footRightSuffix="M"
                footRightLabel="إجمالي ريتش الحملات"
                footLeftNum={92}
                footLeftSuffix="%"
                footLeftLabel="نسبة نجاح استراتيجياتنا"
                icon={
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="w-4 h-4"
                  >
                    <path d="M3 12h4l3 8 4-16 3 8h4" />
                  </svg>
                }
              />
            </TiltCard>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
