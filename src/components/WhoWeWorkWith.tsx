"use client";

import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Building2, Check, GraduationCap, Handshake, Rocket, Sparkles } from "lucide-react";
import { useState } from "react";

interface WhoWeWorkWithProps {
  onOpenConsultation: () => void;
}

type TeamId = "founders" | "growing" | "established" | "partners" | "institutions";

const teams: Array<{
  id: TeamId;
  number: string;
  label: string;
  moment: string;
  title: string;
  description: string;
  Icon: typeof Rocket;
  color: string;
  evidence: string[];
  startingPoint: string;
}> = [
  {
    id: "founders",
    number: "01",
    label: "Founders & product teams",
    moment: "You're ready to make the idea real.",
    title: "A promising idea needs more than a prototype.",
    description: "You have the insight, the market signal, or the ambitious brief. We help turn it into a focused first product that earns feedback from real people.",
    Icon: Rocket,
    color: "#ffbd5f",
    evidence: ["A sharper MVP scope", "A product customers can actually use", "A technical base ready for the next round"],
    startingPoint: "Product direction session",
  },
  {
    id: "growing",
    number: "02",
    label: "Growing businesses",
    moment: "Your team is outgrowing the workaround.",
    title: "The spreadsheet shouldn't be the operating system.",
    description: "When good people spend too much time connecting disconnected tools, there is usually a more useful system waiting to be designed.",
    Icon: Building2,
    color: "#cbe9da",
    evidence: ["Less repeat administration", "Clearer team visibility", "A process that can grow without more chaos"],
    startingPoint: "Workflow & systems audit",
  },
  {
    id: "established",
    number: "03",
    label: "Established organizations",
    moment: "The system worked—until it became the constraint.",
    title: "Keep the value. Lose the drag.",
    description: "We help established teams modernize high-value systems without treating the years of operational knowledge inside them as disposable.",
    Icon: BriefcaseBusiness,
    color: "#d7e4ff",
    evidence: ["A practical modernization path", "Safer, faster customer journeys", "A codebase the business can evolve"],
    startingPoint: "Platform health check",
  },
  {
    id: "partners",
    number: "04",
    label: "Agencies & consultancies",
    moment: "You need senior product engineering behind the scenes.",
    title: "A technical partner who makes your team look good.",
    description: "We join trusted client relationships as a calm, capable delivery partner for the parts of the work that demand deeper product and engineering craft.",
    Icon: Handshake,
    color: "#e7d7ff",
    evidence: ["White-label product engineering", "Reliable senior delivery capacity", "A partner who respects the relationship"],
    startingPoint: "Partner capability call",
  },
  {
    id: "institutions",
    number: "05",
    label: "Institutions & service teams",
    moment: "Too many people depend on a clumsy journey.",
    title: "Important services deserve a calmer interface.",
    description: "Whether the people are students, members, patients, or staff, we design digital services that make complex processes feel more direct and humane.",
    Icon: GraduationCap,
    color: "#ffd7c5",
    evidence: ["Accessible, human-centered journeys", "Reliable service operations", "Clearer experiences for every role"],
    startingPoint: "Service experience review",
  },
];

export default function WhoWeWorkWith({ onOpenConsultation }: WhoWeWorkWithProps) {
  const [activeId, setActiveId] = useState<TeamId>("founders");
  const active = teams.find((team) => team.id === activeId)!;
  const ActiveIcon = active.Icon;

  return (
    <section id="who-we-work-with" className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#f3efe6] py-20 sm:py-28">
      <div className="absolute left-0 top-24 h-44 w-full bg-[#ed542d]" aria-hidden="true" />
      <div className="absolute -right-20 top-7 h-64 w-64 rounded-full border border-[#17232d]/20" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        <header className="relative grid gap-8 text-[#17232d] lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#17232d]/20 bg-[#fffdf8] px-3 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#56616a]">
              <Sparkles className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> Find your moment
            </p>
            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[.94] tracking-[-.07em] sm:text-5xl lg:text-6xl">
              Who we work <em className="font-editorial-serif font-normal text-[#fffdf8]">with.</em>
            </h2>
          </div>
          <p className="max-w-xl border-l-2 border-[#17232d] pl-5 text-sm leading-relaxed text-[#17232d] sm:text-base">
            The best fit isn&apos;t a sector. It&apos;s a team at the point where the old way of doing things is no longer good enough.
          </p>
        </header>

        <div className="relative mt-12 overflow-hidden rounded-[2rem] border border-[#17232d] bg-[#fffdf8] shadow-[8px_8px_0_#17232d]">
          <div className="grid lg:grid-cols-[.8fr_1.2fr]">
            <div className="border-b border-[#17232d] bg-[#17232d] p-5 sm:p-7 lg:border-b-0 lg:border-r lg:p-8">
              <p className="mb-5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ffbd5f]">You may be here because…</p>
              <div role="tablist" aria-label="Teams BellCurve works with" className="space-y-2">
                {teams.map((team) => {
                  const selected = team.id === activeId;
                  return (
                    <button
                      key={team.id}
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveId(team.id)}
                      className={`group flex w-full items-center gap-3 rounded-2xl border p-3.5 text-left transition-all ${
                        selected ? "border-[#fffdf8] bg-[#fffdf8] text-[#17232d] shadow-[3px_3px_0_#ed542d]" : "border-white/10 text-[#dce4e8] hover:border-white/35 hover:bg-white/5"
                      }`}
                    >
                      <span className={`font-code-mono text-[10px] font-black ${selected ? "text-[#ed542d]" : "text-[#ffbd5f]"}`}>{team.number}</span>
                      <span className="flex-1 text-sm font-bold">{team.label}</span>
                      <ArrowRight className={`h-4 w-4 transition-transform ${selected ? "translate-x-1" : "opacity-45 group-hover:translate-x-1"}`} aria-hidden="true" />
                    </button>
                  );
                })}
              </div>
              <p className="mt-8 border-t border-white/15 pt-5 text-xs leading-relaxed text-[#aeb9c2]">If the problem is important, the language is plain, and there&apos;s room for useful ambition—we&apos;ll likely get on well.</p>
            </div>

            <article className="relative overflow-hidden p-6 sm:p-9 lg:p-11">
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full border border-[#17232d]/15" aria-hidden="true" />
              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d]">{active.number} / {active.label}</p>
                    <h3 className="mt-4 max-w-xl text-3xl font-black leading-[.98] tracking-[-.055em] text-[#17232d] sm:text-4xl">{active.title}</h3>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#17232d] shadow-[3px_3px_0_#17232d]" style={{ backgroundColor: active.color }}><ActiveIcon className="h-5 w-5 text-[#17232d]" aria-hidden="true" /></span>
                </div>

                <p className="mt-7 max-w-2xl font-editorial-serif text-2xl leading-tight text-[#ed542d] sm:text-3xl">“{active.moment}”</p>
                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#56616a] sm:text-base">{active.description}</p>

                <div className="mt-9 grid gap-5 md:grid-cols-[1.1fr_.9fr]">
                  <div className="rounded-2xl border border-[#17232d]/20 bg-[#f3efe6] p-5">
                    <p className="font-code-mono text-[10px] font-black uppercase tracking-[.16em] text-[#56616a]">What better looks like</p>
                    <ul className="mt-5 space-y-3">
                      {active.evidence.map((item) => <li key={item} className="flex items-start gap-2.5 text-sm font-semibold leading-snug text-[#40505a]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ed542d]" aria-hidden="true" />{item}</li>)}
                    </ul>
                  </div>
                  <div className="flex flex-col justify-between rounded-2xl border border-[#17232d] p-5 shadow-[4px_4px_0_#17232d]" style={{ backgroundColor: active.color }}>
                    <div>
                      <p className="font-code-mono text-[10px] font-black uppercase tracking-[.16em] text-[#40505a]">A useful first step</p>
                      <p className="mt-5 font-editorial-serif text-2xl leading-tight text-[#17232d]">{active.startingPoint}</p>
                    </div>
                    <button onClick={onOpenConsultation} className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-[#17232d] px-4 py-2.5 text-xs font-bold text-[#fffdf8] transition-transform hover:-translate-y-0.5">Start the conversation <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" /></button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          <div className="flex flex-col gap-3 border-t border-[#17232d] bg-[#ffbd5f] px-6 py-4 text-[#17232d] sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="font-editorial-serif text-xl">The project can be early, messy, or overdue. It just needs to matter.</p>
            <button onClick={onOpenConsultation} className="inline-flex items-center gap-2 text-sm font-black underline decoration-[#ed542d] decoration-2 underline-offset-4">Tell us where it&apos;s sticking <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
