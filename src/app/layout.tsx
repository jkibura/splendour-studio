import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "SPLENDOUR Studio — Thoughtful Design. Serious Engineering.",
    template: "%s | SPLENDOUR Studio",
  },
  description:
    "An independent digital studio creating considered websites and web experiences for ambitious businesses. Thoughtful design, serious engineering, and a clear path from idea to launch.",
  applicationName: "SPLENDOUR Studio",
  keywords: [
    "web development studio",
    "website design",
    "custom web development",
    "e-commerce development",
    "frontend engineering",
    "Kenya",
  ],
  robots: {
    index: true,
    follow: true,
  },
};

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" className={inter.variable}>
      <body>{children}</body>
    </html>
  );
}