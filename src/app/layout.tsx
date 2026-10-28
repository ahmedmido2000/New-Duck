import type { Metadata, Viewport } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";

const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Duck Agency | وكالة التسويق الرقمي وبناء العلامات التجارية",
  description:
    "في Duck نصنع محتوى وإعلانات تبني حضور قوي لعلامتك وتوصلك للعملاء الصح وتحوّل الاهتمام إلى نتائج حقيقية. استشارات تسويقية، إدارة حملات، إنشاء متاجر، وتطوير مواقع.",
  keywords: [
    "Duck Agency",
    "تسويق رقمي",
    "إعلانات ممولة",
    "تصميم مواقع",
    "متاجر إلكترونية",
    "تحسين محركات البحث",
    "SEO",
    "هوية بصرية",
    "وكالة تسويق مصر والسعودية",
  ],
  authors: [{ name: "Duck Agency" }],
  openGraph: {
    title: "Duck Agency | وكالة دك للتسويق الرقمي",
    description:
      "شريكك في بناء حضور رقمي يليق بطموحك. نصنع محتوى وإعلانات تبني حضور قوي لعلامتك وتوصلك للعملاء الصح.",
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
        {children}
      </body>
    </html>
  );
}
