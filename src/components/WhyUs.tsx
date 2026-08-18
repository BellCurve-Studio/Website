"use client";

import React, { useState } from "react";
import {
  Search,
  XCircle,
  Layers,
  MessageSquare,
  Sparkles,
  Check,
  ArrowUpRight,
} from "lucide-react";

interface WhyUsProps {
  onOpenAudit?: () => void;
}

export default function WhyUs({ onOpenAudit }: WhyUsProps) {
  const [activePillar, setActivePillar] = useState<number>(0);
  const [p2Scenario, setP2Scenario] = useState<number>(0);
  const [p4Tab, setP4Tab] = useState<"mystery" | "clear">("clear");

  const pillars = [
    {
      id: "01",
      title: "Start with the problem.",
      subtitle: "Diagnose first",
      tagline: "We understand what is going wrong before we suggest what to build.",
      icon: Search,
      accent: "#ffbd5f",
      description:
        "Before we talk about features or technology, we need to understand what is actually happening. A slow website, too much manual work, or a confusing customer journey — these may look like separate problems. Often they are symptoms of something underneath.",
      highlights: ["Clearer problem definition", "Less unnecessary work", "A better starting point"],
    },
    {
      id: "02",
      title: "We will tell you when not to build.",
      subtitle: "Honest advice",
      tagline: "Sometimes the right answer is a better process, not more software.",
      icon: XCircle,
      accent: "#d7e4ff",
      description:
        "Software is not always the answer. Sometimes a clearer process, a better-used tool you already have, or a simpler workflow solves the problem. We are willing to say so — because the relationship matters more than the project.",
      highlights: ["No unnecessary builds", "Simpler solutions first", "Advice you can trust"],
    },
    {
      id: "03",
      title: "Build around the way you work.",
      subtitle: "Built to fit",
      tagline: "The system should fit the business, not the other way around.",
      icon: Layers,
      accent: "#cbe9da",
      description:
        "When software is the right answer, we design it around your real team, your real customers, and the way work actually happens in your organisation. Not around a generic template or a framework we happen to prefer.",
      highlights: ["Designed around your operations", "Works for your team", "Not a generic template"],
    },
    {
      id: "04",
      title: "Leave with clarity.",
      subtitle: "No mystery scope",
      tagline: "You should always understand what we are doing and why.",
      icon: MessageSquare,
      accent: "#e7d7ff",
      description:
        "You should know what we are solving, why we are solving it in a particular way, and what happens next. No mystery invoices. No jargon that obscures what we are doing. No building for the sake of building.",
      highlights: ["No unnecessary jargon", "Clear scope, always", "You stay informed"],
    },
  ];

  const notToBuildScenarios = [
    {
      label: '"We need a custom reporting dashboard."',
      context: "The team was exporting CSVs and building reports manually every week.",
      ourAdvice: "We connected their existing tools. No dashboard needed. Reports now generate automatically.",
      outcome: "Problem solved without building anything new.",
    },
    {
      label: '"We need a mobile app for our field team."',
      context: "The field team needed to log updates and receive job assignments.",
      ourAdvice: "A WhatsApp-based workflow handled both in two days. No app required.",
      outcome: "Faster to build, easier to use, and zero maintenance overhead.",
    },
    {
      label: '"We need a full CRM system."',
      context: "The sales team was losing track of follow-ups.",
      ourAdvice: "A shared workspace with a simple pipeline view solved it. They needed process, not software.",
      outcome: "No CRM build. Better follow-up rate from week one.",
    },
  ];

  return (
    <section
      id="why-us"
      className="relative overflow-hidden bg-[#f4efe5] min-h-screen py-14 lg:py-16 flex flex-col justify-center"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(#17232d 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto z-10 space-y-6">
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

            <p className="mt-3 max-w-xl text-xs sm:text-sm font-medium leading-relaxed text-[#40505a]">
              We do not start by asking what you want us to build. We start by understanding what is getting in the way — then figure out what is actually worth building.
            </p>
          </div>
        </header>

        <div className="grid gap-5 lg:grid-cols-[.88fr_1.12fr] lg:items-stretch scroll-reveal">
          {/* Left Column: 4 Principle Selector Cards */}
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
                    {isActive && (
                      <div
                        className="absolute left-0 top-2 bottom-2 w-1.5 rounded-r-full"
                        style={{ backgroundColor: pillar.accent }}
                      />
                    )}

                    <div className="flex items-center justify-between gap-2.5">
                      <div className="flex items-center gap-3">
                        <span
                          className="grid h-8.5 w-8.5 shrink-0 place-items-center rounded-xl border-2 border-[#17232d] font-black text-xs transition-transform group-hover:scale-105 shadow-[1.5px_1.5px_0_#17232d]"
                          style={{ backgroundColor: pillar.accent }}
                        >
                          <IconComp className="h-4 w-4 text-[#17232d]" />
                        </span>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="font-code-mono text-[9px] font-black uppercase text-[#ed542d]">
                              {pillar.id}
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
                    </div>

                    <p className="mt-1 text-[11px] leading-tight text-[#56616a] line-clamp-1 pl-11 font-medium">
                      {pillar.tagline}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Detail Panel */}
          <div className="relative flex flex-col justify-between h-full min-h-[480px] lg:min-h-[500px] rounded-3xl border-2 border-[#17232d] bg-[#fffdf8] p-5 sm:p-6 lg:p-7 shadow-[7px_7px_0_#17232d] overflow-hidden">
            <div
              className="pointer-events-none absolute -top-24 -right-24 h-72 w-72 rounded-full opacity-35 blur-3xl transition-colors duration-500"
              style={{ backgroundColor: pillars[activePillar].accent }}
            />

            <div className="space-y-4">
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
                      PRINCIPLE {pillars[activePillar].id}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black text-[#17232d]">
                      {pillars[activePillar].title}
                    </h3>
                  </div>
                </div>
              </div>

              <p className="text-xs sm:text-sm leading-relaxed font-medium text-[#40505a]">
                {pillars[activePillar].description}
              </p>

              <div className="h-[215px] rounded-2xl border-2 border-[#17232d] bg-[#f4efe5] p-4 shadow-[3.5px_3.5px_0_#17232d] flex flex-col justify-between overflow-hidden">

                {activePillar === 0 && (
                  <div className="h-full flex flex-col justify-between space-y-2">
                    <div className="flex items-center border-b border-[#17232d]/15 pb-2">
                      <span className="font-code-mono text-xs font-black text-[#17232d]">HOW WE START</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center space-y-2.5">
                      <div className="rounded-xl border-2 border-[#17232d]/20 bg-[#fffdf8] p-3 text-xs space-y-1">
                        <span className="font-code-mono text-[9px] font-black text-[#56616a] uppercase block">Client says:</span>
                        <p className="font-bold text-[#17232d]">&ldquo;We need a new dashboard.&rdquo;</p>
                      </div>
                      <div className="rounded-xl border-2 border-[#ed542d]/30 bg-[#fffdf8] p-3 text-xs space-y-1">
                        <span className="font-code-mono text-[9px] font-black text-[#ed542d] uppercase block">We ask first:</span>
                        <p className="font-bold text-[#17232d]">What decision is the dashboard supposed to help someone make?</p>
                      </div>
                    </div>
                    <div className="text-[10px] font-bold text-[#56616a] border-t border-[#17232d]/10 pt-1.5">
                      The answer usually changes what gets built — or whether anything needs to be built at all.
                    </div>
                  </div>
                )}

                {activePillar === 1 && (
                  <div className="h-full flex flex-col justify-between space-y-2">
                    <div className="flex items-center justify-between border-b border-[#17232d]/15 pb-1.5">
                      <span className="font-code-mono text-xs font-black text-[#17232d]">REAL EXAMPLES</span>
                      <div className="flex gap-1">
                        {notToBuildScenarios.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setP2Scenario(i)}
                            className={`px-2 py-0.5 rounded text-[10px] font-black border-2 transition-all ${
                              p2Scenario === i
                                ? "bg-[#17232d] text-[#ffbd5f] border-[#17232d]"
                                : "bg-[#fffdf8] text-[#56616a] border-[#17232d]/20 hover:border-[#17232d]"
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className="rounded-xl border-2 border-[#17232d]/20 bg-[#fffdf8] p-2.5 text-xs space-y-2 flex-1 flex flex-col justify-between">
                      <p className="font-black text-[#17232d]">{notToBuildScenarios[p2Scenario].label}</p>
                      <p className="text-[11px] font-medium text-[#56616a] leading-relaxed">{notToBuildScenarios[p2Scenario].context}</p>
                      <div className="rounded-lg border border-[#cbe9da] bg-[#cbe9da]/40 p-2 space-y-0.5">
                        <span className="font-code-mono text-[9px] font-black text-[#17232d] block">OUR ADVICE</span>
                        <p className="text-[11px] font-bold text-[#17232d] leading-relaxed">{notToBuildScenarios[p2Scenario].ourAdvice}</p>
                      </div>
                      <p className="font-code-mono text-[9px] font-black text-[#ed542d]">&#8594; {notToBuildScenarios[p2Scenario].outcome}</p>
                    </div>
                  </div>
                )}

                {activePillar === 2 && (
                  <div className="h-full flex flex-col justify-between space-y-2">
                    <div className="flex items-center border-b border-[#17232d]/15 pb-1">
                      <span className="font-code-mono text-xs font-black text-[#17232d]">HOW WE DESIGN</span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center space-y-1">
                      {[
                        { label: "Start with your team", detail: "How do people actually do the work today?" },
                        { label: "Map the real process", detail: "Not the ideal one — the real one." },
                        { label: "Design around that", detail: "The system should feel obvious to the people using it." },
                      ].map((step, i) => (
                        <div key={i} className="flex items-start gap-2.5 rounded-xl border border-[#17232d]/15 bg-[#fffdf8] p-2.5">
                          <span className="font-code-mono text-[9px] font-black text-[#ed542d] shrink-0 mt-0.5">0{i + 1}</span>
                          <div>
                            <span className="block text-xs font-black text-[#17232d]">{step.label}</span>
                            <span className="block text-[10px] font-medium text-[#56616a]">{step.detail}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {activePillar === 3 && (
                  <div className="h-full flex flex-col justify-between space-y-2">
                    <div className="flex items-center justify-between border-b border-[#17232d]/15 pb-1.5">
                      <span className="font-code-mono text-xs font-black text-[#17232d]">WHAT CLARITY LOOKS LIKE</span>
                      <div className="flex items-center rounded-lg border-2 border-[#17232d] bg-[#fffdf8] p-0.5 text-[10px] font-black">
                        <button
                          onClick={() => setP4Tab("mystery")}
                          className={`px-2.5 py-0.5 rounded transition-all ${
                            p4Tab === "mystery" ? "bg-[#ed542d] text-white" : "text-[#56616a] hover:text-[#17232d]"
                          }`}
                        >
                          Vague
                        </button>
                        <button
                          onClick={() => setP4Tab("clear")}
                          className={`px-2.5 py-0.5 rounded transition-all ${
                            p4Tab === "clear" ? "bg-[#17232d] text-[#ffbd5f]" : "text-[#56616a] hover:text-[#17232d]"
                          }`}
                        >
                          Clear
                        </button>
                      </div>
                    </div>
                    <div className="rounded-xl border-2 border-[#17232d]/20 bg-[#fffdf8] p-3 text-xs flex-1 flex flex-col justify-center">
                      {p4Tab === "mystery" ? (
                        <div className="space-y-1.5 text-[#56616a] bg-[#f4efe5] p-3 rounded-xl border border-[#17232d]/15">
                          <p className="font-bold text-xs text-[#17232d]">Phase 2 deliverables will be scoped in alignment with the discovery stream outcomes post-kickoff.</p>
                          <span className="block font-code-mono text-[9px] text-[#ed542d] font-black">
                            &#8594; You have no idea what you are paying for or when it will be done.
                          </span>
                        </div>
                      ) : (
                        <div className="space-y-1.5 text-[#17232d] bg-[#cbe9da]/40 p-3 rounded-xl border border-[#cbe9da]">
                          <p className="font-bold text-xs">We are building the enquiry form and connecting it to your CRM. It will be ready in two weeks. Here is what we need from you.</p>
                          <span className="block font-code-mono text-[9px] text-[#17232d] font-black">
                            &#8594; You know exactly what is happening and what to expect.
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2 border-t border-[#17232d]/15">
                <span className="font-code-mono text-[9px] font-black uppercase tracking-wider text-[#56616a] block mb-1.5">
                  WHAT THIS MEANS FOR YOU:
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

            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#17232d]/15 pt-3">
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-bold text-[#17232d]">Have a problem you are trying to untangle?</span>
                <span className="text-[10px] font-medium text-[#56616a]">Tell us what is going wrong. We will help you figure out where to start.</span>
              </div>

              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-1.5 rounded-xl border-2 border-[#17232d] bg-[#17232d] px-4 py-2 text-xs font-black text-[#fffdf8] shadow-[2.5px_2.5px_0_#ffbd5f] transition-all hover:bg-[#ed542d] hover:shadow-[3.5px_3.5px_0_#17232d] hover:-translate-y-0.5"
              >
                <span>Start with a free audit</span>
                <ArrowUpRight className="h-3.5 w-3.5 text-[#ffbd5f]" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
