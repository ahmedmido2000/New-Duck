import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import Providers from "@/components/Providers";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duck Agency | للرؤية أثر — وكالة تسويق وخدمات إبداعية متكاملة",
  description:
    "Duck شركة دعاية وتسويق تقدم حلولاً متكاملة للشركات والمشاهير والأفراد في مصر (6 أكتوبر - الحصري) والسعودية (الرياض). بناء الهوية البصرية، إدارة السوشيال ميديا، المونتاج، والتصميم.",
  keywords: [
    "Duck Agency",
    "للرؤية أثر",
    "تسويق رقمي",
    "إعلانات ممولة",
    "تصميم مواقع",
    "متاجر إلكترونية",
    "تحسين محركات البحث",
    "SEO",
    "هوية بصرية",
    "وكالة تسويق مصر والسعودية",
    "6 أكتوبر",
    "الرياض",
  ],
  authors: [{ name: "Duck Agency" }],
  openGraph: {
    title: "Duck Agency | للرؤية أثر — وكالة تسويق وخدمات إبداعية متكاملة",
    description:
      "Duck شركة دعاية وتسويق تقدم حلولاً متكاملة للشركات والمشاهير والأفراد في مصر (6 أكتوبر - الحصري) والسعودية (الرياض).",
    type: "website",
    locale: "ar_AR",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0D0204",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="bg-[#0D0204] text-white font-cairo antialiased selection:bg-[#FF0A2B] selection:text-white">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
