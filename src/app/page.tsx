"use client";

import React, { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import RevampSimulator from "@/components/RevampSimulator";
import WhyUs from "@/components/WhyUs";
import ProcessTimeline from "@/components/ProcessTimeline";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenConsultation = () => {
    const contactElem = document.getElementById("contact");
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    handleOpenConsultation();
  };

  return (
    <div className="min-h-screen bg-[#121214] text-[#F3F3F5] font-sans selection:bg-[#E5B842]/30 selection:text-[#E5B842]">
      {/* Floating Cream Navbar */}
      <Navbar onOpenConsultation={handleOpenConsultation} />

      {/* Main Content Sections */}
      <main>
        {/* Editorial Hero */}
        <Hero onOpenConsultation={handleOpenConsultation} />

        {/* Services Showcase (What We Build) */}
        <Services onSelectService={handleSelectService} />

        {/* Website Revamp & Upgrade Simulator */}
        <RevampSimulator onOpenConsultation={handleOpenConsultation} />

        {/* Why Work With Us */}
        <WhyUs />

        {/* 5-Step Development Process Timeline */}
        <ProcessTimeline />

        {/* Who We Work With */}
        <WhoWeWorkWith onOpenConsultation={handleOpenConsultation} />

        {/* Contact & Consultation Request Form */}
        <ContactSection
          initialService={selectedService}
        />
      </main>

      {/* Footer */}
      <Footer onOpenConsultation={handleOpenConsultation} />
    </div>
  );
}
