import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PartnersWall from "@/components/PartnersWall";
import About from "@/components/About";
import NumbersImpact from "@/components/NumbersImpact";
import Integrations from "@/components/Integrations";
import Services from "@/components/Services";
import CostCalculator from "@/components/CostCalculator";
import AIEcosystem from "@/components/AIEcosystem";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <SmoothScrollProvider>
      {/* Top Red Glow Scroll Progress */}
      <ScrollProgress />

      <main className="min-h-screen bg-[#0D0204] text-white overflow-hidden selection:bg-[#FF0A2B] selection:text-white relative">
        {/* Header / Navbar with fast Lenis integration */}
        <Navbar />

        {/* Hero Section with Interactive Canvas Physics Grid */}
        <Hero />

        {/* Partners Marquee Wall */}
        <PartnersWall />

        {/* About Section */}
        <About />

        {/* Regional Live Interactive Map & Impact Numbers */}
        <NumbersImpact />

        {/* Integrations & Supported Platforms */}
        <Integrations />

        {/* Services Section with 3D Stack Cards & Modal */}
        <Services />

        {/* Interactive Cost & Growth Calculator */}
        <CostCalculator />

        {/* AI Marketing Ecosystem Network */}
        <AIEcosystem />

        {/* Features & Cybernetic AI Visual */}
        <Features />

        {/* Metrics & Performance Stats */}
        <Metrics />

        {/* Contact & Regional Branches */}
        <Contact />

        {/* Free Consultation & FAQ */}
        <Consultation />

        {/* Footer */}
        <Footer />

        {/* Floating Quick WhatsApp Button */}
        <FloatingWhatsApp />

        {/* Floating Back to Top with Scroll Ring */}
        <BackToTop />
      </main>
    </SmoothScrollProvider>
  );
}
