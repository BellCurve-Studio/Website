"use client";

import { ArrowRight, ArrowUpRight, Check, Gauge, Layers3, MousePointer2, ShieldCheck, Sparkles, Zap } from "lucide-react";
import { useState } from "react";

interface RevampSimulatorProps {
  onOpenConsultation: () => void;
}

type ImpactLens = "speed" | "experience" | "operations";

const lenses: Array<{ id: ImpactLens; label: string; eyebrow: string; value: string; change: string; Icon: typeof Zap }> = [
  { id: "speed", label: "Performance", eyebrow: "Page ready time", value: "0.8s", change: "6× faster", Icon: Zap },
  { id: "experience", label: "Experience", eyebrow: "Task completion", value: "+42%", change: "less friction", Icon: MousePointer2 },
  { id: "operations", label: "Operations", eyebrow: "Manual handoffs", value: "−63%", change: "time reclaimed", Icon: Layers3 },
];

const details: Record<ImpactLens, { legacy: string; modern: string; outcome: string; legacyTags: string[]; modernTags: string[] }> = {
  speed: {
    legacy: "Slow templates, oversized assets, and a fragile deployment path make every visit wait.",
    modern: "A lean front end, smart caching, and a delivery pipeline built for fast, reliable releases.",
    outcome: "A site that feels immediate before your customer has time to second-guess the click.",
    legacyTags: ["4.8s load", "Blocked rendering", "Plugin debt"],
    modernTags: ["0.8s ready", "Edge delivery", "Clean releases"],
  },
  experience: {
    legacy: "Users hunt through dense screens, unclear paths, and a mobile layout that gives up too early.",
    modern: "A focused interface turns the important next action into the obvious next action—on every screen.",
    outcome: "Less hesitation, more completed journeys, and a product people are happy to return to.",
    legacyTags: ["High drop-off", "Desktop-first", "Scattered flows"],
    modernTags: ["Clear journeys", "Mobile-native", "Accessible UI"],
  },
  operations: {
    legacy: "Teams bridge gaps with spreadsheets, duplicate data, and a backlog of small workarounds.",
    modern: "Connected workflows put the right context, approvals, and automation where the work happens.",
    outcome: "A calmer operating rhythm where the system carries more of the repetitive weight.",
    legacyTags: ["Manual updates", "Data silos", "Repeat admin"],
    modernTags: ["Connected data", "Smart rules", "Useful insight"],
  },
};

export default function RevampSimulator({ onOpenConsultation }: RevampSimulatorProps) {
  const [activeLens, setActiveLens] = useState<ImpactLens>("speed");
  const active = lenses.find((lens) => lens.id === activeLens)!;
  const story = details[activeLens];

  return (
    <section id="revamp-simulator" className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#f4efe5] py-20 sm:py-28">
      <div className="absolute left-0 top-0 h-full w-3 bg-[#ed542d]" aria-hidden="true" />
      <div className="absolute right-[-12rem] top-24 h-96 w-96 rounded-full border border-[#17232d]/15" aria-hidden="true" />
      <div className="absolute right-[-4rem] top-40 h-56 w-56 rounded-full border border-dashed border-[#17232d]/20" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1.1fr_.9fr] lg:gap-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#17232d]/20 bg-[#fffdf8] px-3 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#56616a]">
              <Sparkles className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> Transformation map / 01
            </p>
            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[.94] tracking-[-.07em] text-[#17232d] sm:text-5xl lg:text-6xl">
              Turn technical drag into <em className="font-editorial-serif font-normal text-[#ed542d]">forward motion.</em>
            </h2>
          </div>
          <p className="max-w-lg border-l-2 border-[#ed542d] pl-5 text-sm leading-relaxed text-[#56616a] sm:text-base">
            A revamp isn&apos;t a fresh coat of paint. It&apos;s a chance to remove friction from the moments that matter—for customers and for your team.
          </p>
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-[#17232d] bg-[#fffdf8] shadow-[8px_8px_0_#17232d] lg:grid-cols-[.72fr_1.28fr]">
          <aside className="border-b border-[#17232d] bg-[#17232d] p-6 text-[#fffdf8] sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
            <p className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ffbd5f]">Choose an impact lens</p>
            <p className="mt-4 max-w-xs font-editorial-serif text-3xl leading-[1.05] text-[#fffdf8]">Where is your system making work harder?</p>

            <div className="mt-8 space-y-2" role="tablist" aria-label="Transformation impact lens">
              {lenses.map(({ id, label, Icon }) => (
                <button
                  key={id}
                  onClick={() => setActiveLens(id)}
                  role="tab"
                  aria-selected={activeLens === id}
                  className={`flex w-full items-center justify-between rounded-2xl border px-4 py-4 text-left transition-all ${
                    activeLens === id
                      ? "border-[#ffbd5f] bg-[#ffbd5f] text-[#17232d] shadow-[3px_3px_0_#ed542d]"
                      : "border-white/15 text-[#d6dce1] hover:border-white/45 hover:bg-white/5"
                  }`}
                >
                  <span className="flex items-center gap-3 text-sm font-bold"><Icon className="h-4 w-4" aria-hidden="true" />{label}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              ))}
            </div>

            <div className="mt-10 border-t border-white/15 pt-6">
              <p className="text-xs leading-relaxed text-[#aeb9c2]">We start with the bottleneck, then design the smallest meaningful route to better.</p>
            </div>
          </aside>

          <div className="p-5 sm:p-8 lg:p-10">
            <div className="flex flex-col justify-between gap-5 border-b border-[#17232d]/15 pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d]">Impact forecast</p>
                <h3 className="mt-2 text-2xl font-black tracking-[-.04em] text-[#17232d]">{active.label}, re-engineered.</h3>
              </div>
              <div className="rounded-2xl bg-[#d7e4ff] px-4 py-3 sm:text-right">
                <p className="font-code-mono text-[9px] font-black uppercase tracking-[.15em] text-[#56616a]">{active.eyebrow}</p>
                <p className="mt-1 text-2xl font-black tracking-[-.05em] text-[#17232d]">{active.value} <span className="text-sm font-bold text-[#ed542d]">{active.change}</span></p>
              </div>
            </div>

            <div className="relative mt-8 grid gap-5 md:grid-cols-[1fr_auto_1fr] md:items-stretch">
              <article className="rounded-2xl border border-[#17232d]/20 bg-[#f3efe6] p-5">
                <div className="flex items-center justify-between">
                  <span className="font-code-mono text-[10px] font-black uppercase tracking-[.15em] text-[#8b4d45]">01 / Legacy loop</span>
                  <span className="h-2.5 w-2.5 rounded-full bg-[#ed542d]" aria-hidden="true" />
                </div>
                <p className="mt-7 text-sm leading-relaxed text-[#56616a]">{story.legacy}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {story.legacyTags.map((tag) => <span key={tag} className="rounded-full border border-[#17232d]/15 px-2.5 py-1 font-code-mono text-[9px] font-bold text-[#7a655e]">{tag}</span>)}
                </div>
              </article>

              <div className="relative grid place-items-center py-1" aria-hidden="true">
                <div className="hidden h-full border-l border-dashed border-[#17232d]/30 md:block" />
                <div className="relative flex h-11 w-11 items-center justify-center rounded-full border border-[#17232d] bg-[#ffbd5f] shadow-[3px_3px_0_#17232d]"><ArrowRight className="h-5 w-5 md:rotate-0 max-md:rotate-90" /></div>
              </div>

              <article className="rounded-2xl border border-[#17232d] bg-[#d7e4ff] p-5 shadow-[4px_4px_0_#17232d]">
                <div className="flex items-center justify-between">
                  <span className="font-code-mono text-[10px] font-black uppercase tracking-[.15em] text-[#35627e]">02 / BellCurve lift</span>
                  <Check className="h-4 w-4 text-[#ed542d]" aria-hidden="true" />
                </div>
                <p className="mt-7 text-sm leading-relaxed text-[#40505a]">{story.modern}</p>
                <div className="mt-6 flex flex-wrap gap-2">
                  {story.modernTags.map((tag) => <span key={tag} className="rounded-full border border-[#17232d]/20 bg-[#fffdf8]/70 px-2.5 py-1 font-code-mono text-[9px] font-bold text-[#40505a]">{tag}</span>)}
                </div>
              </article>
            </div>

            <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-[#17232d]/15 bg-[#fff7df] p-5 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex gap-3">
                <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-[#17232d] text-[#ffbd5f]"><Gauge className="h-4 w-4" aria-hidden="true" /></span>
                <p className="max-w-xl text-sm leading-relaxed text-[#40505a]"><strong className="text-[#17232d]">The outcome:</strong> {story.outcome}</p>
              </div>
              <button onClick={onOpenConsultation} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ed542d] px-4 py-2.5 text-xs font-bold text-white transition-transform hover:-translate-y-0.5">
                Map my upgrade <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-7 flex flex-col gap-4 border-t border-[#17232d]/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-code-mono text-[10px] font-bold uppercase tracking-[.14em] text-[#56616a]">Strategy / systems / interface / delivery</p>
          <div className="flex items-center gap-2 text-xs font-bold text-[#40505a]"><ShieldCheck className="h-4 w-4 text-[#ed542d]" aria-hidden="true" /> Built around your actual constraints—not a template.</div>
        </div>
      </div>
    </section>
  );
}
