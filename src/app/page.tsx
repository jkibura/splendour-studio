// import { CTA } from "@/components/CTA";
import { CTA } from "../components/CTA";
import { Hero } from "../components/Hero";
import { Projects } from "../components/Projects";
import { Services } from "../components/Services";

export default function HomePage() {
  return (
    <>
      <a href="#hero-content" className="skip-link">
        Skip to main content
      </a>

      <Hero />

      <main id="main-content">
        <Services />
        <Projects />
        <CTA />
      </main>
    </>
  );
}