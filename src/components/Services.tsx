"use client";

import { ArrowRight, ArrowUpRight, Check, Layers, Sparkles } from "lucide-react";

interface ServicesProps {
  onOpenAudit: () => void;
  onSelectServiceTier: (tierName: string) => void;
}

export default function Services({ onOpenAudit, onSelectServiceTier }: ServicesProps) {
  const tiers = [
    {
      name: "Free Audit",
      badge: "Step 01 • No Obligation",
      isFree: true,
      price: "Free",
      included: "Website, enquiry flow, and internal workflow diagnosis",
      deliverables: ["Full digital presence review", "Enquiry flow assessment", "Written report (3-5 days)"],
      accent: "#ffbd5f",
      cta: "Request Audit",
    },
    {
      name: "Digital Presence",
      badge: "Tier 01",
      isFree: false,
      price: "₹50,000",
      included: "Website + lead capture system",
      deliverables: ["Custom editorial website", "Integrated lead routing", "SEO & speed optimized"],
      accent: "#d7e4ff",
      cta: "Select Tier",
    },
    {
      name: "Core Infrastructure",
      badge: "Tier 02",
      isFree: false,
      price: "₹1,00,000",
      included: "Website + CRM + automation + analytics",
      deliverables: ["Full Digital Presence", "Custom CRM & pipeline", "Automated notifications"],
      accent: "#cbe9da",
      cta: "Select Tier",
    },
    {
      name: "Custom Operations",
      badge: "Tier 03",
      isFree: false,
      price: "₹2,00,000",
      included: "Internal dashboards, workflows, integrations",
      deliverables: ["Admin operating tools", "Team dashboards", "Third-party integrations"],
      accent: "#e7d7ff",
      cta: "Select Tier",
    },
    {
      name: "BellCurve Systems",
      badge: "Continuous",
      isFree: false,
      price: "₹10,000/mo",
      included: "Hosting, maintenance, support & updates",
      deliverables: ["Managed infrastructure", "Security updates", "Continuous support"],
      accent: "#ffd7c5",
      cta: "Select Tier",
    },
  ];

  return (
    <section id="services" className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#f4efe5] min-h-screen lg:h-screen flex flex-col justify-center py-10">
      <div className="absolute inset-x-0 top-0 h-3 bg-[#17232d]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8 w-full my-auto">
        <header className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end scroll-reveal">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#17232d]/20 bg-[#fffdf8] px-3.5 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#56616a]">
              <Layers className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> Service Tiers &amp; Pricing
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-[.96] tracking-[-.07em] text-[#17232d] sm:text-4xl lg:text-5xl">
              Start with a free audit. <em className="font-editorial-serif font-normal text-[#ed542d]">Build what you need.</em>
            </h2>
          </div>
          <div className="border-l-2 border-[#ed542d] pl-4">
            <p className="text-xs sm:text-sm leading-relaxed text-[#40505a]">
              Every engagement begins with a free diagnosis. From there, you decide how to move forward.
            </p>
          </div>
        </header>

        {/* 5 Tier Cards Grid */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {tiers.map((tier, idx) => (
            <div
              key={tier.name}
              className={`scroll-reveal delay-${(idx % 3) * 100} relative flex flex-col justify-between rounded-2xl border border-[#17232d] ${
                tier.isFree ? "bg-[#17232d] text-[#fffdf8] shadow-[6px_6px_0_#ffbd5f]" : "bg-[#fffdf8] text-[#17232d] shadow-[4px_4px_0_#17232d]"
              } p-4 transition-all duration-200 hover:-translate-y-1 ${!tier.isFree && "hover:shadow-[6px_6px_0_#ed542d]"}`}
            >
              <div>
                <div className="flex items-center justify-between">
                  <span className={`font-code-mono text-[9px] font-black uppercase tracking-wider ${tier.isFree ? "text-[#ffbd5f]" : "text-[#ed542d]"}`}>
                    {tier.badge}
                  </span>
                  <span className="h-2.5 w-2.5 rounded-full border border-[#17232d]" style={{ backgroundColor: tier.accent }} />
                </div>

                <h3 className="mt-3 text-lg font-black tracking-tight">{tier.name}</h3>

                <div className="mt-2 flex items-baseline gap-1 border-b border-[#17232d]/15 pb-3">
                  <span className={`text-2xl font-black tracking-tight ${tier.isFree ? "text-[#ffbd5f]" : "text-[#17232d]"}`}>
                    {tier.price}
                  </span>
                </div>

                <div className="mt-3">
                  <p className="text-[11px] font-semibold leading-tight line-clamp-2">
                    {tier.included}
                  </p>
                </div>

                <ul className="mt-3 space-y-1.5">
                  {tier.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-1.5 text-[11px] font-medium leading-tight">
                      <Check className={`mt-0.5 h-3 w-3 shrink-0 ${tier.isFree ? "text-[#ffbd5f]" : "text-[#ed542d]"}`} />
                      <span className="line-clamp-1">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-5 border-t border-[#17232d]/15 pt-3">
                <button
                  onClick={() => {
                    if (tier.isFree) {
                      onOpenAudit();
                    } else {
                      onSelectServiceTier(tier.name);
                    }
                  }}
                  className={`w-full inline-flex items-center justify-center gap-1.5 rounded-full py-2.5 px-3 text-xs font-bold transition-all ${
                    tier.isFree
                      ? "bg-[#ed542d] text-white hover:bg-[#ffbd5f] hover:text-[#17232d]"
                      : "bg-[#17232d] text-[#fffdf8] hover:bg-[#ed542d] hover:text-white"
                  }`}
                >
                  <span>{tier.cta}</span>
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Pricing Guidance Note */}
        <div className="mt-6 scroll-reveal flex items-center justify-between rounded-xl border border-[#17232d]/20 bg-[#fffdf8] px-5 py-3 text-xs font-medium text-[#56616a]">
          <p className="flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-[#ed542d] shrink-0" />
            <span><strong>Note on Pricing:</strong> Figures represent starting-from ranges. Every project begins with a free audit before any proposal.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
