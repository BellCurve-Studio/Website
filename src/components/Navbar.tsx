"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

interface NavbarProps {
  onOpenAudit?: () => void;
}

export default function Navbar({ onOpenAudit }: NavbarProps) {
  const [open, setOpen] = useState(false);
  
  const links = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/#services" },
    { name: "How We Work", href: "/#how-we-work" },
    { name: "About", href: "/#about" },
    { name: "Work", href: "/#work" },
    { name: "Free Audit", href: "/audit" },
    { name: "Contact", href: "/#contact" },
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
      window.location.href = "/audit";
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
          <Link href="/audit" className="nav-cta hidden md:inline-flex">
            Get Free Audit <span className="nav-cta-icon"><ArrowUpRight className="h-3.5 w-3.5" /></span>
          </Link>
          <button onClick={() => setOpen(!open)} className="nav-menu" aria-label="Toggle navigation" aria-expanded={open}>
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="nav-drawer" role="dialog" aria-modal="true" aria-label="Navigation menu">
          <div className="nav-drawer-panel">
            <div className="nav-drawer-top">
              <Link href="/" onClick={() => setOpen(false)} aria-label="BellCurve Studio home" className="brand-logo">
                <span className="brand-logo-icon" aria-hidden="true">
                  <Image src="/logo_main.png" alt="" width={1254} height={1254} className="brand-logo-mark" priority />
                </span>
                <Image src="/logo_text.png" alt="" width={1826} height={460} className="brand-logo-text" priority />
              </Link>
              <div className="nav-drawer-actions">
                <Link href="/audit" onClick={() => setOpen(false)} className="nav-drawer-project">Request Free Audit <ArrowUpRight className="h-4 w-4" /></Link>
                <button onClick={() => setOpen(false)} className="nav-drawer-close">Close <X className="h-4 w-4" /></button>
              </div>
            </div>

            <div className="nav-drawer-content">
              <nav aria-label="Menu navigation" className="nav-drawer-links">
                <p>Navigation</p>
                {links.map((link, index) => (
                  <Link onClick={() => setOpen(false)} key={link.name} href={link.href} className="nav-drawer-link">
                    <span>0{index + 1}</span><strong>{link.name}</strong><ArrowUpRight className="nav-drawer-arrow" />
                  </Link>
                ))}
              </nav>

              <aside className="nav-drawer-aside">
                <div className="nav-drawer-statement">
                  <p className="nav-drawer-label">BellCurve Studio</p>
                  <p>Business Systems<br /><em>Engineering.</em></p>
                </div>
                <div className="nav-drawer-contact">
                  <p className="nav-drawer-label">Get in touch</p>
                  <a href="mailto:contact@bellcurvestudio.com">contact@bellcurvestudio.com</a>
                  <span><i /> Diagnostic First • Systems Second</span>
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
