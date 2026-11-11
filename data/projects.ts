import type { Project } from "../src/types";

// Add project images to /public/projects and reference them here (for example,
// "/projects/keli-storefront.jpg"). Use a 4:3 landscape image for best results.
export const projects: Project[] = [
  {
    id: "keli",
    title: "Keli",
    category: "E-commerce · Retail",
    year: 2026,
    description:
      "An online store for Keli, designed to make discovering the collection and shopping for its products feel simple and considered.",
    tags: ["E-commerce", "Online store", "Responsive design"],
    image: "/projects/keli.webp",
    imageAlt: "Keli online store project",
    gridSpan: 7,
    status: "Client project",
  },
  {
    id: "script-iq",
    title: "Script IQ",
    category: "Stationery · E-commerce",
    year: 2026,
    description:
      "A distinctive digital home for a notebook brand, bringing its products and point of view together in a clear, welcoming storefront.",
    tags: ["Brand experience", "E-commerce", "Product design"],
    image: "/projects/script-iq.webp",
    imageAlt: "Script IQ notebook brand project",
    gridSpan: 5,
    status: "Client project",
  },
  {
    id: "psychology-practice",
    title: "Psychology Practice",
    category: "Wellness · Professional services",
    year: 2026,
    description:
      "A calm, approachable website for a psychology practice, helping prospective clients understand its services and take the next step.",
    tags: ["Healthcare", "Service website", "Accessibility"],
    image: "/projects/psychology.webp",
    imageAlt: "Psychology practice website project",
    gridSpan: 12,
    status: "Client project",
  },
];

export const projectsContent = {
  eyebrow: "Selected work",
  title: "Good work speaks clearly.",
  introduction:
    "A glimpse into how considered design and solid engineering can shape a digital experience.",
};
