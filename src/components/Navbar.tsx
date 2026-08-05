"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";

interface NavbarProps { onOpenConsultation: () => void; }

export default function Navbar({ onOpenConsultation }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const links = [
    { name: "Services", href: "#services" },
    { name: "Method", href: "#process" },
    { name: "Revamp", href: "#revamp-simulator" },
    { name: "Why Us", href: "#why-us" },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 py-4 sm:px-7 sm:py-5">
      <div className="nav-shell mx-auto flex max-w-7xl items-center justify-between rounded-full px-4 py-3 sm:px-5">
        <a href="#" className="flex items-center gap-2.5 text-sm font-black tracking-[-0.05em] text-[#17232d] sm:text-base">
          <span className="brand-mark">B</span><span>BELLCURVE<span className="font-normal text-[#ed542d]">®</span></span>
        </a>
        <nav className="hidden items-center gap-1 md:flex">
          {links.map((link) => <a key={link.name} href={link.href} className="nav-link">{link.name}</a>)}
        </nav>
        <button onClick={onOpenConsultation} className="nav-cta hidden items-center gap-2 rounded-full px-4 py-2 text-xs font-bold sm:flex">Let&apos;s talk <ArrowUpRight className="h-3.5 w-3.5" /></button>
        <button onClick={() => setOpen(!open)} className="grid h-9 w-9 place-items-center rounded-full bg-[#17232d] text-white md:hidden" aria-label="Toggle navigation">{open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}</button>
      </div>
      {open && <div className="nav-mobile mx-auto mt-2 max-w-7xl rounded-[1.5rem] p-3 md:hidden">
        {links.map((link) => <a onClick={() => setOpen(false)} key={link.name} href={link.href} className="block rounded-xl px-4 py-3 text-sm font-bold text-[#17232d]">{link.name}</a>)}
        <button onClick={onOpenConsultation} className="mt-1 w-full rounded-xl bg-[#ed542d] px-4 py-3 text-sm font-bold text-white">Let&apos;s talk</button>
      </div>}
    </header>
  );
}
