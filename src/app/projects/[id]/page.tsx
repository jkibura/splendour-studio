import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { notFound } from "next/navigation";
import { projects } from "../../../../data/projects";
import { projectPageContent } from "../../../../data/projectPages";
import { siteConfig } from "../../../../data/siteConfig";
import { projectImageFocusClasses } from "../../../lib/projectImageFocus";

interface ProjectPageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams() {
  return projects.map(({ id }) => ({ id }));
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  return project
    ? {
        title: `${project.title} — ${projectPageContent.metadataSuffix}`,
        description: project.description,
        alternates: siteConfig.siteUrl
          ? { canonical: `/projects/${project.id}` }
          : undefined,
        robots: { index: Boolean(project.caseStudy), follow: true },
        openGraph: {
          type: "article",
          title: `${project.title} — ${projectPageContent.metadataSuffix}`,
          description: project.description,
          images: siteConfig.siteUrl ? [project.image] : undefined,
        },
        twitter: {
          card: "summary_large_image",
          title: `${project.title} — ${projectPageContent.metadataSuffix}`,
          description: project.description,
          images: siteConfig.siteUrl ? [project.image] : undefined,
        },
      }
    : { title: "Project not found" };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { id } = await params;
  const project = projects.find((item) => item.id === id);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[var(--color-surface)]">
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 sm:pb-28 sm:pt-10 lg:px-12">
        <Link href="/#work" className="inline-flex items-center gap-2 text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-950">
          <ArrowLeft size={16} aria-hidden="true" />
          {projectPageContent.backLink}
        </Link>

        <header className="max-w-4xl pb-10 pt-16 sm:pb-14 sm:pt-24">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{projectPageContent.eyebrow} · {project.category}</p>
          <h1 className="mt-5 text-5xl font-semibold leading-[1.02] tracking-[-0.065em] text-zinc-950 sm:text-7xl">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">{project.description}</p>
          <div className="mt-7 flex flex-wrap gap-2">
            {project.tags.map((tag) => <span key={tag} className="rounded-full border border-zinc-200 bg-white px-3 py-2 text-xs font-medium text-zinc-600">{tag}</span>)}
          </div>
        </header>

        <div className="relative min-h-68 overflow-hidden rounded-[1.5rem] border border-zinc-200 bg-[var(--color-image-placeholder)] sm:min-h-80 md:aspect-[16/9] md:min-h-0 sm:rounded-[2rem]">
          <Image src={project.image} alt={project.imageAlt} fill priority sizes="(min-width: 1280px) 1280px, 100vw" className={`object-cover ${projectImageFocusClasses[project.imageFocus ?? "center"]}`} />
        </div>

        <div className="grid gap-10 border-b border-zinc-200 py-12 sm:py-16 md:grid-cols-[0.65fr_1fr] md:gap-16">
          <h2 className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">{projectPageContent.overviewLabel}</h2>
          <div>
            <p className="text-base leading-7 text-zinc-700 sm:text-lg sm:leading-8">{project.description}</p>
            {project.caseStudy ? (
              <div className="mt-8 grid gap-8 border-t border-zinc-200 pt-8 sm:grid-cols-2">
                <div><h3 className="text-sm font-semibold text-zinc-900">{projectPageContent.challengeLabel}</h3><p className="mt-3 text-sm leading-6 text-zinc-600">{project.caseStudy.challenge}</p></div>
                <div><h3 className="text-sm font-semibold text-zinc-900">{projectPageContent.approachLabel}</h3><p className="mt-3 text-sm leading-6 text-zinc-600">{project.caseStudy.approach}</p></div>
                {project.caseStudy.outcome && <div className="sm:col-span-2"><h3 className="text-sm font-semibold text-zinc-900">{projectPageContent.outcomeLabel}</h3><p className="mt-3 text-sm leading-6 text-zinc-600">{project.caseStudy.outcome}</p></div>}
              </div>
            ) : (
              <div className="mt-8 rounded-2xl border border-zinc-200 bg-white p-6 sm:p-8">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-950">{projectPageContent.storyPending}</h3>
                <p className="mt-3 max-w-xl text-sm leading-6 text-zinc-600">{projectPageContent.storyPendingDescription}</p>
              </div>
            )}
          </div>
        </div>

        <div className="grid gap-8 py-10 sm:grid-cols-2 sm:py-12">
          <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">{projectPageContent.scopeLabel}</p><p className="mt-3 text-sm leading-6 text-zinc-700">{project.tags.join(" · ")}</p></div>
          {project.url && <div><p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-500">{projectPageContent.exploreLabel}</p><a href={project.url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-zinc-900 underline decoration-zinc-300 underline-offset-4 hover:decoration-zinc-900">{projectPageContent.liveLink}<ArrowUpRight size={15} /></a></div>}
        </div>

        <footer className="flex flex-col gap-4 border-t border-zinc-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-zinc-600">{projectPageContent.contact}</p>
          <a href={`mailto:${siteConfig.contactEmail}`} className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-950">{projectPageContent.contactLink}<ArrowUpRight size={15} /></a>
        </footer>
      </div>
    </main>
  );
}
