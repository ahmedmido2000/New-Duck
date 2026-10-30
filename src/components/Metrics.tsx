"use client";

import { useEffect, useRef, useState, useId } from "react";
import { motion } from "framer-motion";
import TiltCard from "./TiltCard";
import { useLanguage } from "@/context/LanguageContext";

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
}

function DuckGaugeCard({
  title,
  subtitle,
  stat,
  icon,
  target,
  suffix,
  litPercent,
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

  return (
    <div
      ref={cardRef}
      className="relative flex flex-col justify-between h-full rounded-[20px] p-5 sm:p-6 overflow-hidden border border-gray-200 shadow-xl bg-white transition-all hover:border-[#FF0A2B]/40"
    >
      {/* Background soft radial brand glow */}
      <div className="absolute inset-0 pointer-events-none rounded-[20px] bg-[radial-gradient(120%_90%_at_50%_-20%,rgba(255,10,43,0.06),transparent_60%)]" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-3 mb-2">
        <div className="flex items-start gap-3">
          <div className="w-[34px] h-[34px] rounded-[10px] bg-[#FF0A2B]/10 border border-[#FF0A2B]/25 flex items-center justify-center text-[#FF0A2B] shrink-0 mt-0.5 shadow-[0_0_12px_rgba(255,10,43,0.15)]">
            {icon}
          </div>
          <div>
            <div className="font-bold text-[16px] text-[#0D0204] leading-snug">
              {title}
            </div>
            <div className="text-[12.5px] text-[#555555] mt-1 leading-relaxed">
              {subtitle}
            </div>
          </div>
        </div>
        <div className="font-mono text-[12px] text-[#FF0A2B] font-bold tracking-wider shrink-0 pt-0.5">
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
              <stop offset="0" stopColor="#FF0A2B" />
              <stop offset="1" stopColor="#FF4D6D" />
            </linearGradient>
          </defs>

          {/* Background unlit track arc (clean subtle track) */}
          <path
            d={arcPath(A_R, A_L, RC)}
            fill="none"
            stroke="#EEEEEE"
            strokeWidth={BW}
          />

          {/* Active lit neon-red arc with glow */}
          <path
            d={litArc}
            fill="none"
            stroke={`url(#${gradId})`}
            strokeWidth={BW}
            strokeLinecap="butt"
            style={{
              filter: "drop-shadow(0 0 8px rgba(255,10,43,0.45))",
            }}
          />

          {/* Border concentric arcs */}
          <path
            d={arcPath(A_R, A_L, R)}
            fill="none"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth={1}
          />
          <path
            d={arcPath(A_R, A_L, RI)}
            fill="none"
            stroke="rgba(0,0,0,0.06)"
            strokeWidth={1.5}
          />

          {/* 85 Perimeter circle dots in brand red */}
          {PERIMETER_DOTS.map(([x, y], idx) => (
            <circle
              key={idx}
              cx={x}
              cy={y}
              r={1.05}
              fill="rgba(255,10,43,0.45)"
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
                stroke={isLit ? "#FF0A2B" : "#E5E5E5"}
                strokeWidth={1.6}
                strokeLinecap="round"
              />
            );
          })}

          {/* Center Hub */}
          <circle cx={CX} cy={CY} r={6} fill="#FF0A2B" />
          <circle cx={CX} cy={CY} r={2.6} fill="#FFFFFF" />

          {/* Needle with neon glow */}
          <line
            x1={CX}
            y1={CY}
            x2={needleTip[0]}
            y2={needleTip[1]}
            stroke="#FF0A2B"
            strokeWidth={3.2}
            strokeLinecap="round"
            style={{ filter: "drop-shadow(0 0 4px rgba(255,10,43,0.8))" }}
          />
        </svg>

        {/* Center Target Display Text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center translate-y-[6%] pointer-events-none">
          <div className="text-[25px] sm:text-[27px] font-black text-[#0D0204] drop-shadow-[0_0_12px_rgba(255,10,43,0.25)] leading-none tracking-tight">
            {currentCenterVal}
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

function DuckSpikesCard({
  title,
  subtitle,
  stat,
}: {
  title: string;
  subtitle: string;
  stat: string;
}) {
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
      className="relative flex flex-col justify-between h-full rounded-[20px] p-5 sm:p-6 overflow-hidden border border-gray-200 shadow-xl bg-white transition-all hover:border-[#FF0A2B]/40"
    >
      {/* Background soft radial brand glow */}
      <div className="absolute inset-0 pointer-events-none rounded-[20px] bg-[radial-gradient(120%_90%_at_50%_-20%,rgba(255,10,43,0.06),transparent_60%)]" />

      {/* Header */}
      <div className="relative z-10 flex items-start justify-between gap-3 mb-2">
        <div className="flex items-start gap-3">
          <div className="w-[34px] h-[34px] rounded-[10px] bg-[#FF0A2B]/10 border border-[#FF0A2B]/25 flex items-center justify-center text-[#FF0A2B] shrink-0 mt-0.5 shadow-[0_0_12px_rgba(255,10,43,0.15)]">
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
            <div className="font-bold text-[16px] text-[#0D0204] leading-snug">
              {title}
            </div>
            <div className="text-[12.5px] text-[#555555] mt-1 leading-relaxed">
              {subtitle}
            </div>
          </div>
        </div>
        <div className="font-mono text-[12px] text-[#FF0A2B] font-bold tracking-wider shrink-0 pt-0.5">
          {stat}
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
            stroke="rgba(0,0,0,0.08)"
            strokeDasharray="2 5"
            strokeWidth="1"
          />

          {/* Baseline */}
          <line
            x1="10"
            y1="178"
            x2="590"
            y2="178"
            stroke="#EAEAEA"
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
                  stroke={spike.isHot ? "#FF0A2B" : "#D1D5DB"}
                  strokeWidth={spike.isHot ? "1.8" : "1.4"}
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
                  fill={spike.isHot ? "#FF0A2B" : "#9CA3AF"}
                  style={{
                    filter: spike.isHot
                      ? "drop-shadow(0 0 8px rgba(255,10,43,0.95))"
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

        {/* Floating SLA Pill in brand styling */}
        <div
          className="absolute z-10 pointer-events-none -translate-x-1/2 -translate-y-1/2 bg-white border border-gray-200 text-[#0D0204] font-mono text-[11px] py-1 px-2.5 rounded-full whitespace-nowrap shadow-md"
          style={{
            left: `${slaData.left}%`,
            top: `${slaData.top}%`,
            transition: "left 0.1s linear, top 0.1s linear",
          }}
        >
          SLA <b className="text-[#FF0A2B] font-bold">{slaData.pct}%</b>
        </div>
      </div>

      {/* Subtle bottom spacer for balanced card height */}
      <div className="pt-2 border-t border-transparent h-6" />
    </div>
  );
}

export default function Metrics() {
  const { t, dir } = useLanguage();

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
    <section className="py-20 sm:py-24 bg-white overflow-hidden border-t border-gray-100" dir={dir}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch"
        >
          {/* Card 1: الميزانيات المدارة / Managed Budgets */}
          <motion.div variants={itemVariants} className="h-full">
            <TiltCard maxTilt={6} glare={true} className="rounded-[20px] h-full">
              <DuckGaugeCard
                title={t.metrics.card1.title}
                subtitle={t.metrics.card1.subtitle}
                stat={t.metrics.card1.stat}
                target={40}
                suffix="M"
                litPercent={82}
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

          {/* Card 2: حجم المبيعات المباشرة / Direct Sales Volume */}
          <motion.div variants={itemVariants} className="h-full">
            <TiltCard maxTilt={6} glare={true} className="rounded-[20px] h-full">
              <DuckSpikesCard
                title={t.metrics.card2.title}
                subtitle={t.metrics.card2.subtitle}
                stat={t.metrics.card2.stat}
              />
            </TiltCard>
          </motion.div>

          {/* Card 3: العائد على الإنفاق / Return on Ad Spend */}
          <motion.div variants={itemVariants} className="h-full">
            <TiltCard maxTilt={6} glare={true} className="rounded-[20px] h-full">
              <DuckGaugeCard
                title={t.metrics.card3.title}
                subtitle={t.metrics.card3.subtitle}
                stat={t.metrics.card3.stat}
                target={15}
                suffix="X"
                litPercent={92}
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
