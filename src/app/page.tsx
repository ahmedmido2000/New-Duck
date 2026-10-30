"use client";

import Hero from "@/components/Hero";
import About from "@/components/About";
import Integrations from "@/components/Integrations";
import Services from "@/components/Services";
import AIEcosystem from "@/components/AIEcosystem";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import Portfolio from "@/components/Portfolio";
import Partners from "@/components/Partners";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0204] text-white overflow-hidden selection:bg-[#FF0A2B] selection:text-white relative">
      {/* Hero Section with Interactive Canvas Physics Grid */}
      <Hero />

      {/* Light Theme Section Wrapper: From About to Consultation */}
      <div className="bg-white text-[#0D0204]">
        {/* About Section */}
        <About />

        {/* Integrations & Supported Platforms */}
        <Integrations />

        {/* Services Section with 3D Stack Cards & Modal */}
        <Services />

        {/* AI Marketing Ecosystem Network */}
        <AIEcosystem />

        {/* Features & Cybernetic AI Visual */}
        <Features />

        {/* Metrics & Performance Stats */}
        <Metrics />

        {/* Portfolio & Case Studies */}
        <Portfolio />

        {/* Success Partners - Strategic Regional Clients */}
        <Partners />

        {/* FAQ Section */}
        <FAQ />

        {/* Contact & Regional Branches */}
        <Contact />

        {/* Free Consultation */}
        <Consultation />

        {/* Footer */}
        <Footer />
      </div>
    </main>
  );
}
