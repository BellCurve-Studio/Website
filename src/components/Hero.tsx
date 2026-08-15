"use client";

import { ArrowUpRight, ChevronRight, Layers, Sparkles, Zap } from "lucide-react";
import Image from "next/image";
import TypewriterText from "./TypewriterText";

interface HeroProps {
  onOpenAudit: () => void;
  onSeeHowWeWork: () => void;
}

const TOP_BAR_PHRASES = [
  "FREE OPERATIONAL AUDIT",
  "2 MONTHS FREE DATA MIGRATION",
  "SENIOR FOUNDERS DIRECT",
];

const MAIN_CONTENT_PHRASES = [
  "We'll fix the technology.",
  "We'll capture every lead.",
  "We'll automate team admin.",
  "We'll build software you trust.",
];

const ORBIT_VIEWBOX = 400;
const ORBIT_CENTER = ORBIT_VIEWBOX / 2;
const INNER_ORBIT_RADIUS = 108;

const ORBIT_LAYERS = [
  { r: 182, dash: "3 9", stroke: "rgba(23,35,45,0.18)", duration: 42, direction: 1 },
  { r: 142, dash: "5 8", stroke: "rgba(237,84,45,0.32)", duration: 32, direction: -1 },
  { r: INNER_ORBIT_RADIUS, dash: "2 6", stroke: "rgba(255,189,95,0.55)", duration: 24, direction: 1 },
];

function HeroOrbitSystem() {
  return (
    <svg
      className="hero-orbit-svg pointer-events-none select-none"
      viewBox={`0 0 ${ORBIT_VIEWBOX} ${ORBIT_VIEWBOX}`}
      fill="none"
      aria-hidden="true"
    >
      {/* Mathematical Bell Curve Graphic Wave Line */}
      <path
        d="M 15 345 Q 110 345 155 210 T 200 55 T 245 210 T 385 345"
        stroke="rgba(237,84,45,0.22)"
        strokeWidth="2.5"
        strokeDasharray="6 6"
        fill="none"
      />

      {ORBIT_LAYERS.map((layer, i) => (
        <g
          key={i}
          className={`hero-orbit-layer ${layer.direction === 1 ? "hero-orbit-layer-forward" : "hero-orbit-layer-reverse"}`}
          style={{ animationDuration: `${layer.duration}s` }}
        >
          <circle
            cx={ORBIT_CENTER}
            cy={ORBIT_CENTER}
            r={layer.r}
            stroke={layer.stroke}
            strokeWidth="1.5"
            strokeDasharray={layer.dash}
          />
          <circle
            cx={ORBIT_CENTER + layer.r * Math.cos(i * 1.6)}
            cy={ORBIT_CENTER + layer.r * Math.sin(i * 1.6)}
            r="6"
            fill={i === 1 ? "#ed542d" : "#ffbd5f"}
            stroke="#17232d"
            strokeWidth="2"
          />
        </g>
      ))}
    </svg>
  );
}

export default function Hero({ onOpenAudit, onSeeHowWeWork }: HeroProps) {
  const logoSize = `${((INNER_ORBIT_RADIUS * 2) / ORBIT_VIEWBOX) * 100 * 0.94}%`;

  return (
    <section id="hero" className="hero-studio relative overflow-hidden min-h-screen lg:h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-0">
      {/* Light & Subtle Ambient Background Glows */}
      <div className="absolute top-16 left-12 w-80 h-80 rounded-full bg-[#ffbd5f]/15 blur-3xl pointer-events-none animate-pulse-glow" aria-hidden="true" />
      <div className="absolute top-36 right-16 w-96 h-96 rounded-full bg-[#ed542d]/10 blur-3xl pointer-events-none animate-pulse-glow" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8 my-auto w-full">
        <div className="grid items-center gap-8 lg:grid-cols-[1.18fr_.82fr] lg:gap-14 py-2">
          
          {/* Left Copy Section */}
          <div className="hero-copy relative z-10 scroll-reveal">
            
            {/* Minimal Continuous Typing Top Bar Badge */}
            <div className="inline-flex items-center gap-2 rounded-full border border-[#17232d] bg-[#fffdf8] px-3.5 py-1.5 text-xs font-bold text-[#17232d] shadow-[3px_3px_0_#17232d]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ed542d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ed542d]" />
              </span>
              <div className="flex items-center gap-1.5 w-[210px] sm:w-[250px] h-4 overflow-hidden">
                <Sparkles className="h-3 w-3 text-[#ed542d] shrink-0" />
                <TypewriterText
                  phrases={TOP_BAR_PHRASES}
                  typingSpeed={55}
                  deletingSpeed={30}
                  pauseDuration={2400}
                  className="font-code-mono text-[9px] font-black uppercase tracking-[.16em] text-[#17232d] whitespace-nowrap"
                  cursorClassName="text-[#ed542d]"
                />
              </div>
            </div>

            {/* Concise Main Headline */}
            <h1 className="mt-5 max-w-3xl text-4xl font-black leading-[1.04] tracking-[-.06em] text-[#17232d] sm:text-5xl md:text-6xl lg:text-[4.15rem] xl:text-[4.4rem]">
              Tell us how you work.{" "}
              <span className="block mt-1 font-editorial-serif italic font-normal text-[#ed542d] min-h-[1.25em]">
                <TypewriterText
                  phrases={MAIN_CONTENT_PHRASES}
                  typingSpeed={50}
                  deletingSpeed={30}
                  pauseDuration={2600}
                  className="text-[#ed542d]"
                  cursorClassName="text-[#17232d]"
                />
              </span>
            </h1>

            {/* Ultra-Concise Subheadline */}
            <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-[#40505a] sm:text-lg">
              We build custom technology systems that replace manual drag — starting with a free operational audit.
            </p>

            {/* Action Buttons */}
            <div className="mt-7 flex flex-wrap items-center gap-4 sm:gap-5">
              <button
                onClick={onOpenAudit}
                className="group relative inline-flex items-center gap-3.5 rounded-full bg-[#17232d] px-7 py-3.5 text-xs font-bold uppercase tracking-[.14em] text-[#fffdf8] shadow-[4px_4px_0_#ffbd5f] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#ed542d] hover:shadow-[6px_6px_0_#17232d]"
              >
                <span>Get Free Audit</span>
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#ed542d] text-white transition-transform duration-200 group-hover:bg-[#fffdf8] group-hover:text-[#17232d]">
                  <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                </span>
              </button>

              <button
                onClick={onSeeHowWeWork}
                className="group inline-flex items-center gap-3 rounded-full border border-[#17232d]/30 bg-[#fffdf8] px-6 py-3.5 text-xs font-bold uppercase tracking-[.14em] text-[#17232d] shadow-[3px_3px_0_#17232d] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#ed542d] hover:text-[#ed542d]"
              >
                <span>See How We Work</span>
                <span className="grid h-6 w-6 place-items-center rounded-full bg-[#17232d]/10 text-[#17232d] transition-transform duration-200 group-hover:translate-x-1 group-hover:bg-[#ed542d] group-hover:text-white">
                  <ChevronRight className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
                </span>
              </button>
            </div>
          </div>

          {/* Right Visual Stage - Clean Still Orbit Monogram */}
          <div className="relative mx-auto aspect-square w-full max-w-[420px] lg:ml-auto scroll-reveal-scale delay-100 select-none pointer-events-none">
            <div className="hero-orbit-stage relative w-full h-full grid place-items-center">
              <div className="hero-orbit-zoom">
                <HeroOrbitSystem />

                {/* Center Still Monogram Logo */}
                <div
                  className="hero-logo-frame rounded-full bg-[#fffdf8] p-3 border-2 border-[#17232d] pointer-events-none select-none"
                  style={{ width: logoSize, height: logoSize }}
                >
                  <Image
                    src="/Bellcurve.png"
                    alt="BellCurve monogram"
                    width={1280}
                    height={1280}
                    priority
                    draggable={false}
                    sizes="(max-width: 1024px) 80vw, 420px"
                    className="hero-logo-image pointer-events-none select-none"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Technical Studio Ribbon */}
      <div className="border-t border-[#17232d] bg-[#17232d] text-[#fffdf8] shadow-md w-full shrink-0">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-4 sm:px-7 md:flex-row md:items-center md:justify-between lg:px-8">
          <div className="flex items-center gap-3">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ed542d] animate-ping" />
            <p className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ffbd5f]">
              Business Systems Engineering Studio
            </p>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs font-bold text-[#fffdf8]/90 sm:text-sm">
            <span className="flex items-center gap-2">
              <Zap className="h-3.5 w-3.5 text-[#ffbd5f]" /> Clear Diagnosis Before Pitch
            </span>
            <span className="text-[#ed542d] hidden sm:inline">•</span>
            <span className="flex items-center gap-2">
              <Layers className="h-3.5 w-3.5 text-[#ffbd5f]" /> Outcomes Before Features
            </span>
            <span className="text-[#ed542d] hidden sm:inline">•</span>
            <span>No Generic Agency Language</span>
          </div>
        </div>
      </div>
    </section>
  );
}
