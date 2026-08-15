"use client";

import { ArrowRight, Briefcase, Clock } from "lucide-react";

interface CaseStudiesSectionProps {
  onOpenAudit: () => void;
}

export default function CaseStudiesSection({ onOpenAudit }: CaseStudiesSectionProps) {
  const structurePoints = [
    { num: "01", label: "Organisation Type", desc: "Private enterprises & growing teams" },
    { num: "02", label: "The Problem", desc: "Specific operational bottleneck" },
    { num: "03", label: "What We Built", desc: "Custom web app, workflow or CRM" },
    { num: "04", label: "Measurable Outcome", desc: "Hours saved & speed gained" },
  ];

  return (
    <section id="work" className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#f4efe5] min-h-screen lg:h-screen flex flex-col justify-center py-10">
      <div className="absolute left-0 top-0 h-full w-3 bg-[#ed542d]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8 w-full my-auto">
        <header className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end scroll-reveal">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#17232d]/20 bg-[#fffdf8] px-3.5 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#56616a]">
              <Briefcase className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> Case Studies &amp; Proof
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-[.94] tracking-[-.07em] text-[#17232d] sm:text-4xl lg:text-5xl">
              Work &amp; <em className="font-editorial-serif font-normal text-[#ed542d]">Case Studies.</em>
            </h2>
          </div>
          <p className="border-l-2 border-[#ed542d] pl-4 text-xs sm:text-sm leading-relaxed text-[#40505a]">
            We hold ourselves to strict evidence standards: no fabricated numbers, no fake client logos.
          </p>
        </header>

        {/* Interim Notice Box */}
        <div className="mt-6 scroll-reveal rounded-2xl border border-[#17232d] bg-[#17232d] p-6 text-[#fffdf8] shadow-[6px_6px_0_#ffbd5f]">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 font-code-mono text-[9px] font-bold text-[#ffbd5f] uppercase tracking-widest">
                <Clock className="h-3 w-3" /> Early-Stage Transparency
              </span>

              <h3 className="mt-3 font-editorial-serif text-2xl sm:text-3xl text-[#fffdf8] font-normal leading-snug">
                “We&apos;re early — our first engagements are underway. Want to be our next case study?”
              </h3>

              <p className="mt-2 text-xs leading-relaxed text-[#d6dce1]">
                We do not publish fabricated results. Detailed before/after case studies will be published here as projects reach go-live.
              </p>
            </div>

            <div className="shrink-0">
              <button
                onClick={onOpenAudit}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-[#ed542d] px-6 py-3.5 text-xs font-bold uppercase tracking-[.14em] text-white shadow-[4px_4px_0_#ffbd5f] transition-all hover:-translate-y-0.5"
              >
                Become Our Next Case Study <ArrowRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* Case Study Structure Grid */}
        <div className="mt-6 scroll-reveal">
          <h3 className="text-lg font-black tracking-tight text-[#17232d]">
            How Every Future Case Study Will Be Documented
          </h3>

          <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {structurePoints.map((item) => (
              <div
                key={item.num}
                className="rounded-xl border border-[#17232d]/20 bg-[#fffdf8] p-4 shadow-sm"
              >
                <span className="font-code-mono text-[10px] font-black text-[#ed542d]">
                  {item.num}
                </span>
                <h4 className="mt-1 text-sm font-bold text-[#17232d]">
                  {item.label}
                </h4>
                <p className="mt-0.5 text-xs text-[#56616a] leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
