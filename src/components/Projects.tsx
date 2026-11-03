import { ArrowUpRight } from "lucide-react";
import type { Project } from "../types";
import { projects } from "../../data/projects";
import { Card } from "./ui/Card";

const gridSpanClasses: Record<Project["gridSpan"], string> = {
  5: "md:col-span-5",
  7: "md:col-span-7",
  12: "md:col-span-12",
};

function ProjectArtwork({ project }: { project: Project }) {
  if (project.visual === "editorial") {
    return (
      <div
        aria-hidden="true"
        className="relative min-h-[17rem] overflow-hidden bg-[#eae6df] p-5 sm:min-h-[20rem] sm:p-7"
      >
        <div className="flex items-center justify-between border-b border-zinc-700/15 pb-3">
          <span className="text-[9px] font-semibold tracking-[0.23em] text-zinc-700">
            ATELIER NORTH
          </span>

          <span className="text-[9px] tracking-[0.12em] text-zinc-500">
            SELECTED SPACES
          </span>
        </div>

        <div className="mt-7 grid grid-cols-[1fr_0.76fr] items-center gap-3 sm:mt-8 sm:gap-5">
          <div className="relative z-10">
            <p className="text-[9px] font-medium uppercase tracking-[0.17em] text-zinc-600">
              Architecture / 2026
            </p>

            <h3 className="mt-4 font-serif text-[2.15rem] leading-[0.98] tracking-[-0.055em] text-zinc-900 sm:text-[2.8rem]">
              Space
              <br />
              for life.
            </h3>

            <div className="mt-5 h-px w-10 bg-zinc-700/60" />

            <p className="mt-3 max-w-[15ch] text-[10px] leading-4 text-zinc-600">
              Places shaped by light, material, and time.
            </p>
          </div>

          <div className="relative aspect-[3/4] overflow-hidden bg-[#d2ccc1] p-3 sm:p-4">
            <div className="absolute inset-[12%] border border-zinc-700/40" />

            <div className="absolute bottom-[12%] left-[12%] right-[12%] top-[12%] grid grid-cols-2 gap-1">
              <div className="border border-zinc-600/20 bg-[#e4dfd6]" />
              <div className="border border-zinc-600/20 bg-[#c0b9ad]" />
            </div>

            <div className="absolute bottom-[12%] left-1/2 top-[12%] w-px -translate-x-1/2 bg-zinc-700/30" />

            <div className="absolute bottom-0 right-[20%] top-[38%] w-[16%] rounded-t-full bg-[#a6a091]/80" />
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between border-t border-zinc-700/15 pt-3">
          <span className="text-[9px] tracking-[0.1em] text-zinc-600">
            SELECTED PROJECTS
          </span>
          <span className="text-[9px] tracking-[0.1em] text-zinc-600">
            01 — 04
          </span>
        </div>
      </div>
    );
  }

  if (project.visual === "commerce") {
    return (
      <div
        aria-hidden="true"
        className="relative min-h-[17rem] overflow-hidden bg-zinc-950 p-5 text-white sm:min-h-[20rem] sm:p-7"
      >
        <div className="flex items-center justify-between border-b border-white/15 pb-3">
          <span className="text-[10px] font-semibold tracking-[0.18em]">
            GOODWELL
          </span>

          <span className="text-[9px] tracking-[0.1em] text-zinc-400">
            OBJECTS FOR EVERY DAY
          </span>
        </div>

        <div className="mt-7 grid grid-cols-[0.9fr_1.1fr] items-center gap-3 sm:mt-8">
          <div>
            <p className="text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-400">
              The daily collection
            </p>

            <h3 className="mt-4 max-w-[9ch] text-3xl font-medium leading-[1.02] tracking-[-0.055em] sm:text-4xl">
              Less, but better.
            </h3>

            <p className="mt-3 max-w-[18ch] text-[10px] leading-4 text-zinc-400">
              Considered essentials. Nothing extra.
            </p>

            <div className="mt-5 inline-flex items-center gap-2 border-b border-white/50 pb-1.5 text-[9px] font-medium tracking-[0.08em]">
              DISCOVER
              <ArrowUpRight size={11} strokeWidth={1.6} />
            </div>
          </div>

          <div className="relative flex min-h-36 items-center justify-center sm:min-h-44">
            <div className="absolute bottom-3 h-4 w-36 rounded-[50%] bg-white/10 blur-sm" />

            <div className="relative h-36 w-[4.7rem] rounded-t-[1.1rem] rounded-b-lg border border-white/25 bg-[#dedbd3] text-zinc-800 sm:h-40 sm:w-[5.2rem]">
              <div className="absolute -top-3 left-1/2 h-4 w-8 -translate-x-1/2 rounded-t-md border border-white/25 bg-[#b4b0a6]" />

              <div className="absolute inset-x-2 top-[38%] border-y border-zinc-500/25 py-3 text-center">
                <span className="block text-[7px] font-bold tracking-[0.16em]">
                  GOODWELL
                </span>

                <span className="mt-2 block text-[6px] tracking-[0.08em]">
                  DAILY FORM
                </span>

                <span className="mt-1 block text-[6px] tracking-[0.08em]">
                  01 / 250 ML
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-5 flex items-center justify-between border-t border-white/15 pt-3">
          <span className="text-[9px] tracking-[0.12em] text-zinc-400">
            NEW ARRIVALS
          </span>
          <span className="text-[9px] tracking-[0.12em] text-zinc-400">
            01 — 06
          </span>
        </div>
      </div>
    );
  }

  return (
    <div
      aria-hidden="true"
      className="relative min-h-[17rem] overflow-hidden bg-[#eeefec] p-5 sm:min-h-[20rem] sm:p-7"
    >
      <div className="flex items-center justify-between border-b border-zinc-300 pb-3">
        <span className="text-[9px] font-semibold uppercase tracking-[0.16em] text-zinc-800">
          MERIDIAN / SYSTEMS
        </span>

        <span className="text-[9px] text-zinc-500">PLATFORM OVERVIEW</span>
      </div>

      <div className="mt-6 grid gap-3 sm:grid-cols-[0.9fr_1.1fr]">
        <div className="flex min-h-40 flex-col justify-center">
          <p className="text-[9px] font-semibold uppercase tracking-[0.17em] text-zinc-500">
            Clarity at every layer
          </p>

          <h3 className="mt-4 max-w-[10ch] text-3xl font-semibold leading-[1.02] tracking-[-0.055em] text-zinc-950 sm:text-4xl">
            Complex work.
            <br />
            Clear systems.
          </h3>

          <p className="mt-3 max-w-[24ch] text-[10px] leading-4 text-zinc-600">
            One considered view of the work that moves your business forward.
          </p>
        </div>

        <div className="self-center rounded-xl border border-zinc-200 bg-white p-3 shadow-[0_10px_30px_-24px_rgba(0,0,0,0.3)] sm:p-4">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[10px] font-semibold text-zinc-800">
              Operations overview
            </span>

            <span className="rounded-full border border-zinc-200 px-2 py-1 text-[8px] text-zinc-500">
              DEMO
            </span>
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <div className="rounded-lg bg-zinc-50 p-2.5">
              <span className="block text-[8px] text-zinc-500">
                Active projects
              </span>
              <span className="mt-1.5 block text-xl font-semibold tracking-[-0.05em] text-zinc-900">
                08
              </span>
            </div>

            <div className="rounded-lg bg-zinc-50 p-2.5">
              <span className="block text-[8px] text-zinc-500">
                In progress
              </span>
              <span className="mt-1.5 block text-xl font-semibold tracking-[-0.05em] text-zinc-900">
                04
              </span>
            </div>
          </div>

          <div className="mt-3 space-y-2">
            {[
              { label: "Design system", width: "w-[82%]" },
              { label: "Platform build", width: "w-[64%]" },
              { label: "Quality review", width: "w-[46%]" },
            ].map((item) => (
              <div key={item.label}>
                <div className="mb-1 flex justify-between text-[8px] text-zinc-500">
                  <span>{item.label}</span>
                  <span>Active</span>
                </div>

                <div className="h-1 overflow-hidden rounded-full bg-zinc-100">
                  <div
                    className={`h-full rounded-full bg-zinc-800 ${item.width}`}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
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
              Selected work
            </p>

            <h2
              id="work-heading"
              className="mt-5 max-w-[12ch] text-4xl font-semibold leading-[1.1] tracking-[-0.055em] text-zinc-950 sm:text-5xl"
            >
              Good work speaks clearly.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-zinc-600">
            A glimpse into how considered design and solid engineering can
            shape a digital experience.
          </p>
        </div>

        <p className="mt-5 max-w-2xl text-xs leading-5 text-zinc-500">
          The examples below are concept studies created to demonstrate our
          design direction. They are not presented as commissioned client
          projects or verified business results.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-12">
          {projects.map((project) => {
            const isWide = project.gridSpan === 12;

            return (
              <article
                key={project.id}
                className={gridSpanClasses[project.gridSpan]}
              >
                <Card className="group h-full overflow-hidden rounded-[1.4rem] border-zinc-200 shadow-none transition-colors duration-200 hover:border-zinc-300">
                  <div
                    className={
                      isWide
                        ? "grid h-full md:grid-cols-[1.05fr_0.95fr]"
                        : "flex h-full flex-col"
                    }
                  >
                    <ProjectArtwork project={project} />

                    <div className="flex flex-1 flex-col p-6 sm:p-7">
                      <div className="flex flex-wrap items-center gap-2">
                        <span className="rounded-full border border-zinc-200 bg-zinc-50 px-2.5 py-1.5 text-[10px] font-medium text-zinc-600">
                          {project.status}
                        </span>

                        <span className="text-[10px] text-zinc-400">
                          {project.year}
                        </span>
                      </div>

                      <p className="mt-5 text-[10px] font-semibold uppercase tracking-[0.15em] text-zinc-500">
                        {project.category}
                      </p>

                      <div className="mt-2 flex items-start justify-between gap-4">
                        <h3 className="text-2xl font-semibold tracking-[-0.045em] text-zinc-950 sm:text-[1.7rem]">
                          {project.title}
                        </h3>

                        <span
                          aria-hidden="true"
                          className="mt-1 flex size-9 shrink-0 items-center justify-center rounded-full border border-zinc-200 text-zinc-600 transition-all duration-200 group-hover:border-zinc-900 group-hover:bg-zinc-900 group-hover:text-white"
                        >
                          <ArrowUpRight size={16} strokeWidth={1.7} />
                        </span>
                      </div>

                      <p className="mt-4 max-w-xl text-sm leading-6 text-zinc-600">
                        {project.description}
                      </p>

                      <div className="mt-auto flex flex-wrap gap-2 pt-6">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full bg-zinc-100 px-2.5 py-1.5 text-[10px] font-medium text-zinc-600"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Card>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}