"use client";

import React, { useState } from "react";
import { 
  Calculator, 
  Sparkles, 
  Check, 
  Clock, 
  Send, 
  CheckCircle2,
  ArrowUpRight
} from "lucide-react";

interface EstimateCalculatorProps {
  onScopeSubmitted: (scopeData: any) => void;
}

export default function EstimateCalculator({ onScopeSubmitted }: EstimateCalculatorProps) {
  const [projectCategory, setProjectCategory] = useState<string>("web-app");
  const [businessScale, setBusinessScale] = useState<string>("smb");
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>([
    "auth",
    "analytics"
  ]);

  const categories = [
    { id: "web-app", label: "Web Application", baseWeeks: 2 },
    { id: "revamp", label: "Website Revamp / Upgrade", baseWeeks: 1.5 },
    { id: "internal-tool", label: "Internal Business Tool", baseWeeks: 3 },
    { id: "custom-ai", label: "Custom Software & AI", baseWeeks: 4 },
  ];

  const scales = [
    { id: "startup", label: "Startup / Idea", multiplier: 1 },
    { id: "smb", label: "Growing Business (SMB)", multiplier: 1.25 },
    { id: "enterprise", label: "Enterprise / Institution", multiplier: 1.6 },
  ];

  const availableFeatures = [
    { id: "auth", label: "Multi-Role RBAC & Auth", weeks: 0.5, desc: "Secure SSO & permission levels" },
    { id: "ai", label: "AI Agent & LLM Integration", weeks: 1, desc: "OpenAI / Gemini SDK integration" },
    { id: "payments", label: "Stripe / Payment Gateway", weeks: 0.5, desc: "Subscriptions & checkout" },
    { id: "analytics", label: "Real-Time Analytics", weeks: 0.5, desc: "Interactive charts & PDF export" },
    { id: "automation", label: "Workflow Automation", weeks: 1, desc: "Cron jobs & webhook triggers" },
    { id: "sla", label: "24/7 Priority Support SLA", weeks: 0, desc: "Ongoing maintenance & SLA" },
  ];

  const toggleFeature = (id: string) => {
    if (selectedFeatures.includes(id)) {
      setSelectedFeatures(selectedFeatures.filter((f) => f !== id));
    } else {
      setSelectedFeatures([...selectedFeatures, id]);
    }
  };

  const categoryObj = categories.find((c) => c.id === projectCategory);
  const scaleObj = scales.find((s) => s.id === businessScale);
  const baseDuration = categoryObj ? categoryObj.baseWeeks : 2;
  const scaleMultiplier = scaleObj ? scaleObj.multiplier : 1;
  const extraWeeks = selectedFeatures.reduce((acc, featId) => {
    const f = availableFeatures.find((item) => item.id === featId);
    return acc + (f ? f.weeks : 0);
  }, 0);

  const totalWeeks = Math.max(1, Math.round((baseDuration + extraWeeks) * scaleMultiplier));

  const handleSendScope = () => {
    const summary = {
      category: categoryObj?.label,
      scale: scaleObj?.label,
      features: selectedFeatures.map((f) => availableFeatures.find((item) => item.id === f)?.label),
      estimatedTimeline: `${totalWeeks} - ${totalWeeks + 1} weeks`,
    };
    onScopeSubmitted(summary);
  };

  return (
    <section id="cost-calculator" className="py-24 relative bg-canvas-grid border-b border-white/5">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#1A1A1E] border border-white/10 text-[#9E9EA7] text-xs font-code-mono uppercase tracking-wider">
            <Calculator className="w-3.5 h-3.5 text-[#E5B842]" />
            <span>PROJECT CALCULATOR</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#F3F3F5] tracking-tight">
            Calculate Your Project{" "}
            <span className="font-editorial-serif italic text-[#E5B842] font-normal">Scope</span>
          </h2>
          <p className="text-[#9E9EA7] text-sm sm:text-base leading-relaxed">
            Select your requirements for an instant architectural recommendation, scope breakdown, and estimated delivery timeline.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Form Controls */}
          <div className="lg:col-span-7 space-y-8 tactile-card rounded-3xl p-6 sm:p-8">
            
            {/* Step 1 */}
            <div className="space-y-3">
              <label className="text-xs font-code-mono uppercase text-[#9E9EA7] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#E5B842]/20 text-[#E5B842] flex items-center justify-center font-bold text-[10px]">1</span>
                Project Type
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setProjectCategory(cat.id)}
                    className={`p-3.5 rounded-2xl text-left text-xs font-bold transition-all ${
                      projectCategory === cat.id
                        ? "bg-[#E5B842] text-[#141416] shadow-md"
                        : "bg-black/30 text-[#9E9EA7] hover:text-white border border-white/5"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2 */}
            <div className="space-y-3">
              <label className="text-xs font-code-mono uppercase text-[#9E9EA7] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#E5B842]/20 text-[#E5B842] flex items-center justify-center font-bold text-[10px]">2</span>
                Scale & Business Tier
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {scales.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => setBusinessScale(s.id)}
                    className={`p-3 rounded-2xl text-center text-xs font-bold transition-all ${
                      businessScale === s.id
                        ? "bg-white/20 text-white border border-white/30"
                        : "bg-black/30 text-[#9E9EA7] hover:text-white border border-white/5"
                    }`}
                  >
                    {s.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3 */}
            <div className="space-y-3">
              <label className="text-xs font-code-mono uppercase text-[#9E9EA7] flex items-center gap-2">
                <span className="w-5 h-5 rounded-full bg-[#E5B842]/20 text-[#E5B842] flex items-center justify-center font-bold text-[10px]">3</span>
                Required Capabilities
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {availableFeatures.map((feat) => {
                  const isSelected = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      onClick={() => toggleFeature(feat.id)}
                      className={`p-3 rounded-2xl text-left transition-all border flex items-start gap-2.5 ${
                        isSelected
                          ? "bg-black/60 border-[#E5B842] text-white"
                          : "bg-black/20 border-white/5 text-[#9E9EA7]"
                      }`}
                    >
                      <div
                        className={`w-4 h-4 rounded mt-0.5 flex items-center justify-center border ${
                          isSelected
                            ? "bg-[#E5B842] border-[#E5B842] text-[#141416]"
                            : "border-slate-600"
                        }`}
                      >
                        {isSelected && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                      <div>
                        <div className="text-xs font-bold">{feat.label}</div>
                        <div className="text-[10px] text-[#9E9EA7]">{feat.desc}</div>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Output Card */}
          <div className="lg:col-span-5 sticky top-28">
            <div className="cream-card rounded-3xl p-6 sm:p-8 space-y-6 relative">
              
              <div className="flex items-center justify-between border-b border-black/10 pb-4">
                <span className="text-xs font-code-mono text-[#141416] uppercase tracking-wider flex items-center gap-1.5 font-bold">
                  <Sparkles className="w-4 h-4 text-[#F25C3B]" />
                  Estimated Output
                </span>
                <span className="px-2.5 py-1 rounded-full bg-[#0F382C] text-[#6EE7B7] text-[10px] font-code-mono">
                  Analysis Complete
                </span>
              </div>

              <div className="p-4 rounded-2xl bg-[#18181B] text-white flex items-center justify-between">
                <div>
                  <div className="text-[10px] text-slate-400 font-code-mono">Estimated Turnaround</div>
                  <div className="text-xl font-extrabold text-[#E5B842] flex items-center gap-2 mt-0.5">
                    <Clock className="w-4 h-4" />
                    <span>{totalWeeks} - {totalWeeks + 1} Weeks</span>
                  </div>
                </div>
                <span className="text-[10px] text-[#6EE7B7] font-code-mono">Sprint Delivery</span>
              </div>

              <div className="space-y-2">
                <div className="text-[10px] font-code-mono text-[#5C533C] uppercase font-bold">Recommended Architecture:</div>
                <div className="flex flex-wrap gap-1.5 text-xs font-code-mono">
                  <span className="px-2.5 py-1 rounded-lg bg-[#EAE5DA] text-[#141416]">Next.js 16</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#EAE5DA] text-[#141416]">TypeScript</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#EAE5DA] text-[#141416]">Tailwind CSS</span>
                  {selectedFeatures.includes("ai") && (
                    <span className="px-2.5 py-1 rounded-lg bg-[#F25C3B] text-white">AI SDK</span>
                  )}
                </div>
              </div>

              <div className="space-y-2">
                <div className="text-[10px] font-code-mono text-[#5C533C] uppercase font-bold">Scope Summary:</div>
                <div className="space-y-1.5 text-xs text-[#141416]">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0F382C]" />
                    <span>{categoryObj?.label} ({scaleObj?.label})</span>
                  </div>
                  {selectedFeatures.map((fId) => {
                    const item = availableFeatures.find((i) => i.id === fId);
                    return (
                      <div key={fId} className="flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#0F382C]" />
                        <span>{item?.label}</span>
                      </div>
                    );
                  })}
                </div>
              </div>

              <button
                onClick={handleSendScope}
                className="w-full py-3.5 rounded-full bg-[#F25C3B] hover:bg-[#D94B2C] text-white font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all hover:scale-105 active:scale-95"
              >
                <span>Submit Scope for Proposal</span>
                <ArrowUpRight className="w-4 h-4 stroke-[2.5]" />
              </button>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
