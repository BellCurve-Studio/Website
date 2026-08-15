"use client";

import { Check, Eye, Gauge, ShieldCheck, Sparkles, UserCheck } from "lucide-react";

export default function WhyUs() {
  const pillars = [
    {
      num: "01",
      title: "Founders Build Directly",
      subtitle: "No Junior Hand-off",
      description: "You work directly with senior engineers building your system. Zero account manager middlemen.",
      icon: UserCheck,
      accent: "#ffbd5f",
      highlights: ["Direct founder access", "Technical accountability", "Zero middleman lag"],
    },
    {
      num: "02",
      title: "Diagnose Before We Build",
      subtitle: "Honest Engineering",
      description: "If software isn't your real operational fix, we'll tell you upfront before writing code.",
      icon: Eye,
      accent: "#d7e4ff",
      highlights: ["Free audit first", "Clear diagnosis report", "Outcome-focused engineering"],
    },
    {
      num: "03",
      title: "2 Months Free Migration",
      subtitle: "Risk-Free Transition",
      description: "Once your system goes live, we spend 2 months migrating your data free of charge.",
      icon: ShieldCheck,
      accent: "#cbe9da",
      highlights: ["Zero data migration fees", "Safe historical transfer", "Post go-live support"],
    },
    {
      num: "04",
      title: "Outcome-First Standards",
      subtitle: "Plain Language",
      description: "Real numbers, timelines, and durable architecture — never sales pitch jargon or hype.",
      icon: Gauge,
      accent: "#e7d7ff",
      highlights: ["Plain-spoken dialogue", "Fixed scope & cost", "Durable architecture"],
    },
  ];

  return (
    <section id="why-us" className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#f4efe5] min-h-screen lg:h-screen flex flex-col justify-center py-10">
      <div className="absolute bottom-0 left-0 h-2 w-full bg-[#ed542d]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8 w-full my-auto">
        <header className="grid gap-6 lg:grid-cols-[.9fr_1.1fr] lg:items-end scroll-reveal">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#17232d]/20 bg-[#fffdf8] px-3.5 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#56616a]">
              <Sparkles className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> Working Principles
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-[.94] tracking-[-.07em] text-[#17232d] sm:text-4xl lg:text-5xl">
              Why work with <em className="font-editorial-serif font-normal text-[#ed542d]">BellCurve.</em>
            </h2>
          </div>
          <p className="max-w-xl border-l-2 border-[#ed542d] pl-4 text-xs sm:text-sm leading-relaxed text-[#56616a]">
            We demonstrate the exact thinking we sell: clear diagnosis before pitch, outcomes before features, and no generic agency language.
          </p>
        </header>

        {/* 4 Pillars Grid */}
        <div className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {pillars.map((pillar, idx) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.title}
                className={`scroll-reveal delay-${(idx + 1) * 100} relative flex flex-col justify-between rounded-2xl border border-[#17232d] bg-[#fffdf8] p-5 shadow-[4px_4px_0_#17232d] transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_#ed542d]`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-code-mono text-[9px] font-black uppercase tracking-wider text-[#ed542d]">
                      {pillar.num} • {pillar.subtitle}
                    </span>
                    <span
                      className="grid h-8 w-8 place-items-center rounded-xl border border-[#17232d]"
                      style={{ backgroundColor: pillar.accent }}
                    >
                      <IconComp className="h-4 w-4 text-[#17232d]" />
                    </span>
                  </div>

                  <h3 className="mt-4 text-lg font-black tracking-tight text-[#17232d]">
                    {pillar.title}
                  </h3>

                  <p className="mt-2 text-xs leading-relaxed text-[#56616a]">
                    {pillar.description}
                  </p>
                </div>

                <div className="mt-4 border-t border-[#17232d]/15 pt-3">
                  <ul className="space-y-1.5">
                    {pillar.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-1.5 text-[11px] font-semibold text-[#40505a]">
                        <Check className="mt-0.5 h-3 w-3 shrink-0 text-[#ed542d]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Banner */}
        <div className="mt-8 scroll-reveal flex flex-col gap-3 rounded-2xl border border-[#17232d] bg-[#17232d] px-6 py-4 text-[#fffdf8] shadow-[6px_6px_0_#ffbd5f] sm:flex-row sm:items-center sm:justify-between">
          <p className="font-editorial-serif text-xl text-[#fffdf8]">
            Senior hands. Plain language. Shared momentum.
          </p>
          <p className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ffbd5f]">
            That is the BellCurve standard.
          </p>
        </div>
      </div>
    </section>
  );
}
