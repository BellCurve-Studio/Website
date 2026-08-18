"use client";

import React, { FormEvent, useState } from "react";
import {
  MessageSquare,
  ArrowUpRight,
  CheckCircle2,
  Loader2,
  AlertCircle
} from "lucide-react";

interface ContactSectionProps {
  onOpenAudit: () => void;
}

export default function ContactSection({ onOpenAudit }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    name: "",
    org: "",
    email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [selectedProblems, setSelectedProblems] = useState<string[]>([]);

  const commonStartingPoints = [
    "A process takes longer than it should",
    "Too much work is still manual",
    "Your systems don't talk to each other",
    "Your website isn't doing its job",
    "You've outgrown the way things currently work",
  ];

  const toggleProblem = (point: string) => {
    setSelectedProblems((prev) =>
      prev.includes(point)
        ? prev.filter((p) => p !== point)
        : [...prev, point]
    );
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    
    setIsSubmitting(true);
    setErrorMessage(null);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          topic: selectedProblems.length > 0 ? selectedProblems.join(", ") : "Not specified",
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setSubmitted(true);
      } else {
        setErrorMessage(data.error || "Something went wrong while sending your message. Please try again.");
      }
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setErrorMessage("Network error occurred. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#f4efe5] min-h-screen py-16 lg:py-24 flex flex-col justify-center"
    >
      {/* Decorative Subtle Dot Mesh */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `radial-gradient(#17232d 1.2px, transparent 1.2px)`,
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid lg:grid-cols-[.42fr_.58fr] gap-10 lg:gap-16 items-start">
          
          {/* LEFT COLUMN */}
          <div className="scroll-reveal flex flex-col h-full justify-between space-y-10 lg:space-y-0">
            <div className="space-y-8 lg:space-y-10">
              {/* Header */}
              <div>
                <span className="inline-flex items-center gap-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d] mb-4">
                  <MessageSquare className="h-3 w-3" /> Start with the problem
                </span>
                <h2 className="text-4xl sm:text-5xl lg:text-5xl font-black leading-[1.05] tracking-[-.04em] text-[#17232d]">
                  Something not working?<br />
                  <span className="font-editorial-serif font-normal text-[#ed542d] italic">
                    Let&apos;s figure out why.
                  </span>
                </h2>
                <p className="mt-5 text-sm sm:text-base font-medium text-[#40505a] leading-relaxed max-w-sm">
                  You don&apos;t need a technical brief.<br />
                  Start with what&apos;s happening.
                </p>
              </div>

              {/* Common Starting Points */}
              <div className="space-y-4">
                <h3 className="font-code-mono text-[10px] font-black uppercase tracking-[.15em] text-[#56616a]">
                  Common starting points
                </h3>
                <div className="flex flex-col gap-2">
                  {commonStartingPoints.map((point, i) => {
                    const isSelected = selectedProblems.includes(point);
                    return (
                      <button
                        key={i}
                        type="button"
                        onClick={() => toggleProblem(point)}
                        className={`text-left w-full px-4 py-3.5 rounded-xl border-2 transition-all group ${
                          isSelected
                            ? "bg-[#fffdf8] border-[#17232d] shadow-[3px_3px_0_#ed542d] -translate-y-0.5"
                            : "bg-transparent border-[#17232d]/15 hover:border-[#17232d]/40 hover:bg-[#fffdf8]/50 hover:-translate-y-0.5"
                        }`}
                      >
                        <span
                          className={`text-sm sm:text-[15px] font-bold ${
                            isSelected
                              ? "text-[#17232d]"
                              : "text-[#40505a] group-hover:text-[#17232d]"
                          }`}
                        >
                          {point}
                        </span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Copy */}
            <div className="pt-10 lg:pt-14">
              <p className="text-sm sm:text-[15px] font-bold text-[#17232d]">
                Not sure what the problem is yet?
              </p>
              <p className="text-sm sm:text-[15px] font-medium text-[#56616a] leading-relaxed mt-1.5">
                That&apos;s fine. Tell us what you&apos;re seeing.<br />
                We&apos;ll help you work backwards from there.
              </p>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="scroll-reveal">
            <div className="overflow-hidden rounded-3xl border-2 border-[#17232d] bg-[#fffdf8] shadow-[8px_8px_0_#17232d] flex flex-col p-6 sm:p-8 lg:p-10">
              {submitted ? (
                <div className="flex min-h-[460px] flex-col items-center justify-center text-center space-y-5">
                  <div className="grid h-16 w-16 place-items-center rounded-2xl border-2 border-[#17232d] bg-[#cbe9da] text-[#17232d] shadow-[3px_3px_0_#17232d]">
                    <CheckCircle2 className="h-8 w-8 text-[#17232d]" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight text-[#17232d]">
                    Thanks we&apos;ve got it.
                  </h3>
                  <p className="text-sm sm:text-[15px] font-medium text-[#56616a] leading-relaxed max-w-sm">
                    Thanks, <strong>{formData.name}</strong>. We&apos;ve received your note and will read through it carefully. If there&apos;s something worth digging into, we&apos;ll get back to you with the next question.
                  </p>
                  <p className="text-sm font-bold text-[#17232d]">
                    We&apos;ll reply to {formData.email}.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: "", org: "", email: "", message: "" });
                      setSelectedProblems([]);
                      setErrorMessage(null);
                    }}
                    className="mt-4 rounded-xl border-2 border-[#17232d] bg-[#17232d] px-6 py-2.5 text-sm font-bold text-[#fffdf8] shadow-[2.5px_2.5px_0_#ffbd5f] transition-all hover:bg-[#ed542d]"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col h-full space-y-7">
                  {/* Form Eyebrow & Title */}
                  <div>
                    <span className="inline-flex font-code-mono text-[10px] font-black uppercase tracking-[.15em] text-[#ed542d] mb-2.5">
                      Start a conversation
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-black text-[#17232d] tracking-tight">
                      Tell us what you&apos;re seeing.
                    </h3>
                    <p className="mt-2.5 text-sm text-[#56616a] font-medium leading-relaxed max-w-sm">
                      A few sentences are enough. We&apos;ll read it, come back with questions if we need them, and tell you honestly where we think the problem sits.
                    </p>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4 sm:space-y-5">
                    <div className="grid gap-4 sm:gap-5 sm:grid-cols-2">
                      <label className="block space-y-1.5">
                        <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#17232d]">
                          Name *
                        </span>
                        <input
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full rounded-xl border-2 border-[#17232d]/20 bg-[#f4efe5] px-4 py-3 text-sm font-bold text-[#17232d] outline-none focus:border-[#17232d] focus:bg-[#fffdf8] transition-colors"
                        />
                      </label>
                      <label className="block space-y-1.5">
                        <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#17232d]">
                          Business / organisation
                        </span>
                        <input
                          value={formData.org}
                          onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                          className="w-full rounded-xl border-2 border-[#17232d]/20 bg-[#f4efe5] px-4 py-3 text-sm font-bold text-[#17232d] outline-none focus:border-[#17232d] focus:bg-[#fffdf8] transition-colors"
                        />
                      </label>
                    </div>

                    <label className="block space-y-1.5">
                      <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#17232d]">
                        Email *
                      </span>
                      <input
                        required
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full rounded-xl border-2 border-[#17232d]/20 bg-[#f4efe5] px-4 py-3 text-sm font-bold text-[#17232d] outline-none focus:border-[#17232d] focus:bg-[#fffdf8] transition-colors"
                      />
                    </label>

                    <label className="block space-y-1.5">
                      <span className="font-code-mono text-[10px] font-black uppercase tracking-wider text-[#17232d]">
                        What are you seeing?
                      </span>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us what's slow, manual, confusing, unreliable, or simply not working the way it should."
                        className="w-full resize-none rounded-xl border-2 border-[#17232d]/20 bg-[#f4efe5] p-4 text-sm font-medium leading-relaxed text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#17232d] focus:bg-[#fffdf8] transition-colors"
                      />
                    </label>

                    {errorMessage && (
                      <div className="flex items-center gap-2 rounded-xl border-2 border-red-500 bg-red-50 p-3 text-xs font-bold text-red-700">
                        <AlertCircle className="h-4 w-4 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}
                  </div>

                  {/* Footer area inside card */}
                  <div className="pt-2 flex flex-col gap-5">
                    <div>
                      <p className="text-xs font-bold text-[#56616a]">
                        No pitch. No obligation. Just a useful first conversation.
                      </p>
                    </div>

                    <div>
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#ed542d] px-6 py-3.5 text-sm font-black uppercase tracking-wider text-[#fffdf8] shadow-[4px_4px_0_#17232d] hover:bg-[#17232d] hover:text-[#ffbd5f] hover:-translate-y-0.5 transition-all disabled:opacity-60 disabled:pointer-events-none"
                      >
                        {isSubmitting ? (
                          <>
                            <span className="text-[#fffdf8]">Sending...</span>
                            <Loader2 className="h-4 w-4 text-[#ffbd5f] animate-spin" />
                          </>
                        ) : (
                          <>
                            <span className="text-[#fffdf8]">Start the conversation</span>
                            <ArrowUpRight className="h-4 w-4 text-[#ffbd5f]" />
                          </>
                        )}
                      </button>
                    </div>

                    <div className="flex flex-col gap-2.5 pt-5 mt-2 border-t border-[#17232d]/10">
                      <button
                        type="button"
                        onClick={onOpenAudit}
                        className="text-left group inline-flex items-center gap-1.5 text-xs font-bold text-[#56616a] hover:text-[#17232d] transition-colors"
                      >
                        Already know something needs fixing? Start with a free audit{" "}
                        <ArrowUpRight className="h-3 w-3 group-hover:text-[#ed542d] transition-colors" />
                      </button>

                      <div className="flex items-center gap-1.5 text-xs font-medium text-[#56616a]">
                        Prefer email?{" "}
                        <a
                          href="mailto:contact@bellcurvestudio.com"
                          className="font-bold text-[#17232d] hover:text-[#ed542d] transition-colors"
                        >
                          contact@bellcurvestudio.com
                        </a>
                      </div>
                    </div>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
