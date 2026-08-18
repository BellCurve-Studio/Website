"use client";

import {
  ArrowUpRight,
  Globe,
  Mail,
  Menu,
  Sparkles,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  onOpenAudit?: () => void;
}

function LinkedInIcon() {
  return (
    <svg className="h-3.5 w-3.5 fill-current text-[#0077b5]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.74a1.64 1.64 0 1 0 0 3.28 1.64 1.64 0 0 0 0-3.28z" />
    </svg>
  );
}

function TwitterIcon() {
  return (
    <svg className="h-3.5 w-3.5 fill-current text-[#1da1f2]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

function GithubIcon() {
  return (
    <svg className="h-3.5 w-3.5 fill-current text-[#17232d]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg className="h-3.5 w-3.5 fill-current text-[#e1306c]" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export default function Navbar({ onOpenAudit }: NavbarProps) {
  const [open, setOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "How We Work", href: "/#how-we-work" },
    { name: "About", href: "/#about" },
    { name: "Work", href: "/#work" },
    { name: "Contact", href: "/#contact" },
  ];

  const socialLinks = [
    { name: "LinkedIn", href: "https://linkedin.com", icon: LinkedInIcon },
    { name: "Twitter / X", href: "https://x.com", icon: TwitterIcon },
    { name: "GitHub", href: "https://github.com/BellCurve-Studio", icon: GithubIcon },
    { name: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  ];

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [open]);

  const handleAuditClick = () => {
    setOpen(false);
    if (onOpenAudit) {
      onOpenAudit();
    } else {
      window.location.href = "/#contact";
    }
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-7 sm:py-5">
      <div className="nav-shell mx-auto max-w-7xl flex items-center justify-between">
        <div className="nav-brand">
          <Link href="/" aria-label="BellCurve Studio home" className="brand-logo">
            <span className="brand-logo-icon" aria-hidden="true">
              <Image
                src="/logo_main.png"
                alt=""
                width={1254}
                height={1254}
                className="brand-logo-mark"
                priority
              />
            </span>
            <Image
              src="/logo_text.png"
              alt="BellCurve Studio"
              width={1826}
              height={460}
              className="brand-logo-text"
              priority
            />
          </Link>
        </div>

        <div className="nav-actions">
          <button onClick={handleAuditClick} className="nav-cta hidden md:inline-flex">
            Get Free Audit <span className="nav-cta-icon"><ArrowUpRight className="h-3.5 w-3.5" /></span>
          </button>
          <button
            onClick={() => setOpen(!open)}
            className="nav-menu transition-transform duration-200 hover:scale-105 active:scale-95"
            aria-label="Toggle navigation"
            aria-expanded={open}
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Backdrop Backdrop Blur Animation */}
      <div
        className={`fixed inset-0 z-50 bg-[#17232d]/40 backdrop-blur-md transition-opacity duration-500 ease-in-out ${
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setOpen(false)}
        aria-hidden="true"
      />

      {/* Smooth Sliding Drawer Overlay Panel */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-full max-w-5xl bg-[#fffdf8] text-[#17232d] shadow-2xl transition-transform duration-500 cubic-bezier(0.16, 1, 0.3, 1) flex flex-col justify-between overflow-y-auto ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Navigation menu"
      >
        {/* Subtle Ambient Background Orbs */}
        <div className="absolute top-12 left-10 w-96 h-96 rounded-full bg-[#ffbd5f]/15 blur-3xl pointer-events-none" aria-hidden="true" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-[#ed542d]/10 blur-3xl pointer-events-none" aria-hidden="true" />

        <div className="relative z-10 p-6 sm:p-10 lg:p-14">
          
          {/* Top Bar Header inside Drawer */}
          <div className="flex items-center justify-between border-b border-[#17232d]/15 pb-6">
            <Link href="/" onClick={() => setOpen(false)} aria-label="BellCurve Studio home" className="brand-logo">
              <span className="brand-logo-icon" aria-hidden="true">
                <Image src="/logo_main.png" alt="" width={1254} height={1254} className="brand-logo-mark" priority />
              </span>
              <Image src="/logo_text.png" alt="" width={1826} height={460} className="brand-logo-text" priority />
            </Link>

            <div className="flex items-center gap-3">
              <button
                onClick={handleAuditClick}
                className="hidden sm:inline-flex items-center gap-2 rounded-full border border-[#ed542d] bg-[#fffdf8] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#ed542d] shadow-[3px_3px_0_#ed542d] transition-all hover:-translate-y-0.5 hover:bg-[#ed542d] hover:text-[#fffdf8]"
              >
                <span>Request Free Audit</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>

              <button
                onClick={() => setOpen(false)}
                className="inline-flex items-center gap-2 rounded-full bg-[#17232d] px-4 py-2 text-xs font-bold text-[#fffdf8] shadow-[3px_3px_0_#ffbd5f] transition-all hover:bg-[#ed542d]"
              >
                <span>Close</span>
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Main Drawer Layout Grid */}
          <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr] lg:gap-14 pt-10">
            
            {/* Left Column: Navigation Links */}
            <nav aria-label="Menu navigation" className="nav-drawer-links flex flex-col gap-2">
              <p className="font-code-mono text-[10px] font-black uppercase tracking-[.2em] text-[#ed542d] mb-4 flex items-center gap-2">
                <Sparkles className="h-3 w-3 text-[#ed542d]" /> Navigation Menu
              </p>
              
              {links.map((link, index) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    setOpen(false);
                    if (link.href.startsWith("/#") && window.location.pathname === "/") {
                      const targetId = link.href.replace("/#", "");
                      const element = document.getElementById(targetId);
                      if (element) {
                        e.preventDefault();
                        element.scrollIntoView({ behavior: "smooth" });
                        window.history.pushState(null, "", `#${targetId}`);
                      }
                    } else if (link.href === "/" && window.location.pathname === "/") {
                      e.preventDefault();
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className="group flex items-center justify-between border-b border-[#17232d]/10 py-3.5 transition-all duration-200 hover:border-[#ed542d] hover:pl-2"
                >
                  <div className="flex items-baseline gap-4">
                    <span className="font-code-mono text-xs font-bold text-[#61707a] group-hover:text-[#ed542d]">
                      0{index + 1}
                    </span>
                    <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-[#17232d] group-hover:text-[#ed542d] transition-colors duration-200">
                      {link.name}
                    </span>
                  </div>
                  <ArrowUpRight className="h-6 w-6 text-[#ed542d] opacity-0 -translate-x-3 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0" />
                </Link>
              ))}
            </nav>

            {/* Right Column: Animated Creative Socials & Studio Info */}
            <div className="flex flex-col justify-between gap-8 rounded-3xl border border-[#17232d]/15 bg-[#f4efe5] p-6 sm:p-8 shadow-[6px_6px_0_#17232d]">
              
              {/* Studio Info */}
              <div>
                <span className="inline-flex items-center gap-2 rounded-full bg-[#17232d] px-3 py-1 text-[9px] font-black uppercase tracking-[.18em] text-[#ffbd5f]">
                  <span className="h-2 w-2 rounded-full bg-[#ed542d] animate-ping" />
                  Engineering Studio
                </span>
                
                <h3 className="mt-4 font-editorial-serif text-3xl sm:text-4xl italic text-[#17232d] leading-none">
                  Business Systems <span className="text-[#ed542d] font-normal italic">Engineering.</span>
                </h3>
                
                <p className="mt-3 text-xs sm:text-sm font-semibold leading-relaxed text-[#40505a]">
                  Replacing manual operational drag with custom automated software architecture.
                </p>
              </div>

              {/* Animated Creative Social Links Suite */}
              <div>
                <p className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#17232d] mb-3 flex items-center gap-1.5">
                  <Globe className="h-3 w-3 text-[#ed542d]" /> Connect & Socials
                </p>
                
                <div className="flex flex-col gap-2.5 w-full">
                  {socialLinks.map((social) => {
                    const IconComp = social.icon;
                    return (
                      <a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between w-full rounded-full border border-[#17232d] bg-[#fffdf8] px-4 py-2.5 text-xs font-bold text-[#17232d] shadow-[3px_3px_0_#17232d] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#17232d] hover:text-[#fffdf8] hover:shadow-[5px_5px_0_#ed542d]"
                      >
                        <div className="flex items-center gap-2.5">
                          <IconComp />
                          <span>{social.name}</span>
                        </div>
                        <ArrowUpRight className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100 group-hover:text-[#ed542d] transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Direct Contact Action Badges */}
              <div className="border-t border-[#17232d]/15 pt-5 flex flex-col gap-2.5">
                <a
                  href="mailto:contact@bellcurvestudio.com"
                  className="inline-flex items-center gap-2.5 text-xs font-bold text-[#17232d] hover:text-[#ed542d] transition-colors"
                >
                  <Mail className="h-4 w-4 text-[#ed542d]" />
                  <span className="underline underline-offset-4 decoration-[#17232d]/30">contact@bellcurvestudio.com</span>
                </a>

                <div className="flex items-center gap-2 font-code-mono text-[10px] font-bold text-[#61707a]">
                  <span className="h-2 w-2 rounded-full bg-[#ed542d]" />
                  <span>Diagnostic First • Systems Second</span>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Footer Bar inside Drawer */}
        <div className="relative z-10 border-t border-[#17232d]/15 bg-[#17232d] px-6 py-4 text-[#fffdf8]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 text-xs font-bold">
            <span className="font-code-mono text-[10px] text-[#ffbd5f] uppercase tracking-wider">
              © {new Date().getFullYear()} BellCurve Studio. All rights reserved.
            </span>
            <span className="text-[#fffdf8]/80">
              High-Impact Engineering for Growth Operations
            </span>
          </div>
        </div>

      </div>
    </header>
  );
}
