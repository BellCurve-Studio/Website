"use client";

import { ArrowRight, ArrowUpRight, CheckCircle2, Clock3, Mail, MessageSquare, ShieldCheck } from "lucide-react";
import { FormEvent, useState } from "react";

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

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#f4efe5] min-h-screen lg:h-screen flex flex-col justify-center py-10">
      <div className="absolute left-0 top-0 h-3 w-full bg-[#ed542d]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8 w-full my-auto">
        <header className="grid gap-6 lg:grid-cols-[1.1fr_.9fr] lg:items-end scroll-reveal">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#17232d]/20 bg-[#fffdf8] px-3.5 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#56616a]">
              <MessageSquare className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> Direct Contact
            </p>
            <h2 className="mt-3 max-w-3xl text-3xl font-black leading-[.94] tracking-[-.07em] text-[#17232d] sm:text-4xl lg:text-5xl">
              Let&apos;s talk about <em className="font-editorial-serif font-normal text-[#ed542d]">what&apos;s not working.</em>
            </h2>
          </div>
          <p className="border-l-2 border-[#ed542d] pl-4 text-xs sm:text-sm leading-relaxed text-[#40505a]">
            Reach out directly to our founders. No junior gatekeepers, no sales pitches — just plain-spoken engineering dialogue.
          </p>
        </header>

        <div className="mt-6 scroll-reveal overflow-hidden rounded-2xl border border-[#17232d] bg-[#fffdf8] shadow-[6px_6px_0_#17232d] lg:grid lg:grid-cols-[.8fr_1.2fr]">
          {/* Direct Details Sidebar */}
          <aside className="relative overflow-hidden border-b border-[#17232d] bg-[#17232d] p-6 text-[#fffdf8] lg:border-b-0 lg:border-r lg:p-8">
            <div>
              <span className="grid h-10 w-10 place-items-center rounded-xl border border-[#ffbd5f] bg-[#ffbd5f] text-[#17232d]">
                <Mail className="h-5 w-5" />
              </span>

              <h3 className="mt-4 font-editorial-serif text-2xl text-[#fffdf8] leading-tight font-normal">
                Direct Contact Details
              </h3>

              <div className="mt-6 space-y-4 border-t border-white/15 pt-4">
                <div>
                  <p className="font-code-mono text-[9px] font-black uppercase tracking-wider text-[#ffbd5f]">
                    Email Us Directly
                  </p>
                  <a
                    href="mailto:contact@bellcurvestudio.com"
                    className="mt-1 flex items-center gap-2 text-sm font-bold text-[#fffdf8] hover:text-[#ffbd5f] underline decoration-white/30 underline-offset-4"
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[#ed542d]" />
                    contact@bellcurvestudio.com
                  </a>
                </div>

                <div>
                  <p className="font-code-mono text-[9px] font-black uppercase tracking-wider text-[#ffbd5f]">
                    Response Time
                  </p>
                  <p className="mt-1 flex items-center gap-2 text-xs font-semibold text-[#d6dce1]">
                    <Clock3 className="h-3.5 w-3.5 shrink-0 text-[#ffbd5f]" />
                    Within 1 working day
                  </p>
                </div>
              </div>

              {/* Free Audit Link */}
              <div className="mt-6 rounded-xl border border-white/15 bg-white/5 p-4">
                <p className="font-code-mono text-[9px] font-black uppercase tracking-wider text-[#ffbd5f]">
                  Free Audit Available
                </p>
                <button
                  onClick={onOpenAudit}
                  className="mt-2 inline-flex items-center gap-1.5 text-xs font-bold text-[#ffbd5f] hover:underline"
                >
                  Request Free Operational Audit <ArrowRight className="h-3 w-3" />
                </button>
              </div>
            </div>
          </aside>

          {/* Short Enquiry Form */}
          <div className="p-6 lg:p-8">
            {submitted ? (
              <div className="flex min-h-[300px] flex-col items-center justify-center text-center">
                <span className="grid h-12 w-12 place-items-center rounded-full border border-[#17232d] bg-[#cbe9da] text-[#17232d]">
                  <CheckCircle2 className="h-6 w-6 text-[#17232d]" />
                </span>
                <h3 className="mt-4 text-2xl font-black tracking-tight text-[#17232d]">
                  Thanks, {formData.name}!
                </h3>
                <p className="mt-2 text-xs text-[#56616a] leading-relaxed max-w-sm">
                  We received your message and will reply to <strong>{formData.email}</strong> within one working day.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 rounded-full border border-[#17232d] px-4 py-1.5 text-xs font-bold text-[#17232d]"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-code-mono text-[9px] font-black uppercase tracking-wider text-[#56616a]">
                      Your Name *
                    </span>
                    <input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Alex Morgan"
                      className="mt-1 w-full border-b border-[#17232d]/30 bg-transparent px-0 py-2 text-xs font-semibold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#ed542d]"
                    />
                  </label>

                  <label className="block">
                    <span className="font-code-mono text-[9px] font-black uppercase tracking-wider text-[#56616a]">
                      Organisation
                    </span>
                    <input
                      value={formData.org}
                      onChange={(e) => setFormData({ ...formData, org: e.target.value })}
                      placeholder="Zenith Studio"
                      className="mt-1 w-full border-b border-[#17232d]/30 bg-transparent px-0 py-2 text-xs font-semibold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#ed542d]"
                    />
                  </label>
                </div>

                <label className="block">
                  <span className="font-code-mono text-[9px] font-black uppercase tracking-wider text-[#56616a]">
                    Work Email *
                  </span>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@organisation.com"
                    className="mt-1 w-full border-b border-[#17232d]/30 bg-transparent px-0 py-2 text-xs font-semibold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#ed542d]"
                  />
                </label>

                <label className="block">
                  <span className="font-code-mono text-[9px] font-black uppercase tracking-wider text-[#56616a]">
                    Message
                  </span>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us what's sticking or what technology needs to change..."
                    className="mt-1 w-full resize-none rounded-xl border border-[#17232d]/20 bg-[#f3efe6] p-3 text-xs leading-relaxed text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#ed542d]"
                  />
                </label>

                <div className="flex items-center justify-between border-t border-[#17232d]/15 pt-3">
                  <p className="text-[11px] text-[#56616a] font-medium flex items-center gap-1">
                    <ShieldCheck className="h-3.5 w-3.5 text-[#ed542d]" /> Direct founder response
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-1.5 rounded-full bg-[#17232d] px-5 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-[#ed542d] transition-all"
                  >
                    <span>Send</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
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
