import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Navbar from "@/components/navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  metadataBase: new URL("https://vongarcia.nyc"),
  title: "Von Garcia — Software Engineer, Travel Tech",
  description:
    "Software engineer at Amex GBT building the systems between Sabre GDS and the back office — commission reconciliation, PNR data, and internal tooling for host travel agencies.",
  keywords: [
    "Von Garcia",
    "software engineer",
    "travel technology",
    "Sabre GDS",
    "TypeScript",
    "Next.js",
    "commission reconciliation",
    "host agency",
  ],
  authors: [{ name: "Von Garcia", url: "https://vongarcia.nyc" }],
  openGraph: {
    title: "Von Garcia — Software Engineer, Travel Tech",
    description:
      "I build the software that sits between a travel booking and the money it generates.",
    url: "https://vongarcia.nyc",
    siteName: "Von Garcia",
    images: [{ url: "/headshot.jpg", width: 400, height: 400 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Von Garcia — Software Engineer, Travel Tech",
    description:
      "I build the software that sits between a travel booking and the money it generates.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${space_grotesk.variable} font-sans`}>
        <div className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full top-1/2 w-96 h-96 bg-foreground/5 blur-[100px] -z-50" />
        <div className="grid-line" />
        <Navbar />
        <main>
          {children}
          <SpeedInsights />
          <Analytics />
        </main>
        <Toaster />
      </body>
    </html>
  );
}
