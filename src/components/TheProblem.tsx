"use client";

import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Clock,
  FileSpreadsheet,
  Globe,
  MessageSquare,
  ShieldAlert,
  Sparkles,
  TrendingDown,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TheProblemProps {
  onOpenAudit: () => void;
}

export default function TheProblem({ onOpenAudit }: TheProblemProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const symptoms = [
    {
      icon: Globe,
      number: "01",
      tag: "FRONTEND DISCONNECT",
      title: "Disconnected Website",
      metric: "📉 38% Lost Leads",
      description:
        "Your website doesn't talk to your sales process. Incoming leads land in email black holes or require manual copy-pasting into CRMs.",
      impactLabel: "THE HIDDEN COST",
      impact: "Stranded leads & delayed response time",
      accentColor: "#ed542d",
    },
    {
      icon: FileSpreadsheet,
      number: "02",
      tag: "DATA CHAOS",
      title: "Untrusted Spreadsheets",
      metric: "⏳ 14 hrs/wk Wasted",
      description:
        "Sprawling Google Sheets nobody fully trusts, plagued by fragile formulas, broken cell references, duplicate entries, and version drift.",
      impactLabel: "THE HIDDEN COST",
      impact: "Decisions made without accurate data",
      accentColor: "#ffbd5f",
    },
    {
      icon: MessageSquare,
      number: "03",
      tag: "WORKFLOW FRICTION",
      title: "Workaround Threads",
      metric: "⚠️ Zero Sync",
      description:
        "Chaotic WhatsApp and Slack threads acting as makeshift glue for critical operations that should be automated software systems.",
      impactLabel: "THE HIDDEN COST",
      impact: "Repeated admin drag & team burnout",
      accentColor: "#6ee7b7",
    },
  ];

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#f4efe5] min-h-screen lg:h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-10"
    >
      {/* Subtle Background Ambient Accents */}
      <div className="absolute top-12 left-10 w-96 h-96 rounded-full bg-[#ed542d]/10 blur-3xl pointer-events-none animate-pulse-glow" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#ffbd5f]/15 blur-3xl pointer-events-none animate-pulse-glow" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-full w-2.5 bg-[#ed542d]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8 my-auto w-full">
        
        {/* Section Header with Scroll Fade Reveal */}
        <header
          className={`grid items-end gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-14 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#ed542d] bg-[#fffdf8] px-3.5 py-1.5 text-xs font-bold text-[#17232d] shadow-[3px_3px_0_#ed542d]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ed542d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ed542d]" />
              </span>
              <AlertTriangle className="h-3.5 w-3.5 text-[#ed542d]" />
              <span className="font-code-mono text-[9px] font-black uppercase tracking-[.16em] text-[#17232d]">
                Operational Diagnosis
              </span>
            </div>

            <h2 className="mt-5 max-w-3xl text-4xl font-black leading-[1.02] tracking-[-.065em] text-[#17232d] sm:text-5xl md:text-6xl lg:text-[3.8rem]">
              Most organisations run on a{" "}
              <span className="font-editorial-serif italic font-normal text-[#ed542d] underline decoration-[#ed542d]/30 underline-offset-8">
                patchwork.
              </span>
            </h2>
          </div>

          <div className="border-l-2 border-[#ed542d] pl-5 sm:pl-7">
            <p className="text-base font-semibold leading-relaxed text-[#17232d] sm:text-lg">
              A website that doesn&apos;t talk to your sales process. A spreadsheet nobody trusts. A chat thread holding together a system.
            </p>
            <p className="mt-2.5 font-editorial-serif text-base italic text-[#ed542d] sm:text-lg">
              Every disconnected step leaks a lead, causes a delay, or forces decisions without real data.
            </p>
          </div>
        </header>

        {/* 3 Staggered Animated Symptom Cards */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {symptoms.map((item, idx) => {
            const IconComponent = item.icon;
            const delayTime = `${(idx + 1) * 150}ms`;

            return (
              <div
                key={item.title}
                style={{ transitionDelay: isVisible ? delayTime : "0ms" }}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-[#17232d] bg-[#fffdf8] p-6 sm:p-7 shadow-[6px_6px_0_#17232d] transition-all duration-500 cubic-bezier(0.16, 1, 0.3, 1) hover:-translate-y-2 hover:shadow-[10px_10px_0_#ed542d] hover:border-[#ed542d] ${
                  isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
                }`}
              >
                {/* Top Bar inside Card */}
                <div>
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#17232d]/20 bg-[#f4efe5] px-3 py-1 font-code-mono text-[9px] font-black uppercase tracking-[.14em] text-[#17232d]">
                      <span className="text-[#ed542d]">{item.number}</span> • {item.tag}
                    </span>
                    
                    <span className="grid h-10 w-10 place-items-center rounded-2xl border border-[#17232d] bg-[#f4efe5] text-[#17232d] shadow-[2px_2px_0_#17232d] transition-all duration-300 group-hover:bg-[#ed542d] group-hover:text-white group-hover:rotate-6">
                      <IconComponent className="h-5 w-5" />
                    </span>
                  </div>

                  {/* Title & Live Metric Badge */}
                  <div className="mt-6 flex items-start justify-between gap-2">
                    <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#17232d]">
                      {item.title}
                    </h3>
                  </div>

                  <div className="mt-3 inline-block rounded-lg border border-[#17232d]/15 bg-[#fff7df] px-2.5 py-1 font-code-mono text-[10px] font-bold text-[#17232d]">
                    {item.metric}
                  </div>

                  {/* Description */}
                  <p className="mt-4 text-xs sm:text-sm font-semibold leading-relaxed text-[#40505a]">
                    {item.description}
                  </p>
                </div>

                {/* Card Impact Footer */}
                <div className="mt-8 border-t border-[#17232d]/15 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-code-mono text-[9px] font-black uppercase tracking-[.14em] text-[#61707a]">
                      {item.impactLabel}
                    </span>
                    <TrendingDown className="h-3.5 w-3.5 text-[#ed542d]" />
                  </div>
                  <p className="mt-1 text-xs font-black text-[#ed542d]">
                    {item.impact}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Callout Banner with Smooth Entrance */}
        <div
          style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}
          className={`mt-10 flex flex-col gap-5 rounded-3xl border border-[#17232d] bg-[#17232d] p-6 sm:p-8 text-[#fffdf8] shadow-[7px_7px_0_#ffbd5f] sm:flex-row sm:items-center sm:justify-between transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-start gap-4">
            <span className="grid h-11 w-11 shrink-0 place-items-center rounded-2xl bg-[#ffbd5f] text-[#17232d] shadow-[3px_3px_0_#ed542d]">
              <ShieldAlert className="h-6 w-6 stroke-[2.5]" />
            </span>
            <div>
              <h3 className="font-editorial-serif text-2xl sm:text-3xl text-[#fffdf8] leading-tight">
                Recognise these operational leaks in your business?
              </h3>
              <p className="mt-1 text-xs sm:text-sm font-semibold text-[#fffdf8]/75">
                We diagnose where your processes bleed time and revenue before writing code.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenAudit}
            className="group inline-flex shrink-0 items-center justify-center gap-3 rounded-full bg-[#ed542d] px-7 py-3.5 text-xs font-bold uppercase tracking-[.14em] text-white shadow-[4px_4px_0_#ffbd5f] transition-all duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5 hover:bg-[#ffbd5f] hover:text-[#17232d] hover:shadow-[6px_6px_0_#17232d]"
          >
            <span>Get Free Audit</span>
            <span className="grid h-6 w-6 place-items-center rounded-full bg-white/20 text-white transition-transform duration-200 group-hover:bg-[#17232d] group-hover:text-white group-hover:rotate-45">
              <ArrowUpRight className="h-3.5 w-3.5 stroke-[2.5]" aria-hidden="true" />
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}
