"use client";

import React, { useState } from "react";
import {
  ArrowRight,
  Compass,
  FileCheck,
  FileSearch,
  Layers,
  Rocket,
  Sparkles,
  Workflow,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Terminal,
  Check,
  Zap,
} from "lucide-react";

interface HowWeWorkProps {
  onOpenAudit: () => void;
}

export default function HowWeWork({ onOpenAudit }: HowWeWorkProps) {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const [animateKey, setAnimateKey] = useState<number>(0);

  // Step 1 Widget state
  const [selectedFriction, setSelectedFriction] = useState<string>("leads");
  
  // Step 3 Widget state (Jargon vs Plain English)
  const [showPlainLanguage, setShowPlainLanguage] = useState<boolean>(true);

  // Step 4 Widget state (Architecture focus)
  const [activeNode, setActiveNode] = useState<string>("engine");

  const steps = [
    {
      num: "01",
      shortLabel: "01. Overview",
      title: "Problem Overview",
      tagline: "First Contact",
      badge: "No Sales Pressure",
      timeframe: "Day 1",
      description: "You tell us what's not working in your business or website. Zero high-pressure sales calls — just an open conversation about friction points.",
      icon: Sparkles,
      accent: "#ffbd5f",
      deliverables: ["Initial context alignment", "Friction point identification", "Zero obligation review"],
    },
    {
      num: "02",
      shortLabel: "02. Audit",
      title: "Free Internal Audit",
      tagline: "Free Diagnosis",
      badge: "Zero-Cost Audit",
      timeframe: "Days 2–3",
      description: "We deep dive into your website, lead enquiry flows, and internal backend processes free of charge to spot hidden revenue leaks.",
      icon: FileSearch,
      accent: "#d7e4ff",
      deliverables: ["Speed & UX diagnostic", "Lead leak detection", "Process efficiency audit"],
    },
    {
      num: "03",
      shortLabel: "03. Diagnosis",
      title: "Problems Identified",
      tagline: "Plain Language",
      badge: "Zero Jargon",
      timeframe: "Day 4",
      description: "You receive a clear breakdown of what's costing you time or leads, written in plain, human English without confusing developer jargon.",
      icon: Compass,
      accent: "#cbe9da",
      deliverables: ["Root cause analysis", "Lead loss cost mapping", "Actionable clarity report"],
    },
    {
      num: "04",
      shortLabel: "04. Solutions",
      title: "Solutions Proposed",
      tagline: "Architecture",
      badge: "Fixed Cost Scoping",
      timeframe: "Day 5",
      description: "We map out the exact custom system architecture that fixes your problems, along with transparent, fixed-cost scoping.",
      icon: Layers,
      accent: "#e7d7ff",
      deliverables: ["System architecture map", "Fixed project scope", "Timeline & milestone plan"],
    },
    {
      num: "05",
      shortLabel: "05. Contract",
      title: "Contract Sharing",
      tagline: "Written Guarantee",
      badge: "Signed In Writing",
      timeframe: "Day 6",
      description: "Scope, timeline, and investment are agreed upon and signed in writing first. No hidden fees or unexpected mid-project surprises.",
      icon: FileCheck,
      accent: "#ffd7c5",
      deliverables: ["Legal clarity & scope lock", "Guaranteed delivery date", "Payment milestone agreement"],
    },
    {
      num: "06",
      shortLabel: "06. Build",
      title: "Senior Development",
      tagline: "Senior Founders",
      badge: "Direct Execution",
      timeframe: "Weeks 1–4+",
      description: "Founders build and deliver directly. No junior team handoffs, no lost context, and weekly live progress demos.",
      icon: Workflow,
      accent: "#ffbd5f",
      deliverables: ["Founder-led engineering", "Weekly interactive demos", "Clean, maintainable code"],
    },
    {
      num: "07",
      shortLabel: "07. Migration",
      title: "2 Months Free Migration",
      tagline: "Zero Extra Cost",
      badge: "Post Go-Live",
      timeframe: "Post Launch",
      description: "Once live, we handle all data migration from your existing system into the new workflow at no extra cost.",
      icon: Rocket,
      accent: "#cbe9da",
      deliverables: ["Full data transfer", "Zero downtime cutover", "60-day post-launch support"],
    },
  ];

  const activeStep = steps[activeStepIndex];
  const ActiveIcon = activeStep.icon;

  const prevStepIndex = (activeStepIndex - 1 + steps.length) % steps.length;
  const nextStepIndex = (activeStepIndex + 1) % steps.length;

  const changeStep = (index: number) => {
    setActiveStepIndex(index);
    setAnimateKey(Date.now());
  };

  const handleNextStep = () => {
    changeStep(nextStepIndex);
  };

  const handlePrevStep = () => {
    changeStep(prevStepIndex);
  };

  return (
    <section id="how-we-work" className="relative overflow-hidden bg-[#e7f0eb] min-h-screen lg:h-screen flex flex-col justify-center py-6 lg:py-8">
      {/* Background Decorative Patterns */}
      <div className="absolute right-[-10rem] top-10 h-80 w-80 rounded-full border border-[#17232d]/10 pointer-events-none" aria-hidden="true" />
      <div className="absolute left-[-8rem] bottom-5 h-72 w-72 rounded-full border border-dashed border-[#17232d]/15 pointer-events-none" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto flex flex-col justify-between">
        {/* Clean Header Without Paragraph */}
        <header className="flex items-center justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#17232d]/20 bg-[#fffdf8] px-3 py-1 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#56616a] shadow-[2px_2px_0_#17232d]">
              <Workflow className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> The 7-Step Framework
            </div>
            <h2 className="mt-2 text-3xl font-black leading-none tracking-[-.06em] text-[#17232d] sm:text-4xl lg:text-5xl">
              How we <em className="font-editorial-serif font-normal text-[#ed542d]">work.</em>
            </h2>
          </div>
        </header>

        {/* Dynamic Light Theme Step Selector Track Box */}
        <div className="mt-4 rounded-2xl border-2 border-[#17232d] bg-[#fffdf8] p-3 shadow-[5px_5px_0_#17232d]">
          {/* TRACKER HEADING BAR */}
          <div className="flex items-center justify-between border-b-2 border-[#17232d]/10 pb-2 mb-2 px-1">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#ed542d] animate-pulse" />
              <h3 className="font-code-mono text-[11px] font-black uppercase tracking-[.16em] text-[#17232d]">
                Framework Pipeline Navigation
              </h3>
            </div>
            <div className="flex items-center gap-2 font-code-mono text-[10px] font-black text-[#56616a]">
              <span className="rounded-full bg-[#ffbd5f] px-2.5 py-0.5 text-[#17232d] border border-[#17232d]">
                Step {activeStep.num} / 07
              </span>
              <span className="hidden sm:inline-block text-[#ed542d] uppercase">
                {activeStep.title}
              </span>
            </div>
          </div>

          {/* HORIZONTAL STEP NODES TRACK */}
          <div className="overflow-x-auto pb-1.5 pt-0.5 scrollbar-none">
            <div className="flex min-w-[720px] items-center justify-between relative px-3 py-1">
              {/* Connected Track Line */}
              <div className="absolute left-7 right-7 top-1/2 -z-0 h-1.5 -translate-y-1/2 rounded-full bg-[#17232d]/10" />
              <div
                className="absolute left-7 top-1/2 -z-0 h-1.5 -translate-y-1/2 rounded-full bg-[#ed542d] transition-all duration-500 ease-out"
                style={{
                  width: `${(activeStepIndex / (steps.length - 1)) * 92}%`,
                }}
              />

              {steps.map((step, idx) => {
                const isActive = idx === activeStepIndex;
                const isPast = idx < activeStepIndex;
                const StepIcon = step.icon;

                return (
                  <button
                    key={step.num}
                    onClick={() => changeStep(idx)}
                    className={`relative z-10 flex flex-col items-center gap-1 transition-all duration-300 ${
                      isActive
                        ? "scale-105 -translate-y-0.5"
                        : "hover:scale-102 opacity-80 hover:opacity-100"
                    }`}
                  >
                    <div
                      className={`grid h-9 w-9 place-items-center rounded-xl border-2 transition-all duration-300 ${
                        isActive
                          ? "border-[#17232d] bg-[#ffbd5f] text-[#17232d] shadow-[3px_3px_0_#ed542d]"
                          : isPast
                          ? "border-[#17232d] bg-[#cbe9da] text-[#17232d] shadow-[1.5px_1.5px_0_#17232d]"
                          : "border-[#17232d]/30 bg-[#f4efe5] text-[#56616a] hover:border-[#17232d] hover:bg-[#fffdf8]"
                      }`}
                    >
                      {isPast ? (
                        <Check className="h-4 w-4 stroke-[3] text-[#17232d]" />
                      ) : (
                        <StepIcon className="h-3.5 w-3.5" />
                      )}
                    </div>
                    <span
                      className={`font-code-mono text-[9px] font-black uppercase tracking-wider whitespace-nowrap transition-colors duration-300 ${
                        isActive ? "text-[#ed542d]" : "text-[#56616a]"
                      }`}
                    >
                      {step.shortLabel}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        {/* 100% LIGHT THEME INTERACTIVE STAGE (Fits in 1 Screen) */}
        <div
          key={animateKey}
          className="mt-4 rounded-[1.75rem] border-2 border-[#17232d] bg-[#fffdf8] p-4 sm:p-6 lg:p-7 shadow-[7px_7px_0_#17232d] transition-all duration-300 animate-tab-fade"
        >
          <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            {/* LEFT PANE: Step Story & Deliverables */}
            <div className="flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <span
                    className="grid h-10 w-10 place-items-center rounded-xl border-2 border-[#17232d] shadow-[2.5px_2.5px_0_#17232d]"
                    style={{ backgroundColor: activeStep.accent }}
                  >
                    <ActiveIcon className="h-4.5 w-4.5 text-[#17232d]" />
                  </span>
                  <div>
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d]">
                      Step {activeStep.num} of 07 • {activeStep.timeframe}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-black text-[#17232d] tracking-tight">
                      {activeStep.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-3 text-xs sm:text-sm leading-relaxed text-[#40505a]">
                  {activeStep.description}
                </p>

                {/* Key Outcomes & Deliverables */}
                <div className="mt-4 rounded-xl border-2 border-[#17232d]/15 bg-[#f4efe5] p-3.5 shadow-[2px_2px_0_#17232d]/10">
                  <p className="font-code-mono text-[9px] font-black uppercase tracking-[.16em] text-[#56616a]">
                    Key Outcomes & Deliverables
                  </p>
                  <ul className="mt-2 grid gap-1.5 sm:grid-cols-1">
                    {activeStep.deliverables.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-xs font-bold text-[#17232d]"
                      >
                        <CheckCircle2 className="h-3.5 w-3.5 text-[#ed542d] shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* NAVIGATION CONTROLS: Previous & Next */}
              <div className="mt-5 flex items-center justify-between border-t-2 border-[#17232d]/10 pt-4">
                <button
                  onClick={handlePrevStep}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-[#17232d] bg-[#f4efe5] px-4 py-2 text-xs font-black text-[#17232d] shadow-[2.5px_2.5px_0_#17232d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#fffdf8]"
                >
                  <ChevronLeft className="h-4 w-4 text-[#ed542d]" />
                  <span>Previous</span>
                </button>

                <div className="flex items-center gap-1 font-code-mono text-xs font-black text-[#56616a]">
                  <span className="text-[#ed542d]">{activeStep.num}</span>
                  <span>/</span>
                  <span>07</span>
                </div>

                <button
                  onClick={handleNextStep}
                  className="inline-flex items-center gap-2 rounded-xl border-2 border-[#17232d] bg-[#ed542d] px-4 py-2 text-xs font-black text-white shadow-[2.5px_2.5px_0_#17232d] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#d94b2c]"
                >
                  <span>Next</span>
                  <ChevronRight className="h-4 w-4 text-white" />
                </button>
              </div>
            </div>

            {/* RIGHT PANE: LIGHT THEME BESPOKE STEP SIMULATOR */}
            <div className="rounded-2xl border-2 border-[#17232d] bg-[#f8f4ec] p-4 sm:p-5 text-[#17232d] shadow-[5px_5px_0_#ed542d] min-h-[280px] flex flex-col justify-between relative overflow-hidden transition-all duration-500">
              <div className="flex items-center justify-between border-b-2 border-[#17232d]/15 pb-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#ed542d] animate-ping" />
                  <span className="font-code-mono text-xs font-black text-[#17232d]">Interactive Live Simulator</span>
                </div>
                <span className="rounded-full bg-[#ed542d] px-2.5 py-0.5 font-code-mono text-[9px] font-black uppercase text-white shadow-[1px_1px_0_#17232d]">
                  {activeStep.badge}
                </span>
              </div>

              {/* SIMULATOR STEP 1: Problem Overview */}
              {activeStepIndex === 0 && (
                <div className="my-3 space-y-3">
                  <p className="font-code-mono text-xs font-bold text-[#ed542d]">
                    Click to test your current biggest operational bottleneck:
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "leads", label: "Leads Dropping Off", severity: "High Leakage" },
                      { id: "speed", label: "Slow Website Speed", severity: "Bounce Risk" },
                      { id: "manual", label: "Manual Copy-Pasting", severity: "Wasted Hours" },
                      { id: "tech", label: "Outdated Tech Stack", severity: "Tech Debt" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedFriction(item.id)}
                        className={`rounded-xl border-2 p-2.5 text-left transition-all duration-300 ${
                          selectedFriction === item.id
                            ? "border-[#17232d] bg-[#ffbd5f] text-[#17232d] shadow-[2.5px_2.5px_0_#17232d] -translate-y-0.5"
                            : "border-[#17232d]/20 bg-[#fffdf8] text-[#56616a] hover:border-[#17232d] hover:bg-white"
                        }`}
                      >
                        <span className="block text-xs font-black">{item.label}</span>
                        <span className="block text-[9px] font-bold text-[#ed542d] mt-0.5">{item.severity}</span>
                      </button>
                    ))}
                  </div>
                  <div className="rounded-xl border border-[#17232d]/20 bg-[#fffdf8] p-3 text-xs leading-relaxed text-[#17232d] shadow-[2px_2px_0_#17232d]/10">
                    <strong className="text-[#ed542d]">Diagnostic Diagnosis: </strong>
                    {selectedFriction === "leads" && "Enquiry form friction causes ~35% dropoffs before sales touchpoints."}
                    {selectedFriction === "speed" && "Slow mobile load times hurt SEO rankings and lead response rates."}
                    {selectedFriction === "manual" && "Founders waste 10+ hours weekly manually syncing client records."}
                    {selectedFriction === "tech" && "Fragile legacy systems that break whenever updates occur."}
                  </div>
                </div>
              )}

              {/* SIMULATOR STEP 2: Free Internal Audit Scanner */}
              {activeStepIndex === 1 && (
                <div className="my-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-code-mono text-xs font-bold text-[#17232d]">Audit Performance Meter</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-black text-[#059669] bg-[#cbe9da] px-2 py-0.5 rounded border border-[#17232d]">
                      <Zap className="h-3 w-3 fill-current" /> Live Scan
                    </span>
                  </div>

                  <div className="space-y-3 rounded-xl border border-[#17232d]/20 bg-[#fffdf8] p-3.5 shadow-[2px_2px_0_#17232d]/10">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-[#17232d] mb-1">
                        <span>Web Speed & Mobile UX</span>
                        <span className="text-[#059669]">98 / 100 (Optimized)</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#17232d]/10 overflow-hidden">
                        <div className="h-full bg-[#059669] w-[98%] transition-all duration-700 ease-out" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-[#17232d] mb-1">
                        <span>Lead Conversion Flow</span>
                        <span className="text-[#ed542d]">Audit Needed (65%)</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#17232d]/10 overflow-hidden">
                        <div className="h-full bg-[#ed542d] w-[65%] transition-all duration-700 ease-out" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-[#17232d] mb-1">
                        <span>Process Automation Sync</span>
                        <span className="text-[#ed542d]">Leak Found (40%)</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#17232d]/10 overflow-hidden">
                        <div className="h-full bg-[#ffbd5f] w-[40%] transition-all duration-700 ease-out" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SIMULATOR STEP 3: Problems Identified (Jargon vs Plain English) */}
              {activeStepIndex === 2 && (
                <div className="my-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-code-mono text-xs font-bold text-[#56616a]">Select Presentation Style:</span>
                    <button
                      onClick={() => setShowPlainLanguage(!showPlainLanguage)}
                      className="rounded-lg border-2 border-[#17232d] bg-[#17232d] px-2.5 py-1 text-xs font-bold text-white shadow-[2px_2px_0_#ffbd5f] hover:bg-[#ed542d] transition-all"
                    >
                      Toggle: {showPlainLanguage ? "Plain English" : "Dev Jargon"}
                    </button>
                  </div>

                  <div className="rounded-xl border-2 border-[#17232d] bg-[#fffdf8] p-3.5 shadow-[3px_3px_0_#cbe9da] space-y-1.5">
                    <span className="font-code-mono text-[9px] uppercase font-black text-[#ed542d]">
                      {showPlainLanguage ? "PLAIN ENGLISH DIAGNOSIS" : "TECHNICAL DEVELOPER JARGON"}
                    </span>
                    <p className="text-xs font-bold leading-relaxed text-[#17232d]">
                      {showPlainLanguage
                        ? "“Your website takes 6 seconds to load on phones. Customers abandon the page before seeing your contact form, losing ~₹80,000 in leads monthly.”"
                        : "“Monolithic REST endpoint overhead and uncompressed bundle sizes causing render-blocking paint delays exceeding 6000ms.”"}
                    </p>
                  </div>

                  <div className="rounded-lg border border-[#17232d]/20 bg-[#cbe9da] p-2 text-[10px] font-black text-[#17232d]">
                    ✓ Guaranteed 100% plain language clarity in all reports.
                  </div>
                </div>
              )}

              {/* SIMULATOR STEP 4: Solutions Proposed System Architecture */}
              {activeStepIndex === 3 && (
                <div className="my-3 space-y-2.5">
                  <p className="font-code-mono text-xs font-bold text-[#ed542d]">
                    Click architectural components to inspect proposed fix:
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {[
                      { id: "frontend", title: "Next.js UI", sub: "Lightning Fast" },
                      { id: "engine", title: "API Engine", sub: "Zero Latency" },
                      { id: "database", title: "Database Sync", sub: "100% Reliable" },
                    ].map((node) => (
                      <button
                        key={node.id}
                        onClick={() => setActiveNode(node.id)}
                        className={`rounded-xl border-2 p-2 transition-all duration-300 ${
                          activeNode === node.id
                            ? "border-[#17232d] bg-[#e7d7ff] text-[#17232d] shadow-[2.5px_2.5px_0_#17232d] -translate-y-0.5"
                            : "border-[#17232d]/20 bg-[#fffdf8] text-[#56616a] hover:border-[#17232d]"
                        }`}
                      >
                        <span className="block text-xs font-black">{node.title}</span>
                        <span className="block text-[9px] font-bold text-[#56616a]">{node.sub}</span>
                      </button>
                    ))}
                  </div>

                  <div className="rounded-xl border-2 border-[#17232d] bg-[#fffdf8] p-3 text-xs font-bold leading-relaxed text-[#17232d] shadow-[2px_2px_0_#17232d]">
                    {activeNode === "frontend" && "Clean, responsive user interface built for high conversion and instant page loads."}
                    {activeNode === "engine" && "Robust backend API connecting your website directly to your internal workflow without human manual effort."}
                    {activeNode === "database" && "High-performance database setup with automated backups and instant query speeds."}
                  </div>
                </div>
              )}

              {/* SIMULATOR STEP 5: Contract Sharing Written Guarantee */}
              {activeStepIndex === 4 && (
                <div className="my-3 space-y-2.5">
                  <div className="rounded-xl border-2 border-[#17232d] bg-[#fffdf8] p-3.5 shadow-[3px_3px_0_#ffd7c5] space-y-2">
                    <div className="flex items-center justify-between border-b border-[#17232d]/15 pb-1.5">
                      <span className="font-code-mono text-xs font-black text-[#17232d]">BELLCURVE SCOPE CONTRACT</span>
                      <FileCheck className="h-4 w-4 text-[#ed542d]" />
                    </div>
                    <ul className="space-y-1 text-xs font-bold text-[#17232d]">
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#ed542d]" /> Fixed Investment Scope (Zero Hidden Costs)</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#ed542d]" /> Guaranteed Delivery Timeline</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#ed542d]" /> Full Source Code & IP Ownership</li>
                    </ul>
                    <div className="mt-1 inline-block rounded border border-[#17232d] bg-[#ed542d] px-2 py-0.5 text-[9px] font-black text-white uppercase tracking-widest shadow-[1px_1px_0_#17232d]">
                      SIGNED IN WRITING FIRST
                    </div>
                  </div>
                </div>
              )}

              {/* SIMULATOR STEP 6: Senior Development Founder Log */}
              {activeStepIndex === 5 && (
                <div className="my-3 space-y-2.5 font-code-mono">
                  <div className="flex items-center gap-2 text-xs font-black text-[#17232d] border-b border-[#17232d]/15 pb-1.5">
                    <Terminal className="h-4 w-4 text-[#ed542d]" /> Founder Development Stream
                  </div>
                  <div className="space-y-1 rounded-xl border-2 border-[#17232d] bg-[#fffdf8] p-3 shadow-[2.5px_2.5px_0_#ffbd5f] text-xs font-bold">
                    <p className="text-[#ed542d]">&gt; git commit -m &quot;feat: core high-speed architecture&quot;</p>
                    <p className="text-[#17232d]">&gt; Author: Senior Founders Direct</p>
                    <p className="text-[#059669]">&gt; Status: 0% Junior handoffs, 100% senior craft</p>
                    <p className="text-[#56616a]">&gt; Weekly Live Demo: Active &amp; Ready</p>
                  </div>
                </div>
              )}

              {/* SIMULATOR STEP 7: 2 Months Free Migration Progress */}
              {activeStepIndex === 6 && (
                <div className="my-3 space-y-3">
                  <div className="flex items-center justify-between text-xs font-black text-[#17232d]">
                    <span>Seamless Data Migration</span>
                    <span className="text-[#059669] bg-[#cbe9da] px-2 py-0.5 rounded border border-[#17232d]">100% SAFE</span>
                  </div>
                  <div className="space-y-2 rounded-xl border-2 border-[#17232d] bg-[#fffdf8] p-3.5 shadow-[2.5px_2.5px_0_#cbe9da]">
                    <div className="flex justify-between text-xs font-bold text-[#17232d]">
                      <span>Database Records Transferred</span>
                      <span className="text-[#059669]">Completed</span>
                    </div>
                    <div className="h-2.5 w-full rounded-full bg-[#17232d]/10 overflow-hidden">
                      <div className="h-full bg-[#059669] w-full transition-all duration-700 ease-out" />
                    </div>
                  </div>
                  <p className="text-xs font-bold text-[#56616a] leading-relaxed">
                    We stay with you for 60 days post launch to ensure zero downtime and migrate all legacy data at no extra charge.
                  </p>
                </div>
              )}

              {/* Simulator Footer CTA */}
              <div className="mt-2 flex items-center justify-between border-t-2 border-[#17232d]/15 pt-2.5">
                <span className="text-xs text-[#56616a] font-bold">
                  Need scoping for your project?
                </span>
                <button
                  onClick={onOpenAudit}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#ed542d] px-3 py-1.5 text-xs font-black text-white shadow-[2px_2px_0_#17232d] hover:-translate-y-0.5 transition-all"
                >
                  Free Audit <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


