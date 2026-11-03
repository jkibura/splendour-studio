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

export type ProjectVisual = "editorial" | "commerce" | "platform";

export type ProjectGridSpan = 5 | 7 | 12;

export interface Project {
  id: string;
  title: string;
  category: string;
  year: number;
  description: string;
  tags: string[];
  visual: ProjectVisual;
  gridSpan: ProjectGridSpan;
  status: "Concept study" | "Client project";
}