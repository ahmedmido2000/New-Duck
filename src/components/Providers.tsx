"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { LanguageProvider } from "@/context/LanguageContext";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import ScrollProgress from "@/components/ScrollProgress";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import BackToTop from "@/components/BackToTop";

function LayoutShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <div className="min-h-screen bg-[#0D0204] text-white overflow-hidden selection:bg-[#FF0A2B] selection:text-white relative flex flex-col">
      {/* Universal Sticky / Fixed Navigation Header */}
      <Navbar />

      {/* Page Body */}
      <div className="flex-1 w-full">{children}</div>

      {/* Footer — only on sub-pages; homepage includes it inside its own bg-white wrapper */}
      {!isHomePage && (
        <div className="bg-white text-[#0D0204]">
          <Footer />
        </div>
      )}

      {/* Universal Floating Widgets */}
      <FloatingWhatsApp />
      <BackToTop />
    </div>
  );
}

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <LanguageProvider>
      <SmoothScrollProvider>
        {/* Laser Scroll Progress at top of viewport */}
        <ScrollProgress />
        <LayoutShell>{children}</LayoutShell>
      </SmoothScrollProvider>
    </LanguageProvider>
  );
}
