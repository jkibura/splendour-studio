import {
  Code2,
  Gauge,
  Search,
  ShieldCheck,
  ShoppingCart,
  Workflow,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { services } from "../../data/services";
import type { Service } from "../types";
import { Card } from "./ui/Card";

const iconMap: Record<string, LucideIcon> = {
  Code2,
  ShoppingCart,
  Gauge,
  Workflow,
  Search,
  ShieldCheck,
};

const approachSteps = [
  {
    number: "01",
    title: "Understand the brief",
    description:
      "We establish your goals, audience, priorities, scope, and the practical constraints before defining a direction.",
  },
  {
    number: "02",
    title: "Design and build",
    description:
      "We turn the agreed direction into a considered interface and a responsive, maintainable implementation.",
  },
  {
    number: "03",
    title: "Refine and launch",
    description:
      "We review the details, test essential user journeys, prepare the handover, and help you move confidently into launch.",
  },
];

function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] ?? Code2;

  return (
    <Card className="h-full rounded-2xl p-6 shadow-none transition-colors duration-200 hover:border-zinc-300 hover:bg-zinc-50/70 sm:p-7">
      <div className="flex items-center justify-between">
        <span className="flex size-11 items-center justify-center rounded-xl border border-zinc-200 bg-white text-zinc-800">
          <Icon size={19} strokeWidth={1.6} aria-hidden="true" />
        </span>

        <span className="text-[10px] font-medium tracking-[0.12em] text-zinc-400">
          {service.id.slice(0, 2).toUpperCase()}
        </span>
      </div>

      <h3 className="mt-6 text-lg font-semibold tracking-[-0.035em] text-zinc-950">
        {service.title}
      </h3>

      <p className="mt-3 text-sm leading-6 text-zinc-600">
        {service.description}
      </p>

      <ul
        aria-label={`${service.title} capabilities`}
        className="mt-6 flex flex-wrap gap-2"
      >
        {service.capabilities.map((capability) => (
          <li
            key={capability}
            className="rounded-full border border-zinc-200/90 bg-white px-2.5 py-1.5 text-[10px] font-medium text-zinc-600"
          >
            {capability}
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function Services() {
  return (
    <section
      id="services"
      aria-labelledby="services-heading"
      className="border-b border-zinc-200 bg-white py-24 sm:py-28 lg:py-32"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-12">
        <div className="grid gap-10 lg:grid-cols-[0.72fr_1.28fr] lg:gap-16">
          <div className="max-w-lg">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
              What we do
            </p>

            <h2
              id="services-heading"
              className="mt-5 max-w-[12ch] text-4xl font-semibold leading-[1.1] tracking-[-0.055em] text-zinc-950 sm:text-5xl"
            >
              Thoughtful work. Solid foundations.
            </h2>

            <p className="mt-6 text-base leading-7 text-zinc-600">
              Every engagement starts with the problem worth solving. We bring
              design sensibility and engineering discipline together to create
              digital experiences with a clear purpose.
            </p>

            <div className="mt-8 border-l-2 border-zinc-900 pl-4">
              <p className="text-sm font-medium leading-6 text-zinc-800">
                No unnecessary complexity. No detail without a reason.
              </p>
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>

        <div
          id="approach"
          className="mt-24 scroll-mt-20 border-t border-zinc-200 pt-14 sm:mt-28 sm:pt-16"
        >
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                How we work
              </p>

              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em] text-zinc-950 sm:text-4xl">
                A clear path from idea to launch.
              </h2>
            </div>

            <p className="max-w-md text-sm leading-6 text-zinc-600">
              Good work needs more than good design. It needs clear decisions,
              realistic scope, and a process that keeps everyone aligned.
            </p>
          </div>

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
            {approachSteps.map((step) => (
              <div
                key={step.number}
                className="border-t border-zinc-200 pt-5"
              >
                <span className="text-[11px] font-semibold tracking-[0.12em] text-zinc-400">
                  {step.number}
                </span>

                <h3 className="mt-5 text-lg font-semibold tracking-[-0.03em] text-zinc-950">
                  {step.title}
                </h3>

                <p className="mt-3 max-w-sm text-sm leading-6 text-zinc-600">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}