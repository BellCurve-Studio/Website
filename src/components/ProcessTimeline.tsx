"use client";

import { ArrowRight, Check, ClipboardList, Compass, FlaskConical, Rocket, Search, Shapes, UsersRound } from "lucide-react";
import { useState } from "react";

type PhaseId = "listen" | "shape" | "make" | "prove" | "launch";

const phases: Array<{
  id: PhaseId;
  number: string;
  title: string;
  label: string;
  duration: string;
  Icon: typeof Search;
  description: string;
  deliverables: string[];
  together: string;
  signal: string;
}> = [
  {
    id: "listen",
    number: "01",
    title: "Listen",
    label: "Find the real problem",
    duration: "Week 1",
    Icon: Search,
    description: "We get close to the business context, the people using the system, and the friction worth removing first. The goal is shared clarity—not a longer feature list.",
    deliverables: ["Problem framing", "User and system audit", "Success measures", "A useful first direction"],
    together: "A focused working session and direct questions while the context is still fresh.",
    signal: "The right problem is now in focus.",
  },
  {
    id: "shape",
    number: "02",
    title: "Shape",
    label: "Make the route visible",
    duration: "Week 1–2",
    Icon: Compass,
    description: "We turn the direction into a deliberate plan: the experience, technical approach, scope boundaries, and the order that creates momentum without unnecessary risk.",
    deliverables: ["Product & technical blueprint", "Experience flows", "Delivery sequence", "Clear investment & milestones"],
    together: "You review a tangible route before engineering commitment starts.",
    signal: "Everyone can see what we are making and why.",
  },
  {
    id: "make",
    number: "03",
    title: "Make",
    label: "Turn ideas into working software",
    duration: "Weeks 2–8+",
    Icon: Shapes,
    description: "This is the craft phase. We build in useful increments, with a live environment so the work is visible early and the best decisions can happen in context.",
    deliverables: ["Working product increments", "Reusable interface system", "Clean application architecture", "Weekly progress demos"],
    together: "A short, consistent review rhythm keeps feedback timely and decisions light.",
    signal: "The thing is becoming real in small, valuable steps.",
  },
  {
    id: "prove",
    number: "04",
    title: "Prove",
    label: "Earn confidence before launch",
    duration: "Before release",
    Icon: FlaskConical,
    description: "We pressure-test the experience where it counts: real devices, real edge cases, performance, accessibility, security, and the small details that separate a demo from a dependable product.",
    deliverables: ["Quality & device checks", "Performance tuning", "Security review", "Release readiness checklist"],
    together: "You see exactly what is ready, what changed, and what needs a final decision.",
    signal: "Confident, not merely complete.",
  },
  {
    id: "launch",
    number: "05",
    title: "Launch",
    label: "Release, learn, keep moving",
    duration: "Release + onward",
    Icon: Rocket,
    description: "We make the handover calm and deliberate, then stay close enough to learn from the first real usage. Launch is where the next useful chapter begins.",
    deliverables: ["Production release", "Handover & documentation", "Monitoring baseline", "A measured next-step plan"],
    together: "A practical handover, with support calibrated to what your product needs next.",
    signal: "Live, supported, and ready to learn.",
  },
];

export default function ProcessTimeline() {
  const [activeId, setActiveId] = useState<PhaseId>("listen");
  const activeIndex = phases.findIndex((phase) => phase.id === activeId);
  const active = phases[activeIndex];
  const next = phases[(activeIndex + 1) % phases.length];
  const ActiveIcon = active.Icon;

  return (
    <section id="process" className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#d7e4ff] py-20 sm:py-28">
      <div className="absolute left-0 top-0 h-full w-3 bg-[#17232d]" aria-hidden="true" />
      <div className="absolute -right-28 bottom-10 h-80 w-80 rounded-full border border-[#17232d]/15" aria-hidden="true" />
      <div className="absolute right-12 top-16 h-40 w-40 rounded-full border border-dashed border-[#17232d]/20" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        <header className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#17232d]/20 bg-[#fffdf8] px-3 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#56616a]">
              <ClipboardList className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> Project control room
            </p>
            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[.94] tracking-[-.07em] text-[#17232d] sm:text-5xl lg:text-6xl">
              Our development <em className="font-editorial-serif font-normal text-[#ed542d]">process.</em>
            </h2>
          </div>
          <p className="border-l-2 border-[#ed542d] pl-5 text-sm leading-relaxed text-[#40505a] sm:text-base">
            Every project has its own terrain. Our job is to make the route clear, the work visible, and the next decision easy to understand.
          </p>
        </header>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#17232d] bg-[#fffdf8] shadow-[8px_8px_0_#17232d]">
          <div className="border-b border-[#17232d] bg-[#17232d] px-5 py-5 sm:px-8">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <p className="font-editorial-serif text-2xl text-[#fffdf8]">A deliberate rhythm, from first question to the real world.</p>
              <div className="flex items-center gap-2 text-xs font-bold text-[#aeb9c2]"><UsersRound className="h-4 w-4 text-[#ffbd5f]" aria-hidden="true" /> You&apos;re in the loop throughout.</div>
            </div>
          </div>

          <div className="grid lg:grid-cols-[.72fr_1.28fr]">
            <nav className="border-b border-[#17232d] bg-[#f3efe6] p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-7" aria-label="Development process phases" role="tablist">
              <p className="mb-5 px-3 font-code-mono text-[10px] font-black uppercase tracking-[.17em] text-[#56616a]">Follow the signal</p>
              <div className="relative space-y-1.5 before:absolute before:bottom-5 before:left-[1.92rem] before:top-5 before:border-l before:border-dashed before:border-[#17232d]/25">
                {phases.map((phase) => {
                  const Icon = phase.Icon;
                  const selected = phase.id === activeId;
                  return (
                    <button
                      key={phase.id}
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveId(phase.id)}
                      className={`relative flex w-full items-center gap-3 rounded-2xl border p-3 text-left transition-all ${
                        selected ? "border-[#17232d] bg-[#fffdf8] text-[#17232d] shadow-[3px_3px_0_#ed542d]" : "border-transparent text-[#56616a] hover:border-[#17232d]/15 hover:bg-white/60"
                      }`}
                    >
                      <span className={`relative z-10 grid h-9 w-9 place-items-center rounded-full border ${selected ? "border-[#17232d] bg-[#ffbd5f]" : "border-[#17232d]/15 bg-[#f3efe6]"}`}><Icon className="h-4 w-4" aria-hidden="true" /></span>
                      <span className="flex-1"><span className="block font-code-mono text-[9px] font-black tracking-[.14em] text-[#ed542d]">{phase.number}</span><span className="mt-0.5 block text-sm font-bold">{phase.title}</span></span>
                      {selected && <ArrowRight className="h-4 w-4" aria-hidden="true" />}
                    </button>
                  );
                })}
              </div>
            </nav>

            <article className="relative p-6 sm:p-8 lg:p-10">
              <div className="absolute right-7 top-7 font-editorial-serif text-8xl leading-none text-[#17232d]/[.045] sm:text-9xl" aria-hidden="true">{active.number}</div>
              <div className="relative">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="font-code-mono text-[10px] font-black uppercase tracking-[.17em] text-[#ed542d]">Phase {active.number} / {active.duration}</p>
                    <h3 className="mt-3 text-3xl font-black tracking-[-.055em] text-[#17232d] sm:text-4xl">{active.label}</h3>
                  </div>
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#17232d] bg-[#d7e4ff] shadow-[3px_3px_0_#17232d]"><ActiveIcon className="h-5 w-5" aria-hidden="true" /></span>
                </div>

                <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#56616a] sm:text-base">{active.description}</p>

                <div className="mt-8 grid gap-5 md:grid-cols-[1.1fr_.9fr]">
                  <div className="rounded-2xl border border-[#17232d]/20 bg-[#f3efe6] p-5">
                    <p className="font-code-mono text-[10px] font-black uppercase tracking-[.16em] text-[#56616a]">What leaves this phase</p>
                    <div className="mt-5 grid gap-2 sm:grid-cols-2">
                      {active.deliverables.map((deliverable) => <div key={deliverable} className="flex items-start gap-2 rounded-xl bg-[#fffdf8] p-3 text-xs font-bold leading-snug text-[#40505a]"><Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#ed542d]" aria-hidden="true" />{deliverable}</div>)}
                    </div>
                  </div>
                  <div className="flex flex-col justify-between rounded-2xl border border-[#17232d] bg-[#ffbd5f] p-5 shadow-[4px_4px_0_#17232d]">
                    <div>
                      <p className="font-code-mono text-[10px] font-black uppercase tracking-[.16em] text-[#56616a]">How we work together</p>
                      <p className="mt-4 text-sm font-semibold leading-relaxed text-[#17232d]">{active.together}</p>
                    </div>
                    <p className="mt-7 font-editorial-serif text-2xl leading-tight text-[#17232d]">{active.signal}</p>
                  </div>
                </div>

                <button onClick={() => setActiveId(next.id)} className="mt-7 inline-flex items-center gap-2 text-sm font-black text-[#17232d] underline decoration-[#ed542d] decoration-2 underline-offset-4">
                  See phase {next.number}: {next.title} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </article>
          </div>

          <div className="flex flex-col gap-3 border-t border-[#17232d] bg-[#fffdf8] px-6 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="text-sm font-bold text-[#40505a]">A clear process doesn&apos;t make projects rigid. It makes good decisions easier.</p>
            <p className="font-code-mono text-[10px] font-black uppercase tracking-[.15em] text-[#ed542d]">Five signals. One shared direction.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
