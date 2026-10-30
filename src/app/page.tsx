import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { LanguageProvider } from "@/context/LanguageContext";
import ScrollProgress from "@/components/ScrollProgress";
import CustomCursor from "@/components/CustomCursor";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Integrations from "@/components/Integrations";
import Services from "@/components/Services";
import AIEcosystem from "@/components/AIEcosystem";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";

export default function Home() {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        {/* Top Red Glow Scroll Progress */}
        <ScrollProgress />

        {/* Global Creative Agency Interactive Custom Cursor (Desktop Only) */}
        <CustomCursor />

        <main className="min-h-screen bg-[#0D0204] text-white overflow-hidden selection:bg-[#FF0A2B] selection:text-white relative">
          {/* Header / Navbar with fast Lenis integration */}
          <Navbar />

          {/* Hero Section with Interactive Canvas Physics Grid */}
          <Hero />

          {/* Light Theme Section Wrapper: From About to Footer */}
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

            {/* FAQ Section */}
            <FAQ />

            {/* Contact & Regional Branches */}
            <Contact />

            {/* Free Consultation & FAQ */}
            <Consultation />

            {/* Footer */}
            <Footer />
          </div>

          {/* Floating Quick WhatsApp Button */}
          <FloatingWhatsApp />

          {/* Floating Back to Top with Scroll Ring */}
          <BackToTop />
        </main>
      </SmoothScrollProvider>
    </LanguageProvider>
  );
}
