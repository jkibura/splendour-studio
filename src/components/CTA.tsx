import { ArrowUpRight, Check } from "lucide-react";
import { siteConfig } from "../../data/siteConfig";
import { Button } from "./ui/Button";

const engagementPrinciples = [
  "Clear scope and expectations",
  "Direct communication",
  "A considered, maintainable result",
];

export function CTA() {
  const projectHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    "Project enquiry — SPLENDOUR Studio",
  )}`;

  return (
    <>
      <section
        id="contact"
        aria-labelledby="contact-heading"
        className="scroll-mt-16 bg-white py-24 sm:py-28 lg:py-32"
      >
        <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="relative overflow-hidden rounded-[1.75rem] bg-zinc-950 px-6 py-12 text-white sm:px-10 sm:py-16 lg:px-16 lg:py-20">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-28 size-80 rounded-full border border-white/[0.08] sm:-right-10 sm:-top-36 sm:size-[28rem]"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-8 -top-16 size-56 rounded-full border border-white/[0.06] sm:right-10 sm:-top-16 sm:size-80"
            />

            <div className="relative grid gap-10 lg:grid-cols-[1fr_0.55fr] lg:items-end lg:gap-16">
              <div>
                <p className="text-[11px] font-semibold uppercase tracking-[0.19em] text-zinc-400">
                  Have something in mind?
                </p>

                <h2
                  id="contact-heading"
                  className="mt-6 max-w-[12ch] text-4xl font-semibold leading-[1.06] tracking-[-0.06em] text-white sm:text-5xl lg:text-[4.5rem]"
                >
                  Let&apos;s make it worth putting on the web.
                </h2>

                <p className="mt-6 max-w-lg text-sm leading-7 text-zinc-300 sm:text-base sm:leading-8">
                  Tell us what you&apos;re building, what isn&apos;t working,
                  or where you want to go next. We&apos;ll start with the
                  problem, then work towards the right solution.
                </p>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                  <Button
                    href={projectHref}
                    size="lg"
                    variant="secondary"
                    icon={<ArrowUpRight size={17} strokeWidth={1.8} />}
                    className="w-full border-white bg-white text-zinc-950 hover:border-zinc-200 hover:bg-zinc-100 sm:w-auto"
                  >
                    Start a project
                  </Button>

                  <a
                    href={`mailto:${siteConfig.contactEmail}`}
                    className="inline-flex min-h-12 items-center justify-center rounded-full px-5 text-sm font-medium text-zinc-300 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {siteConfig.contactEmail}
                  </a>
                </div>
              </div>

              <div className="border-t border-white/15 pt-7 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-400">
                  The way we work
                </p>

                <ul className="mt-5 space-y-4">
                  {engagementPrinciples.map((principle) => (
                    <li
                      key={principle}
                      className="flex items-start gap-3 text-sm leading-6 text-zinc-200"
                    >
                      <span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-full border border-white/20">
                        <Check
                          aria-hidden="true"
                          size={11}
                          strokeWidth={2}
                        />
                      </span>

                      <span>{principle}</span>
                    </li>
                  ))}
                </ul>

                <p className="mt-8 border-t border-white/15 pt-5 text-xs leading-5 text-zinc-400">
                  Thoughtful by design. Accountable in execution.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-zinc-200 bg-white">
        <div className="mx-auto max-w-7xl px-5 py-8 sm:px-8 lg:px-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
            <a
              href="#hero-content"
              aria-label="SPLENDOUR Studio, back to top"
              className="inline-flex w-fit flex-col leading-none"
            >
              <span className="text-sm font-semibold tracking-[0.19em] text-zinc-950">
                {siteConfig.name}
              </span>

              <span className="mt-1.5 self-end text-[9px] font-medium tracking-[0.3em] text-zinc-500">
                {siteConfig.descriptor.toUpperCase()}
              </span>
            </a>

            <p className="text-xs leading-5 text-zinc-500">
              {siteConfig.footerNote}
            </p>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-3 text-xs text-zinc-500">
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="transition-colors hover:text-zinc-950"
              >
                Get in touch
              </a>

              <span aria-hidden="true" className="text-zinc-300">
                /
              </span>

              <span>
                © {new Date().getFullYear()} {siteConfig.name}
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}