import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Integrations from "@/components/Integrations";
import Services from "@/components/Services";
import AIEcosystem from "@/components/AIEcosystem";
import Features from "@/components/Features";
import Metrics from "@/components/Metrics";
import Contact from "@/components/Contact";
import Consultation from "@/components/Consultation";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0D0204] text-white overflow-hidden selection:bg-[#FF0A2B] selection:text-white">
      {/* Header / Navbar */}
      <Navbar />

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Integrations & Supported Platforms */}
      <Integrations />

      {/* Services Section */}
      <Services />

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

      {/* Quick Floating WhatsApp Access */}
      <FloatingWhatsApp />
    </main>
  );
}
