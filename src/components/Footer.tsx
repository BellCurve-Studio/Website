"use client";

import { ArrowRight, ArrowUp, Mail, MapPin, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface FooterProps {
  onOpenAudit?: () => void;
}

const navigation = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/#services" },
  { label: "How We Work", href: "/#how-we-work" },
  { label: "About BellCurve", href: "/#about" },
  { label: "Contact Us", href: "/#contact" },
];

export default function Footer({ onOpenAudit }: FooterProps) {
  const handleAuditClick = (e: React.MouseEvent) => {
    if (onOpenAudit) {
      e.preventDefault();
      onOpenAudit();
    }
  };

  return (
    <footer className="footer-studio relative overflow-hidden px-4 pb-6 pt-12 sm:px-7 sm:pt-16 bg-[#d7e4ff] text-[#17232d] min-h-screen lg:h-screen flex flex-col justify-between">
      <div className="footer-orbit footer-orbit-one" aria-hidden="true" />
      <div className="footer-orbit footer-orbit-two" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl w-full my-auto space-y-6">
        {/* Footer Conversion CTA Banner */}
        <section className="footer-cta grid overflow-hidden rounded-3xl border-2 border-[#17232d] bg-[#ffbd5f] shadow-[8px_8px_0_#17232d] lg:grid-cols-[1.25fr_.75fr]">
          <div className="p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <p className="mb-2 font-code-mono text-[9px] font-black uppercase tracking-[0.2em] text-[#ed542d] flex items-center gap-1.5">
                <Sparkles className="h-3 w-3 text-[#ed542d]" /> NOT SURE WHERE TO START?
              </p>
              <h2 className="max-w-2xl text-3xl font-black leading-[.95] tracking-[-0.065em] text-[#17232d] sm:text-4xl lg:text-5xl">
                Start with the problem. <em className="font-editorial-serif font-normal text-[#ed542d] underline decoration-[#17232d] decoration-wavy decoration-2">We&apos;ll take it from there.</em>
              </h2>
              <p className="mt-3 max-w-xl text-xs sm:text-sm leading-relaxed text-[#40505a] font-medium">
                Tell us what&apos;s getting in the way. We&apos;ll look at the system behind it, identify what matters, and show you what we&apos;d fix first.
              </p>
            </div>

            <div className="mt-6">
              <Link
                href="/#contact"
                onClick={handleAuditClick}
                className="footer-cta-button inline-flex items-center gap-2.5 rounded-full bg-[#17232d] px-6 py-3 text-xs font-black uppercase tracking-[.14em] text-[#fffdf8] shadow-[3.5px_3.5px_0_#ed542d] transition-all hover:bg-[#ed542d] hover:shadow-[4px_4px_0_#17232d] hover:-translate-y-0.5"
              >
                <span>Request Free Audit</span>
                <ArrowRight className="h-3.5 w-3.5 text-[#ffbd5f]" aria-hidden="true" />
              </Link>
            </div>
          </div>

          {/* Right Card with Editorial Ethos */}
          <div className="footer-cta-aside flex flex-col justify-between border-t-2 border-[#17232d] p-6 sm:p-8 lg:border-l-2 lg:border-t-0 bg-[#fffdf8] relative overflow-hidden">
            <div className="space-y-3">
              <span className="font-code-mono text-[9px] font-black uppercase tracking-wider text-[#ed542d] bg-[#ed542d]/10 px-2.5 py-1 rounded border border-[#ed542d]/25 inline-block">
                BUSINESS SYSTEMS • ENGINEERING
              </span>
              <p className="max-w-xs font-editorial-serif text-2xl leading-tight text-[#17232d] sm:text-3xl font-normal">
                Software should fit the business. Not the other way around.
              </p>
            </div>
            <p className="font-code-mono text-[10px] font-bold text-[#56616a] pt-4">
              PRODUCT • SYSTEMS • ENGINEERING
            </p>
          </div>
        </section>

        {/* Footer Navigation & Details */}
        <div className="grid gap-6 py-8 sm:grid-cols-2 lg:grid-cols-[1.35fr_.65fr_.75fr_.9fr] lg:gap-8 border-b-2 border-[#17232d]/15">
          <div className="space-y-3">
            <Link href="/" className="inline-flex items-center gap-3.5">
              <div className="relative h-14 w-14 shrink-0">
                <Image
                  src="/logo_main.png"
                  alt="BellCurve Studio Logo Mark"
                  width={160}
                  height={160}
                  className="h-full w-full object-contain"
                />
              </div>
              <Image
                src="/logo_text.png"
                alt="BellCurve Studio"
                width={260}
                height={65}
                className="h-10 sm:h-11 w-auto object-contain"
              />
            </Link>

            <p className="max-w-sm text-xs leading-relaxed text-[#56616a] font-medium">
              We design and build the systems businesses rely on — from customer-facing products to the workflows behind them.
            </p>

            <div className="pt-1">
              <span className="font-code-mono text-[9px] font-black uppercase tracking-wider text-[#17232d] bg-[#17232d]/5 px-2.5 py-1 rounded-lg border border-[#17232d]/15 inline-block">
                ✓ PROBLEM-FIRST • ENGINEERING-LED
              </span>
            </div>
          </div>

          <nav aria-label="Footer navigation">
            <p className="footer-label font-code-mono text-[10px] font-black uppercase tracking-wider text-[#ed542d]">Sitemap</p>
            <ul className="mt-2.5 space-y-1.5">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    className="footer-link text-xs font-bold text-[#17232d] hover:text-[#ed542d] transition-colors"
                    href={item.href}
                    onClick={(e) => {
                      if (item.href === "/audit") {
                        handleAuditClick(e);
                      } else if (item.href.startsWith("/#") && window.location.pathname === "/") {
                        const targetId = item.href.replace("/#", "");
                        const element = document.getElementById(targetId);
                        if (element) {
                          e.preventDefault();
                          element.scrollIntoView({ behavior: "smooth" });
                          window.history.pushState(null, "", `#${targetId}`);
                        }
                      } else if (item.href === "/" && window.location.pathname === "/") {
                        e.preventDefault();
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      }
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="footer-label font-code-mono text-[10px] font-black uppercase tracking-wider text-[#ed542d]">START HERE</p>
            <p className="mt-2 text-xs leading-relaxed text-[#56616a] font-medium">
              Not sure what needs changing? Start with a conversation about what&apos;s not working.
            </p>
            <Link
              href="/#contact"
              onClick={handleAuditClick}
              className="footer-link mt-3 inline-flex items-center gap-1.5 text-xs font-black text-[#ed542d] hover:underline"
            >
              <span>Start with a Free Audit</span>
              <ArrowRight className="h-3 w-3" aria-hidden="true" />
            </Link>
          </div>

          <address className="not-italic">
            <p className="footer-label font-code-mono text-[10px] font-black uppercase tracking-wider text-[#ed542d]">GET IN TOUCH</p>
            <div className="mt-2.5 space-y-2.5 text-xs text-[#56616a]">
              <a
                href="mailto:contact@bellcurvestudio.com"
                className="footer-contact font-bold text-[#17232d] hover:text-[#ed542d] flex items-center gap-2 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" />
                contact@bellcurvestudio.com
              </a>
            </div>
          </address>
        </div>

        <div className="flex flex-col gap-2 py-2 text-xs font-medium text-[#56616a] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BellCurve Studio. All rights reserved.</p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="footer-link inline-flex w-fit items-center gap-1.5 text-xs font-bold text-[#17232d] hover:text-[#ed542d] transition-colors"
          >
            Back to top <ArrowUp className="h-3 w-3 text-[#ed542d]" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
