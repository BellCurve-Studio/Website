"use client";

import React, { FormEvent, useState } from "react";
import {
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  Check,
  Sparkle,
  FileText,
  FileCheck2,
  ShieldCheck,
  Loader2,
  AlertCircle
} from "lucide-react";

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

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.orgName || !formData.email || !formData.contactName || !formData.headache) return;

    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch("/api/audit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Failed to submit audit request. Please try again.");
      }
    } catch (err: unknown) {
      console.error("Audit submission error:", err);
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const steps = [
    { num: "01", title: "Intake Form", text: "Fill out the short diagnostic form below." },
    { num: "02", title: "Founder Review", text: "We analyze your website, intake, & tech stack." },
    { num: "03", title: "Written Report", text: "Receive a clear written diagnosis in 3-5 days." },
    { num: "04", title: "Action Plan", text: "Implement fixes yourself or with us — zero pressure." },
  ];

  return (
    <section
      id="free-audit"
      className="relative overflow-hidden bg-[#f4efe5] min-h-screen py-12 sm:py-16 text-[#17232d]"
    >
      {/* Decorative Subtle Dot Mesh */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(#17232d 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10 space-y-8">
        {/* Streamlined Header Strip */}
        <header className="grid gap-6 lg:grid-cols-[1.2fr_.8fr] lg:items-end scroll-reveal">
          <div>
            <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-[#17232d] bg-[#fffdf8] px-3.5 py-1 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#17232d] shadow-[2px_2px_0_#17232d]">
              <Sparkles className="h-3 w-3 text-[#ed542d]" /> Primary Conversion • Free Operational Audit
            </span>

            <h1 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-black leading-[.95] tracking-[-.06em] text-[#17232d]">
              Find out what&apos;s actually costing you leads, time, or money —{" "}
              <em className="font-editorial-serif font-normal text-[#ed542d] underline decoration-[#ffbd5f] decoration-wavy decoration-2">
                for free.
              </em>
            </h1>
          </div>

          <div className="border-l-2 border-[#ed542d] pl-4 py-0.5">
            <p className="text-xs sm:text-sm font-medium leading-relaxed text-[#40505a]">
              We&apos;ll review your website, enquiry flow, and internal tech stack, then hand you a clear, specific written diagnosis. No obligation to work with us afterward — the audit is yours either way.
            </p>
          </div>
        </header>

        {/* Expectation Steps Banner (What Happens Next) */}
        <div className="scroll-reveal rounded-3xl border-2 border-[#17232d] bg-[#fffdf8] p-5 sm:p-7 shadow-[6px_6px_0_#17232d] space-y-4">
          <div className="flex items-center justify-between border-b-2 border-[#17232d]/15 pb-3">
            <span className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d] flex items-center gap-1.5">
              <Sparkle className="h-3.5 w-3.5 text-[#ed542d]" />
              What Happens Next
            </span>
            <span className="font-code-mono text-[10px] font-black text-[#17232d] bg-[#17232d]/5 px-2.5 py-0.5 rounded-lg border border-[#17232d]/15">
              3-5 Days Turnaround • 0 Sales Calls
            </span>
          </div>

          <div className="grid gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((step) => (
              <div
                key={step.num}
                className="flex flex-col justify-between rounded-2xl border-2 border-[#17232d]/25 bg-[#f4efe5] p-4 shadow-[2.5px_2.5px_0_#17232d]"
              >
                <div className="flex items-center justify-between">
                  <span className="font-code-mono text-xs font-black text-[#ed542d] bg-[#fffdf8] px-2 py-0.5 rounded-md border border-[#17232d]/20">
                    Step {step.num}
                  </span>
                  <Check className="h-3.5 w-3.5 text-[#17232d]/40" />
                </div>
                <div className="mt-3">
                  <h4 className="text-xs font-black uppercase tracking-tight text-[#17232d]">
                    {step.title}
                  </h4>
                  <p className="mt-1 text-[11px] font-medium leading-relaxed text-[#56616a]">
                    {step.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Audit Request Form & Sidebar Grid */}
        <div className="scroll-reveal overflow-hidden rounded-3xl border-2 border-[#17232d] bg-[#fffdf8] shadow-[8px_8px_0_#17232d] grid lg:grid-cols-[.8fr_1.2fr]">
          {/* Left Column: Audit Commitment Sidebar */}
          <aside className="relative overflow-hidden bg-[#17232d] p-6 sm:p-8 text-[#fffdf8] flex flex-col justify-between space-y-6 border-b-2 lg:border-b-0 lg:border-r-2 border-[#17232d]">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/15 pb-4">
                <span className="grid h-10 w-10 place-items-center rounded-xl border-2 border-[#ffbd5f] bg-[#ffbd5f] text-[#17232d] shadow-[2px_2px_0_#fffdf8]">
                  <FileText className="h-5 w-5" />
                </span>
                <span className="font-code-mono text-[9px] font-black uppercase text-[#ffbd5f] bg-white/10 px-3 py-1 rounded-full border border-white/20">
                  100% Confidential
                </span>
              </div>

              <div>
                <h3 className="font-editorial-serif text-2xl lg:text-3xl text-[#fffdf8] leading-tight font-normal">
                  What Our Audit Covers
                </h3>
                <p className="mt-2 text-xs text-[#d6dce1] leading-relaxed font-medium">
                  We look under the hood of your digital presence and operational workflows to isolate root cause bottlenecks.
                </p>
              </div>

              <ul className="space-y-3">
                {[
                  "Conversion & enquiry drop-off analysis",
                  "Form & lead routing efficiency check",
                  "Internal workflow & spreadsheet bottleneck audit",
                  "Actionable, written diagnostic roadmap",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-xs font-bold text-[#fffdf8]">
                    <Check className="h-4 w-4 text-[#ffbd5f] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Founder Guarantee Box */}
            <div className="rounded-2xl border-2 border-[#ffbd5f]/40 bg-[#ffbd5f]/10 p-4 space-y-1.5">
              <span className="font-code-mono text-[10px] font-black uppercase text-[#ffbd5f] block">
                The BellCurve Guarantee
              </span>
              <p className="text-xs font-medium text-[#d6dce1] leading-relaxed">
                The audit report is 100% yours to keep. No mandatory follow-up sales calls. No hidden pressure.
              </p>
            </div>
          </aside>

          {/* Right Column: Interactive Audit Form */}
          <div className="p-6 sm:p-8 lg:p-10">
            {submitted ? (
              <div className="flex min-h-[380px] flex-col items-center justify-center text-center space-y-4">
                <div className="grid h-14 w-14 place-items-center rounded-2xl border-2 border-[#17232d] bg-[#cbe9da] text-[#17232d] shadow-[3px_3px_0_#17232d]">
                  <CheckCircle2 className="h-7 w-7 text-[#17232d]" />
                </div>
                <p className="font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d]">
                  Audit Request Confirmed
                </p>
                <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#17232d]">
                  Thank you, {formData.contactName}!
                </h3>
                <p className="text-xs sm:text-sm font-medium text-[#56616a] leading-relaxed max-w-md">
                  We will review the digital presence and operational intake for <strong>{formData.orgName}</strong>. A confirmation receipt has been sent to <strong>{formData.email}</strong>, and you can expect your written diagnosis within 3–5 business days.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ orgName: "", contactName: "", email: "", phone: "", websiteUrl: "", headache: "" });
                    setErrorMessage(null);
                  }}
                  className="rounded-xl border-2 border-[#17232d] bg-[#17232d] px-5 py-2 text-xs font-bold text-[#fffdf8] shadow-[2.5px_2.5px_0_#ffbd5f] transition-all hover:bg-[#ed542d]"
                >
                  Submit Another Audit Request
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="flex flex-col gap-2 border-b-2 border-[#17232d]/15 pb-4 sm:flex-row sm:items-center sm:justify-between">
                  <div>
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#ed542d]">
                      Request Form
                    </span>
                    <h3 className="text-xl font-black text-[#17232d]">
                      Free Operational Audit Request
                    </h3>
                  </div>
                  {initialServiceTier && (
                    <span className="inline-flex items-center gap-1.5 rounded-lg border-2 border-[#17232d] bg-[#ffbd5f] px-2.5 py-0.5 font-code-mono text-[10px] font-black text-[#17232d]">
                      <FileCheck2 className="h-3.5 w-3.5" /> Tier: {initialServiceTier}
                    </span>
                  )}
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block space-y-1">
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#56616a]">
                      Organisation Name *
                    </span>
                    <input
                      required
                      value={formData.orgName}
                      onChange={(e) => setFormData({ ...formData, orgName: e.target.value })}
                      placeholder="Acme Corp / Zenith Academy"
                      className="w-full rounded-xl border-2 border-[#17232d]/25 bg-[#f4efe5] px-3.5 py-2.5 text-xs font-bold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#17232d] focus:bg-[#fffdf8]"
                    />
                  </label>

                  <label className="block space-y-1">
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#56616a]">
                      Contact Name &amp; Role *
                    </span>
                    <input
                      required
                      value={formData.contactName}
                      onChange={(e) => setFormData({ ...formData, contactName: e.target.value })}
                      placeholder="Alex Morgan, Founder / Ops Lead"
                      className="w-full rounded-xl border-2 border-[#17232d]/25 bg-[#f4efe5] px-3.5 py-2.5 text-xs font-bold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#17232d] focus:bg-[#fffdf8]"
                    />
                  </label>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
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
                      Phone Number
                    </span>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full rounded-xl border-2 border-[#17232d]/25 bg-[#f4efe5] px-3.5 py-2.5 text-xs font-bold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#17232d] focus:bg-[#fffdf8]"
                    />
                  </label>
                </div>

                <label className="block space-y-1">
                  <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#56616a]">
                    Website / System URL (if any)
                  </span>
                  <input
                    type="url"
                    value={formData.websiteUrl}
                    onChange={(e) => setFormData({ ...formData, websiteUrl: e.target.value })}
                    placeholder="https://yourorganisation.com"
                    className="w-full rounded-xl border-2 border-[#17232d]/25 bg-[#f4efe5] px-3.5 py-2.5 text-xs font-bold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#17232d] focus:bg-[#fffdf8]"
                  />
                </label>

                <label className="block space-y-1">
                  <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#56616a]">
                    What&apos;s the biggest operational headache right now? *
                  </span>
                  <textarea
                    required
                    rows={3}
                    value={formData.headache}
                    onChange={(e) => setFormData({ ...formData, headache: e.target.value })}
                    placeholder="Leads dropping off from site, manual spreadsheets, untrusted data intake..."
                    className="w-full resize-none rounded-xl border-2 border-[#17232d]/25 bg-[#f4efe5] p-3.5 text-xs font-medium leading-relaxed text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#17232d] focus:bg-[#fffdf8]"
                  />
                </label>

                {/* Error Banner */}
                {errorMessage && (
                  <div className="flex items-center gap-2 rounded-xl border-2 border-red-500 bg-red-50 p-3 text-xs font-bold text-red-700">
                    <AlertCircle className="h-4 w-4 shrink-0 text-red-600" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <div className="flex flex-wrap items-center justify-between gap-3 border-t-2 border-[#17232d]/15 pt-4">
                  <p className="text-[11px] font-bold text-[#56616a] flex items-center gap-1.5">
                    <ShieldCheck className="h-4 w-4 text-emerald-600" /> Free diagnosis • 0 sales pressure
                  </p>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#ed542d] px-6 py-3 text-xs font-black uppercase tracking-wider text-[#fffdf8] shadow-[3.5px_3.5px_0_#17232d] hover:bg-[#17232d] hover:text-[#ffbd5f] hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:pointer-events-none"
                  >
                    {isSubmitting ? (
                      <>
                        <span>Submitting Request...</span>
                        <Loader2 className="h-4 w-4 text-[#ffbd5f] animate-spin" />
                      </>
                    ) : (
                      <>
                        <span>Request Free Audit</span>
                        <ArrowUpRight className="h-4 w-4 text-[#ffbd5f]" />
                      </>
                    )}
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
