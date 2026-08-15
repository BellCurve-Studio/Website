"use client";

import React from "react";
import { useRouter } from "next/navigation";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TheProblem from "@/components/TheProblem";
import HowWeWork from "@/components/HowWeWork";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import AboutSection from "@/components/AboutSection";
import CaseStudiesSection from "@/components/CaseStudiesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function Home() {
  const router = useRouter();

  // Initialize smooth scroll reveal animations
  useScrollReveal();

  const handleNavigateToAudit = () => {
    router.push("/audit");
  };

  const handleSeeHowWeWork = () => {
    const workElem = document.getElementById("how-we-work");
    if (workElem) {
      workElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectServiceTier = (_tierName: string) => {
    router.push("/audit");
  };

  return (
    <div className="min-h-screen bg-[#f4efe5] text-[#17232d] font-sans selection:bg-[#ffbd5f] selection:text-[#17232d] site-shell">
      {/* Scroll Progress Bar & Desktop Side Tracker */}
      <ScrollProgress />

      {/* Floating Header Navbar */}
      <Navbar onOpenAudit={handleNavigateToAudit} />

      {/* Main Continuous Scroll Sections */}
      <main>
        {/* 1. Diagnostic Positioning Hero */}
        <Hero
          onOpenAudit={handleNavigateToAudit}
          onSeeHowWeWork={handleSeeHowWeWork}
        />

        {/* 2. The Problem: "Most organisations run on a patchwork." */}
        <TheProblem onOpenAudit={handleNavigateToAudit} />

        {/* 3. How We Work: 7-Step Framework Strip & Full Step-by-Step Timeline */}
        <HowWeWork onOpenAudit={handleNavigateToAudit} />

        {/* 4. Services Page & Tier Cards (Free Audit, ₹50k, ₹1L, ₹2L, ₹10k/mo) */}
        <Services
          onOpenAudit={handleNavigateToAudit}
          onSelectServiceTier={handleSelectServiceTier}
        />

        {/* 5. Why BellCurve: Core Charter & Working Principles */}
        <WhyUs />

        {/* 6. About Page: Founder Story, Values, Leadership Team */}
        <AboutSection />

        {/* 7. Work / Case Studies: Early-Stage Interim Placeholder Copy */}
        <CaseStudiesSection onOpenAudit={handleNavigateToAudit} />

        {/* 8. Contact Page: Direct Details & Short Enquiry Form */}
        <ContactSection onOpenAudit={handleNavigateToAudit} />
      </main>

      {/* 9. Footer Essentials */}
      <Footer onOpenAudit={handleNavigateToAudit} />
    </div>
  );
}
