"use client";

import { ArrowRight, Check, Code2, Eye, Gauge, Handshake, ShieldCheck, Sparkles } from "lucide-react";
import { useState } from "react";

type PrincipleId = "clarity" | "craft" | "momentum" | "ownership";

const principles: Array<{
  id: PrincipleId;
  number: string;
  label: string;
  title: string;
  statement: string;
  detail: string;
  Icon: typeof Eye;
  promise: string[];
  rhythm: string;
}> = [
  {
    id: "clarity",
    number: "01",
    label: "Clarity over theatre",
    title: "You should always know what is moving, and why.",
    statement: "The best work doesn't need fog machines.",
    detail: "We make decisions in the open: what we're solving, what we're deferring, and what the trade-offs actually are. No mystique. No account-manager relay race.",
    Icon: Eye,
    promise: ["Direct access to the people doing the work", "Visible priorities and honest trade-offs", "A steady rhythm of useful updates"],
    rhythm: "Shared plan → working build → clear next decision",
  },
  {
    id: "craft",
    number: "02",
    label: "Craft with consequences",
    title: "Beautiful is only useful when it earns its keep.",
    statement: "We care about the feel and the foundations.",
    detail: "Every interface choice has a job: make the next action clearer, reduce effort, or express the value of your business with more confidence. The code underneath gets the same care.",
    Icon: Code2,
    promise: ["Interfaces with a reason behind every choice", "Clean, maintainable architecture", "Performance and accessibility from the start"],
    rhythm: "Intent → prototype → tested, durable system",
  },
  {
    id: "momentum",
    number: "03",
    label: "Momentum, not mayhem",
    title: "We find the smallest move that creates real progress.",
    statement: "Ambition needs a pace it can sustain.",
    detail: "Big outcomes are made of well-sequenced decisions. We reduce the project to its useful next shape, ship meaningful increments, and let learning improve the route forward.",
    Icon: Gauge,
    promise: ["A focused scope before a sprawling roadmap", "Working software early—not a grand reveal late", "A delivery plan that respects actual constraints"],
    rhythm: "Useful first release → evidence → next worthwhile move",
  },
  {
    id: "ownership",
    number: "04",
    label: "Ownership that stays",
    title: "Launch is a handoff, not a disappearing act.",
    statement: "We leave you stronger than we found you.",
    detail: "We build for the team who will own the product next—whether that's us, your in-house team, or a future partner. Documentation, clean handovers, and smart support are part of the job.",
    Icon: ShieldCheck,
    promise: ["A codebase that another good team can understand", "A considered handover and operating guide", "Support that matches what launch reveals"],
    rhythm: "Launch → learn in the wild → keep the right things improving",
  },
];

export default function WhyUs() {
  const [activeId, setActiveId] = useState<PrincipleId>("clarity");
  const active = principles.find((principle) => principle.id === activeId)!;
  const ActiveIcon = active.Icon;

  return (
    <section id="why-us" className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#f4efe5] py-20 sm:py-28">
      <div className="absolute bottom-0 left-0 h-2 w-full bg-[#ed542d]" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[.9fr_1.1fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#17232d]/20 bg-[#fffdf8] px-3 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#56616a]">
              <Sparkles className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> Our working charter
            </p>
            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[.94] tracking-[-.07em] text-[#17232d] sm:text-5xl lg:text-6xl">
              Why work with <em className="font-editorial-serif font-normal text-[#ed542d]">BellCurve.</em>
            </h2>
          </div>
          <p className="max-w-xl border-l-2 border-[#ed542d] pl-5 text-sm leading-relaxed text-[#56616a] sm:text-base">
            Good partnerships are designed too. Here&apos;s the standard we hold ourselves to when the work is complex and the stakes are real.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#17232d] bg-[#17232d] shadow-[8px_8px_0_#17232d]">
          <div className="grid lg:grid-cols-[.75fr_1.25fr]">
            <div className="border-b border-white/15 p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
              <div className="mb-7 flex items-center justify-between">
                <p className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ffbd5f]">The principles</p>
                <Handshake className="h-5 w-5 text-[#d7e4ff]" aria-hidden="true" />
              </div>
              <div role="tablist" aria-label="BellCurve working principles" className="space-y-2">
                {principles.map((principle) => {
                  const selected = principle.id === activeId;
                  return (
                    <button
                      key={principle.id}
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveId(principle.id)}
                      className={`flex w-full items-center gap-3 rounded-2xl border p-3.5 text-left transition-all ${
                        selected ? "border-[#ffbd5f] bg-[#ffbd5f] text-[#17232d] shadow-[3px_3px_0_#ed542d]" : "border-white/10 text-[#dce4e8] hover:border-white/35 hover:bg-white/5"
                      }`}
                    >
                      <span className={`font-code-mono text-[10px] font-black ${selected ? "text-[#ed542d]" : "text-[#ffbd5f]"}`}>{principle.number}</span>
                      <span className="flex-1 text-sm font-bold">{principle.label}</span>
                      <ArrowRight className={`h-4 w-4 transition-transform ${selected ? "translate-x-1" : "opacity-50"}`} aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
              <p className="mt-8 border-t border-white/15 pt-5 text-xs leading-relaxed text-[#aeb9c2]">Not values painted on a wall. Practical standards for a better way to make things together.</p>
            </div>

            <article className="relative overflow-hidden bg-[#fffdf8] p-6 sm:p-9 lg:p-12">
              <div className="absolute -right-12 -top-20 h-56 w-56 rounded-full border border-[#17232d]/15" aria-hidden="true" />
              <div className="absolute right-8 top-8 h-24 w-24 rounded-full border border-dashed border-[#17232d]/20" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <p className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d]">{active.number} / {active.label}</p>
                    <h3 className="mt-4 max-w-2xl text-3xl font-black leading-[.98] tracking-[-.055em] text-[#17232d] sm:text-4xl">{active.title}</h3>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#17232d] bg-[#d7e4ff] text-[#17232d] shadow-[3px_3px_0_#17232d]"><ActiveIcon className="h-5 w-5" aria-hidden="true" /></span>
                </div>

                <p className="mt-7 max-w-xl font-editorial-serif text-2xl leading-tight text-[#ed542d] sm:text-3xl">“{active.statement}”</p>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#56616a] sm:text-base">{active.detail}</p>

                <div className="mt-9 grid gap-5 md:grid-cols-[1.15fr_.85fr]">
                  <div className="rounded-2xl border border-[#17232d]/20 bg-[#f3efe6] p-5">
                    <p className="font-code-mono text-[10px] font-black uppercase tracking-[.16em] text-[#56616a]">What this means for you</p>
                    <ul className="mt-5 space-y-3">
                      {active.promise.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm font-semibold leading-snug text-[#40505a]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ed542d]" aria-hidden="true" />{item}</li>)}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between rounded-2xl border border-[#17232d] bg-[#d7e4ff] p-5 shadow-[4px_4px_0_#17232d]">
                    <p className="font-code-mono text-[10px] font-black uppercase tracking-[.16em] text-[#35627e]">The rhythm</p>
                    <p className="mt-8 font-editorial-serif text-2xl leading-tight text-[#17232d]">{active.rhythm}</p>
                    <span className="mt-6 h-2 w-16 rounded-full bg-[#ed542d]" aria-hidden="true" />
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="flex flex-col gap-3 border-t border-[#17232d] bg-[#ffbd5f] px-6 py-4 text-[#17232d] sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="font-editorial-serif text-xl">Senior hands. Plain language. Shared momentum.</p>
            <p className="font-code-mono text-[10px] font-black uppercase tracking-[.15em]">That&apos;s the standard.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
