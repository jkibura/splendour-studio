import type { Project } from "../src/types";

export const projects: Project[] = [
  {
    id: "atelier-north",
    title: "Atelier North",
    category: "Architecture & interiors",
    year: 2026,
    description:
      "An editorial-style digital presence that gives architectural work room to breathe. The experience pairs a restrained visual system with a clear, portfolio-first structure.",
    tags: ["Art direction", "Next.js", "Responsive design"],
    visual: "editorial",
    gridSpan: 7,
    status: "Concept study",
  },
  {
    id: "goodwell-market",
    title: "Goodwell Market",
    category: "Consumer goods & commerce",
    year: 2026,
    description:
      "A considered storefront concept built around product clarity, simple navigation, and a shopping experience that feels confident rather than crowded.",
    tags: ["E-commerce UX", "Product design", "Frontend"],
    visual: "commerce",
    gridSpan: 5,
    status: "Concept study",
  },
  {
    id: "meridian-systems",
    title: "Meridian Systems",
    category: "B2B technology",
    year: 2026,
    description:
      "A digital platform concept for a service-led technology company, translating complex capabilities into a clearer product narrative and a structured interface.",
    tags: ["Information architecture", "UI systems", "React"],
    visual: "platform",
    gridSpan: 12,
    status: "Concept study",
  },
];