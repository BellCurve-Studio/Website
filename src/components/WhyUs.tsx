"use client";

import React, { useState } from "react";
import {
  UserCheck,
  Eye,
  ShieldCheck,
  Gauge,
  Sparkles,
  Check,
  ArrowUpRight,
  CheckCircle2,
  XCircle,
  MessageSquare,
  Database,
  Terminal,
  FileCheck2
} from "lucide-react";

interface WhyUsProps {
  onOpenAudit?: () => void;
}

export default function WhyUs({ onOpenAudit }: WhyUsProps) {
  // Active pillar index for interactive laboratory (0..3) - MANUAL SELECTION ONLY
  const [activePillar, setActivePillar] = useState<number>(0);

  // Pillar 1 Interactive state (Middleman vs Direct)
  const [p1FlowMode, setP1FlowMode] = useState<"agency" | "bellcurve">("bellcurve");

  // Pillar 2 Interactive state (Diagnostic scenario index)
  const [p2Scenario, setP2Scenario] = useState<number>(0);

  // Pillar 3 Interactive state (Data records slider)
  const [p3RecordCount, setP3RecordCount] = useState<number>(125000);

  // Pillar 4 Interactive state (Jargon vs Plain language switch)
  const [p4JargonFilter, setP4JargonFilter] = useState<"plain" | "buzzwords">("plain");

  const pillars = [
    {
      id: "01",
      title: "Founders Build Directly",
      subtitle: "No Junior Hand-off",
      tagline: "Zero account manager lag. Direct founder engineering access.",
      icon: UserCheck,
      accent: "#ffbd5f", // Gold
      description:
        "You work directly with senior founder-engineers building your system. No sales intermediaries, no account manager games, no junior dev hand-offs.",
      highlights: ["Direct founder access on Slack & calls", "Zero requirement dilution", "15-min technical turnaround"],
      metric: "0 Middlemen",
      metricSub: "100% Founder-Led",
    },
    {
      id: "02",
      title: "Diagnose Before We Build",
      subtitle: "Honest Engineering",
      tagline: "If software isn't your real operational fix, we tell you upfront.",
      icon: Eye,
      accent: "#d7e4ff", // Blue
      description:
        "We decline projects where code isn't the bottleneck. Our initial audit provides clear diagnosis before any contract is signed.",
      highlights: ["Free upfront diagnostic report", "Cost & complexity reduction", "Honest 'don't build this' advice"],
      metric: "3-5 Days",
      metricSub: "Deep Diagnostic Audit",
    },
    {
      id: "03",
      title: "2 Months Free Migration",
      subtitle: "Risk-Free Transition",
      tagline: "Post go-live zero-downtime data transfer with 60 days warranty.",
      icon: ShieldCheck,
      accent: "#cbe9da", // Mint
      description:
        "Deploying new systems is stressful. We spend 60 days post launch actively migrating your legacy data and fine-tuning at zero extra charge.",
      highlights: ["Zero migration fees", "Parallel DB sync & zero downtime", "60-day post-launch safety net"],
      metric: "₹0 Fee",
      metricSub: "60 Days Support",
    },
    {
      id: "04",
      title: "Outcome-First Standards",
      subtitle: "Plain Language",
      tagline: "Real numbers, fixed scope, and durable architecture — zero hype.",
      icon: Gauge,
      accent: "#e7d7ff", // Purple
      description:
        "No agency buzzwords, no vague retainers, no mystery invoices. Every deliverable is tied directly to clear operational outcomes.",
      highlights: ["Fixed scope & predictable cost", "No sales jargon or fluff", "Performance-verified SLA"],
      metric: "Fixed Scope",
      metricSub: "100% Transparent",
    },
  ];

  // Scenarios for Pillar 2 Diagnostic Simulator
  const diagnosticScenarios = [
    {
      label: "Client Request: 'Complete Web Portal Redesign ($25k)'",
      agencyResponse: "Accepts pitch immediately, quotes $25,000 for 12-week overhaul.",
      bellcurveAudit: "Audit revealed database query bottleneck. Optimized indexing in 2 days for 1/10th cost.",
      saved: "Saved $22,500 & 10 Weeks",
      type: "Database / Architecture",
    },
    {
      label: "Client Request: 'Custom Enterprise Mobile App'",
      agencyResponse: "Quotes $40,000 for iOS & Android native apps.",
      bellcurveAudit: "Team only needed automated WhatsApp notifications & web dashboard. Built PWA in 10 days.",
      saved: "Saved $30,000 & 8 Weeks",
      type: "Workflow Automation",
    },
    {
      label: "Client Request: 'Complex AI Recommendation Engine'",
      agencyResponse: "Pitches full machine learning pipeline retainer at $15k/mo.",
      bellcurveAudit: "Rule-based filtering solved 95% of use cases with 0ms latency and zero cloud AI costs.",
      saved: "Saved $15,000/mo Retainer",
      type: "Pragmatic Engineering",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#f4efe5] min-h-screen py-14 lg:py-16 flex flex-col justify-center"
    >
      {/* Decorative Subtle Dot Canvas */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(#17232d 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto z-10 space-y-6">
        {/* Streamlined Header Strip */}
        <header className="flex items-end justify-between scroll-reveal">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#17232d] bg-[#fffdf8] px-3.5 py-1 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#17232d] shadow-[2px_2px_0_#17232d]">
              <Sparkles className="h-3 w-3 text-[#ed542d]" /> Working Principles
            </span>

            <h2 className="mt-2.5 text-3xl sm:text-4xl lg:text-5xl font-black leading-[.95] tracking-[-.06em] text-[#17232d]">
              Why work with{" "}
              <em className="font-editorial-serif font-normal text-[#ed542d] underline decoration-[#ffbd5f] decoration-wavy decoration-2">
                BellCurve.
              </em>
            </h2>
          </div>
        </header>

        {/* ---------------------------------------------------- */}
        {/* INTERACTIVE LABORATORY & LIVE BLUEPRINT (ZERO LAYOUT SHIFT) */}
        {/* ---------------------------------------------------- */}
        <div className="grid gap-5 lg:grid-cols-[.88fr_1.12fr] lg:items-stretch scroll-reveal">
          {/* Left Column: 4 Principle Selector Cards (Minimal Compact Padding) */}
          <div className="flex flex-col justify-between h-full space-y-3">
            <div className="flex flex-col justify-between flex-1 gap-2.5">
              {pillars.map((pillar, idx) => {
                const IconComp = pillar.icon;
                const isActive = activePillar === idx;

                return (
                  <button
                    key={pillar.id}
                    onClick={() => setActivePillar(idx)}
                    className={`group relative text-left flex-1 flex flex-col justify-center rounded-2xl border-2 px-3.5 py-3 transition-all duration-200 overflow-hidden ${
                      isActive
                        ? "border-[#17232d] bg-[#fffdf8] shadow-[5px_5px_0_#17232d] z-10"
                        : "border-[#17232d]/25 bg-[#fffdf8]/80 hover:bg-[#fffdf8] hover:border-[#17232d] hover:shadow-[3px_3px_0_rgba(23,35,45,0.7)]"
                    }`}
                  >
                    {/* Signature Accent Indicator Line */}
                    {isActive && (
                      <div
                        className="absolute left-0 top-2 bottom-2 w-1.5 rounded-r-full"
                        style={{ backgroundColor: pillar.accent }}
                      />
                    )}

                    <div className="flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-3">
                        <span
                          className={`grid h-8.5 w-8.5 shrink-0 place-items-center rounded-xl border-2 border-[#17232d] font-black text-xs transition-transform group-hover:scale-105 shadow-[1.5px_1.5px_0_#17232d]`}
                          style={{ backgroundColor: pillar.accent }}
                        >
                          <IconComp className="h-4 w-4 text-[#17232d]" />
                        </span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-code-mono text-[9px] font-black uppercase text-[#ed542d]">
                              Pillar {pillar.id}
                            </span>
                            <span className="text-[9px] font-bold text-[#56616a]">
                              • {pillar.subtitle}
                            </span>
                          </div>
                          <h3 className="text-sm sm:text-base font-black tracking-tight text-[#17232d] leading-tight">
                            {pillar.title}
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
                        {pillar.metric}
                      </span>
                    </div>

                    <p className="mt-1 text-[11px] leading-tight text-[#56616a] line-clamp-1 pl-11 font-medium">
                      {pillar.tagline}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Fixed Constant Height Stage Card (Zero Layout Shift) */}
          <div className="relative flex flex-col justify-between h-full min-h-[480px] lg:min-h-[500px] rounded-3xl border-2 border-[#17232d] bg-[#fffdf8] p-5 sm:p-6 lg:p-7 shadow-[7px_7px_0_#17232d] overflow-hidden">
            {/* Pillar Accent Glow */}
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-35 blur-3xl transition-colors duration-500"
              style={{ backgroundColor: pillars[activePillar].accent }}
            />

            <div className="space-y-4">
              {/* Stage Header */}
              <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#17232d]/15 pb-4">
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-11 w-11 place-items-center rounded-xl border-2 border-[#17232d] shadow-[2.5px_2.5px_0_#17232d]"
                    style={{ backgroundColor: pillars[activePillar].accent }}
                  >
                    {React.createElement(pillars[activePillar].icon, {
                      className: "h-5.5 w-5.5 text-[#17232d]",
                    })}
                  </span>
                  <div>
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#ed542d]">
                      PILLAR {pillars[activePillar].id}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-[#17232d]">
                      {pillars[activePillar].title}
                    </h3>
                  </div>
                </div>

                <span className="font-code-mono text-xs font-black text-[#17232d] bg-[#17232d]/5 border-2 border-[#17232d]/25 px-3 py-1 rounded-xl shadow-[1.5px_1.5px_0_#17232d]">
                  {pillars[activePillar].metricSub}
                </span>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed font-medium text-[#40505a]">
                {pillars[activePillar].description}
              </p>

              {/* FIXED CONSTANT HEIGHT DEMO CONTAINER (220px CONSTANT - ZERO LAYOUT SHIFT) */}
              <div className="h-[215px] rounded-2xl border-2 border-[#17232d] bg-[#f4efe5] p-4 shadow-[3.5px_3.5px_0_#17232d] flex flex-col justify-between overflow-hidden">
                {/* PILLAR 01 INTERACTIVE DEMO */}
                {activePillar === 0 && (
                  <div className="h-full flex flex-col justify-between space-y-2">
                    <div className="flex items-center justify-between border-b border-[#17232d]/15 pb-2">
                      <span className="font-code-mono text-xs font-black text-[#17232d] flex items-center gap-1.5">
                        <Terminal className="h-3.5 w-3.5 text-[#ed542d]" /> Communication Flow Simulator
                      </span>
                      <div className="flex items-center rounded-lg border-2 border-[#17232d] bg-[#fffdf8] p-0.5 text-[10px] font-black">
                        <button
                          onClick={() => setP1FlowMode("agency")}
                          className={`px-2.5 py-0.5 rounded transition-all ${
                            p1FlowMode === "agency"
                              ? "bg-[#ed542d] text-white"
                              : "text-[#56616a] hover:text-[#17232d]"
                          }`}
                        >
                          Agency Model
                        </button>
                        <button
                          onClick={() => setP1FlowMode("bellcurve")}
                          className={`px-2.5 py-0.5 rounded transition-all ${
                            p1FlowMode === "bellcurve"
                              ? "bg-[#17232d] text-[#ffbd5f]"
                              : "text-[#56616a] hover:text-[#17232d]"
                          }`}
                        >
                          BellCurve Direct
                        </button>
                      </div>
                    </div>

                    {p1FlowMode === "agency" ? (
                      <div className="space-y-2 text-xs flex-1 flex flex-col justify-center">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 p-2.5 rounded-xl border-2 border-red-300 bg-red-50 text-red-950">
                          <div className="flex items-center gap-2 font-semibold">
                            <XCircle className="h-4 w-4 text-red-600 shrink-0" />
                            <span>Client ➔ Sales ➔ Account Exec ➔ PM ➔ Junior Dev</span>
                          </div>
                          <span className="font-code-mono font-black text-[10px] bg-red-200 text-red-900 px-2 py-0.5 rounded border border-red-400 shrink-0">
                            72hr Response Lag
                          </span>
                        </div>
                        <p className="text-[11px] font-medium text-[#56616a] leading-relaxed">
                          ⚠️ Requirements are diluted across 3 middleman layers. High risk of feature misinterpretation, scope creep, and bloated management fees.
                        </p>
                      </div>
                    ) : (
                      <div className="space-y-2 text-xs flex-1 flex flex-col justify-center">
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 p-2.5 rounded-xl border-2 border-emerald-500 bg-emerald-50 text-emerald-950">
                          <div className="flex items-center gap-2 font-bold">
                            <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                            <span>Client 🡘 Senior Founders (Piyush &amp; Team)</span>
                          </div>
                          <span className="font-code-mono font-black text-[10px] bg-emerald-200 text-emerald-900 px-2 py-0.5 rounded border border-emerald-400 shrink-0">
                            15-min Direct Signal
                          </span>
                        </div>
                        <div className="grid grid-cols-3 gap-2 pt-1 text-center font-code-mono text-[11px]">
                          <div className="bg-[#fffdf8] p-2 rounded-xl border-2 border-[#17232d]/20">
                            <span className="block font-black text-[#ed542d] text-sm">0%</span>
                            <span className="text-[#56616a] text-[10px] font-bold">Middlemen</span>
                          </div>
                          <div className="bg-[#fffdf8] p-2 rounded-xl border-2 border-[#17232d]/20">
                            <span className="block font-black text-[#17232d] text-sm">100%</span>
                            <span className="text-[#56616a] text-[10px] font-bold">Founder Access</span>
                          </div>
                          <div className="bg-[#fffdf8] p-2 rounded-xl border-2 border-[#17232d]/20">
                            <span className="block font-black text-emerald-700 text-sm">Direct</span>
                            <span className="text-[#56616a] text-[10px] font-bold">Slack &amp; Calls</span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )}

                {/* PILLAR 02 INTERACTIVE DEMO */}
                {activePillar === 1 && (
                  <div className="h-full flex flex-col justify-between space-y-2">
                    <div className="flex items-center justify-between border-b border-[#17232d]/15 pb-1.5">
                      <span className="font-code-mono text-xs font-black text-[#17232d] flex items-center gap-1.5">
                        <FileCheck2 className="h-3.5 w-3.5 text-[#ed542d]" /> Audit Simulator: Select Request Scenario
                      </span>
                    </div>

                    <div className="flex gap-1.5 overflow-x-auto pb-0.5">
                      {diagnosticScenarios.map((sc, i) => (
                        <button
                          key={sc.type}
                          onClick={() => setP2Scenario(i)}
                          className={`px-2.5 py-1 rounded-lg border-2 text-[10px] font-black whitespace-nowrap transition-all ${
                            p2Scenario === i
                              ? "bg-[#17232d] text-[#ffbd5f] border-[#17232d]"
                              : "bg-[#fffdf8] text-[#56616a] border-[#17232d]/20 hover:border-[#17232d]"
                          }`}
                        >
                          Scenario {i + 1}: {sc.type}
                        </button>
                      ))}
                    </div>

                    <div className="rounded-xl border-2 border-[#17232d]/20 bg-[#fffdf8] p-2.5 text-xs space-y-1.5 flex-1 flex flex-col justify-between">
                      <div className="font-black text-[#17232d] text-xs">
                        {diagnosticScenarios[p2Scenario].label}
                      </div>

                      <div className="grid gap-2 sm:grid-cols-2">
                        <div className="rounded-lg border border-red-200 bg-red-50/80 p-2 text-[10px] space-y-0.5">
                          <span className="font-code-mono font-black text-red-800 block">
                            ❌ Agency Pitch:
                          </span>
                          <span className="text-red-950 font-medium line-clamp-2">
                            {diagnosticScenarios[p2Scenario].agencyResponse}
                          </span>
                        </div>
                        <div className="rounded-lg border border-emerald-300 bg-emerald-50/80 p-2 text-[10px] space-y-0.5">
                          <span className="font-code-mono font-black text-emerald-800 block">
                            ✓ BellCurve Honest Diagnosis:
                          </span>
                          <span className="text-emerald-950 font-medium line-clamp-2">
                            {diagnosticScenarios[p2Scenario].bellcurveAudit}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between border-t border-[#17232d]/10 pt-1 text-[10px]">
                        <span className="font-code-mono font-black text-[#ed542d]">
                          {diagnosticScenarios[p2Scenario].saved}
                        </span>
                        <span className="font-bold text-[#56616a]">
                          Diagnosis Before Pitch Guarantee
                        </span>
                      </div>
                    </div>
                  </div>
                )}

                {/* PILLAR 03 INTERACTIVE DEMO */}
                {activePillar === 2 && (
                  <div className="h-full flex flex-col justify-between space-y-2">
                    <div className="flex items-center justify-between border-b border-[#17232d]/15 pb-1.5">
                      <span className="font-code-mono text-xs font-black text-[#17232d] flex items-center gap-1.5">
                        <Database className="h-3.5 w-3.5 text-[#ed542d]" /> Free Migration Volume Calculator
                      </span>
                      <span className="font-code-mono font-black text-xs text-[#ed542d]">
                        {p3RecordCount.toLocaleString()} Records
                      </span>
                    </div>

                    <div className="space-y-2 flex-1 flex flex-col justify-center">
                      <div className="flex items-center justify-between text-[11px] font-bold text-[#56616a]">
                        <span>Drag Data Volume:</span>
                        <span className="text-[#17232d]">5k to 500k Database Rows</span>
                      </div>
                      <input
                        type="range"
                        min={5000}
                        max={500000}
                        step={5000}
                        value={p3RecordCount}
                        onChange={(e) => setP3RecordCount(Number(e.target.value))}
                        className="w-full h-2 bg-[#17232d]/20 rounded-lg appearance-none cursor-pointer accent-[#ed542d]"
                      />

                      <div className="grid grid-cols-3 gap-2 pt-1 text-center text-xs">
                        <div className="rounded-xl border-2 border-[#17232d]/20 bg-[#fffdf8] p-2">
                          <span className="block font-code-mono text-[9px] text-[#56616a] font-bold">
                            Migration Fee
                          </span>
                          <span className="font-black text-[#ed542d] text-base">₹0.00</span>
                        </div>
                        <div className="rounded-xl border-2 border-[#17232d]/20 bg-[#fffdf8] p-2">
                          <span className="block font-code-mono text-[9px] text-[#56616a] font-bold">
                            Downtime Risk
                          </span>
                          <span className="font-black text-emerald-700 text-base">0 Mins</span>
                        </div>
                        <div className="rounded-xl border-2 border-[#17232d]/20 bg-[#fffdf8] p-2">
                          <span className="block font-code-mono text-[9px] text-[#56616a] font-bold">
                            Post-Launch Support
                          </span>
                          <span className="font-black text-[#17232d] text-base">60 Days</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* PILLAR 04 INTERACTIVE DEMO */}
                {activePillar === 3 && (
                  <div className="h-full flex flex-col justify-between space-y-2">
                    <div className="flex items-center justify-between border-b border-[#17232d]/15 pb-1.5">
                      <span className="font-code-mono text-xs font-black text-[#17232d] flex items-center gap-1.5">
                        <MessageSquare className="h-3.5 w-3.5 text-[#ed542d]" /> Agency Buzzwords vs BellCurve Dialogue
                      </span>
                      <div className="flex items-center rounded-lg border-2 border-[#17232d] bg-[#fffdf8] p-0.5 text-[10px] font-black">
                        <button
                          onClick={() => setP4JargonFilter("buzzwords")}
                          className={`px-2.5 py-0.5 rounded transition-all ${
                            p4JargonFilter === "buzzwords"
                              ? "bg-amber-600 text-white"
                              : "text-[#56616a] hover:text-[#17232d]"
                          }`}
                        >
                          Agency Buzzwords
                        </button>
                        <button
                          onClick={() => setP4JargonFilter("plain")}
                          className={`px-2.5 py-0.5 rounded transition-all ${
                            p4JargonFilter === "plain"
                              ? "bg-[#17232d] text-[#ffbd5f]"
                              : "text-[#56616a] hover:text-[#17232d]"
                          }`}
                        >
                          Plain Language
                        </button>
                      </div>
                    </div>

                    <div className="rounded-xl border-2 border-[#17232d]/20 bg-[#fffdf8] p-3 text-xs flex-1 flex flex-col justify-center">
                      {p4JargonFilter === "buzzwords" ? (
                        <div className="space-y-1.5 italic text-amber-950 bg-amber-50/80 p-3 rounded-xl border border-amber-200">
                          <p className="font-serif text-xs">
                            &ldquo;We synthesize cloud-native synergistic paradigms to maximize omnichannel ROI velocity and drive strategic stakeholder alignment.&rdquo;
                          </p>
                          <span className="block font-code-mono text-[9px] text-amber-800 not-italic font-bold">
                            ❌ Translate: Vague hype, hidden retainer costs, zero clear commitments.
                          </span>
                        </div>
                      ) : (
                        <div className="space-y-1.5 text-[#17232d] bg-emerald-50/80 p-3 rounded-xl border border-emerald-300">
                          <p className="font-bold text-xs">
                            &ldquo;We build ultra-fast, bulletproof web software that loads in 0.3s, handles 10x traffic bursts, and fixes your sales bottlenecks.&rdquo;
                          </p>
                          <span className="block font-code-mono text-[9px] text-emerald-800 font-black">
                            ✓ BellCurve Standard: Clear metrics, fixed scope, durable engineering.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Highlights List */}
              <div className="pt-2 border-t border-[#17232d]/15">
                <span className="font-code-mono text-[9px] font-black uppercase tracking-wider text-[#56616a] block mb-1.5">
                  Non-Negotiable Deliverables:
                </span>
                <ul className="grid sm:grid-cols-3 gap-2">
                  {pillars[activePillar].highlights.map((hl) => (
                    <li
                      key={hl}
                      className="flex items-center gap-1.5 text-xs font-bold text-[#17232d] bg-[#17232d]/5 px-2.5 py-1.5 rounded-lg border border-[#17232d]/15"
                    >
                      <Check className="h-3.5 w-3.5 text-[#ed542d] shrink-0" />
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Stage Bottom Footer */}
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#17232d]/15 pt-3">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-code-mono text-xs font-black text-[#17232d]">
                  BellCurve Charter Standard Verified
                </span>
              </div>

              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#17232d] bg-[#17232d] px-4 py-2 text-xs font-black text-[#fffdf8] shadow-[2.5px_2.5px_0_#ffbd5f] transition-all hover:bg-[#ed542d] hover:shadow-[3.5px_3.5px_0_#17232d] hover:-translate-y-0.5"
              >
                <span>Verify Your Project</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#ffbd5f]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
