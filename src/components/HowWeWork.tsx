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
  
  // Step 3 Widget state (Diagnosis selector)
  const [selectedDiagnosis, setSelectedDiagnosis] = useState<string>("visits");

  // Step 4 Widget state (Architecture focus)
  const [activeNode, setActiveNode] = useState<string>("engine");

  const steps = [
    {
      num: "01",
      shortLabel: "01. Understand",
      title: "Understand the problem",
      tagline: "Tell us what's happening.",
      badge: "",
      timeframe: "DAY 1",
      description: "Tell us what's not working. We start with the problem, not a pre-decided solution.",
      icon: Sparkles,
      accent: "#ffbd5f",
      deliverables: ["Understand the current setup", "Identify the pain points", "Define what needs fixing"],
    },
    {
      num: "02",
      shortLabel: "02. Audit",
      title: "Audit what exists",
      tagline: "Look at the current system.",
      badge: "FREE AUDIT",
      timeframe: "DAYS 2–3",
      description: "We look at your website, tools, workflows, and the way information moves through your organisation.",
      icon: FileSearch,
      accent: "#d7e4ff",
      deliverables: ["Website & UX review", "Lead flow review", "Workflow review"],
    },
    {
      num: "03",
      shortLabel: "03. Diagnose",
      title: "Diagnose the real problem",
      tagline: "Find the real bottleneck.",
      badge: "OPERATIONAL CHECK",
      timeframe: "DAY 4",
      description: "We separate the symptom from the problem and find what's getting in the way.",
      icon: Compass,
      accent: "#cbe9da",
      deliverables: ["Find the root problem", "Clarify the impact", "Agree priorities"],
    },
    {
      num: "04",
      shortLabel: "04. Design",
      title: "Design the right solution",
      tagline: "Decide what should be built.",
      badge: "BUILT AROUND YOU",
      timeframe: "DAY 5",
      description: "Once we know what needs fixing, we design the system, experience, or automation that actually solves it.",
      icon: Layers,
      accent: "#e7d7ff",
      deliverables: ["Solution architecture", "Features that matter", "Clear project scope"],
    },
    {
      num: "05",
      shortLabel: "05. Scope",
      title: "Scope the work",
      tagline: "Define the work clearly.",
      badge: "CLEAR SCOPE",
      timeframe: "DAY 6",
      description: "We define what we're building, what it will take, when it will be delivered, and what it will cost.",
      icon: FileCheck,
      accent: "#ffd7c5",
      deliverables: ["Project scope", "Timeline", "Investment"],
    },
    {
      num: "06",
      shortLabel: "06. Build",
      title: "Build the solution",
      tagline: "Turn the solution into reality.",
      badge: "IN DEVELOPMENT",
      timeframe: "WEEKS 1–4+",
      description: "We turn the agreed solution into a working product, with regular progress updates along the way.",
      icon: Workflow,
      accent: "#ffbd5f",
      deliverables: ["Working product", "Regular progress", "Testing & iteration"],
    },
    {
      num: "07",
      shortLabel: "07. Improve",
      title: "Launch & improve",
      tagline: "Keep improving what works.",
      badge: "KEEP MOVING",
      timeframe: "POST LAUNCH",
      description: "We launch the solution, learn from how it's used, and improve what matters next.",
      icon: Rocket,
      accent: "#cbe9da",
      deliverables: ["Launch", "Feedback", "Next improvements"],
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
              <Workflow className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> The BellCurve Process
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
                From Problem to Solution
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
                  width: `${(activeStepIndex / (steps.length - 1)) * 100}%`,
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
                  <span className="font-code-mono text-xs font-black text-[#17232d]">QUICK DIAGNOSIS</span>
                </div>
                <span className="rounded-full bg-[#ed542d] px-2.5 py-0.5 font-code-mono text-[9px] font-black uppercase text-white shadow-[1px_1px_0_#17232d]">
                  {activeStep.badge}
                </span>
              </div>

              {/* SIMULATOR STEP 1: Problem Overview */}
              {activeStepIndex === 0 && (
                <div className="my-3 space-y-3">
                  <p className="font-code-mono text-xs font-bold text-[#ed542d]">
                    Where does the friction start?
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "leads", label: "LEADS GET LOST" },
                      { id: "speed", label: "WEBSITE ISN'T CONVERTING" },
                      { id: "manual", label: "TOO MUCH MANUAL WORK" },
                      { id: "tech", label: "TOOLS DON'T TALK" },
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
                      </button>
                    ))}
                  </div>
                  <div className="rounded-xl border border-[#17232d]/20 bg-[#fffdf8] p-3 text-xs leading-relaxed text-[#17232d] shadow-[2px_2px_0_#17232d]/10">
                    {selectedFriction === "leads" && "Enquiries come in, but follow-up depends on someone remembering to do it."}
                    {selectedFriction === "speed" && "Your website gets attention, but doesn't make the next step easy."}
                    {selectedFriction === "manual" && "Your team spends time moving information between tools instead of doing the work."}
                    {selectedFriction === "tech" && "Important information is spread across systems that don't work together."}
                  </div>
                </div>
              )}

              {/* SIMULATOR STEP 2: Free Internal Audit Scanner */}
              {activeStepIndex === 1 && (
                <div className="my-3 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="font-code-mono text-xs font-bold text-[#17232d]">WHAT WE LOOK AT</span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-black text-[#059669] bg-[#cbe9da] px-2 py-0.5 rounded border border-[#17232d]">
                      <Zap className="h-3 w-3 fill-current" /> Live Scan
                    </span>
                  </div>

                  <div className="space-y-3 rounded-xl border border-[#17232d]/20 bg-[#fffdf8] p-3.5 shadow-[2px_2px_0_#17232d]/10">
                    <div>
                      <div className="flex justify-between text-xs font-bold text-[#17232d] mb-1">
                        <span>DIGITAL EXPERIENCE</span>
                        <span className="text-[#56616a]">Website, UX, mobile</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#17232d]/10 overflow-hidden">
                        <div className="h-full bg-[#059669] w-[98%] transition-all duration-700 ease-out" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-[#17232d] mb-1">
                        <span>LEAD FLOW</span>
                        <span className="text-[#56616a]">Enquiry → follow-up</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#17232d]/10 overflow-hidden">
                        <div className="h-full bg-[#ed542d] w-[65%] transition-all duration-700 ease-out" />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-bold text-[#17232d] mb-1">
                        <span>WORKFLOWS</span>
                        <span className="text-[#56616a]">Manual steps → handoffs</span>
                      </div>
                      <div className="h-2 w-full rounded-full bg-[#17232d]/10 overflow-hidden">
                        <div className="h-full bg-[#ffbd5f] w-[40%] transition-all duration-700 ease-out" />
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SIMULATOR STEP 3: Diagnose the real problem */}
              {activeStepIndex === 2 && (
                <div className="my-3 space-y-3">
                  {/* <p className="font-code-mono text-xs font-bold text-[#ed542d]">
                    WHAT SOUNDS FAMILIAR?
                  </p> */}
                  <div className="grid grid-cols-2 gap-2">
                    {[
                      { id: "visits", label: "FEW WEBSITE ENQUIRIES" },
                      { id: "manual", label: "TOO MUCH MANUAL WORK" },
                      { id: "stuck", label: "WORK GETS STUCK" },
                      { id: "tools", label: "TOOLS DON'T CONNECT" },
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setSelectedDiagnosis(item.id)}
                        className={`rounded-xl border-2 p-2.5 text-left transition-all duration-300 ${
                          selectedDiagnosis === item.id
                            ? "border-[#17232d] bg-[#cbe9da] text-[#17232d] shadow-[2.5px_2.5px_0_#17232d] -translate-y-0.5"
                            : "border-[#17232d]/20 bg-[#fffdf8] text-[#56616a] hover:border-[#17232d] hover:bg-white"
                        }`}
                      >
                        <span className="block text-xs font-black">{item.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="rounded-xl border-2 border-[#17232d] bg-[#fffdf8] p-3.5 shadow-[3px_3px_0_#cbe9da]">
                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <span className="font-code-mono text-[9px] uppercase font-black text-[#ed542d] block mb-1">
                          WHAT YOU'RE SEEING
                        </span>
                        <p className="text-xs font-bold leading-snug text-[#17232d]">
                          {selectedDiagnosis === "visits" && "Visitors aren't turning into enquiries."}
                          {selectedDiagnosis === "manual" && "Your team keeps doing things manually."}
                          {selectedDiagnosis === "stuck" && "Tasks keep getting passed around."}
                          {selectedDiagnosis === "tools" && "Your tools don't share information."}
                        </p>
                      </div>
                      <div className="border-l border-[#17232d]/10 pl-3">
                        <span className="font-code-mono text-[9px] uppercase font-black text-[#56616a] block mb-1">
                          WHAT'S GETTING IN THE WAY
                        </span>
                        <p className="text-xs font-bold leading-snug text-[#17232d]">
                          {selectedDiagnosis === "visits" && "The enquiry path has friction."}
                          {selectedDiagnosis === "manual" && "Too many manual steps."}
                          {selectedDiagnosis === "stuck" && "Too many manual handoffs."}
                          {selectedDiagnosis === "tools" && "People fill the gaps manually."}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* SIMULATOR STEP 4: Solutions Proposed System Architecture */}
              {activeStepIndex === 3 && (
                <div className="my-3 space-y-2.5">
                  <p className="font-code-mono text-xs font-bold text-[#ed542d]">
                    WHAT THE SOLUTION COULD INCLUDE
                  </p>
                  <div className="grid grid-cols-3 gap-2 text-center">
                    {[
                      { id: "frontend", title: "DIGITAL EXPERIENCE", sub: "Website / portal" },
                      { id: "engine", title: "BUSINESS SYSTEM", sub: "Internal tools / dashboard" },
                      { id: "database", title: "AUTOMATION", sub: "Workflows / integrations" },
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
                    {activeNode === "frontend" && "A website or portal designed around the way your customers interact with you."}
                    {activeNode === "engine" && "A tool built around the way your team actually works."}
                    {activeNode === "database" && "Remove repetitive steps and connect the tools your team already uses."}
                  </div>
                </div>
              )}

              {/* SIMULATOR STEP 5: Contract Sharing Written Guarantee */}
              {activeStepIndex === 4 && (
                <div className="my-3 space-y-2.5">
                  <div className="rounded-xl border-2 border-[#17232d] bg-[#fffdf8] p-3.5 shadow-[3px_3px_0_#ffd7c5] space-y-2">
                    <div className="flex items-center justify-between border-b border-[#17232d]/15 pb-1.5">
                      <span className="font-code-mono text-xs font-black text-[#17232d]">YOUR PROJECT SCOPE</span>
                      <FileCheck className="h-4 w-4 text-[#ed542d]" />
                    </div>
                    <ul className="space-y-1 text-xs font-bold text-[#17232d]">
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#ed542d]" /> What we're building</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#ed542d]" /> Timeline</li>
                      <li className="flex items-center gap-1.5"><Check className="h-3.5 w-3.5 text-[#ed542d]" /> Investment</li>
                    </ul>
                    <div className="mt-1 inline-block rounded border border-[#17232d] bg-[#ed542d] px-2 py-0.5 text-[9px] font-black text-white uppercase tracking-widest shadow-[1px_1px_0_#17232d]">
                      CLEARLY DEFINED BEFORE DEVELOPMENT STARTS
                    </div>
                  </div>
                </div>
              )}

              {/* SIMULATOR STEP 6: Senior Development Founder Log */}
              {activeStepIndex === 5 && (
                <div className="my-3 space-y-2.5 font-code-mono">
                  <div className="flex items-center gap-2 text-xs font-black text-[#17232d] border-b border-[#17232d]/15 pb-1.5">
                    <Terminal className="h-4 w-4 text-[#ed542d]" /> BUILD PROGRESS
                  </div>
                  <div className="space-y-1 rounded-xl border-2 border-[#17232d] bg-[#fffdf8] p-3 shadow-[2.5px_2.5px_0_#ffbd5f] text-xs font-bold">
                    <p className="text-[#059669]">&gt; DISCOVERY ✓</p>
                    <p className="text-[#059669]">&gt; DESIGN ✓</p>
                    <p className="text-[#ed542d]">&gt; DEVELOPMENT →</p>
                    <p className="text-[#56616a]">&gt; TESTING</p>
                    <p className="text-[#56616a]">&gt; LAUNCH</p>
                  </div>
                  <p className="text-xs font-bold text-[#56616a] leading-relaxed">Progress stays visible throughout the build.</p>
                </div>
              )}

              {/* SIMULATOR STEP 7: 2 Months Free Migration Progress */}
              {activeStepIndex === 6 && (
                <div className="my-3 space-y-3">
                  <div className="flex items-center justify-between text-xs font-black text-[#17232d]">
                    <span>AFTER LAUNCH</span>
                    <span className="text-[#059669] bg-[#cbe9da] px-2 py-0.5 rounded border border-[#17232d]">KEEP MOVING</span>
                  </div>
                  <div className="space-y-2 rounded-xl border-2 border-[#17232d] bg-[#fffdf8] p-3.5 shadow-[2.5px_2.5px_0_#cbe9da]">
                    <div className="flex justify-between text-xs font-bold text-[#17232d]">
                      <span>LAUNCH</span>
                      <span className="text-[#56616a]">Put it into use.</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-[#17232d]">
                      <span>LEARN</span>
                      <span className="text-[#56616a]">See what works.</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-[#17232d]">
                      <span>IMPROVE</span>
                      <span className="text-[#56616a]">Fix what doesn't.</span>
                    </div>
                    <div className="flex justify-between text-xs font-bold text-[#17232d]">
                      <span>SCALE</span>
                      <span className="text-[#56616a]">Build what's next.</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Simulator Footer CTA */}
              <div className="mt-2 flex items-center justify-between border-t-2 border-[#17232d]/15 pt-2.5">
                <span className="text-xs text-[#56616a] font-bold">
                  Have a problem worth solving?
                </span>
                <button
                  onClick={onOpenAudit}
                  className="inline-flex items-center gap-1.5 rounded-lg bg-[#ed542d] px-3 py-1.5 text-xs font-black text-white shadow-[2px_2px_0_#17232d] hover:-translate-y-0.5 transition-all"
                >
                  GET FREE AUDIT <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


