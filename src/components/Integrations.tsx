"use client";

import { ShoppingBag, Globe, Share2, Video, Search, Smartphone, Layers, Check } from "lucide-react";

export default function Integrations() {
  const platforms = [
    { name: "Shopify", category: "متجر إلكتروني عالمي", icon: ShoppingBag },
    { name: "WordPress", category: "مواقع ومتاجر متطورة", icon: Globe },
    { name: "Salla", category: "منصة سلة السعودية", icon: Layers },
    { name: "Zid", category: "منصة زد للتجارة", icon: Check },
    { name: "Meta", category: "إعلانات فيسبوك وإنستغرام", icon: Share2 },
    { name: "TikTok", category: "إعلانات تيك توك التفاعلية", icon: Video },
    { name: "Google Ads", category: "إعلانات بحث ويوتيوب", icon: Search },
    { name: "Snapchat", category: "إعلانات سناب شات المستهدفة", icon: Smartphone },
  ];

  return (
    <section className="py-16 sm:py-24 px-4 sm:px-8 lg:px-16 bg-[#0D0204] border-t border-[#3A0C15]/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-xl sm:text-3xl lg:text-4xl font-extrabold text-white text-center leading-relaxed max-w-4xl mx-auto mb-10 sm:mb-14">
          ندعم تكاملك مع منصات التجارة الإلكترونية وأدوات الإدارة الذكية، كل ما تحتاجه في مسار واحد
        </h2>

        {/* Responsive Grid: 2 cols on mobile, 4 cols on sm/desktop */}
        <div
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 lg:gap-6"
          style={{ direction: "ltr" }}
        >
          {platforms.map((platform) => {
            const Icon = platform.icon;
            return (
              <div
                key={platform.name}
                className="platform-cell group relative flex flex-col items-center justify-center min-h-[120px] sm:min-h-[150px] p-4 rounded-xl border border-[#2E0A11] bg-[#12030A]/60 hover:bg-gradient-to-br hover:from-[#FF0A2B]/15 hover:to-transparent hover:border-[#FF0A2B]/50 transition-all duration-300 cursor-pointer overflow-hidden"
              >
                {/* Background Subtle Icon Glow */}
                <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-[#FF0A2B]/5 rounded-full blur-xl group-hover:bg-[#FF0A2B]/20 transition-all" />

                <Icon className="w-6 h-6 sm:w-8 sm:h-8 text-[#6C4B50] group-hover:text-[#FF0A2B] transition-colors mb-2" />
                <span className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-[#8A6368] group-hover:text-white transition-colors tracking-tight">
                  {platform.name}
                </span>
                <span className="text-[11px] sm:text-xs text-[#C9A4A8]/60 group-hover:text-[#FFB3BE] transition-colors mt-1 font-semibold text-center font-cairo">
                  {platform.category}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
