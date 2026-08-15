"use client";

import { ArrowUpRight, CheckCircle2, Clock3, FileCheck2, ShieldCheck, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";

interface FreeAuditSectionProps {
  initialServiceTier?: string;
}

export default function FreeAuditSection({ initialServiceTier }: FreeAuditSectionProps) {
  const [formData, setFormData] = useState({
    orgName: "",
    contactName: "",
    email: "",
    phone: "",
    websiteUrl: "",
    headache: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.orgName || !formData.email || !formData.contactName) return;
    setSubmitted(true);
  };

  const steps = [
    { num: "01", text: "Fill out the short form below" },
    { num: "02", text: "We review your current digital presence and workflows" },
    { num: "03", text: "You receive a written diagnosis within 3–5 business days" },
    { num: "04", text: "If you'd like to act on it, we'll share a proposal — no pressure" },
  ];

  return (
    <section id="free-audit" className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#17232d] py-20 sm:py-28 text-[#fffdf8]">
      <div className="absolute left-0 top-0 h-3 w-full bg-[#ed542d]" aria-hidden="true" />
      <div className="absolute right-[-10rem] top-20 h-96 w-96 rounded-full border border-white/10" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        <header className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end scroll-reveal">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#ffbd5f]/30 bg-[#ffbd5f]/10 px-3.5 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ffbd5f]">
              <Sparkles className="h-3.5 w-3.5 text-[#ffbd5f]" aria-hidden="true" /> Primary Conversion • Free Operational Audit
            </p>
            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[.94] tracking-[-.07em] text-[#fffdf8] sm:text-5xl lg:text-6xl">
              Find out what&apos;s actually costing you leads, time, or money — <em className="font-editorial-serif font-normal text-[#ffbd5f]">for free.</em>
            </h2>
          </div>
          <div className="border-l-2 border-[#ffbd5f] pl-5">
            <p className="text-base leading-relaxed text-[#d6dce1] sm:text-lg">
              We&apos;ll review your website, your enquiry or intake process, and your internal workflows, and hand you a clear, specific diagnosis. No obligation to work with us afterward — the audit is yours either way.
            </p>
          </div>
        </header>

        {/* Expectation Steps Banner */}
        <div className="mt-12 scroll-reveal rounded-[2rem] border border-white/15 bg-white/5 p-6 sm:p-8 backdrop-blur-sm">
          <p className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ffbd5f]">
            What Happens Next
          </p>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div key={step.num} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-4">
                <span className="font-code-mono text-xs font-black text-[#ed542d] shrink-0">
                  {step.num}
                </span>
                <p className="text-xs font-semibold leading-relaxed text-[#e6eaec]">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Request Form */}
        <div className="mt-12 scroll-reveal overflow-hidden rounded-[2rem] border border-[#17232d] bg-[#fffdf8] text-[#17232d] shadow-[8px_8px_0_#ffbd5f]">
          <div className="p-7 sm:p-10 lg:p-12">
            {submitted ? (
              <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
                <span className="grid h-16 w-16 place-items-center rounded-full border border-[#17232d] bg-[#cbe9da] text-[#17232d] shadow-[4px_4px_0_#17232d]">
                  <CheckCircle2 className="h-8 w-8 text-[#17232d]" />
                </span>
                <p className="mt-6 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d]">
                  Audit Request Received
                </p>
                <h3 className="mt-3 max-w-lg text-3xl font-black tracking-tight text-[#17232d] sm:text-4xl">
                  Thank you, {formData.contactName}!
                </h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-[#56616a]">
                  We will review the digital presence and operational intake for <strong>{formData.orgName}</strong>. Expect your written diagnosis within 3–5 business days at <strong>{formData.email}</strong>.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-[#17232d] px-6 py-2.5 text-xs font-bold text-[#17232d] hover:bg-[#f3efe6]"
                >
                  Submit Another Audit Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="flex flex-col gap-3 border-b border-[#17232d]/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d]">
                      Request Form
                    </p>
                    <h3 className="mt-1 text-2xl font-black tracking-tight text-[#17232d]">
                      Free Operational Audit Request
                    </h3>
                  </div>
                  {initialServiceTier && (
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-[#17232d]/20 bg-[#fff7df] px-3 py-1 font-code-mono text-[10px] font-bold text-[#ed542d]">
                      <FileCheck2 className="h-3.5 w-3.5" /> Selected Tier: {initialServiceTier}
                    </span>
                  )}
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-[.14em] text-[#56616a]">
                      Organisation Name *
                    </span>
                    <input
                      required
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      placeholder="e.g. Acme Corp / Zenith Academy"
                      className="mt-2 w-full border-b border-[#17232d]/30 bg-transparent px-0 py-3 text-sm font-semibold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#ed542d]"
                    />
                  </label>

                  <label className="block">
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-[.14em] text-[#56616a]">
                      Contact Name &amp; Role *
                    </span>
                    <input
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="e.g. Alex Morgan, Founder / Ops Lead"
                      className="mt-2 w-full border-b border-[#17232d]/30 bg-transparent px-0 py-3 text-sm font-semibold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#ed542d]"
                    />
                  </label>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-[.14em] text-[#56616a]">
                      Work Email *
                    </span>
                    <input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="alex@organisation.com"
                      className="mt-2 w-full border-b border-[#17232d]/30 bg-transparent px-0 py-3 text-sm font-semibold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#ed542d]"
                    />
                  </label>

                  <label className="block">
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-[.14em] text-[#56616a]">
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="mt-2 w-full border-b border-[#17232d]/30 bg-transparent px-0 py-3 text-sm font-semibold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#ed542d]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="font-code-mono text-[10px] font-black uppercase tracking-[.14em] text-[#56616a]">
                    Website URL (if any)
                  </span>
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://yourorganisation.com"
                    className="mt-2 w-full border-b border-[#17232d]/30 bg-transparent px-0 py-3 text-sm font-semibold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#ed542d]"
                  />
                </label>

                <label className="block">
                  <span className="font-code-mono text-[10px] font-black uppercase tracking-[.14em] text-[#56616a]">
                    What&apos;s the biggest operational headache right now? *
                  </span>
                  <textarea
                    required
                    rows={4}
                    value={formData.headache}
                    onChange={(e) => setFormData({ ...formData, headache: e.target.value })}
                    placeholder="e.g. Leads dropping off from our site, untrusted spreadsheets for student intake, manual WhatsApp updates..."
                    className="mt-3 w-full resize-none rounded-2xl border border-[#17232d]/20 bg-[#f3efe6] p-4 text-sm leading-relaxed text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#ed542d]"
                  />
                </label>

                <div className="flex flex-col gap-4 border-t border-[#17232d]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="flex items-center gap-2 text-xs text-[#56616a] font-medium">
                    <ShieldCheck className="h-4 w-4 text-[#ed542d]" />
                    <span>Free diagnosis • No sales calls • Kept 100% confidential</span>
                  </p>
                  <button
                    type="submit"
                    className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ed542d] px-7 py-4 text-xs font-bold uppercase tracking-[.14em] text-white shadow-[4px_4px_0_#17232d] transition-all hover:-translate-y-0.5 hover:bg-[#17232d]"
                  >
                    <span>Request My Free Audit</span>
                    <ArrowUpRight className="h-4 w-4" />
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
