import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import SiteHeader from "@/tools/components/SiteHeader";
import SiteFooter from "@/tools/components/SiteFooter";

export const metadata: Metadata = {
  title: "Free Biz Tools",
  description:
    "Free calculators for pricing, ecommerce, marketing, and business planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-scroll-behavior="smooth">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-P6B0WBF0J7"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-P6B0WBF0J7');
          `}
        </Script>
      </head>
      <body className="bg-gray-50 text-gray-900 antialiased">
        <div className="min-h-screen">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
