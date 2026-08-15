"use client";

import React, { FormEvent, useState } from "react";
import {
  MessageSquare,
  Mail,
  Clock3,
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ShieldCheck,
  Zap,
  Terminal,
  Copy,
  Check,
  Send,
  UserCheck,
  Sparkle
} from "lucide-react";

interface ContactSectionProps {
  onOpenAudit: () => void;
}

export default function ContactSection({ onOpenAudit }: ContactSectionProps) {
  // Active topic pill selection
  const [selectedTopic, setSelectedTopic] = useState<string>("Web Application");
  
  // Form input state
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [copiedEmail, setCopiedEmail] = useState<boolean>(false);

  const topics = [
    "Web Application",
    "CRM & Automation",
    "Data Migration",
    "Performance & Speed",
    "General Tech Audit",
  ];

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("contact@bellcurvestudio.com");
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f4efe5] min-h-screen py-14 lg:py-16 flex flex-col justify-center"
    >
      {/* Decorative Subtle Dot Mesh */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(#17232d 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full my-auto z-10 space-y-6 sm:space-y-8">
        {/* Streamlined Header Strip */}
        <header className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between scroll-reveal">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#17232d] bg-[#fffdf8] px-3.5 py-1 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#17232d] shadow-[2px_2px_0_#17232d]">
              <MessageSquare className="h-3 w-3 text-[#ed542d]" /> Direct Contact • No Sales Gatekeepers
            </span>

            <h2 className="mt-2.5 text-3xl sm:text-4xl lg:text-5xl font-black leading-[.95] tracking-[-.06em] text-[#17232d]">
              Let&apos;s talk about{" "}
              <em className="font-editorial-serif font-normal text-[#ed542d] underline decoration-[#ffbd5f] decoration-wavy decoration-2">
                what&apos;s not working.
              </em>
            </h2>
          </div>

          <p className="max-w-md text-xs sm:text-sm leading-relaxed font-medium text-[#40505a] border-l-2 border-[#ed542d] pl-3 py-0.5">
            Reach out directly to our founders. No junior account managers, no sales pitches — just plain-spoken engineering dialogue.
          </p>
        </header>

        {/* Main Contact Deck & Interactive Terminal Container */}
        <div className="scroll-reveal overflow-hidden rounded-3xl border-2 border-[#17232d] bg-[#fffdf8] shadow-[8px_8px_0_#17232d] grid lg:grid-cols-[.82fr_1.18fr]">
          {/* Left Column: Direct Founder Line Sidebar */}
          <aside className="relative overflow-hidden bg-[#17232d] p-6 sm:p-7 lg:p-8 text-[#fffdf8] flex flex-col justify-between space-y-6 border-b-2 lg:border-b-0 lg:border-r-2 border-[#17232d]">
            {/* Ambient Background Glow */}
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[#ed542d]/20 blur-3xl" />

            <div className="space-y-5">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="grid h-11 w-11 place-items-center rounded-2xl border-2 border-[#ffbd5f] bg-[#ffbd5f] text-[#17232d] shadow-[2px_2px_0_#fffdf8]">
                  <Mail className="h-5 w-5" />
                </span>
                <span className="font-code-mono text-[10px] font-black uppercase text-[#ffbd5f] bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  100% Founder Direct
                </span>
              </div>

              <div>
                <h3 className="font-editorial-serif text-2xl lg:text-3xl text-[#fffdf8] leading-tight font-normal">
                  Direct Founder Line
                </h3>
                <p className="mt-1.5 text-xs text-[#d6dce1] leading-relaxed font-medium">
                  Your message goes straight to our three founding partners. No sales layer. No automated bot replies.
                </p>
              </div>

              {/* Direct Email Card with Copy Button */}
              <div className="rounded-2xl border-2 border-white/20 bg-white/5 p-4 space-y-3">
                <div className="flex items-center justify-between">
                  <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#ffbd5f]">
                    Primary Studio Email
                  </span>
                  <button
                    onClick={handleCopyEmail}
                    className="inline-flex items-center gap-1 font-code-mono text-[10px] font-bold text-[#ffbd5f] hover:text-white bg-white/10 hover:bg-white/20 px-2 py-0.5 rounded transition-all"
                  >
                    {copiedEmail ? (
                      <>
                        <Check className="h-3 w-3 text-emerald-400" /> Copied!
                      </>
                    ) : (
                      <>
                        <Copy className="h-3 w-3" /> Copy
                      </>
                    )}
                  </button>
                </div>

                <a
                  href="mailto:contact@bellcurvestudio.com"
                  className="flex items-center gap-2 text-sm sm:text-base font-black text-[#fffdf8] hover:text-[#ffbd5f] transition-colors break-all"
                >
                  <Mail className="h-4 w-4 shrink-0 text-[#ed542d]" />
                  contact@bellcurvestudio.com
                </a>
              </div>

              {/* Response SLA Metric Box */}
              <div className="grid grid-cols-2 gap-2.5 pt-1">
                <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                  <span className="block font-code-mono text-[9px] text-[#ffbd5f] font-black uppercase">
                    Response SLA
                  </span>
                  <span className="font-black text-xs text-[#fffdf8] flex items-center gap-1 mt-1">
                    <Clock3 className="h-3.5 w-3.5 text-[#ffbd5f]" /> Within 24 Hrs
                  </span>
                </div>
                <div className="rounded-xl border border-white/15 bg-white/5 p-3">
                  <span className="block font-code-mono text-[9px] text-[#ffbd5f] font-black uppercase">
                    Engineering SLA
                  </span>
                  <span className="font-black text-xs text-[#fffdf8] flex items-center gap-1 mt-1">
                    <UserCheck className="h-3.5 w-3.5 text-emerald-400" /> Founder Lead
                  </span>
                </div>
              </div>
            </div>

            {/* Free Audit Direct Callout Box */}
            <div className="rounded-2xl border-2 border-[#ffbd5f]/50 bg-[#ffbd5f]/10 p-4 space-y-2">
              <div className="flex items-center gap-1.5 font-code-mono text-[10px] font-black uppercase text-[#ffbd5f]">
                <Sparkle className="h-3.5 w-3.5 text-[#ffbd5f] animate-spin" style={{ animationDuration: "10s" }} />
                Need an immediate audit?
              </div>
              <p className="text-xs text-[#d6dce1] font-medium leading-tight">
                Skip the inquiry form and launch a free diagnostic review immediately.
              </p>
              <button
                onClick={onOpenAudit}
                className="mt-2 w-full inline-flex items-center justify-center gap-1.5 rounded-xl border border-[#ffbd5f] bg-[#ffbd5f] py-2 px-3 text-xs font-black text-[#17232d] shadow-[2px_2px_0_#fffdf8] hover:bg-[#ed542d] hover:text-[#fffdf8] transition-all"
              >
                <span>Launch Free Audit</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </aside>

          {/* Right Column: Direct Founder Form & Topic Selector */}
          <div className="p-6 sm:p-7 lg:p-8 flex flex-col justify-between">
            {submitted ? (
              <div className="flex min-h-[360px] flex-col items-center justify-center text-center space-y-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-[#17232d] bg-[#cbe9da] text-[#17232d] shadow-[3px_3px_0_#17232d]">
                  <CheckCircle2 className="h-7 w-7 text-[#17232d]" />
                </div>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#17232d]">
                  Message Transmitted!
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#56616a] leading-relaxed max-w-md">
                  Thank you, <strong>{formData.name}</strong>! Your inquiry regarding <strong>{selectedTopic}</strong> has been routed directly to our founders. We will reply to <strong>{formData.email}</strong> within 1 working day.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: "", org: "", email: "", message: "" });
                  }}
                  className="rounded-xl border-2 border-[#17232d] bg-[#17232d] px-5 py-2 text-xs font-bold text-[#fffdf8] shadow-[2.5px_2.5px_0_#ffbd5f] transition-all hover:bg-[#ed542d]"
                >
                  Send Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Topic Selector Pills */}
                <div>
                  <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#56616a] block mb-2">
                    Select Primary Topic / Challenge:
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {topics.map((topic) => (
                      <button
                        type="button"
                        key={topic}
                        onClick={() => setSelectedTopic(topic)}
                        className={`px-3 py-1 rounded-xl border-2 text-[11px] font-black whitespace-nowrap transition-all ${
                          selectedTopic === topic
                            ? "bg-[#17232d] text-[#ffbd5f] border-[#17232d] shadow-[2px_2px_0_#ed542d]"
                            : "bg-[#f4efe5] text-[#56616a] border-[#17232d]/20 hover:border-[#17232d]"
                        }`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Form Fields */}
                <div className="grid gap-4 sm:grid-cols-2 pt-1">
                  <label className="block space-y-1">
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#56616a]">
                      Your Name *
                    </span>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="w-full rounded-xl border-2 border-[#17232d]/25 bg-[#f4efe5] px-3.5 py-2.5 text-xs font-bold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#17232d] focus:bg-[#fffdf8]"
                    />
                  </label>

                  <label className="block space-y-1">
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#56616a]">
                      Organisation / Business
                    </span>
                    <input
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      placeholder="Zenith Studio"
                      className="w-full rounded-xl border-2 border-[#17232d]/25 bg-[#f4efe5] px-3.5 py-2.5 text-xs font-bold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#17232d] focus:bg-[#fffdf8]"
                    />
                  </label>
                </div>

                <label className="block space-y-1">
                  <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#56616a]">
                    Work Email *
                  </span>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@organisation.com"
                    className="w-full rounded-xl border-2 border-[#17232d]/25 bg-[#f4efe5] px-3.5 py-2.5 text-xs font-bold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#17232d] focus:bg-[#fffdf8]"
                  />
                </label>

                <label className="block space-y-1">
                  <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#56616a]">
                    Tell Us What Needs To Change
                  </span>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder={`Tell us what's sticking or what technology needs to change regarding ${selectedTopic}...`}
                    className="w-full resize-none rounded-xl border-2 border-[#17232d]/25 bg-[#f4efe5] p-3.5 text-xs font-medium leading-relaxed text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#17232d] focus:bg-[#fffdf8]"
                  />
                </label>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#17232d]/15 pt-4">
                  <p className="text-[11px] font-bold text-[#56616a] flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" /> Direct founder response guaranteed
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2.5 rounded-2xl bg-[#ed542d] px-6 py-3 text-xs font-black uppercase tracking-wider text-[#fffdf8] shadow-[3.5px_3.5px_0_#17232d] hover:bg-[#17232d] hover:text-[#ffbd5f] hover:-translate-y-0.5 transition-all"
                  >
                    <span className="text-[#fffdf8]">Transmit Message</span>
                    <Send className="h-4 w-4 text-[#ffbd5f]" />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
