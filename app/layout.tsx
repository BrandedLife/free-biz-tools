import type { Metadata } from "next";
import Script from "next/script";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/tools/components/SiteHeader";
import SiteFooter from "@/tools/components/SiteFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} bg-gray-50 text-gray-900 antialiased`}
      >
        <div className="min-h-screen">
          <SiteHeader />
          {children}
          <SiteFooter />
        </div>

        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-1Y4PK92CPG"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-1Y4PK92CPG');
          `}
        </Script>
      </body>
    </html>
  );
}