import type { SiteConfig } from "../src/types";

export const siteConfig: SiteConfig = {
  name: "SPLENDOUR",
  descriptor: "Studio",
  tagline: "Thoughtful design. Serious engineering.",
  description:
    "An independent digital studio creating considered websites and web experiences for ambitious businesses.",
  locationLabel: "Independent digital studio · Kenya & beyond",
  contactEmail: "jkibura001@gmail.com",
  whatsapp: {
    phoneNumber: "254799805123",
    accountName: "SPLENDOUR Studio",
    statusMessage: "Typically replies within a business day",
    chatMessage: "Hello! I’d like to discuss a project.",
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
