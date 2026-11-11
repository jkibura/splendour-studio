import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types";
import { projectImageFocusClasses } from "../lib/projectImageFocus";
import { projects, projectsContent } from "../../data/projects";
import { Card } from "./ui/Card";

const gridSpanClasses: Record<Project["gridSpan"], string> = {
  5: "md:col-span-5",
  7: "md:col-span-7",
  12: "md:col-span-12",
};

function ProjectImage({ project }: { project: Project }) {
  const image = project.cardImage ?? project.image;
  const alt = project.cardImageAlt ?? project.imageAlt;

  return (
    <div className="project-image relative min-h-68 overflow-hidden bg-[var(--color-image-placeholder)] sm:min-h-80">
      <Image
        src={image}
        alt={alt}
        fill
        sizes="(min-width: 768px) 58vw, 100vw"
        className={`object-cover transition-transform duration-500 group-hover:scale-[1.025] ${projectImageFocusClasses[project.cardImageFocus ?? project.imageFocus ?? "center"]}`}
      />
    </div>
  );
}

export function Projects() {
  return (
    <section
      id="work"
      aria-labelledby="work-heading"
      className="scroll-mt-16 border-b border-zinc-200 bg-[#fafaf9] py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              {projectsContent.eyebrow}
            </p>
            <h2 id="work-heading" className="mt-5 max-w-[12ch] text-4xl font-semibold leading-[1.1] tracking-[-0.055em] text-zinc-950 sm:text-5xl">
              {projectsContent.title}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-zinc-600">{projectsContent.introduction}</p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12">
          {projects.map((project) => (
            <article key={project.id} className={gridSpanClasses[project.gridSpan]}>
              <Card className="group h-full overflow-hidden rounded-[1.4rem] border-zinc-200 shadow-none transition-colors duration-200 hover:border-zinc-300">
                <div className={project.gridSpan === 12 ? "grid h-full md:grid-cols-[1.05fr_0.95fr]" : "flex h-full flex-col"}>
                  <ProjectImage project={project} />
                  <div className="flex flex-1 flex-col p-6 sm:p-7">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-[10px] font-medium text-zinc-600">{project.status}</span>
                      <span className="text-[10px] text-zinc-400">{project.year}</span>
                    </div>
                    <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">{project.category}</p>
                    <div className="mt-2 flex items-start justify-between gap-4">
                      <h3 className="text-2xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-[1.7rem]"><Link href={`/projects/${project.id}`} className="rounded-sm transition-colors hover:text-zinc-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-zinc-900">{project.title}</Link></h3>
                      {project.url ? (
                        <a href={project.url} target="_blank" rel="noreferrer" aria-label={`Visit ${project.title}`} className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white">
                          <ArrowUpRight size={16} strokeWidth={1.7} />
                        </a>
                      ) : (
                        <span aria-hidden="true" className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-600">
                          <ArrowUpRight size={16} strokeWidth={1.7} />
                        </span>
                      )}
                    </div>
                    <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600">{project.description}</p>
                    <div className="mt-auto flex flex-wrap gap-2 pt-7">
                      {project.tags.map((tag) => <span key={tag} className="rounded-full bg-zinc-100 px-2.5 py-1.5 text-[10px] font-medium text-zinc-600">{tag}</span>)}
                    </div>
                    <Link href={`/projects/${project.id}`} className="mt-6 inline-flex w-fit items-center gap-2 text-xs font-semibold text-zinc-800 transition-colors hover:text-zinc-500">
                      {projectsContent.detailLink} <ArrowUpRight size={14} strokeWidth={1.8} aria-hidden="true" />
                    </Link>
                  </div>
                </div>
              </Card>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
