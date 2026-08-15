"use client";

import React, { useState } from "react";
import {
  Compass,
  Lightbulb,
  HeartHandshake,
  Award,
  Users,
  Sparkles,
  Quote,
  CheckCircle2,
  Terminal,
  ShieldCheck,
  Zap,
  ArrowUpRight,
  Code2,
  Layers,
  Sparkle
} from "lucide-react";

interface AboutSectionProps {
  onOpenAudit?: () => void;
}

export default function AboutSection({ onOpenAudit }: AboutSectionProps) {
  // Interactive manifesto mode switch
  const [manifestoTab, setManifestoTab] = useState<"ethos" | "comparison">("ethos");

  const values = [
    {
      id: "01",
      title: "Problem Before Product",
      subtitle: "Root Cause First",
      description: "We diagnose what's actually broken in your business before proposing software.",
      icon: Compass,
      accent: "#ffbd5f", // Gold
      badge: "Deep Diagnosis",
    },
    {
      id: "02",
      title: "Build With Purpose",
      subtitle: "Direct ROI Scope",
      description: "If it doesn't save time or capture high-value leads, it doesn't get built.",
      icon: Lightbulb,
      accent: "#d7e4ff", // Blue
      badge: "Zero Bloat",
    },
    {
      id: "03",
      title: "Obsess Over the User",
      subtitle: "Frictionless UX",
      description: "Systems feel simple, fast, and clean for the team using them every day.",
      icon: HeartHandshake,
      accent: "#cbe9da", // Mint
      badge: "Operational Ease",
    },
    {
      id: "04",
      title: "Compound Innovation",
      subtitle: "Durable Code",
      description: "Every project builds reusable, durable engineering patterns that scale 10x.",
      icon: Award,
      accent: "#e7d7ff", // Purple
      badge: "Clean Architecture",
    },
  ];

  const founders = [
    {
      num: "01",
      role: "Product & Business Lead",
      focus: "Product strategy, user diagnosis & commercial alignment",
      badge: "Founding Partner",
      signal: "Active on Strategy",
      accent: "#ffbd5f",
    },
    {
      num: "02",
      role: "Engineering Lead",
      focus: "System architecture, high-frequency speed & cloud infrastructure",
      badge: "Founding Partner",
      signal: "Active on Code",
      accent: "#d7e4ff",
    },
    {
      num: "03",
      role: "Partnerships & Delivery Lead",
      focus: "Workflow integrations, zero-downtime data migration & support",
      badge: "Founding Partner",
      signal: "Active on Deployment",
      accent: "#cbe9da",
    },
  ];

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#e7f0eb] min-h-screen py-14 lg:py-16 flex flex-col justify-center"
    >
      {/* Decorative Subtle Grid Mesh */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage: `radial-gradient(#17232d 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto z-10 space-y-6 sm:space-y-7">
        {/* Header Strip */}
        <header className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between scroll-reveal">
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
            An independent software studio built by three senior engineers who believe technology should serve business goals, not agency ego.
          </p>
        </header>

        {/* Founding Ethos & Interactive Manifesto Card */}
        <div className="scroll-reveal relative overflow-hidden rounded-3xl border-2 border-[#17232d] bg-[#fffdf8] p-5 sm:p-6 lg:p-7 shadow-[7px_7px_0_#17232d]">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#17232d]/15 pb-4">
            <div className="flex items-center gap-2.5">
              <span className="grid h-8.5 w-8.5 place-items-center rounded-xl border-2 border-[#17232d] bg-[#ffbd5f] shadow-[1.5px_1.5px_0_#17232d]">
                <Quote className="h-4 w-4 text-[#17232d]" />
              </span>
              <span className="font-code-mono text-xs font-black uppercase text-[#ed542d] tracking-wider">
                Our Founding Ethos
              </span>
            </div>

            {/* Interactive Manifesto Switcher */}
            <div className="flex items-center rounded-xl border-2 border-[#17232d] bg-[#f4efe5] p-1 text-[10px] font-black">
              <button
                onClick={() => setManifestoTab("ethos")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  manifestoTab === "ethos"
                    ? "bg-[#17232d] text-[#ffbd5f] shadow-[2px_2px_0_#ed542d]"
                    : "text-[#56616a] hover:text-[#17232d]"
                }`}
              >
                Studio Manifesto
              </button>
              <button
                onClick={() => setManifestoTab("comparison")}
                className={`px-3 py-1 rounded-lg transition-all ${
                  manifestoTab === "comparison"
                    ? "bg-[#ed542d] text-white shadow-[2px_2px_0_#17232d]"
                    : "text-[#56616a] hover:text-[#17232d]"
                }`}
              >
                Agency vs BellCurve
              </button>
            </div>
          </div>

          {manifestoTab === "ethos" ? (
            <div className="mt-4 space-y-4">
              <blockquote className="font-editorial-serif text-xl sm:text-2xl lg:text-3xl leading-snug text-[#17232d]">
                &ldquo;BellCurve Studio was founded by three engineers who kept seeing organisations spend money on software that didn&apos;t fix the real problem. We started BellCurve to diagnose first, and build second.&rdquo;
              </blockquote>

              <div className="grid grid-cols-3 gap-3 pt-2 font-code-mono text-center text-xs">
                <div className="rounded-2xl border-2 border-[#17232d]/20 bg-[#f4efe5] p-3 shadow-[2px_2px_0_#17232d]/10">
                  <span className="block font-black text-[#ed542d] text-base sm:text-lg">3 Engineers</span>
                  <span className="text-[10px] font-bold text-[#56616a]">0 Middleman Layers</span>
                </div>
                <div className="rounded-2xl border-2 border-[#17232d]/20 bg-[#f4efe5] p-3 shadow-[2px_2px_0_#17232d]/10">
                  <span className="block font-black text-[#17232d] text-base sm:text-lg">100% Audit</span>
                  <span className="text-[10px] font-bold text-[#56616a]">Clear Diagnosis First</span>
                </div>
                <div className="rounded-2xl border-2 border-[#17232d]/20 bg-[#f4efe5] p-3 shadow-[2px_2px_0_#17232d]/10">
                  <span className="block font-black text-emerald-700 text-base sm:text-lg">0% Ego</span>
                  <span className="text-[10px] font-bold text-[#56616a]">Pure Business Outcome</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-4 grid sm:grid-cols-2 gap-3 text-xs">
              <div className="rounded-2xl border-2 border-red-200 bg-red-50/80 p-4 space-y-2">
                <span className="font-code-mono font-black text-red-800 text-xs block flex items-center gap-1.5">
                  ❌ Traditional Agency Approach
                </span>
                <ul className="space-y-1.5 text-red-950 font-medium text-[11px]">
                  <li>• Accepts bloated client scope without diagnostic checking</li>
                  <li>• Hands development over to junior or offshore devs</li>
                  <li>• Charges monthly retainers for unnecessary custom code</li>
                </ul>
              </div>
              <div className="rounded-2xl border-2 border-emerald-300 bg-emerald-50/80 p-4 space-y-2">
                <span className="font-code-mono font-black text-emerald-800 text-xs block flex items-center gap-1.5">
                  ✓ The BellCurve Studio Charter
                </span>
                <ul className="space-y-1.5 text-emerald-950 font-bold text-[11px]">
                  <li>• Audits root cause first before quoting or coding</li>
                  <li>• Built directly by founding senior engineers</li>
                  <li>• Recommends existing tools or simple fixes when possible</li>
                </ul>
              </div>
            </div>
          )}
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 scroll-reveal">
          {values.map((val) => {
            const IconComp = val.icon;
            return (
              <div
                key={val.title}
                className="group relative flex flex-col justify-between rounded-3xl border-2 border-[#17232d] bg-[#fffdf8] p-5 shadow-[5px_5px_0_#17232d] transition-all duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0_#ed542d]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span
                      className="grid h-9 w-9 place-items-center rounded-xl border-2 border-[#17232d] shadow-[2px_2px_0_#17232d] transition-transform group-hover:scale-105"
                      style={{ backgroundColor: val.accent }}
                    >
                      <IconComp className="h-4.5 w-4.5 text-[#17232d]" />
                    </span>
                    <span className="font-code-mono text-[9px] font-black uppercase text-[#ed542d] bg-[#ed542d]/10 px-2 py-0.5 rounded-md border border-[#ed542d]/25">
                      {val.id} • {val.badge}
                    </span>
                  </div>

                  <h3 className="mt-3.5 text-base font-black tracking-tight text-[#17232d]">
                    {val.title}
                  </h3>
                  <p className="mt-1 text-xs leading-relaxed text-[#56616a] font-medium">
                    {val.description}
                  </p>
                </div>

                <div className="mt-4 border-t-2 border-[#17232d]/10 pt-2.5 flex items-center justify-between text-[10px] font-code-mono font-bold text-[#17232d]">
                  <span>{val.subtitle}</span>
                  <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" />
                </div>
              </div>
            );
          })}
        </div>

        {/* 3 Founding Partners Deck */}
        <div className="scroll-reveal space-y-3">
          <div className="flex items-center justify-between px-1">
            <span className="font-code-mono text-[10px] font-black uppercase tracking-widest text-[#56616a]">
              Leadership • The 3 Founding Partners
            </span>
            <span className="font-code-mono text-[10px] font-bold text-[#ed542d] flex items-center gap-1">
              <Sparkle className="h-3 w-3 animate-spin" style={{ animationDuration: "10s" }} /> 100% Senior Hands
            </span>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {founders.map((founder) => (
              <div
                key={founder.role}
                className="group relative flex flex-col justify-between rounded-3xl border-2 border-[#17232d] bg-[#17232d] p-5 text-[#fffdf8] shadow-[5px_5px_0_#ffbd5f] transition-all duration-200 hover:-translate-y-1 hover:shadow-[7px_7px_0_#ed542d]"
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-block rounded-lg border border-white/20 bg-white/10 px-2.5 py-0.5 font-code-mono text-[9px] font-bold text-[#ffbd5f] uppercase tracking-wider">
                      Partner {founder.num} • {founder.badge}
                    </span>
                    <span
                      className="h-2.5 w-2.5 rounded-full border border-black/40"
                      style={{ backgroundColor: founder.accent }}
                    />
                  </div>

                  <h4 className="mt-3 text-lg font-black tracking-tight text-[#fffdf8]">
                    {founder.role}
                  </h4>
                  <p className="mt-1.5 text-xs text-[#d6dce1] leading-relaxed font-medium">
                    {founder.focus}
                  </p>
                </div>

                <div className="mt-4 border-t border-white/15 pt-3 flex items-center justify-between text-[10px] font-code-mono font-bold text-[#ffbd5f]">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                    {founder.signal}
                  </span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-white/60 group-hover:text-[#ffbd5f] transition-colors" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
