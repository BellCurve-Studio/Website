"use client";

import { ArrowRight, ArrowUp, Mail, MapPin } from "lucide-react";

interface FooterProps {
  onOpenConsultation: () => void;
}

const navigation = [
  { label: "What we build", href: "#services" },
  { label: "Our method", href: "#process" },
  { label: "Revamp simulator", href: "#revamp-simulator" },
  { label: "Why BellCurve", href: "#why-us" },
];

export default function Footer({ onOpenConsultation }: FooterProps) {
  return (
    <footer className="footer-studio relative overflow-hidden px-4 pb-5 pt-16 sm:px-7 sm:pt-24">
      <div className="footer-orbit footer-orbit-one" aria-hidden="true" />
      <div className="footer-orbit footer-orbit-two" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl">
        <section className="footer-cta grid overflow-hidden rounded-[2rem] border border-[#17232d] bg-[#ffbd5f] shadow-[7px_7px_0_#17232d] lg:grid-cols-[1.25fr_.75fr]">
          <div className="p-7 sm:p-10 lg:p-12">
            <p className="mb-5 font-code-mono text-[10px] font-black uppercase tracking-[0.2em] text-[#56616a]">
              Have a worthwhile problem?
            </p>
            <h2 className="max-w-2xl text-4xl font-black leading-[.95] tracking-[-0.065em] text-[#17232d] sm:text-5xl lg:text-6xl">
              Let&apos;s make it <em className="font-editorial-serif font-normal">real.</em>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-relaxed text-[#40505a] sm:text-base">
              Bring us the knotty brief, the aging product, or the ambitious next move. We&apos;ll help you find the clearest path to a useful thing.
            </p>
            <button
              onClick={onOpenConsultation}
              className="footer-cta-button mt-8 inline-flex items-center gap-3 rounded-full bg-[#17232d] px-5 py-3 text-sm font-bold text-[#fffdf8]"
            >
              Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="footer-cta-aside flex min-h-52 flex-col justify-between border-t border-[#17232d] p-7 sm:p-10 lg:min-h-full lg:border-l lg:border-t-0 lg:p-12">
            <span className="grid h-11 w-11 place-items-center rounded-full border border-[#17232d] bg-[#d7e4ff] font-editorial-serif text-2xl text-[#ed542d]">B</span>
            <p className="max-w-xs font-editorial-serif text-2xl leading-tight text-[#17232d] sm:text-3xl">
              Thoughtful software, built for momentum.
            </p>
          </div>
        </section>

        <div className="grid gap-10 py-16 sm:grid-cols-2 sm:py-20 lg:grid-cols-[1.35fr_.65fr_.75fr_.9fr] lg:gap-8">
          <div>
            <a href="#" className="inline-flex items-center gap-2.5 text-lg font-black tracking-[-0.06em] text-[#17232d]">
              <span className="brand-mark">B</span>
              <span>BELLCURVE<span className="font-normal text-[#ed542d]">®</span></span>
            </a>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-[#56616a]">
              An independent software studio for teams building their next useful, durable digital product.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="footer-label">Explore</p>
            <ul className="mt-5 space-y-3">
              {navigation.map((item) => (
                <li key={item.label}><a className="footer-link" href={item.href}>{item.label}</a></li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="footer-label">Start here</p>
            <p className="mt-5 text-sm leading-relaxed text-[#56616a]">A clear brief is helpful. Curiosity and a good problem are enough.</p>
            <button onClick={onOpenConsultation} className="footer-link mt-4 inline-flex items-center gap-2">
              Get in touch <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
          </div>

          <address className="not-italic">
            <p className="footer-label">Find us</p>
            <div className="mt-5 space-y-4 text-sm text-[#56616a]">
              <a href="mailto:contact@bellcurvestudio.com" className="footer-contact"><Mail className="h-4 w-4" aria-hidden="true" />contact@bellcurvestudio.com</a>
              <p className="footer-contact"><MapPin className="h-4 w-4" aria-hidden="true" />Working remotely, worldwide</p>
            </div>
          </address>
        </div>

        <div className="flex flex-col gap-4 border-t border-[#17232d]/20 py-6 text-xs font-medium text-[#56616a] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} BellCurve Studio. All rights reserved.</p>
          <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="footer-link inline-flex w-fit items-center gap-2">
            Back to top <ArrowUp className="h-3.5 w-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </footer>
  );
}
