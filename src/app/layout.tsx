import "./globals.css";
import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const space_grotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
});

import { Toaster } from "@/components/ui/toaster";
import { useEffect } from "react";

export const metadata: Metadata = {
  title: "Von Garcia - NYC",
  description: "Just another nerd's website.... but cooler",
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
        <main>{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
