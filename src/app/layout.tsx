import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { siteConfig } from "../../data/siteConfig";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: `${siteConfig.name} ${siteConfig.descriptor} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name} ${siteConfig.descriptor}`,
  },
  description:
    `${siteConfig.description} ${siteConfig.tagline}, and a clear path from idea to launch.`,
  applicationName: `${siteConfig.name} ${siteConfig.descriptor}`,
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
