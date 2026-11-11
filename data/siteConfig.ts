import type { SiteConfig } from "../src/types";

export const siteConfig: SiteConfig = {
  name: "SPLENDOUR",
  descriptor: "Studio",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, ""),
  tagline: "Thoughtful design. Serious engineering.",
  description:
    "SPLENDOUR Studio is an independent web design and development studio serving businesses across Kenya and internationally. We build bespoke business websites, e-commerce experiences, and custom digital products.",
  locationLabel: "Serving Kenya & international clients",
  contactEmail: "jkibura001@gmail.com",
  whatsapp: {
    phoneNumber: "254799805123",
    accountName: "Splendour Studio",
    statusMessage: "Tell us what you’re building",
    chatMessage: "Hi there! 👋 Welcome to Splendour Studio. How can we help you today?",
  },
  navLinks: [
    {
      label: "Services",
      href: "#services",
    },
    {
      label: "Selected work",
      href: "#work",
    },
    {
      label: "Our approach",
      href: "#approach",
    },
  ],
  footerNote: "Digital craft, delivered with care.",
};
