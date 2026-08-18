"use client";

import React from "react";
import { Users, ArrowUpRight } from "lucide-react";

interface AboutSectionProps {
  onOpenAudit?: () => void;
}

const principles = [
  {
    num: "01",
    title: "Understand the problem.",
    body: "We ask questions before we write code. Sometimes the right answer is a new system. Sometimes it isn't.",
    accent: "#ffbd5f",
  },
  {
    num: "02",
    title: "Build only what matters.",
    body: "We care about useful software, not impressive software. The goal is to build something that earns its place.",
    accent: "#cbe9da",
  },
  {
    num: "03",
    title: "Stay close to the outcome.",
    body: "We care about whether what we built actually works for the people using it and the business depending on it.",
    accent: "#e7d7ff",
  },
];

export default function AboutSection({ onOpenAudit }: AboutSectionProps) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#e7f0eb] h-screen flex flex-col justify-center"
    >
      {/* Decorative Dot Mesh */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(#17232d 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        {/* ── TWO-COLUMN GRID ── */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-6 lg:gap-8 items-start">

          {/* LEFT COLUMN Identity + Story */}
          <div className="flex flex-col gap-4">
            {/* Badge + Headline */}
            <div className="scroll-reveal">
              <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#17232d] bg-[#fffdf8] px-3.5 py-1 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#17232d] shadow-[2px_2px_0_#17232d]">
                <Users className="h-3 w-3 text-[#ed542d]" /> About BellCurve Studio
              </span>

              <h2 className="mt-3 text-3xl sm:text-4xl lg:text-[2.6rem] xl:text-5xl font-black leading-[.95] tracking-[-.06em] text-[#17232d]">
                We&apos;re here to make{" "}
                <em className="font-editorial-serif font-normal text-[#ed542d] underline decoration-[#ffbd5f] decoration-wavy decoration-2">
                  technology make sense.
                </em>
              </h2>

              <p className="mt-3 text-xs sm:text-sm leading-relaxed font-medium text-[#40505a]">
                BellCurve Studio is a small software studio built around a simple belief: good technology should make a business clearer, not more complicated.
              </p>
            </div>

            {/* Why We Started card */}
            <div className="scroll-reveal rounded-2xl border-2 border-[#17232d] bg-[#fffdf8] p-5 shadow-[5px_5px_0_#17232d]">
              <span className="font-code-mono text-[9px] font-black uppercase tracking-[.18em] text-[#ed542d] block mb-3">
                Why we started
              </span>

              <div className="space-y-2 font-editorial-serif text-base sm:text-lg leading-snug text-[#17232d]">
                <p>Most businesses don&apos;t have a software problem.</p>
                <p>They have a problem that software is being asked to solve.</p>
              </div>

              <p className="mt-3 text-xs leading-relaxed font-medium text-[#56616a]">
                A <span className="font-bold text-[#ed542d]">slow process</span>. A <span className="font-bold text-[#ed542d]">messy workflow</span>. A website that isn&apos;t doing its job. <span className="font-bold text-[#ed542d]">Manual work</span> that people keep doing because nobody has had the time to fix it properly.
              </p>
              <p className="mt-2 text-xs leading-relaxed font-medium text-[#56616a]">
                We started BellCurve because we wanted to work on those problems from the beginning, understanding what is actually wrong before deciding what needs to be built.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN How we think + Closing */}
          <div className="flex flex-col gap-4">
            {/* How we think */}
            <div className="scroll-reveal">
              <span className="font-code-mono text-[9px] font-black uppercase tracking-[.18em] text-[#ed542d] block mb-3">
                How we think
              </span>

              <div className="grid gap-3">
                {principles.map((p) => (
                  <div
                    key={p.num}
                    className="flex items-start gap-3 rounded-xl border-2 border-[#17232d] bg-[#fffdf8] p-3.5 shadow-[3px_3px_0_#17232d]"
                  >
                    <span
                      className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-lg border-2 border-[#17232d] font-code-mono text-[10px] font-black text-[#17232d] shadow-[1.5px_1.5px_0_#17232d]"
                      style={{ backgroundColor: p.accent }}
                    >
                      {p.num}
                    </span>
                    <div>
                      <h3 className="text-xs font-black tracking-tight text-[#17232d] leading-tight">{p.title}</h3>
                      <p className="mt-1 text-[11px] leading-relaxed font-medium text-[#56616a]">{p.body}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What working with us feels like */}
            <div className="scroll-reveal rounded-2xl border-2 border-[#17232d]/30 bg-[#fffdf8]/70 p-5">
              <span className="font-code-mono text-[9px] font-black uppercase tracking-[.18em] text-[#ed542d] block mb-3">
                What working with us feels like
              </span>

              <p className="text-xs leading-relaxed font-medium text-[#40505a]">
                You won&apos;t have to translate your business into technical language before talking to us.
                Bring us the problem as it is. We&apos;ll help you understand it, figure out what is worth fixing,
                and decide what should be built.
              </p>

              <div className="mt-4 flex flex-col sm:flex-row sm:items-center gap-3 pt-4 border-t-2 border-[#17232d]/15">
                <p className="text-xs font-bold text-[#17232d]">
                  Have something that&apos;s not working the way it should?
                </p>
                <button
                  onClick={onOpenAudit}
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-xl border-2 border-[#17232d] bg-[#17232d] px-4 py-2 text-xs font-black text-[#fffdf8] shadow-[2.5px_2.5px_0_#ffbd5f] transition-all hover:bg-[#ed542d] hover:shadow-[3.5px_3.5px_0_#17232d] hover:-translate-y-0.5"
                >
                  <span>Get a free audit</span>
                  <ArrowUpRight className="h-3.5 w-3.5 text-[#ffbd5f]" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
