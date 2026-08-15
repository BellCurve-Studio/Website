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

export default function Hero({ onOpenAudit, onSeeHowWeWork }: HeroProps) {
  const scrollToServices = (sectionId: string = "services") => {
    const target = document.getElementById(sectionId);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="hero" className="hero-studio relative overflow-hidden min-h-screen lg:h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-0">
      {/* Light & Subtle Ambient Background Glows */}
      <div className="absolute top-16 left-12 w-80 h-80 rounded-full bg-[#ffbd5f]/15 blur-3xl pointer-events-none animate-pulse-glow" aria-hidden="true" />
      <div className="absolute top-36 right-16 w-96 h-96 rounded-full bg-[#ed542d]/10 blur-3xl pointer-events-none animate-pulse-glow" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8 my-auto w-full">
        <div className="grid items-center gap-8 lg:grid-cols-[1.15fr_.85fr] lg:gap-12 py-2">
          
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

          {/* Right Visual Stage - PERFECT DEAD-CENTERED LOGO + HORIZONTAL SLOW-ROTATING SERVICE PILLS */}
          <div className="relative mx-auto aspect-square w-full max-w-[400px] lg:ml-auto scroll-reveal-scale delay-100 flex items-center justify-center">
            
            {/* SVG 3 Dotted Concentric Orbit Rings */}
            <svg
              className="w-full h-full pointer-events-none select-none"
              viewBox="0 0 400 400"
              fill="none"
              aria-hidden="true"
            >
              {/* Ring 1 (Outer, Radius 160) */}
              <circle
                cx="200"
                cy="200"
                r="160"
                stroke="rgba(23,35,45,0.18)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
              />
              {/* Ring 2 (Middle, Radius 120) */}
              <circle
                cx="200"
                cy="200"
                r="120"
                stroke="rgba(237,84,45,0.32)"
                strokeWidth="1.5"
                strokeDasharray="5 7"
              />
              {/* Ring 3 (Inner, Radius 82) */}
              <circle
                cx="200"
                cy="200"
                r="82"
                stroke="rgba(255,189,95,0.55)"
                strokeWidth="1.5"
                strokeDasharray="3 6"
              />
            </svg>

            {/* DEAD-CENTER TRANSPARENT MONOGRAM LOGO */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-44 h-44 z-10 pointer-events-none select-none flex items-center justify-center"
            >
              <Image
                src="/Bellcurve.png"
                alt="BellCurve monogram"
                width={1280}
                height={1280}
                priority
                draggable={false}
                sizes="176px"
                className="w-full h-full object-contain pointer-events-none select-none mix-blend-multiply"
              />
            </div>

            {/* 3 PERFECTLY HORIZONTAL SLOW-ORBITING SERVICE PILLS */}

            {/* Outer Orbit: Free Audit Pill */}
            <button
              onClick={onOpenAudit}
              className="orbit-pill-outer whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-[#17232d] bg-[#fffdf8] px-3.5 py-1.5 text-[9px] font-black uppercase tracking-[.12em] text-[#17232d] shadow-[3px_3px_0_#ed542d] transition-all hover:bg-[#17232d] hover:text-[#fffdf8] hover:shadow-[4px_4px_0_#ffbd5f]"
              title="Click to request a Free Operational Audit"
            >
              <span className="h-2 w-2 rounded-full bg-[#ffbd5f] border border-[#17232d]" />
              <span>FREE AUDIT</span>
              <ArrowUpRight className="h-3 w-3 text-[#ed542d]" />
            </button>

            {/* Middle Orbit: Digital Presence Pill */}
            <button
              onClick={() => scrollToServices("services")}
              className="orbit-pill-middle whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-[#17232d] bg-[#fffdf8] px-3.5 py-1.5 text-[9px] font-black uppercase tracking-[.12em] text-[#17232d] shadow-[3px_3px_0_#17232d] transition-all hover:bg-[#17232d] hover:text-[#fffdf8] hover:shadow-[4px_4px_0_#ed542d]"
              title="Click to view Digital Presence Services"
            >
              <span className="h-2 w-2 rounded-full bg-[#ed542d] border border-[#17232d]" />
              <span>DIGITAL PRESENCE</span>
              <ChevronRight className="h-3 w-3 text-[#ed542d]" />
            </button>

            {/* Inner Orbit: Core Infrastructure Pill */}
            <button
              onClick={() => scrollToServices("services")}
              className="orbit-pill-inner whitespace-nowrap inline-flex items-center gap-1.5 rounded-full border border-[#17232d] bg-[#fffdf8] px-3.5 py-1.5 text-[9px] font-black uppercase tracking-[.12em] text-[#17232d] shadow-[3px_3px_0_#17232d] transition-all hover:bg-[#17232d] hover:text-[#fffdf8] hover:shadow-[4px_4px_0_#cbe9da]"
              title="Click to view Core Infrastructure Services"
            >
              <span className="h-2 w-2 rounded-full bg-[#ffbd5f] border border-[#17232d]" />
              <span>CORE INFRASTRUCTURE</span>
              <ChevronRight className="h-3 w-3 text-[#ed542d]" />
            </button>

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
