"use client";

import { AlertTriangle, ArrowRight, FileSpreadsheet, Globe, MessageSquare, ShieldAlert } from "lucide-react";

interface TheProblemProps {
  onOpenAudit: () => void;
}

export default function TheProblem({ onOpenAudit }: TheProblemProps) {
  const symptoms = [
    {
      icon: Globe,
      tag: "Symptom 01",
      title: "Disconnected Website",
      description: "A website that doesn't talk to your enquiry process, leaving incoming leads stranded or manually copy-pasted.",
      impact: "Lost leads & delayed follow-ups",
    },
    {
      icon: FileSpreadsheet,
      tag: "Symptom 02",
      title: "Untrusted Spreadsheets",
      description: "A sprawling spreadsheet nobody trusts, filled with manual formulas, duplicate entries, and version chaos.",
      impact: "Decisions made without real data",
    },
    {
      icon: MessageSquare,
      tag: "Symptom 03",
      title: "Workaround Threads",
      description: "A chaotic WhatsApp thread holding together a business operation that should be an automated system.",
      impact: "Repeated admin drag & team fatigue",
    },
  ];

  return (
    <section id="problem" className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#f4efe5] min-h-screen lg:h-screen flex flex-col justify-center py-12">
      <div className="absolute left-0 top-0 h-full w-3 bg-[#ed542d]" aria-hidden="true" />
      <div className="absolute right-[-10rem] top-20 h-96 w-96 rounded-full border border-[#17232d]/15" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8 w-full my-auto">
        <header className="grid items-end gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-16 scroll-reveal">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#ed542d]/30 bg-[#fff7df] px-3.5 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d]">
              <AlertTriangle className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> The Diagnosis
            </p>
            <h2 className="mt-4 max-w-3xl text-4xl font-black leading-[.96] tracking-[-.065em] text-[#17232d] sm:text-5xl lg:text-6xl">
              Most organisations run on a <em className="font-editorial-serif font-normal text-[#ed542d]">patchwork.</em>
            </h2>
          </div>
          <div className="border-l-2 border-[#ed542d] pl-5">
            <p className="text-base leading-relaxed font-semibold text-[#17232d]">
              A website that doesn&apos;t talk to your enquiry process. A spreadsheet nobody trusts. A WhatsApp thread holding together something that should be a system.
            </p>
            <p className="mt-2 font-editorial-serif text-lg italic text-[#ed542d]">
              Every disconnected step costs you a lead, a delay, or a decision made without data.
            </p>
          </div>
        </header>

        {/* 3 Scroll Cards for Symptoms */}
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {symptoms.map((item, idx) => {
            const IconComponent = item.icon;
            return (
              <div
                key={item.title}
                className={`scroll-reveal delay-${(idx + 1) * 100} group relative flex flex-col justify-between overflow-hidden rounded-[1.75rem] border border-[#17232d] bg-[#fffdf8] p-6 shadow-[6px_6px_0_#17232d] transition-transform duration-200 hover:-translate-y-1 hover:shadow-[8px_8px_0_#ed542d]`}
              >
                <div>
                  <div className="flex items-center justify-between">
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d]">
                      {item.tag}
                    </span>
                    <span className="grid h-9 w-9 place-items-center rounded-xl border border-[#17232d] bg-[#f3efe6] text-[#17232d] group-hover:bg-[#ffbd5f]">
                      <IconComponent className="h-4 w-4" />
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-black tracking-[-.04em] text-[#17232d]">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-xs leading-relaxed text-[#56616a]">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 border-t border-[#17232d]/15 pt-3">
                  <p className="font-code-mono text-[9px] font-black uppercase tracking-[.14em] text-[#87939b]">The hidden cost</p>
                  <p className="mt-0.5 text-xs font-bold text-[#ed542d]">{item.impact}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Diagnostic Callout Banner */}
        <div className="mt-8 scroll-reveal flex flex-col gap-4 rounded-[1.75rem] border border-[#17232d] bg-[#17232d] p-6 text-[#fffdf8] shadow-[6px_6px_0_#ffbd5f] sm:flex-row sm:items-center sm:justify-between sm:p-7">
          <div className="flex gap-4 items-start">
            <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#ffbd5f] text-[#17232d]">
              <ShieldAlert className="h-4 w-4" />
            </span>
            <div>
              <p className="font-editorial-serif text-xl leading-snug text-[#fffdf8]">
                Recognise these headaches in your team?
              </p>
              <p className="mt-0.5 text-xs text-[#aeb9c2]">
                We study where your systems leak time and money before writing a single line of code.
              </p>
            </div>
          </div>
          <button
            onClick={onOpenAudit}
            className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ed542d] px-6 py-3 text-xs font-bold uppercase tracking-[.14em] text-white transition-transform hover:-translate-y-0.5"
          >
            Get Free Audit <ArrowRight className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </section>
  );
}
