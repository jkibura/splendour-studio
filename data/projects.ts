import type { Project } from "../src/types";

// Add project images to /public/projects and reference them here. Landscape
// screenshots around 16:9 work especially well in the project cards.
export const projects: Project[] = [
  {
    id: "keli",
    title: "Keli",
    category: "E-commerce · Retail",
    year: 2026,
    description:
      "An online store for Keli, designed to make discovering the collection and shopping for its products feel simple and considered.",
    tags: ["E-commerce", "Online store", "Responsive design"],
    image: "/projects/keli-logo.webp",
    imageAlt: "Keli online store project",
    imageFocus: "right",
    gridSpan: 7,
    status: "Client project",
    url: "https://keli-ecom.vercel.app"
  },
  {
    id: "script-iq",
    title: "Script IQ",
    category: "Stationery · E-commerce",
    year: 2026,
    description:
      "A distinctive digital home for a notebook brand, bringing its products and point of view together in a clear, welcoming storefront.",
    tags: ["Brand experience", "E-commerce", "Product design"],
    image: "/projects/script-iq-logo.webp",
    imageAlt: "Script IQ notebook brand project",
    imageFocus: "right",
    gridSpan: 5,
    status: "Client project",
    url: "https://script-iq-alpha.vercel.app"
  },
  {
    id: "psychology-practice",
    title: "Dr. Sarah Mitchell, PsyD",
    category: "Psychology · Private practice",
    year: 2026,
    description:
      "A calm, approachable website for a psychology practice, helping prospective clients understand its services and take the next step.",
    tags: ["Healthcare", "Service website", "Accessibility"],
    image: "/projects/psychology.webp",
    imageAlt: "Psychology practice homepage for Dr. Sarah Mitchell, PsyD",
    imageFocus: "far-right",
    cardImage: "/projects/psychology-practice.svg",
    cardImageAlt: "Minimal illustrated preview of the psychology practice website",
    cardImageFocus: "center",
    gridSpan: 12,
    status: "Client project",
    url: "https://psyd-two.vercel.app"
  },
];

export const projectsContent = {
  eyebrow: "Selected work",
  title: "Good work speaks clearly.",
  introduction:
    "A glimpse into how considered design and solid engineering can shape a digital experience.",
  detailLink: "Explore project",
};
