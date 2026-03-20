import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "AutoPrise — The Autonomous AI Workforce for the Sovereign Enterprise",
  description: "Deploy role-based, full-stack AI agents locally on your infrastructure. SOC2 compliant, privacy-first, and built for modern MSPs to monetize human intent.",
  keywords: ["AI Agents", "Autonomous Workforce", "MSP Automation", "Local AI", "Sovereign AI", "IT Automation"],
  openGraph: {
    title: "AutoPrise — The Autonomous AI Workforce",
    description: "Deploy role-based, full-stack AI agents locally on your infrastructure.",
    url: "https://autopriseai.com",
    siteName: "AutoPrise",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "AutoPrise — The Autonomous AI Workforce",
    description: "Deploy role-based, full-stack AI agents locally on your infrastructure.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
