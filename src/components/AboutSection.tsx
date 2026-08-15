"use client";

import { Award, Compass, HeartHandshake, Lightbulb, ShieldCheck, Users } from "lucide-react";

export default function AboutSection() {
  const values = [
    {
      title: "Problem Before Product",
      description: "We diagnose what's actually broken before proposing software.",
      icon: Compass,
      accent: "#ffbd5f",
    },
    {
      title: "Build With Purpose",
      description: "If it doesn't save time or capture leads, it doesn't get built.",
      icon: Lightbulb,
      accent: "#d7e4ff",
    },
    {
      title: "Obsess Over the User",
      description: "Systems feel simple and clean for the person using them daily.",
      icon: HeartHandshake,
      accent: "#cbe9da",
    },
    {
      title: "Compound Innovation",
      description: "Every project builds reusable, durable engineering patterns.",
      icon: Award,
      accent: "#e7d7ff",
    },
  ];

  const founders = [
    {
      role: "Product & Business Lead",
      focus: "Product strategy & user diagnosis",
      badge: "Founding Partner",
    },
    {
      role: "Engineering Lead",
      focus: "System architecture & speed",
      badge: "Founding Partner",
    },
    {
      role: "Partnerships & Delivery Lead",
      focus: "Workflow integrations & data migration",
      badge: "Founding Partner",
    },
  ];

  return (
    <section id="about" className="relative overflow-hidden bg-[#e7f0eb] min-h-screen lg:h-screen flex flex-col justify-center py-10">
      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8 w-full my-auto">
        <header className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end scroll-reveal">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#17232d]/20 bg-[#fffdf8] px-3.5 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#56616a]">
              <Users className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> About BellCurve Studio
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-[.94] tracking-[-.07em] text-[#17232d] sm:text-4xl lg:text-5xl">
              Diagnose first, <em className="font-editorial-serif font-normal text-[#ed542d]">build second.</em>
            </h2>
          </div>
          <p className="border-l-2 border-[#ed542d] pl-4 text-xs sm:text-sm leading-relaxed text-[#40505a]">
            An independent software studio built by three engineers who believe technology should serve business goals, not agency ego.
          </p>
        </header>

        {/* Founder Quote */}
        <div className="mt-6 scroll-reveal rounded-2xl border border-[#17232d] bg-[#fffdf8] p-6 shadow-[6px_6px_0_#17232d]">
          <p className="font-code-mono text-[9px] font-black uppercase tracking-[.18em] text-[#ed542d]">
            Our Founding Ethos
          </p>
          <blockquote className="mt-2 font-editorial-serif text-xl sm:text-2xl leading-snug text-[#17232d]">
            “BellCurve Studio was founded by three engineers who kept seeing organisations spend money on software that didn&apos;t fix the real problem. We started BellCurve to diagnose first, and build second.”
          </blockquote>
        </div>

        {/* Core Values 4 Grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((val, idx) => {
            const IconComp = val.icon;
            return (
              <div
                key={val.title}
                className={`scroll-reveal delay-${(idx + 1) * 100} flex flex-col justify-between rounded-2xl border border-[#17232d] bg-[#fffdf8] p-4 shadow-[4px_4px_0_#17232d] transition-all duration-200 hover:-translate-y-1 hover:shadow-[6px_6px_0_#ed542d]`}
              >
                <div>
                  <span
                    className="grid h-8 w-8 place-items-center rounded-xl border border-[#17232d]"
                    style={{ backgroundColor: val.accent }}
                  >
                    <IconComp className="h-4 w-4 text-[#17232d]" />
                  </span>
                  <h4 className="mt-3 text-base font-black tracking-tight text-[#17232d]">
                    {val.title}
                  </h4>
                  <p className="mt-1 text-xs leading-relaxed text-[#56616a]">
                    {val.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Founding Partners Grid */}
        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {founders.map((founder) => (
            <div
              key={founder.role}
              className="scroll-reveal rounded-2xl border border-[#17232d] bg-[#17232d] p-4 text-[#fffdf8] shadow-[4px_4px_0_#ffbd5f]"
            >
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 font-code-mono text-[8px] font-bold text-[#ffbd5f] uppercase tracking-widest">
                {founder.badge}
              </span>
              <h4 className="mt-2 text-base font-black tracking-tight text-[#fffdf8]">
                {founder.role}
              </h4>
              <p className="mt-1 text-xs text-[#d6dce1]">
                {founder.focus}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
