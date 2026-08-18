"use client";

import React from "react";
import { ArrowUpRight, Check, Layers, Sparkles } from "lucide-react";

interface ServicesProps {
  onOpenAudit: () => void;
  onSelectServiceTier: (tierName: string) => void;
}

export default function Services({ onOpenAudit, onSelectServiceTier }: ServicesProps) {
  const tiers = [
    {
      name: "Free Basic Audit",
      badge: "START HERE",
      isFree: true,
      included: "A quick look at where things are getting stuck.",
      subheading: "WHAT YOU GET",
      deliverables: [
        "Website & digital presence check",
        "Basic workflow review",
        "Key issues to address",
      ],
      accent: "#ffbd5f",
      cta: "REQUEST FREE AUDIT →",
    },
    {
      name: "Strategy & Consulting",
      badge: "GO DEEPER",
      isFree: false,
      included: "For problems that need more than a quick audit.",
      subheading: "WHAT WE DO",
      deliverables: [
        "Diagnose the problem",
        "Design the right solution",
        "Define scope & next steps",
      ],
      accent: "#ed542d",
      cta: "TALK TO US →",
    },
    {
      name: "Build & Scale",
      badge: "BUILD IT",
      isFree: false,
      included: "When the solution needs to become a working system.",
      subheading: "WHAT WE BUILD",
      deliverables: [
        "Digital experiences",
        "Business systems",
        "Automation & AI",
      ],
      accent: "#cbe9da",
      cta: "BUILD WITH US →",
    },
  ];

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#f4efe5] min-h-screen lg:h-screen flex flex-col justify-center py-12 lg:py-16"
    >
      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 w-full my-auto space-y-8">
        <header className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end scroll-reveal">
          <div >
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-[#17232d] bg-[#fffdf8] px-4 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#17232d] shadow-[2.5px_2.5px_0_#17232d]">
              <Layers className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> HOW YOU CAN WORK WITH US
            </span>
            <h2 className="mt-3 text-3xl font-black leading-[.96] tracking-[-.07em] text-[#17232d] sm:text-4xl lg:text-5xl">
              Start with the problem. <em className="font-editorial-serif font-normal text-[#ed542d] underline decoration-[#ffbd5f] decoration-wavy decoration-2">Build what you need.</em>
            </h2>
          </div>
          <div className="border-l-2 border-[#ed542d] pl-4">
            <p className="text-xs sm:text-sm leading-relaxed font-medium text-[#40505a]">
              Not sure what you need? Start with a free basic audit. If the problem needs deeper work, we can help you figure it out, design the right solution, and build it.
            </p>
          </div>
        </header>

        {/* 2 Core Tier Cards Grid */}
        <div className="grid gap-6 md:grid-cols-3 lg:gap-8">
          {tiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`scroll-reveal delay-${idx * 150} relative flex flex-col justify-between rounded-3xl border-2 border-[#17232d] ${
                tier.isFree
                  ? "bg-[#17232d] text-[#fffdf8] shadow-[8px_8px_0_#ffbd5f]"
                  : "bg-[#fffdf8] text-[#17232d] shadow-[8px_8px_0_#17232d]"
              } p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span
                    className={`font-code-mono text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-lg border-2 ${
                      tier.isFree
                        ? "bg-[#ffbd5f] text-[#17232d] border-[#17232d]"
                        : "bg-[#ed542d]/10 text-[#ed542d] border-[#ed542d]/30"
                    }`}
                  >
                    {tier.badge}
                  </span>
                  <span
                    className="h-3.5 w-3.5 rounded-full border-2 border-[#17232d] shadow-[1px_1px_0_#17232d]"
                    style={{ backgroundColor: tier.accent }}
                  />
                </div>

                <h3 className="mt-5 text-2xl font-black tracking-tight">{tier.name}</h3>


                <p className="mt-4 text-xs sm:text-sm font-semibold leading-relaxed opacity-90">
                  {tier.included}
                </p>

                <div className="mt-5 pt-3 border-t border-[#17232d]/15">
                  <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#ed542d] block mb-2">
                    {tier.subheading}
                  </span>
                  <ul className="space-y-2">
                    {tier.deliverables.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-xs font-bold leading-tight">
                        <Check className={`h-4 w-4 shrink-0 ${tier.isFree ? "text-[#ffbd5f]" : "text-[#ed542d]"}`} />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t-2 border-[#17232d]/15">
                <button
                  onClick={() => {
                    if (tier.isFree) {
                      onOpenAudit();
                    } else {
                      onSelectServiceTier(tier.name);
                    }
                  }}
                  className={`w-full inline-flex items-center justify-center gap-2 rounded-2xl py-3 px-5 text-xs sm:text-sm font-black transition-all shadow-[3px_3px_0_#17232d] hover:-translate-y-0.5 ${
                    tier.isFree
                      ? "bg-[#ed542d] text-white hover:bg-[#ffbd5f] hover:text-[#17232d]"
                      : "bg-[#17232d] text-[#fffdf8] hover:bg-[#ed542d] hover:text-white"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowUpRight className="h-4 w-4 text-[#ffbd5f]" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guidance Note */}
        <div className="scroll-reveal flex items-center justify-between rounded-2xl border-2 border-[#17232d]/20 bg-[#fffdf8] px-6 py-3.5 text-xs font-medium text-[#56616a]">
          <p className="flex items-center gap-2.5">
            <Sparkles className="h-4 w-4 text-[#ed542d] shrink-0" />
            <span>Not every problem needs a custom build. We recommend the simplest solution that solves it.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
