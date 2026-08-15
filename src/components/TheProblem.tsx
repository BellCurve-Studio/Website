"use client";

import {
  AlertTriangle,
  ArrowUpRight,
  CheckCircle2,
  Cpu,
  FileSpreadsheet,
  Globe,
  Layers,
  MessageSquare,
  ShieldAlert,
  Sparkles,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface TheProblemProps {
  onOpenAudit: () => void;
}

export default function TheProblem({ onOpenAudit }: TheProblemProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

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
      id: "01",
      icon: Globe,
      tag: "FRONTEND DISCONNECT",
      title: "Disconnected Website",
      metric: "38% Lost Leads",
      headline: "Inbound leads land in email black holes",
      description:
        "Your website doesn't talk directly to your CRM or fulfillment team. Leads require manual copy-pasting, causing delayed follow-ups and lost deals.",
      impact: "Stranded leads & delayed customer response",
      solution: "Direct webhook lead capture & instant automated notification flow.",
      statusColor: "#ed542d",
    },
    {
      id: "02",
      icon: FileSpreadsheet,
      tag: "DATA CHAOS",
      title: "Untrusted Spreadsheets",
      metric: "14 hrs/wk Wasted",
      headline: "Sprawling Google Sheets nobody fully trusts",
      description:
        "Fragile formulas, duplicate rows, broken VLOOKUPs, and version drift. Your team spends hours manually cross-checking numbers before making decisions.",
      impact: "Decisions made on outdated or corrupted data",
      solution: "Unified SQL database back-end with automated real-time dashboards.",
      statusColor: "#ffbd5f",
    },
    {
      id: "03",
      icon: MessageSquare,
      tag: "WORKFLOW FRICTION",
      title: "Workaround Threads",
      metric: "Zero Real-time Sync",
      description:
        "Chaotic WhatsApp and Slack threads acting as makeshift glue for core operational steps that should be automated software pipelines.",
      impact: "Repeated admin drag & team operational fatigue",
      solution: "Custom event-driven workflow engine that triggers actions automatically.",
      statusColor: "#ed542d",
    },
  ];

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#f4efe5] min-h-screen lg:h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-6"
    >
      {/* Light Ambient Background Glows */}
      <div className="absolute top-12 left-10 w-96 h-96 rounded-full bg-[#ffbd5f]/15 blur-3xl pointer-events-none animate-pulse-glow" aria-hidden="true" />
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#ed542d]/10 blur-3xl pointer-events-none animate-pulse-glow" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8 my-auto w-full">
        
        {/* Section Header */}
        <header
          className={`grid items-end gap-6 lg:grid-cols-[1.1fr_.9fr] lg:gap-12 transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-[#17232d] bg-[#fffdf8] px-3.5 py-1.5 text-xs font-bold text-[#17232d] shadow-[3px_3px_0_#ed542d]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ed542d] opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#ed542d]" />
              </span>
              <AlertTriangle className="h-3.5 w-3.5 text-[#ed542d]" />
              <span className="font-code-mono text-[9px] font-black uppercase tracking-[.16em] text-[#17232d]">
                Operational Diagnosis
              </span>
            </div>

            <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-.065em] text-[#17232d] sm:text-5xl md:text-6xl lg:text-[3.8rem]">
              Most organisations run on a{" "}
              <span className="font-editorial-serif italic font-normal text-[#ed542d]">
                patchwork.
              </span>
            </h2>
          </div>

          <div className="border-l-2 border-[#ed542d] pl-5 sm:pl-7">
            <p className="text-base font-semibold leading-relaxed text-[#17232d] sm:text-lg">
              A website that doesn&apos;t talk to your enquiry process. A spreadsheet nobody trusts. A chat thread holding together a system.
            </p>
            <p className="mt-2 font-editorial-serif text-base italic text-[#ed542d] sm:text-lg">
              Every disconnected step costs you a lead, a delay, or a decision made without data.
            </p>
          </div>
        </header>

        {/* Dual-Pane Interactive Diagnostic Workbench */}
        <div
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          className={`mt-8 grid gap-8 lg:grid-cols-[.9fr_1.1fr] items-stretch transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Column: 3 Interactive Symptom Selector Tabs */}
          <div className="flex flex-col gap-3.5 justify-center">
            {symptoms.map((item, idx) => {
              const IconComp = item.icon;
              const isActive = activeTab === idx;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`group relative text-left w-full rounded-2xl border-2 p-5 transition-all duration-300 ${
                    isActive
                      ? "border-[#17232d] bg-[#fffdf8] shadow-[6px_6px_0_#ed542d] -translate-y-1"
                      : "border-[#17232d]/20 bg-[#fffdf8]/60 hover:bg-[#fffdf8] hover:border-[#17232d]/50 hover:shadow-[3px_3px_0_#17232d]"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid h-9 w-9 place-items-center rounded-xl border border-[#17232d] font-code-mono text-xs font-black transition-colors ${
                          isActive ? "bg-[#ed542d] text-white" : "bg-[#f4efe5] text-[#17232d]"
                        }`}
                      >
                        {item.id}
                      </span>
                      <div>
                        <span className="font-code-mono text-[9px] font-black uppercase tracking-[.14em] text-[#ed542d]">
                          {item.tag}
                        </span>
                        <h3 className="text-lg font-black tracking-tight text-[#17232d]">
                          {item.title}
                        </h3>
                      </div>
                    </div>

                    <span
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-code-mono text-[10px] font-bold ${
                        isActive
                          ? "bg-[#ed542d] text-white"
                          : "bg-[#17232d]/10 text-[#17232d]"
                      }`}
                    >
                      {item.metric}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Right Column: Live Systems Leak Inspection Card */}
          <div className="rounded-3xl border-2 border-[#17232d] bg-[#17232d] p-6 sm:p-8 text-[#fffdf8] shadow-[8px_8px_0_#ffbd5f] flex flex-col justify-between relative overflow-hidden">
            {/* Ambient Accent Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ed542d]/20 blur-3xl pointer-events-none" />

            <div className="relative z-10">
              {/* Header Tag */}
              <div className="flex items-center justify-between border-b border-[#fffdf8]/15 pb-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-[#ffbd5f]/30 bg-[#fffdf8]/10 px-3 py-1 font-code-mono text-[9px] font-black uppercase tracking-[.18em] text-[#ffbd5f]">
                  <Cpu className="h-3 w-3 text-[#ed542d]" />
                  Leak Inspection #{symptoms[activeTab].id}
                </span>

                <span className="font-code-mono text-[10px] font-bold text-[#ffbd5f]">
                  {symptoms[activeTab].tag}
                </span>
              </div>

              {/* Symptom Headline & Description */}
              <div className="mt-5">
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#fffdf8]">
                  {symptoms[activeTab].headline}
                </h3>
                <p className="mt-3 text-xs sm:text-sm font-medium leading-relaxed text-[#fffdf8]/80">
                  {symptoms[activeTab].description}
                </p>
              </div>

              {/* Impact vs Solution Comparison */}
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                
                {/* Friction Impact */}
                <div className="rounded-2xl border border-[#ed542d]/40 bg-[#ed542d]/10 p-4">
                  <span className="font-code-mono text-[9px] font-black uppercase tracking-[.14em] text-[#ed542d]">
                    🔴 SYSTEM FRICTION
                  </span>
                  <p className="mt-1.5 text-xs font-bold text-[#fffdf8]">
                    {symptoms[activeTab].impact}
                  </p>
                </div>

                {/* BellCurve Automated Solution */}
                <div className="rounded-2xl border border-[#ffbd5f]/40 bg-[#ffbd5f]/10 p-4">
                  <span className="font-code-mono text-[9px] font-black uppercase tracking-[.14em] text-[#ffbd5f]">
                    ⚡ BELLCURVE FIX
                  </span>
                  <p className="mt-1.5 text-xs font-bold text-[#fffdf8]">
                    {symptoms[activeTab].solution}
                  </p>
                </div>

              </div>
            </div>

            {/* Bottom Diagnostic Action Link */}
            <div className="relative z-10 border-t border-[#fffdf8]/15 pt-5 mt-6 flex items-center justify-between">
              <div className="flex items-center gap-2 font-code-mono text-[10px] font-bold text-[#fffdf8]/60">
                <span className="h-2 w-2 rounded-full bg-[#ed542d] animate-ping" />
                <span>Diagnostic First • Systems Second</span>
              </div>

              <button
                onClick={onOpenAudit}
                className="inline-flex items-center gap-2 rounded-full bg-[#ed542d] px-4 py-2 text-xs font-bold uppercase tracking-wider text-white shadow-[2px_2px_0_#ffbd5f] transition-all hover:bg-[#ffbd5f] hover:text-[#17232d]"
              >
                <span>Free Audit</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>
        </div>

        {/* Bottom Banner */}
        <div
          style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
          className={`mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 rounded-2xl border border-[#17232d] bg-[#fffdf8] px-6 py-4 shadow-[4px_4px_0_#17232d] transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          <div className="flex items-center gap-3">
            <ShieldAlert className="h-5 w-5 text-[#ed542d] shrink-0" />
            <p className="text-xs font-bold text-[#17232d]">
              Recognise these operational leaks in your business? We study where systems leak time before writing code.
            </p>
          </div>

          <button
            onClick={onOpenAudit}
            className="group inline-flex shrink-0 items-center gap-2 rounded-full bg-[#17232d] px-5 py-2 text-xs font-bold uppercase tracking-wider text-[#fffdf8] shadow-[3px_3px_0_#ffbd5f] transition-all hover:bg-[#ed542d]"
          >
            <span>Get Free Operational Audit</span>
            <ArrowUpRight className="h-3.5 w-3.5 text-[#ffbd5f] transition-transform duration-200 group-hover:rotate-45" />
          </button>
        </div>

      </div>
    </section>
  );
}
