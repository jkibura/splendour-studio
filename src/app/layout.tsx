import type { Metadata } from "next";
import { Inter } from "next/font/google";
import type { ReactNode } from "react";
import { siteConfig } from "../../data/siteConfig";
import { seoConfig } from "../../data/seo";
import { WhatsAppContact } from "../components/WhatsAppContact";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: siteConfig.siteUrl ? new URL(siteConfig.siteUrl) : undefined,
  title: {
    default: seoConfig.homeTitle,
    template: seoConfig.titleTemplate,
  },
  description: siteConfig.description,
  applicationName: `${siteConfig.name} ${siteConfig.descriptor}`,
  alternates: siteConfig.siteUrl ? { canonical: "/" } : undefined,
  openGraph: {
    type: "website",
    locale: seoConfig.socialLocale,
    siteName: `${siteConfig.name} ${siteConfig.descriptor}`,
    title: seoConfig.homeTitle,
    description: siteConfig.description,
    url: siteConfig.siteUrl,
    images: siteConfig.siteUrl ? ["/opengraph-image"] : undefined,
  },
  twitter: {
    card: "summary_large_image",
    title: seoConfig.homeTitle,
    description: siteConfig.description,
    images: siteConfig.siteUrl ? ["/opengraph-image"] : undefined,
  },
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
      <body>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: `${siteConfig.name} ${siteConfig.descriptor}`,
              description: siteConfig.description,
              ...(siteConfig.siteUrl ? { url: siteConfig.siteUrl } : {}),
              areaServed: [
                { "@type": "Country", name: "Kenya" },
                "International clients",
              ],
              contactPoint: {
                "@type": "ContactPoint",
                email: siteConfig.contactEmail,
                contactType: "Project enquiries",
              },
            }).replace(/</g, "\\u003c"),
          }}
        />
        <WhatsAppContact />
      </body>
    </html>
  );
}
