"use client";

import {
  AlertTriangle,
  ArrowUpRight,
  Cpu,
  FileSpreadsheet,
  Globe,
  MessageSquare,
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
      tag: "LEAD DISCONNECT",
      title: "Disconnected Website",
      metric: "MANUAL FOLLOW-UP",
      headline: "A new enquiry comes in. Someone still has to handle it manually.",
      description:
        "Leads come through the website, email, or WhatsApp. Then someone copies, forwards, assigns, and follows up.",
      impact: "The lead is 3 hours old before anyone responds. By then, they've moved on.",
      solution: "Connect the enquiry to what happens next.",
      statusColor: "#ed542d",
    },
    {
      id: "02",
      icon: FileSpreadsheet,
      tag: "DATA CHAOS",
      title: "Untrusted Spreadsheets",
      metric: "VERSION DRIFT",
      headline: "Everyone has a copy. Nobody knows which one is right.",
      description:
        "Numbers live across sheets, tabs, and files. Updates get missed. Someone has to check everything twice.",
      impact: "Duplicate work. Wrong numbers. Decisions based on a version nobody updated.",
      solution: "Put the data in one place everyone can trust.",
      statusColor: "#ffbd5f",
    },
    {
      id: "03",
      icon: MessageSquare,
      tag: "WORKFLOW FRICTION",
      title: "WhatsApp as a Workflow",
      metric: "MANUAL HANDOFFS",
      headline: "Someone sends a message. Someone else has to remember to act.",
      description:
        "Approvals, updates, and reminders happen in group chats. Nothing is tracked. Nothing triggers automatically.",
      impact: "Missed handoffs. Repeated follow-ups. Nobody sure where things stand.",
      solution: "Turn repeated tasks into a real workflow.",
      statusColor: "#ed542d",
    },
  ];

  return (
    <section
      id="problem"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#f4efe5] min-h-screen lg:h-screen flex flex-col justify-between pt-24 sm:pt-28 pb-6"
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
                OPERATIONAL FRICTION
              </span>
            </div>

            <h2 className="mt-4 text-4xl font-black leading-[1.02] tracking-[-.065em] text-[#17232d] sm:text-5xl md:text-6xl lg:text-[3.8rem]">
              Your operations probably run on a{" "}
              <span className="font-editorial-serif italic font-normal text-[#ed542d]">
                patchwork.
              </span>
            </h2>
          </div>

          <div className="border-l-2 border-[#ed542d] pl-5 sm:pl-7">
            <p className="text-base font-semibold leading-relaxed text-[#17232d] sm:text-lg">
              A website that doesn&apos;t connect to your sales process. A spreadsheet nobody trusts. A WhatsApp thread holding everything together.
            </p>
            <p className="mt-2 font-editorial-serif text-base italic text-[#ed542d] sm:text-lg">
              None of these gaps feel urgent on their own. Together, they're the reason things feel slower than they should.
            </p>
          </div>
        </header>

        {/* Dual-Pane Interactive Diagnostic Workbench */}
        <div
          style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}
          className={`mt-8 grid gap-8 lg:grid-cols-[.95fr_1.05fr] items-stretch transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left Column: 3 Interactive Symptom Selector Tabs */}
          <div className="flex flex-col gap-3.5 justify-center">
            {symptoms.map((item, idx) => {
              const isActive = activeTab === idx;

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(idx)}
                  className={`group relative text-left w-full rounded-2xl border-2 p-5 transition-all duration-300 active:scale-[0.98] overflow-hidden ${
                    isActive
                      ? "border-[#17232d] bg-[#fffdf8] shadow-[6px_6px_0_#ed542d] -translate-y-0.5"
                      : "border-[#17232d]/20 bg-[#fffdf8]/60 hover:bg-[#fffdf8] hover:border-[#17232d]/50 hover:shadow-[3px_3px_0_#17232d]"
                  }`}
                >
                  {/* Active Indicator Bar */}
                  {isActive && (
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#ed542d] rounded-l-2xl animate-fade-in" />
                  )}

                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span
                        className={`grid h-9 w-9 place-items-center rounded-xl border border-[#17232d] font-code-mono text-xs font-black transition-all duration-200 group-hover:scale-105 ${
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
                      className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 font-code-mono text-[10px] font-bold transition-colors ${
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

          {/* Right Column: Sleek Mini Terminal Window in Light Paper Cream Theme */}
          <div className="rounded-2xl border-2 border-[#17232d] bg-[#fffdf8] text-[#17232d] shadow-[6px_6px_0_#17232d] flex flex-col justify-between overflow-hidden relative">
            
            {/* Window Control Header Bar */}
            <div className="flex items-center justify-between border-b border-[#17232d]/15 bg-[#f4efe5] px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-[#ed542d]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#ffbd5f]" />
                <span className="h-2.5 w-2.5 rounded-full bg-[#6ee7b7]" />
              </div>

              <div className="font-code-mono text-[10px] font-bold text-[#17232d] flex items-center gap-1.5">
                <Cpu className="h-3 w-3 text-[#ed542d]" />
                <span>leak_inspection_{symptoms[activeTab].id}.sys</span>
              </div>

              <span className="font-code-mono text-[9px] font-bold text-[#ed542d] uppercase tracking-wider">
                {symptoms[activeTab].tag}
              </span>
            </div>

            {/* Window Main Body with Keyed Smooth Fade-In-Up Animation */}
            <div
              key={activeTab}
              className="animate-tab-fade p-5 sm:p-6 relative z-10 flex flex-col justify-between flex-1 gap-5"
            >
              
              {/* Symptom Headline & Description */}
              <div>
                <h3 className="text-xl sm:text-2xl font-black tracking-tight text-[#17232d]">
                  {symptoms[activeTab].headline}
                </h3>
                <p className="mt-2.5 text-xs font-semibold leading-relaxed text-[#40505a]">
                  {symptoms[activeTab].description}
                </p>
              </div>

              {/* Friction vs Fix Comparison Cards */}
              <div className="grid gap-3 sm:grid-cols-2">
                
                {/* Friction Impact Card */}
                <div className="rounded-xl border border-[#ed542d]/30 bg-[#fff7df] p-3.5">
                  <span className="font-code-mono text-[9px] font-black uppercase tracking-[.14em] text-[#ed542d] block mb-1">
                    🔴 SYSTEM FRICTION
                  </span>
                  <p className="text-xs font-bold text-[#17232d] leading-snug">
                    {symptoms[activeTab].impact}
                  </p>
                </div>

                {/* BellCurve Solution Card */}
                <div className="rounded-xl border border-[#17232d]/20 bg-[#e7f0eb] p-3.5">
                  <span className="font-code-mono text-[9px] font-black uppercase tracking-[.14em] text-[#17232d] block mb-1">
                    ⚡ BELLCURVE FIX
                  </span>
                  <p className="text-xs font-bold text-[#17232d] leading-snug">
                    {symptoms[activeTab].solution}
                  </p>
                </div>

              </div>

              {/* Window Action Footer */}
              <div className="border-t border-[#17232d]/15 pt-3.5 flex items-center justify-between">
                <div className="flex items-center gap-2 font-code-mono text-[10px] font-bold text-[#61707a]">
                  <span className="h-2 w-2 rounded-full bg-[#ed542d] animate-ping" />
                  <span>Diagnostic First</span>
                </div>

                <button
                  onClick={onOpenAudit}
                  className="group inline-flex items-center gap-1.5 rounded-full bg-[#17232d] px-4 py-2 text-[10px] font-black uppercase tracking-wider text-[#fffdf8] shadow-[2px_2px_0_#ed542d] transition-all hover:bg-[#ed542d] hover:text-white active:scale-95"
                >
                  <span>Free Audit</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#ffbd5f] transition-transform duration-200 group-hover:rotate-45 group-hover:text-white" />
                </button>
              </div>

            </div>

          </div>
        </div>



      </div>
    </section>
  );
}
