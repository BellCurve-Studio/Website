"use client";

import React, { useState } from "react";
import {
  Users,
  Compass,
  Lightbulb,
  HeartHandshake,
  Award,
  ArrowUpRight,
  Terminal,
  Target,
  Cpu,
  Zap,
  Sparkle,
  Check
} from "lucide-react";

interface AboutSectionProps {
  onOpenAudit?: () => void;
}

export default function AboutSection({ onOpenAudit }: AboutSectionProps) {
  // Active principle index for Values stage (0..3)
  const [activeValue, setActiveValue] = useState<number>(0);

  // Active founder card hover/focus state
  const [activeFounder, setActiveFounder] = useState<number>(0);

  const values = [
    {
      id: "01",
      title: "Problem Before Product",
      subtitle: "Honest Diagnosis",
      tagline: "We diagnose what's actually broken before proposing line 1 of code.",
      icon: Compass,
      accent: "#ffbd5f", // Gold
      description:
        "Building features for non-existent problems is the #1 tech waste. We conduct a deep operational audit upfront to isolate the root bottleneck.",
      highlights: ["Root cause analysis", "Zero waste guarantee", "Pre-code diagnosis"],
      proofMetric: "90% Cost Savings",
      proofSub: "Avoided Unneeded Overhauls",
    },
    {
      id: "02",
      title: "Build With Purpose",
      subtitle: "Outcome Engineering",
      tagline: "If it doesn't save operational time or capture leads, it doesn't get built.",
      icon: Lightbulb,
      accent: "#d7e4ff", // Blue
      description:
        "Every single API endpoint, database schema, and UI component is tied directly to measurable business velocity and user outcome.",
      highlights: ["Measurable ROI focus", "No vanity feature clutter", "Durable architecture"],
      proofMetric: "100% Outcome-Driven",
      proofSub: "Tied to Real Metrics",
    },
    {
      id: "03",
      title: "Obsess Over the User",
      subtitle: "Clean Experience",
      tagline: "Systems feel simple, fast, and effortless for the person using them daily.",
      icon: HeartHandshake,
      accent: "#cbe9da", // Mint
      description:
        "Software should eliminate friction, not introduce confusion. We engineer razor-sharp, zero-latency workflows tailored to real operations.",
      highlights: ["Sub-0.5s load times", "Zero onboarding confusion", "Tactile UX design"],
      proofMetric: "< 0.3s Latency",
      proofSub: "Instant UI Responsiveness",
    },
    {
      id: "04",
      title: "Compound Innovation",
      subtitle: "Durable Systems",
      tagline: "Every project builds reusable, modular, and future-proof engineering patterns.",
      icon: Award,
      accent: "#e7d7ff", // Purple
      description:
        "We build clean, documented, modular software infrastructure that your internal team can easily own, extend, and scale without vendor lock-in.",
      highlights: ["Zero technical debt", "Modular code architecture", "Full ownership transfer"],
      proofMetric: "0 Vendor Lock-in",
      proofSub: "100% Code Ownership",
    },
  ];

  const founders = [
    {
      id: "F1",
      role: "Product & Business Lead",
      subtitle: "Product Strategy & User Diagnosis",
      badge: "Founding Partner",
      icon: Target,
      accent: "#ffbd5f",
      focus: "Transforms complex operational chaos into clear product roadmaps. Conducts upfront business diagnostics before engineering begins.",
      deliverables: [
        "Upfront diagnostic audits & roadmaps",
        "Business KPI & conversion mapping",
        "Direct client communication & strategy",
      ],
      tag: "Diagnosis & Strategy",
    },
    {
      id: "F2",
      role: "Engineering Lead",
      subtitle: "System Architecture & High-Speed Performance",
      badge: "Founding Partner",
      icon: Cpu,
      accent: "#d7e4ff",
      focus: "Architects bulletproof web infrastructure, database schemas, and edge applications built to handle 10x traffic bursts with sub-second response.",
      deliverables: [
        "Durable system & cloud architecture",
        "Sub-second API & database query speed",
        "Zero-downtime deployment pipelines",
      ],
      tag: "Architecture & Speed",
    },
    {
      id: "F3",
      role: "Partnerships & Delivery Lead",
      subtitle: "Workflow Integrations & Data Migration",
      badge: "Founding Partner",
      icon: Zap,
      accent: "#cbe9da",
      focus: "Manages complex third-party API integrations, CRM workflow automation, and zero-loss legacy data transfers with 60 days warranty.",
      deliverables: [
        "API & CRM workflow automation",
        "Zero-downtime database migration",
        "Post go-live 60-day support SLA",
      ],
      tag: "Integrations & Delivery",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#e7f0eb] min-h-screen py-14 lg:py-16 flex flex-col justify-center"
    >
      {/* Decorative Subtle Dot Mesh */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(#17232d 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto z-10 space-y-8 lg:space-y-10">
        {/* Streamlined Header Strip */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between scroll-reveal">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#17232d] bg-[#fffdf8] px-3.5 py-1 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#17232d] shadow-[2px_2px_0_#17232d]">
              <Users className="h-3 w-3 text-[#ed542d]" /> About BellCurve Studio
            </span>

            <h2 className="mt-2.5 text-3xl sm:text-4xl lg:text-5xl font-black leading-[.95] tracking-[-.06em] text-[#17232d]">
              Diagnose first,{" "}
              <em className="font-editorial-serif font-normal text-[#ed542d] underline decoration-[#ffbd5f] decoration-wavy decoration-2">
                build second.
              </em>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm leading-relaxed text-[#56616a] border-l-2 border-[#ed542d] pl-3 py-0.5 font-medium">
            An independent software studio built by three engineers who believe technology should serve business goals, not agency ego.
          </p>
        </header>

        {/* Founding Ethos Manifesto Spotlight Box */}
        <div className="scroll-reveal rounded-3xl border-2 border-[#17232d] bg-[#fffdf8] p-5 sm:p-6 shadow-[6px_6px_0_#17232d] relative overflow-hidden">
          <div className="flex items-center justify-between border-b-2 border-[#17232d]/15 pb-3">
            <span className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d] flex items-center gap-1.5">
              <Sparkle className="h-3.5 w-3.5 text-[#ed542d] animate-spin" style={{ animationDuration: "10s" }} />
              Our Founding Ethos
            </span>
            <span className="font-code-mono text-[10px] font-extrabold text-[#17232d] bg-[#17232d]/5 px-2.5 py-0.5 rounded-lg border border-[#17232d]/15">
              3 Founder-Engineers • 0 Sales Middlemen
            </span>
          </div>

          <blockquote className="mt-3 font-editorial-serif text-lg sm:text-xl lg:text-2xl leading-snug text-[#17232d]">
            “BellCurve Studio was founded by three engineers who kept seeing organisations spend money on software that didn&apos;t fix the real problem. We started BellCurve to diagnose first, and build second.”
          </blockquote>
        </div>

        {/* ---------------------------------------------------- */}
        {/* VIEW 1: STUDIO CHARTER & CORE VALUES                 */}
        {/* ---------------------------------------------------- */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="font-code-mono text-xs font-black uppercase tracking-wider text-[#ed542d] bg-[#ed542d]/10 px-3 py-1 rounded-lg border border-[#ed542d]/25">
              📜 Studio Charter • 4 Non-Negotiable Principles
            </span>
          </div>

          <div className="grid gap-5 lg:grid-cols-[.88fr_1.12fr] lg:items-stretch scroll-reveal">
            {/* Left Column: 4 Value Selector Cards */}
            <div className="flex flex-col justify-between h-full space-y-2.5">
              {values.map((val, idx) => {
                const IconComp = val.icon;
                const isActive = activeValue === idx;

                return (
                  <button
                    key={val.id}
                    onClick={() => setActiveValue(idx)}
                    className={`group relative text-left flex-1 flex flex-col justify-center rounded-2xl border-2 px-3.5 py-3 transition-all duration-200 overflow-hidden ${
                      isActive
                        ? "border-[#17232d] bg-[#fffdf8] shadow-[5px_5px_0_#17232d] z-10"
                        : "border-[#17232d]/25 bg-[#fffdf8]/80 hover:bg-[#fffdf8] hover:border-[#17232d] hover:shadow-[3px_3px_0_rgba(23,35,45,0.7)]"
                    }`}
                  >
                    {/* Active Signature Indicator Line */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-2 bottom-2 w-1.5 rounded-r-full"
                        style={{ backgroundColor: val.accent }}
                      />
                    )}

                    <div className="flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-3">
                        <span
                          className={`grid h-8.5 w-8.5 shrink-0 place-items-center rounded-xl border-2 border-[#17232d] font-black text-xs transition-transform group-hover:scale-105 shadow-[1.5px_1.5px_0_#17232d]`}
                          style={{ backgroundColor: val.accent }}
                        >
                          <IconComp className="h-4 w-4 text-[#17232d]" />
                        </span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-code-mono text-[9px] font-black uppercase text-[#ed542d]">
                              Principle {val.id}
                            </span>
                            <span className="text-[9px] font-bold text-[#56616a]">
                              • {val.subtitle}
                            </span>
                          </div>
                          <h3 className="text-sm sm:text-base font-black tracking-tight text-[#17232d] leading-tight">
                            {val.title}
                          </h3>
                        </div>
                      </div>

                      <span
                        className={`font-code-mono text-[10px] font-black px-2 py-0.5 rounded-md border-2 shrink-0 ${
                          isActive
                            ? "bg-[#17232d] text-[#ffbd5f] border-[#17232d]"
                            : "bg-[#17232d]/5 text-[#56616a] border-[#17232d]/15"
                        }`}
                      >
                        {val.proofMetric}
                      </span>
                    </div>

                    <p className="mt-1 text-[11px] leading-tight text-[#56616a] line-clamp-1 pl-11 font-medium">
                      {val.tagline}
                    </p>
                  </button>
                );
              })}
            </div>

            {/* Right Column: Fixed Constant Height Stage Card (Zero Layout Shift) */}
            <div className="relative flex flex-col justify-between h-full min-h-[360px] lg:min-h-[380px] rounded-3xl border-2 border-[#17232d] bg-[#fffdf8] p-5 sm:p-6 lg:p-7 shadow-[7px_7px_0_#17232d] overflow-hidden">
              {/* Accent Glow */}
              <div
                className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-35 blur-3xl transition-colors duration-500"
                style={{ backgroundColor: values[activeValue].accent }}
              />

              <div className="space-y-4">
                {/* Stage Header */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#17232d]/15 pb-4">
                  <div className="flex items-center gap-3">
                    <span
                      className="grid h-11 w-11 place-items-center rounded-xl border-2 border-[#17232d] shadow-[2.5px_2.5px_0_#17232d]"
                      style={{ backgroundColor: values[activeValue].accent }}
                    >
                      {React.createElement(values[activeValue].icon, {
                        className: "h-5.5 w-5.5 text-[#17232d]",
                      })}
                    </span>
                    <div>
                      <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#ed542d]">
                        STUDIO CHARTER • PRINCIPLE {values[activeValue].id}
                      </span>
                      <h3 className="text-lg sm:text-xl font-black text-[#17232d]">
                        {values[activeValue].title}
                      </h3>
                    </div>
                  </div>

                  <span className="font-code-mono text-xs font-black text-[#17232d] bg-[#17232d]/5 border-2 border-[#17232d]/25 px-3 py-1 rounded-xl shadow-[1.5px_1.5px_0_#17232d]">
                    {values[activeValue].proofSub}
                  </span>
                </div>

                <p className="text-xs sm:text-sm leading-relaxed font-medium text-[#40505a]">
                  {values[activeValue].description}
                </p>

                {/* Constant Height Principle Breakdown Box */}
                <div className="h-[130px] rounded-2xl border-2 border-[#17232d] bg-[#f4efe5] p-3.5 shadow-[3.5px_3.5px_0_#17232d] flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between border-b border-[#17232d]/15 pb-1.5">
                    <span className="font-code-mono text-xs font-black text-[#17232d] flex items-center gap-1.5">
                      <Terminal className="h-3.5 w-3.5 text-[#ed542d]" /> Studio Engineering Standard
                    </span>
                    <span className="font-code-mono font-black text-[10px] text-emerald-800 bg-emerald-100 px-2 py-0.5 rounded border border-emerald-300">
                      100% Non-Negotiable
                    </span>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-2 py-1">
                    {values[activeValue].highlights.map((item) => (
                      <div
                        key={item}
                        className="bg-[#fffdf8] p-2 rounded-xl border-2 border-[#17232d]/20 text-center font-bold text-xs text-[#17232d] flex items-center justify-center gap-1.5 shadow-[1.5px_1.5px_0_#17232d]/10"
                      >
                        <Check className="h-3.5 w-3.5 text-[#ed542d] shrink-0" />
                        <span className="text-[10px] leading-tight">{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between border-t border-[#17232d]/10 pt-1 text-[10px]">
                    <span className="font-code-mono font-black text-[#ed542d]">
                      Benchmark: {values[activeValue].proofMetric}
                    </span>
                    <span className="font-bold text-[#56616a]">
                      Verified Studio Guarantee
                    </span>
                  </div>
                </div>
              </div>

              {/* Stage Bottom Footer */}
              <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#17232d]/15 pt-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="font-code-mono text-xs font-black text-[#17232d]">
                    BellCurve Engineering Charter Verified
                  </span>
                </div>

                <button
                  onClick={onOpenAudit}
                  className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#17232d] bg-[#17232d] px-4 py-2 text-xs font-black text-[#fffdf8] shadow-[2.5px_2.5px_0_#ffbd5f] transition-all hover:bg-[#ed542d] hover:shadow-[3.5px_3.5px_0_#17232d] hover:-translate-y-0.5"
                >
                  <span>Request Free Audit</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#ffbd5f]" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------- */}
        {/* VIEW 2: FOUNDING PARTNERS COMMAND DECK               */}
        {/* ---------------------------------------------------- */}
        <div className="space-y-4 pt-4 border-t-2 border-[#17232d]/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <span className="font-code-mono text-xs font-black uppercase tracking-wider text-[#17232d] bg-[#fffdf8] px-3 py-1 rounded-lg border-2 border-[#17232d] shadow-[2px_2px_0_#ffbd5f] shrink-0 w-fit">
              👥 Leadership • 3 Founding Partners
            </span>
            <span className="font-code-mono text-[10px] font-extrabold text-[#56616a]">
              Direct Founder Access • 0 Sales Middlemen
            </span>
          </div>

          <div className="grid gap-5 md:grid-cols-3 scroll-reveal">
            {founders.map((founder, idx) => {
              const IconComp = founder.icon;
              const isActive = activeFounder === idx;

              return (
                <div
                  key={founder.id}
                  onClick={() => setActiveFounder(idx)}
                  className={`group relative cursor-pointer flex flex-col justify-between rounded-3xl border-2 border-[#17232d] ${
                    isActive
                      ? "bg-[#17232d] text-[#fffdf8] shadow-[7px_7px_0_#ffbd5f] -translate-y-1"
                      : "bg-[#fffdf8] text-[#17232d] shadow-[5px_5px_0_#17232d] hover:shadow-[7px_7px_0_#ed542d] hover:-translate-y-0.5"
                  } p-5 lg:p-6 transition-all duration-300 min-h-[360px]`}
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`font-code-mono text-[9px] font-black uppercase tracking-widest px-2.5 py-1 rounded-lg border-2 ${
                          isActive
                            ? "bg-[#ffbd5f] text-[#17232d] border-[#17232d]"
                            : "bg-[#ed542d]/10 text-[#ed542d] border-[#ed542d]/30"
                        }`}
                      >
                        {founder.badge}
                      </span>
                      <span
                        className="grid h-9 w-9 place-items-center rounded-xl border-2 border-[#17232d] shadow-[2px_2px_0_#17232d] transition-transform group-hover:rotate-6"
                        style={{ backgroundColor: founder.accent }}
                      >
                        <IconComp className="h-4.5 w-4.5 text-[#17232d]" />
                      </span>
                    </div>

                    <h3 className={`mt-4 text-lg lg:text-xl font-black tracking-tight ${isActive ? "text-[#fffdf8]" : "text-[#17232d]"}`}>
                      {founder.role}
                    </h3>

                    <span className={`block mt-1 font-code-mono text-[10px] font-extrabold ${isActive ? "text-[#ffbd5f]" : "text-[#ed542d]"}`}>
                      {founder.subtitle}
                    </span>

                    <p className={`mt-3 text-xs leading-relaxed font-medium ${isActive ? "text-[#d6dce1]" : "text-[#56616a]"}`}>
                      {founder.focus}
                    </p>
                  </div>

                  <div className="mt-5 border-t-2 border-[#17232d]/20 pt-3">
                    <span className={`block font-code-mono text-[9px] font-black uppercase tracking-wider ${isActive ? "text-[#ffbd5f]" : "text-[#56616a]"}`}>
                      Core Direct Responsibilities:
                    </span>
                    <ul className="mt-2 space-y-1.5">
                      {founder.deliverables.map((item) => (
                        <li key={item} className="flex items-start gap-1.5 text-[11px] font-bold">
                          <Check className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${isActive ? "text-[#ffbd5f]" : "text-[#ed542d]"}`} />
                          <span className={isActive ? "text-[#fffdf8]" : "text-[#17232d]"}>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
