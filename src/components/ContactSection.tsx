"use client";

import { ArrowUpRight, Check, CheckCircle2, Clock3, Mail, MessageCircle, ShieldCheck, Sparkles } from "lucide-react";
import { FormEvent, useState } from "react";

interface ContactSectionProps {
  initialService?: string;
}

const offeringOptions = [
  "Digital Products",
  "Modernization",
  "Team Operations",
  "Custom Systems & AI",
  "Discovery & Product Strategy",
  "Not sure yet",
];

export default function ContactSection({ initialService }: ContactSectionProps) {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [selectedOffer, setSelectedOffer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const chosenOffer = selectedOffer || initialService || "Not sure yet";

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!formData.name || !formData.email) return;
    setSubmitted(true);
  };

  return (
    <section id="contact" className="relative overflow-hidden border-b border-[#17232d]/15 bg-[#f4efe5] py-20 sm:py-28">
      <div className="absolute right-[-12rem] top-24 h-96 w-96 rounded-full border border-[#17232d]/15" aria-hidden="true" />
      <div className="absolute left-0 top-0 h-3 w-full bg-[#ed542d]" aria-hidden="true" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-7 lg:px-8">
        <header className="grid gap-8 lg:grid-cols-[1.1fr_.9fr] lg:items-end">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-[#17232d]/20 bg-[#fffdf8] px-3 py-1.5 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#56616a]">
              <Sparkles className="h-3.5 w-3.5 text-[#ed542d]" aria-hidden="true" /> A good place to start
            </p>
            <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[.94] tracking-[-.07em] text-[#17232d] sm:text-5xl lg:text-6xl">
              Let&apos;s build something <em className="font-editorial-serif font-normal text-[#ed542d]">great.</em>
            </h2>
          </div>
          <p className="border-l-2 border-[#ed542d] pl-5 text-sm leading-relaxed text-[#56616a] sm:text-base">
            Bring the ambitious brief, the difficult system, or the half-formed idea. We&apos;ll help you find the next worthwhile move.
          </p>
        </header>

        <div className="mt-12 overflow-hidden rounded-[2rem] border border-[#17232d] bg-[#fffdf8] shadow-[8px_8px_0_#17232d] lg:grid lg:grid-cols-[.78fr_1.22fr]">
          <aside className="relative overflow-hidden border-b border-[#17232d] bg-[#17232d] p-7 text-[#fffdf8] sm:p-10 lg:border-b-0 lg:border-r lg:p-12">
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full border border-white/15" aria-hidden="true" />
            <div className="relative">
              <span className="grid h-11 w-11 place-items-center rounded-full border border-[#ffbd5f] bg-[#ffbd5f] text-[#17232d]"><MessageCircle className="h-5 w-5" aria-hidden="true" /></span>
              <p className="mt-7 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ffbd5f]">No pitch deck required</p>
              <h3 className="mt-4 max-w-sm font-editorial-serif text-3xl leading-[1.05] sm:text-4xl">Tell us what&apos;s sticking. We&apos;ll take it from there.</h3>
              <p className="mt-6 max-w-sm text-sm leading-relaxed text-[#c5d0d7]">A rough outline is enough. We&apos;ll come back with thoughtful questions, not a canned proposal.</p>

              <div className="mt-9 space-y-4 border-t border-white/15 pt-6">
                {[
                  "A direct conversation with senior people",
                  "A considered response within one working day",
                  "A practical next step—even if we are not the right fit",
                ].map((item) => (
                  <p key={item} className="flex items-start gap-3 text-sm font-semibold leading-snug text-[#e6eaec]"><Check className="mt-0.5 h-4 w-4 shrink-0 text-[#ffbd5f]" aria-hidden="true" />{item}</p>
                ))}
              </div>

              <div className="mt-10 grid gap-3 border-t border-white/15 pt-6 sm:grid-cols-2 lg:grid-cols-1">
                <a href="mailto:contact@bellcurvestudio.com" className="group flex items-center gap-3 text-sm text-[#dce4e8] hover:text-[#ffbd5f]">
                  <Mail className="h-4 w-4 shrink-0" aria-hidden="true" /> <span><span className="block font-code-mono text-[9px] font-black uppercase tracking-[.14em] text-[#aeb9c2]">Or email</span>contact@bellcurvestudio.com</span>
                </a>
                <p className="flex items-center gap-3 text-sm text-[#dce4e8]"><Clock3 className="h-4 w-4 shrink-0 text-[#ffbd5f]" aria-hidden="true" /><span><span className="block font-code-mono text-[9px] font-black uppercase tracking-[.14em] text-[#aeb9c2]">Response rhythm</span>Within one working day</span></p>
              </div>
            </div>
          </aside>

          <div className="p-6 sm:p-9 lg:p-12">
            {submitted ? (
              <div className="flex min-h-[470px] flex-col items-center justify-center text-center">
                <span className="grid h-14 w-14 place-items-center rounded-full border border-[#17232d] bg-[#cbe9da] text-[#17232d] shadow-[4px_4px_0_#17232d]"><CheckCircle2 className="h-6 w-6" aria-hidden="true" /></span>
                <p className="mt-7 font-code-mono text-[10px] font-black uppercase tracking-[.18em] text-[#ed542d]">Message received</p>
                <h3 className="mt-4 max-w-md text-3xl font-black tracking-[-.05em] text-[#17232d] sm:text-4xl">Thanks, {formData.name}. We&apos;ll be in touch soon.</h3>
                <p className="mt-5 max-w-md text-sm leading-relaxed text-[#56616a]">We&apos;ll review what you shared and come back with the clearest next step we can offer.</p>
                <button onClick={() => setSubmitted(false)} className="mt-8 rounded-full border border-[#17232d] px-5 py-2.5 text-xs font-bold text-[#17232d] transition-colors hover:bg-[#f3efe6]">Send another note</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-7">
                <div className="flex flex-col gap-3 border-b border-[#17232d]/15 pb-6 sm:flex-row sm:items-end sm:justify-between">
                  <div>
                    <p className="font-code-mono text-[10px] font-black uppercase tracking-[.17em] text-[#ed542d]">Your project note</p>
                    <h3 className="mt-2 text-2xl font-black tracking-[-.04em] text-[#17232d]">A few useful details.</h3>
                  </div>
                  <p className="flex items-center gap-2 text-xs font-semibold text-[#56616a]"><ShieldCheck className="h-4 w-4 text-[#ed542d]" aria-hidden="true" /> Kept confidential</p>
                </div>

                <div className="grid gap-5 sm:grid-cols-2">
                  <label className="block">
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-[.14em] text-[#56616a]">Your name *</span>
                    <input required value={formData.name} onChange={(event) => setFormData({ ...formData, name: event.target.value })} placeholder="Alex Morgan" className="mt-2 w-full border-b border-[#17232d]/30 bg-transparent px-0 py-3 text-sm font-semibold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#ed542d]" />
                  </label>
                  <label className="block">
                    <span className="font-code-mono text-[10px] font-black uppercase tracking-[.14em] text-[#56616a]">Work email *</span>
                    <input required type="email" value={formData.email} onChange={(event) => setFormData({ ...formData, email: event.target.value })} placeholder="alex@company.com" className="mt-2 w-full border-b border-[#17232d]/30 bg-transparent px-0 py-3 text-sm font-semibold text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#ed542d]" />
                  </label>
                </div>

                <fieldset>
                  <legend className="font-code-mono text-[10px] font-black uppercase tracking-[.14em] text-[#56616a]">What are you looking to move?</legend>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {offeringOptions.map((option) => {
                      const selected = chosenOffer === option;
                      return <button key={option} type="button" onClick={() => setSelectedOffer(option)} className={`rounded-full border px-3 py-2 text-xs font-bold transition-all ${selected ? "border-[#17232d] bg-[#17232d] text-[#fffdf8] shadow-[2px_2px_0_#ed542d]" : "border-[#17232d]/20 bg-[#fffdf8] text-[#56616a] hover:border-[#17232d]"}`}>{option}</button>;
                    })}
                  </div>
                </fieldset>

                <label className="block">
                  <span className="font-code-mono text-[10px] font-black uppercase tracking-[.14em] text-[#56616a]">What&apos;s happening? <span className="normal-case tracking-normal">(A few sentences is plenty.)</span></span>
                  <textarea rows={5} value={formData.message} onChange={(event) => setFormData({ ...formData, message: event.target.value })} placeholder="The opportunity, the frustration, the deadline, or the thing you wish worked differently…" className="mt-3 w-full resize-none rounded-2xl border border-[#17232d]/20 bg-[#f3efe6] p-4 text-sm leading-relaxed text-[#17232d] outline-none placeholder:text-[#87939b] focus:border-[#ed542d]" />
                </label>

                <div className="flex flex-col gap-4 border-t border-[#17232d]/15 pt-6 sm:flex-row sm:items-center sm:justify-between">
                  <p className="text-xs leading-relaxed text-[#56616a]">By sending this, you&apos;re starting a conversation—not committing to a project.</p>
                  <button type="submit" className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-[#ed542d] px-5 py-3 text-sm font-bold text-white transition-transform hover:-translate-y-0.5">Send the note <ArrowUpRight className="h-4 w-4" aria-hidden="true" /></button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
