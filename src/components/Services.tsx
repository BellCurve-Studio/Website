"use client";

import { ArrowRight, ArrowUpRight, Bot, Braces, Check, ChevronRight, Globe2, RefreshCw, Wrench } from "lucide-react";
import { useState } from "react";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

type PracticeId = "products" | "revamps" | "operations" | "systems";

const practices: Array<{
  id: PracticeId;
  number: string;
  label: string;
  title: string;
  shortTitle: string;
  description: string;
  question: string;
  accent: string;
  softAccent: string;
  Icon: typeof Globe2;
  outcomes: string[];
  buildingBlocks: string[];
  stack: string[];
}> = [
  {
    id: "products",
    number: "01",
    label: "Digital products",
    title: "Products people come back to.",
    shortTitle: "Digital Products",
    description: "From an ambitious first release to a mature platform, we shape web products that are clear, fast, and ready to grow with their users.",
    question: "Need to turn a good idea into a useful, working product?",
    accent: "#ffbd5f",
    softAccent: "#fff3d7",
    Icon: Globe2,
    outcomes: ["A sharper first release", "A platform that earns repeat use", "A foundation that can scale"],
    buildingBlocks: ["SaaS platforms", "Client & member portals", "E-commerce experiences", "Launch-ready marketing sites"],
    stack: ["Next.js", "React", "TypeScript", "PostgreSQL"],
  },
  {
    id: "revamps",
    number: "02",
    label: "Modernization",
    title: "Bring the good parts forward.",
    shortTitle: "Modernization",
    description: "We preserve the equity in what already works, then remove the slow, brittle, confusing bits keeping your digital presence from doing its job.",
    question: "Have a site or system that feels older than the business it represents?",
    accent: "#d7e4ff",
    softAccent: "#edf4ff",
    Icon: RefreshCw,
    outcomes: ["A faster customer journey", "A modern, flexible interface", "A system your team can maintain"],
    buildingBlocks: ["Website revamps", "Legacy migrations", "Performance recovery", "UI systems & design refreshes"],
    stack: ["Core Web Vitals", "SEO", "PWA", "Design systems"],
  },
  {
    id: "operations",
    number: "03",
    label: "Team operations",
    title: "Make the work flow better.",
    shortTitle: "Team Operations",
    description: "We build the quiet systems behind a capable team: tools that surface the right information, remove repeat work, and make momentum easier.",
    question: "Is your team compensating for a system that should be helping them?",
    accent: "#cbe9da",
    softAccent: "#edf8f2",
    Icon: Wrench,
    outcomes: ["Less manual chasing", "Better decisions with live context", "A calmer operational rhythm"],
    buildingBlocks: ["Internal dashboards", "Custom CRM workflows", "Process automation", "Role-based admin tools"],
    stack: ["Automations", "RBAC", "APIs", "Analytics"],
  },
  {
    id: "systems",
    number: "04",
    label: "Custom systems & AI",
    title: "Create leverage where it counts.",
    shortTitle: "Custom Systems & AI",
    description: "When the off-the-shelf route runs out, we engineer focused software, connected services, and AI workflows around the way your business actually works.",
    question: "Need software that fits the way your business thinks—not the other way around?",
    accent: "#e7d7ff",
    softAccent: "#f5edff",
    Icon: Bot,
    outcomes: ["A useful answer to a specific problem", "Connected data and services", "Automation with human judgment intact"],
    buildingBlocks: ["AI-assisted workflows", "Integrations & services", "Industry-specific software", "Scheduling & marketplace tools"],
    stack: ["Python", "LLM APIs", "Docker", "Cloud infrastructure"],
  },
];

export default function Services({ onSelectService }: ServicesProps) {
  const [activeId, setActiveId] = useState<PracticeId>("products");
  const active = practices.find((practice) => practice.id === activeId)!;
  const ActiveIcon = active.Icon;

  return (
    <section id="services" className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#e7f0eb] py-20 sm:py-28">
      <div className="absolute inset-x-0 top-0 h-3 bg-[#17232d]" aria-hidden="true" />
      <div className="absolute -left-36 top-40 h-80 w-80 rounded-full border border-[#17232d]/15" aria-hidden="true" />
      <div className="absolute right-12 top-20 font-editorial-serif text-[15rem] leading-none text-[#17232d]/[.035]" aria-hidden="true">B</div>

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        <header className="grid gap-8 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#17232d]/20 bg-[#fffdf8] px-3 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#56616a]">
              <Braces className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> The BellCurve practice
            </p>
            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[.94] tracking-[-.07em] text-[#17232d] sm:text-5xl lg:text-6xl">
              What we build &amp; <em className="font-editorial-serif font-normal text-[#ed542d]">modernize.</em>
            </h2>
          </div>
          <p className="border-l-2 border-[#ed542d] pl-5 text-sm leading-relaxed text-[#56616a] sm:text-base">
            Four ways we turn meaningful business pressure into digital momentum. Pick the problem that feels most familiar.
          </p>
        </header>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#17232d] bg-[#fffdf8] shadow-[8px_8px_0_#17232d]">
          <div className="grid lg:grid-cols-[.7fr_1.3fr]">
            <nav className="border-b border-[#17232d] bg-[#f3efe6] p-4 sm:p-6 lg:border-b-0 lg:border-r lg:p-7" aria-label="BellCurve practice areas" role="tablist">
              <p className="mb-4 px-3 font-code-mono text-[10px] font-black uppercase tracking-[.17em] text-[#56616a]">Start with the pressure</p>
              {practices.map((practice) => {
                const Icon = practice.Icon;
                const selected = practice.id === activeId;
                return (
                  <button
                    key={practice.id}
                    role="tab"
                    aria-selected={selected}
                    onClick={() => setActiveId(practice.id)}
                    className={`group flex w-full items-center gap-3 rounded-2xl px-3 py-3.5 text-left transition-all sm:px-4 ${
                      selected ? "bg-[#17232d] text-[#fffdf8] shadow-[3px_3px_0_#ed542d]" : "text-[#40505a] hover:bg-white"
                    }`}
                  >
                    <span className={`font-code-mono text-[10px] font-black ${selected ? "text-[#ffbd5f]" : "text-[#ed542d]"}`}>{practice.number}</span>
                    <span className={`grid h-8 w-8 place-items-center rounded-lg border ${selected ? "border-white/15 bg-white/10" : "border-[#17232d]/15 bg-[#fffdf8]"}`}><Icon className="h-4 w-4" aria-hidden="true" /></span>
                    <span className="flex-1 text-sm font-bold">{practice.label}</span>
                    <ChevronRight className={`h-4 w-4 transition-transform ${selected ? "translate-x-1" : "opacity-45 group-hover:translate-x-1"}`} aria-hidden="true" />
                  </button>
                );
              })}
              <div className="mt-5 border-t border-[#17232d]/15 px-3 pt-5 text-xs leading-relaxed text-[#56616a]">No menu of mystery services. Just the work that moves a business forward.</div>
            </nav>

            <div className="p-5 sm:p-8 lg:p-10" style={{ backgroundColor: active.softAccent }}>
              <div className="flex items-start justify-between gap-5">
                <div>
                  <p className="font-code-mono text-[10px] font-black uppercase tracking-[.17em] text-[#56616a]">{active.number} / {active.label}</p>
                  <h3 className="mt-4 max-w-xl text-3xl font-black leading-[.98] tracking-[-.055em] text-[#17232d] sm:text-4xl">{active.title}</h3>
                </div>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl border border-[#17232d] shadow-[3px_3px_0_#17232d]" style={{ backgroundColor: active.accent }}><ActiveIcon className="h-5 w-5 text-[#17232d]" aria-hidden="true" /></span>
              </div>

              <p className="mt-6 max-w-2xl text-sm leading-relaxed text-[#40505a] sm:text-base">{active.description}</p>

              <div className="mt-8 grid gap-4 md:grid-cols-[.85fr_1.15fr]">
                <div className="rounded-2xl border border-[#17232d]/20 bg-[#fffdf8]/75 p-5">
                  <p className="font-code-mono text-[10px] font-black uppercase tracking-[.16em] text-[#ed542d]">What changes</p>
                  <ul className="mt-5 space-y-3">
                    {active.outcomes.map((outcome) => <li key={outcome} className="flex items-start gap-2.5 text-sm font-semibold text-[#40505a]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ed542d]" aria-hidden="true" />{outcome}</li>)}
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#17232d] bg-[#17232d] p-5 text-[#fffdf8] shadow-[4px_4px_0_#17232d]">
                  <p className="font-code-mono text-[10px] font-black uppercase tracking-[.16em] text-[#ffbd5f]">What we might make</p>
                  <div className="mt-5 grid grid-cols-2 gap-2">
                    {active.buildingBlocks.map((item) => <div key={item} className="rounded-xl border border-white/10 bg-white/5 p-3 text-xs font-bold leading-snug text-[#e6eaec]">{item}</div>)}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-5 border-t border-[#17232d]/20 pt-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="font-code-mono text-[10px] font-black uppercase tracking-[.15em] text-[#56616a]">Common building blocks</p>
                  <div className="mt-2 flex flex-wrap gap-1.5">{active.stack.map((item) => <span key={item} className="rounded-full border border-[#17232d]/15 bg-[#fffdf8]/70 px-2.5 py-1 font-code-mono text-[9px] font-bold text-[#56616a]">{item}</span>)}</div>
                </div>
                <button onClick={() => onSelectService(active.shortTitle)} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ed542d] px-4 py-2.5 text-xs font-bold text-white transition-transform hover:-translate-y-0.5">
                  {active.question} <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3 border-t border-[#17232d] bg-[#ffbd5f] px-5 py-4 text-[#17232d] sm:flex-row sm:items-center sm:justify-between sm:px-8">
            <p className="font-editorial-serif text-xl">Not sure which lane fits? That&apos;s a useful place to start.</p>
            <button onClick={() => onSelectService("Discovery & Product Strategy")} className="inline-flex items-center gap-2 text-sm font-black underline decoration-[#ed542d] decoration-2 underline-offset-4">Bring us the messy brief <ArrowRight className="h-4 w-4" aria-hidden="true" /></button>
          </div>
        </div>
      </div>
    </section>
  );
}
