"use client";

import { ArrowRight, ArrowUp, Mail, MapPin } from "lucide-react";
import Link from "next/link";

interface FooterProps {
  onOpenAudit?: () => void;
}

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services & Pricing", href: "/#services" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "About BellCurve", href: "/#about" },
  { label: "Case Studies", href: "/#work" },
  { label: "Request Free Audit", href: "/audit" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Footer({ onOpenAudit }: FooterProps) {
  return (
    <footer className="footer-studio relative overflow-hidden px-4 pb-6 pt-12 sm:px-7 sm:pt-16 bg-[#d7e4ff] text-[#17232d] min-h-screen lg:h-screen flex flex-col justify-between">
      <div className="footer-orbit footer-orbit-one" aria-hidden="true" />
      <div className="footer-orbit footer-orbit-two" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl w-full my-auto">
        {/* Footer Conversion CTA Banner */}
        <section className="footer-cta grid overflow-hidden rounded-2xl border border-[#17232d] bg-[#ffbd5f] shadow-[6px_6px_0_#17232d] lg:grid-cols-[1.25fr_.75fr]">
          <div className="p-6 sm:p-8">
            <p className="mb-2 font-code-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#ed542d]">
              Not sure what&apos;s actually broken?
            </p>
            <h2 className="max-w-2xl text-3xl font-black leading-[.95] tracking-[-0.065em] text-[#17232d] sm:text-4xl lg:text-5xl">
              Let us <em className="font-editorial-serif font-normal text-[#ed542d]">look.</em>
            </h2>
            <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-[#40505a] font-medium">
              We&apos;ll audit your current website, enquiry flow, and internal workflows — free, no obligation. Handing you a clear, written diagnosis.
            </p>
            <Link
              href="/audit"
              className="footer-cta-button mt-5 inline-flex items-center gap-2.5 rounded-full bg-[#17232d] px-6 py-3 text-xs font-bold uppercase tracking-[.14em] text-[#fffdf8] shadow-[3px_3px_0_#ed542d] transition-all hover:bg-[#ed542d]"
            >
              <span>Request Free Audit</span>
              <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Link>
          </div>

          <div className="footer-cta-aside flex flex-col justify-between border-t border-[#17232d] p-6 sm:p-8 lg:border-l lg:border-t-0 bg-[#fffdf8]">
            <div className="flex items-center gap-2">
              <span className="grid h-8 w-8 place-items-center rounded-full border border-[#17232d] bg-[#ed542d] font-editorial-serif text-xl text-[#fffdf8]">
                B
              </span>
              <span className="font-code-mono text-[9px] font-black uppercase tracking-[.18em] text-[#17232d]">
                BellCurve Studio
              </span>
            </div>
            <p className="max-w-xs font-editorial-serif text-xl leading-tight text-[#17232d] sm:text-2xl mt-4">
              Business Systems Engineering for Organisations.
            </p>
          </div>
        </section>

        {/* Footer Navigation & Details */}
        <div className="grid gap-6 py-10 sm:grid-cols-2 lg:grid-cols-[1.35fr_.65fr_.75fr_.9fr] lg:gap-8 border-b border-[#17232d]/15">
          <div>
            <Link href="/" className="inline-flex items-center gap-2 text-base font-black tracking-[-0.06em] text-[#17232d]">
              <span className="brand-mark">B</span>
              <span>BELLCURVE STUDIO</span>
            </Link>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-[#56616a] font-medium">
              We help organisations replace fragmented, manual workflows with technology systems that work — starting with a free audit.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="footer-label">Sitemap</p>
            <ul className="mt-2 space-y-1.5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link className="footer-link text-xs font-bold text-[#17232d] hover:text-[#ed542d]" href={item.href}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="footer-label">Primary Conversion</p>
            <p className="mt-2 text-xs leading-relaxed text-[#56616a]">
              A free diagnosis of where you are losing time, leads, or money.
            </p>
            <Link
              href="/audit"
              className="footer-link mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#ed542d] hover:underline"
            >
              <span>Request Free Audit</span>
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>

          <address className="not-italic">
            <p className="footer-label">Get In Touch</p>
            <div className="mt-2 space-y-2 text-xs text-[#56616a]">
              <a href="mailto:contact@bellcurvestudio.com" className="footer-contact font-bold text-[#17232d] hover:text-[#ed542d]">
                <Mail className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" />
                contact@bellcurvestudio.com
              </a>
              <p className="footer-contact font-medium">
                <MapPin className="h-3.5 w-3.5 text-[#17232d]" aria-hidden="true" />
                Remote Engineering Studio
              </p>
            </div>
          </address>
        </div>

        <div className="flex flex-col gap-2 py-4 text-xs font-medium text-[#56616a] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BellCurve Studio. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="footer-link inline-flex w-fit items-center gap-1.5 text-xs font-bold text-[#17232d] hover:text-[#ed542d]"
          >
            Back to top <ArrowUp className="h-3 w-3" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
