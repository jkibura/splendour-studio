export interface NavigationLink {
  label: string;
  href: string;
}

export interface SiteConfig {
  name: string;
  descriptor: string;
  tagline: string;
  description: string;
  locationLabel: string;
  contactEmail: string;
  whatsapp: {
    phoneNumber: string;
    accountName: string;
    statusMessage: string;
    chatMessage: string;
  };
  navLinks: NavigationLink[];
  footerNote: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  capabilities: string[];
}

export type ProjectGridSpan = 5 | 7 | 12;

export interface Project {
  id: string;
  title: string;
  category: string;
  year: number;
  description: string;
  tags: string[];
  image: string;
  imageAlt: string;
  imageFocus?: "center" | "right" | "far-right";
  url?: string;
  caseStudy?: {
    challenge: string;
    approach: string;
    outcome?: string;
  };
  gridSpan: ProjectGridSpan;
  status: "Concept study" | "Client project";
}
