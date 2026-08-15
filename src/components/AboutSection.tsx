"use client";

import React, { useState } from "react";
import { Users, Target, Cpu, Zap, Sparkle, Check } from "lucide-react";

interface AboutSectionProps {
  onOpenAudit?: () => void;
}

export default function AboutSection({ onOpenAudit }: AboutSectionProps) {
  const [activeFounder, setActiveFounder] = useState<number>(0);

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
    },
    {
      id: "F2",
      role: "Engineering Lead",
      subtitle: "System Architecture & Speed",
      badge: "Founding Partner",
      icon: Cpu,
      accent: "#d7e4ff",
      focus: "Architects bulletproof web infrastructure, database schemas, and edge applications built to handle 10x traffic bursts with sub-second response.",
      deliverables: [
        "Durable system & cloud architecture",
        "Sub-second API & database query speed",
        "Zero-downtime deployment pipelines",
      ],
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

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto z-10 space-y-6 sm:space-y-8">
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

        {/* Founding Ethos Quote Box (Above the 3 Cards) */}
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

        {/* Minimal 3-Card Grid (Founding Partners) */}
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
                } p-5 lg:p-6 transition-all duration-300 min-h-[350px]`}
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
    </section>
  );
}
