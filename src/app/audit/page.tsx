"use client";

import Navbar from "@/components/Navbar";
import FreeAuditSection from "@/components/FreeAuditSection";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function AuditPage() {
  useScrollReveal();

  return (
    <div className="min-h-screen bg-[#f4efe5] text-[#17232d] font-sans selection:bg-[#ffbd5f] selection:text-[#17232d] site-shell">
      {/* Scroll Progress Bar */}
      <ScrollProgress />

      {/* Header Navbar */}
      <Navbar />

      {/* Main Free Audit Dedicated Page Content */}
      <main className="pt-20">
        <FreeAuditSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
