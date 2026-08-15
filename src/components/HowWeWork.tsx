"use client";

import { ArrowRight, Compass, FileCheck, FileSearch, Layers, Rocket, ShieldCheck, Sparkles, Workflow } from "lucide-react";

interface HowWeWorkProps {
  onOpenAudit: () => void;
}

export default function HowWeWork({ onOpenAudit }: HowWeWorkProps) {
  const horizontalSteps = [
    "Problem Overview",
    "Free Internal Audit",
    "Problems Identified",
    "Solutions Proposed",
    "Written Contract",
    "Senior Development",
    "2 Months Data Migration",
  ];

  const steps = [
    {
      num: "01",
      title: "Problem Overview",
      tagline: "First Contact",
      description: "You tell us what's not working. No high-pressure sales calls.",
      icon: Sparkles,
      accent: "#ffbd5f",
    },
    {
      num: "02",
      title: "Internal Audit",
      tagline: "Free Diagnosis",
      description: "We study your website, enquiry flow, and internal processes free of charge.",
      icon: FileSearch,
      accent: "#d7e4ff",
    },
    {
      num: "03",
      title: "Problems Identified",
      tagline: "Plain Language",
      description: "You receive a clear diagnosis of what costs you time or leads — zero jargon.",
      icon: Compass,
      accent: "#cbe9da",
    },
    {
      num: "04",
      title: "Solutions Proposed",
      tagline: "Architecture",
      description: "We show you the exact system that fixes it and fixed cost scoping.",
      icon: Layers,
      accent: "#e7d7ff",
    },
    {
      num: "05",
      title: "Contract Sharing",
      tagline: "Written Guarantee",
      description: "Scope, timeline, and cost are agreed and signed in writing first.",
      icon: FileCheck,
      accent: "#ffd7c5",
    },
    {
      num: "06",
      title: "Development Starts",
      tagline: "Senior Founders",
      description: "Founders build and deliver directly — zero junior team handoffs.",
      icon: Workflow,
      accent: "#ffbd5f",
    },
    {
      num: "07",
      title: "2 Months Free Migration",
      tagline: "Zero Extra Cost",
      description: "Once live, we migrate all your existing data in at no extra charge.",
      icon: Rocket,
      accent: "#cbe9da",
    },
  ];

  return (
    <section id="how-we-work" className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#e7f0eb] min-h-screen lg:h-screen flex flex-col justify-center py-12">
      <div className="absolute left-0 top-0 h-3 w-full bg-[#17232d]" aria-hidden="true" />
      <div className="absolute right-[-10rem] bottom-10 h-80 w-80 rounded-full border border-[#17232d]/15" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8 w-full my-auto">
        <header className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end scroll-reveal">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#17232d]/20 bg-[#fffdf8] px-3.5 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#56616a]">
              <Workflow className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> The 7-Step Framework
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[.94] tracking-[-.07em] text-[#17232d] sm:text-5xl lg:text-6xl">
              How we <em className="font-editorial-serif font-normal text-[#ed542d]">work.</em>
            </h2>
          </div>
          <p className="border-l-2 border-[#ed542d] pl-5 text-sm leading-relaxed text-[#40505a] sm:text-base">
            This framework exists to make working together low-risk, transparent, and structured — so you always know what is moving and why.
          </p>
        </header>

        {/* Framework 7-Step Journey Grid Cards */}
        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-7">
          {steps.map((step, idx) => {
            const IconComp = step.icon;
            return (
              <div
                key={step.num}
                className={`scroll-reveal delay-${(idx % 4) * 100} relative flex flex-col justify-between rounded-2xl border border-[#17232d] bg-[#fffdf8] p-4 shadow-[4px_4px_0_#17232d] transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_#ed542d]`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="grid h-7 w-7 place-items-center rounded-lg border border-[#17232d]"
                      style={{ backgroundColor: step.accent }}
                    >
                      <IconComp className="h-3.5 w-3.5 text-[#17232d]" />
                    </span>
                    <span className="font-code-mono text-[10px] font-black text-[#ed542d]">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="mt-3 text-sm font-black tracking-tight text-[#17232d]">
                    {step.title}
                  </h3>

                  <p className="mt-1 text-[11px] leading-tight text-[#56616a]">
                    {step.description}
                  </p>
                </div>

                <div className="mt-3 border-t border-[#17232d]/10 pt-2">
                  <span className="font-code-mono text-[8px] font-bold uppercase tracking-wider text-[#87939b]">
                    {step.tagline}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Guarantee Banner */}
        <div className="mt-6 scroll-reveal rounded-[1.75rem] border border-[#17232d] bg-[#17232d] p-5 text-[#fffdf8] shadow-[6px_6px_0_#ffbd5f] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-[#ffbd5f] shrink-0" />
            <p className="text-xs sm:text-sm text-[#d6dce1]">
              <strong className="text-white">Our Guarantee:</strong> Nothing starts until you&apos;ve agreed the plan in writing. Includes <strong className="text-[#ffbd5f]">2 months free data migration</strong> post go-live.
            </p>
          </div>
          <button
            onClick={onOpenAudit}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ed542d] px-6 py-3 text-xs font-bold uppercase tracking-[.14em] text-white transition-all hover:-translate-y-0.5"
          >
            Get Free Audit <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
