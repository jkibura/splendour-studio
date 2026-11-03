// "use client";

// import { useState } from "react";
// import {
//   ArrowDown,
//   ArrowRight,
//   ArrowUpRight,
//   Menu,
//   X,
// } from "lucide-react";
// import { siteConfig } from "../../data/siteConfig";
// import { Button } from "./ui/Button";

// export function Hero() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const projectHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
//     "Project enquiry — SPLENDOUR Studio",
//   )}`;

//   return (
//     <>
//       <header className="relative z-20 border-b border-zinc-200/80 bg-white">
//         <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
//           <a
//             href="#hero-content"
//             aria-label="SPLENDOUR Studio home"
//             className="group inline-flex shrink-0 flex-col leading-none"
//           >
//             <span className="text-[15px] font-semibold tracking-[0.19em] text-zinc-950 transition-colors group-hover:text-zinc-600 sm:text-base">
//               {siteConfig.name}
//             </span>

//             <span className="mt-1.5 self-end text-[9px] font-medium tracking-[0.31em] text-zinc-500">
//               {siteConfig.descriptor.toUpperCase()}
//             </span>
//           </a>

//           <nav
//             aria-label="Main navigation"
//             className="hidden items-center gap-8 md:flex"
//           >
//             {siteConfig.navLinks.map((link) => (
//               <a
//                 key={link.href}
//                 href={link.href}
//                 className="text-[13px] font-medium text-zinc-600 transition-colors hover:text-zinc-950"
//               >
//                 {link.label}
//               </a>
//             ))}
//           </nav>

//           <div className="flex shrink-0 items-center gap-3">
//             <Button
//               href={projectHref}
//               size="sm"
//               icon={<ArrowUpRight size={15} strokeWidth={1.8} />}
//               className="hidden sm:inline-flex"
//             >
//               Start a project
//             </Button>

//             <button
//               type="button"
//               aria-label={isMenuOpen ? "Close navigation" : "Open navigation"}
//               aria-expanded={isMenuOpen}
//               aria-controls="mobile-navigation"
//               onClick={() => setIsMenuOpen((open) => !open)}
//               className="inline-flex size-10 items-center justify-center rounded-full border border-zinc-200 text-zinc-800 transition-colors hover:bg-zinc-100 md:hidden"
//             >
//               {isMenuOpen ? (
//                 <X size={19} strokeWidth={1.8} />
//               ) : (
//                 <Menu size={19} strokeWidth={1.8} />
//               )}
//             </button>
//           </div>
//         </div>

//         {isMenuOpen && (
//           <nav
//             id="mobile-navigation"
//             aria-label="Mobile navigation"
//             className="border-t border-zinc-200 bg-white px-5 py-5 sm:px-8 md:hidden"
//           >
//             <div className="mx-auto flex max-w-7xl flex-col">
//               {siteConfig.navLinks.map((link) => (
//                 <a
//                   key={link.href}
//                   href={link.href}
//                   onClick={() => setIsMenuOpen(false)}
//                   className="border-b border-zinc-100 py-4 text-sm font-medium text-zinc-700 transition-colors hover:text-zinc-950"
//                 >
//                   {link.label}
//                 </a>
//               ))}

//               <Button
//                 href={projectHref}
//                 size="md"
//                 className="mt-5 w-full"
//                 icon={<ArrowUpRight size={16} />}
//               >
//                 Start a project
//               </Button>
//             </div>
//           </nav>
//         )}
//       </header>

//       <section
//         id="hero-content"
//         aria-labelledby="hero-heading"
//         className="hero-grid relative isolate overflow-hidden border-b border-zinc-200 bg-[#fafaf9]"
//       >
//         <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12 lg:px-12 lg:py-28">
//           <div className="max-w-2xl">
//             <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white/80 px-3.5 py-2">
//               <span
//                 aria-hidden="true"
//                 className="size-1.5 rounded-full bg-zinc-900"
//               />
//               <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-zinc-600 sm:text-[11px]">
//                 {siteConfig.locationLabel}
//               </span>
//             </div>

//             <h1
//               id="hero-heading"
//               className="mt-8 max-w-[11ch] text-5xl font-semibold leading-[1.04] tracking-[-0.065em] text-zinc-950 sm:text-6xl lg:text-[5.1rem]"
//             >
//               Digital experiences,{" "}
//               <span className="text-zinc-400">built with intent.</span>
//             </h1>

//             <p className="mt-7 max-w-xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
//               We design and engineer considered websites and digital products
//               that help ambitious businesses communicate clearly, earn trust,
//               and move forward.
//             </p>

//             <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
//               <Button
//                 href={`mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
//                   "Project enquiry — SPLENDOUR Studio",
//                 )}`}
//                 size="lg"
//                 icon={<ArrowUpRight size={17} strokeWidth={1.8} />}
//                 className="w-full sm:w-auto"
//               >
//                 Start a project
//               </Button>

//               <Button
//                 href="#work"
//                 variant="secondary"
//                 size="lg"
//                 icon={<ArrowDown size={16} strokeWidth={1.8} />}
//                 className="w-full sm:w-auto"
//               >
//                 Explore selected work
//               </Button>
//             </div>

//             <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-zinc-200 pt-6">
//               <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
//                 Design-led
//               </span>
//               <span className="size-1 rounded-full bg-zinc-300" />
//               <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
//                 Engineering-minded
//               </span>
//               <span className="size-1 rounded-full bg-zinc-300" />
//               <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-500">
//                 Built to last
//               </span>
//             </div>
//           </div>

//           <div className="relative mx-auto w-full max-w-[510px] lg:ml-auto">
//             <div
//               aria-hidden="true"
//               className="absolute -right-5 -top-5 size-24 rounded-full border border-zinc-200 sm:-right-7 sm:-top-7 sm:size-32"
//             />

//             <div
//               aria-hidden="true"
//               className="absolute -bottom-6 -left-5 size-20 rounded-full border border-zinc-200 sm:-bottom-8 sm:-left-8 sm:size-24"
//             />

//             <div className="relative rounded-[1.6rem] border border-zinc-200 bg-white p-2.5 shadow-[0_28px_80px_-48px_rgba(0,0,0,0.28)] sm:p-3">
//               <div className="flex items-center gap-1.5 border-b border-zinc-100 px-3 pb-3 pt-1.5">
//                 <span className="size-2 rounded-full bg-zinc-200" />
//                 <span className="size-2 rounded-full bg-zinc-200" />
//                 <span className="size-2 rounded-full bg-zinc-200" />

//                 <div className="ml-auto flex items-center gap-2">
//                   <span className="text-[9px] font-medium uppercase tracking-[0.16em] text-zinc-400">
//                     Studio / 001
//                   </span>
//                 </div>
//               </div>

//               <div className="rounded-[1.15rem] bg-[#efeee9] p-6 sm:p-8">
//                 <div className="flex items-center justify-between gap-4">
//                   <span className="text-[10px] font-semibold uppercase tracking-[0.19em] text-zinc-700">
//                     A digital studio
//                   </span>

//                   <span className="flex items-center gap-1.5 text-[10px] text-zinc-600">
//                     <span className="size-1.5 rounded-full bg-zinc-800" />
//                     Independent by design
//                   </span>
//                 </div>

//                 <div className="mt-14 sm:mt-[4.5rem]">
//                   <p className="max-w-[12ch] font-serif text-[2.7rem] leading-[1.03] tracking-[-0.055em] text-zinc-900 sm:text-[3.45rem]">
//                     Thoughtfully made.
//                     <br />
//                     Made to matter.
//                   </p>

//                   <p className="mt-5 max-w-[28ch] text-xs leading-5 text-zinc-600 sm:text-sm sm:leading-6">
//                     A clear point of view, carefully considered details, and
//                     technology that earns its place.
//                   </p>
//                 </div>

//                 <div className="mt-10 flex items-end justify-between gap-4 border-t border-zinc-300/80 pt-5 sm:mt-12">
//                   <div>
//                     <span className="block text-[9px] font-semibold uppercase tracking-[0.17em] text-zinc-500">
//                       Our standard
//                     </span>
//                     <span className="mt-1.5 block text-xs font-medium text-zinc-900 sm:text-sm">
//                       Design with purpose.
//                     </span>
//                   </div>

//                   <div className="flex size-[4.25rem] shrink-0 items-center justify-center rounded-full border border-zinc-900 sm:size-[4.75rem]">
//                     <span className="text-center text-[10px] font-semibold leading-tight tracking-[0.12em] text-zinc-900">
//                       S
//                       <br />
//                       /
//                       <br />
//                       S
//                     </span>
//                   </div>
//                 </div>
//               </div>

//               <div className="flex flex-wrap items-center justify-between gap-3 px-3 pb-1 pt-4 sm:px-4">
//                 <span className="text-[9px] font-medium uppercase tracking-[0.14em] text-zinc-500">
//                   Design
//                   <span className="mx-2 text-zinc-300">/</span>
//                   Engineering
//                   <span className="mx-2 text-zinc-300">/</span>
//                   Care
//                 </span>

//                 <ArrowRight
//                   aria-hidden="true"
//                   size={15}
//                   strokeWidth={1.6}
//                   className="text-zinc-400"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   );
// }

"use client";

import { useState } from "react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Menu,
  X,
} from "lucide-react";
import { siteConfig } from "../../data/siteConfig";

export function Hero() {
  const [menuOpen, setMenuOpen] = useState(false);

  const projectHref = `mailto:${siteConfig.contactEmail}?subject=${encodeURIComponent(
    "Project enquiry — SPLENDOUR Studio",
  )}`;

  return (
    <>
      {/* Navigation */}
      <header className="relative z-20 border-b border-zinc-200 bg-white">
        <div className="mx-auto flex min-h-[76px] max-w-7xl items-center justify-between gap-6 px-5 sm:px-8 lg:px-12">
          <a
            href="#hero-content"
            aria-label="SPLENDOUR Studio home"
            className="flex shrink-0 flex-col leading-none"
          >
            <span className="text-base font-bold tracking-[0.16em] text-zinc-950">
              SPLENDOUR
            </span>
            <span className="mt-1.5 self-end text-[9px] font-medium tracking-[0.3em] text-zinc-500">
              STUDIO
            </span>
          </a>

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-8 md:flex"
          >
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-zinc-700 transition-colors hover:text-blue-600"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href={projectHref}
            className="hidden min-h-10 items-center gap-2 rounded-lg bg-[#087fe8] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-blue-700 sm:inline-flex"
          >
            Start a project
            <ArrowUpRight size={15} />
          </a>

          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex size-10 items-center justify-center rounded-lg border border-zinc-200 text-zinc-900 hover:bg-zinc-50 sm:hidden"
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </div>

        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Mobile navigation"
            className="border-t border-zinc-200 bg-white px-5 py-4 sm:hidden"
          >
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block border-b border-zinc-100 py-4 text-sm font-medium text-zinc-800"
              >
                {link.label}
              </a>
            ))}

            <a
              href={projectHref}
              className="mt-4 flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#087fe8] px-5 text-sm font-semibold text-white"
            >
              Start a project
              <ArrowUpRight size={16} />
            </a>
          </nav>
        )}
      </header>

      {/* Main hero */}
      <section
        id="hero-content"
        aria-labelledby="hero-heading"
        className="overflow-hidden bg-white"
      >
        <div className="mx-auto max-w-7xl px-5 pt-16 sm:px-8 sm:pt-20 lg:px-12 lg:pt-24">
          <div className="mx-auto max-w-6xl text-center">
            <div className="inline-flex items-center gap-2.5 rounded-full border border-zinc-200 bg-white px-3.5 py-2">
              <span className="size-2 rounded-full bg-emerald-500" />
              <span className="text-[10px] font-semibold uppercase tracking-[0.14em] text-zinc-600 sm:text-xs">
                Independent digital studio
              </span>
            </div>

            <h1
              id="hero-heading"
              className="mx-auto mt-8 text-[3.2rem] font-bold leading-[1.02] tracking-[-0.075em] text-[#111111] sm:text-7xl lg:text-[6.4rem]"
            >
              <span className="block">Websites that move</span>

              <span className="mt-2 flex flex-wrap items-center justify-center gap-x-3 gap-y-2">
                <span>businesses</span>

                <span className="inline-flex items-center gap-3 rounded-full bg-[#bcebe6] px-4 py-1.5 text-[#111111] sm:px-6 sm:py-2">
                  <span className="size-3.5 shrink-0 rounded-full bg-[#239b92] sm:size-5" />
                  forward.
                </span>
              </span>
            </h1>

            <p className="mx-auto mt-7 max-w-3xl text-base leading-7 text-zinc-600 sm:text-lg sm:leading-8">
              We combine thoughtful design and serious engineering to create
              digital experiences that make your business clearer, more
              credible, and ready for what's next.
            </p>

            <div className="mt-8 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
              <a
                href={projectHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#087fe8] px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
              >
                Start a project
                <ArrowUpRight size={17} />
              </a>

              <a
                href="#work"
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-lg bg-[#e8f3ff] px-6 py-3 text-sm font-semibold text-[#075eb5] transition-colors hover:bg-[#d9eaff]"
              >
                Explore our work
                <ArrowDown size={16} />
              </a>
            </div>

            <p className="mt-5 text-xs font-medium text-zinc-500">
              Websites · E-commerce · Digital products · Engineering
            </p>
          </div>

          {/* Large website preview */}
          <div className="mx-auto mt-14 max-w-6xl sm:mt-16 lg:mt-20">
            <div className="overflow-hidden rounded-t-2xl border border-zinc-200 bg-white shadow-[0_20px_80px_-38px_rgba(0,0,0,0.22)]">
              {/* Browser frame */}
              <div className="flex h-12 items-center gap-2 border-b border-zinc-200 px-4 sm:h-14 sm:px-6">
                <span className="size-2.5 rounded-full bg-[#ff6058]" />
                <span className="size-2.5 rounded-full bg-[#ffbd2e]" />
                <span className="size-2.5 rounded-full bg-[#28c840]" />

                <div className="mx-auto flex max-w-sm flex-1 items-center justify-center rounded-md bg-zinc-100 px-3 py-1.5">
                  <span className="truncate text-[10px] text-zinc-500 sm:text-xs">
                    yourbusiness.com
                  </span>
                </div>

                <span className="hidden text-[10px] font-medium text-zinc-400 sm:block">
                  WEBSITE PREVIEW
                </span>
              </div>

              {/* Preview content */}
              <div className="grid min-h-[300px] gap-8 bg-[#fafafa] p-5 sm:min-h-[380px] sm:p-9 md:grid-cols-[0.9fr_1.1fr] md:items-center md:gap-10 lg:p-14">
                <div className="max-w-lg py-3">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-blue-600 sm:text-xs">
                    Your next chapter starts here
                  </p>

                  <h2 className="mt-5 max-w-md text-3xl font-bold leading-[1.08] tracking-[-0.06em] text-zinc-950 sm:text-5xl">
                    Make a first impression that lasts.
                  </h2>

                  <p className="mt-4 max-w-md text-sm leading-6 text-zinc-600 sm:text-base sm:leading-7">
                    A clear story. A considered experience. A website that
                    reflects the quality of the business behind it.
                  </p>

                  <div className="mt-6 flex flex-wrap items-center gap-4">
                    <span className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-zinc-950 px-4 text-xs font-semibold text-white">
                      Discover more
                      <ArrowRight size={14} />
                    </span>

                    <span className="text-xs font-medium text-zinc-600">
                      Designed with purpose.
                    </span>
                  </div>
                </div>

                {/* Interface illustration built with CSS */}
                <div className="relative min-h-[210px] overflow-hidden rounded-xl border border-zinc-200 bg-white p-4 sm:min-h-[260px] sm:p-6">
                  <div className="flex items-center justify-between border-b border-zinc-100 pb-4">
                    <div className="flex items-center gap-2">
                      <span className="flex size-7 items-center justify-center rounded-md bg-[#bcebe6] text-xs font-bold text-zinc-950">
                        S
                      </span>

                      <span className="text-xs font-bold text-zinc-900">
                        YOUR BRAND
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <span className="h-1.5 w-8 rounded-full bg-zinc-200" />
                      <span className="h-1.5 w-8 rounded-full bg-zinc-200" />
                    </div>
                  </div>

                  <div className="mt-5 grid grid-cols-[1fr_0.8fr] gap-3">
                    <div>
                      <div className="h-2 w-4/5 rounded-full bg-zinc-900" />
                      <div className="mt-2 h-2 w-3/5 rounded-full bg-zinc-900" />

                      <div className="mt-4 h-1.5 w-full rounded-full bg-zinc-200" />
                      <div className="mt-2 h-1.5 w-5/6 rounded-full bg-zinc-200" />
                      <div className="mt-2 h-1.5 w-4/6 rounded-full bg-zinc-200" />

                      <div className="mt-5 h-8 w-24 rounded-lg bg-[#087fe8]" />
                    </div>

                    <div className="relative min-h-36 overflow-hidden rounded-lg bg-[#d9f1ed] p-3">
                      <div className="absolute -right-5 -top-4 size-28 rounded-full border-[14px] border-[#a5ded7]" />

                      <div className="absolute bottom-4 left-3 right-3 h-14 rounded-lg border border-white/80 bg-white/90 p-3">
                        <div className="h-1.5 w-3/4 rounded-full bg-zinc-800" />
                        <div className="mt-2 h-1.5 w-1/2 rounded-full bg-zinc-300" />
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 grid grid-cols-3 gap-2">
                    <div className="h-8 rounded-md bg-zinc-100" />
                    <div className="h-8 rounded-md bg-zinc-100" />
                    <div className="h-8 rounded-md bg-zinc-100" />
                  </div>
                </div>
              </div>

              {/* Capabilities strip — not fabricated client logos */}
              <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3 border-t border-zinc-200 bg-white px-4 py-5 sm:gap-x-10 sm:py-6">
                {[
                  "STRATEGY",
                  "DESIGN",
                  "DEVELOPMENT",
                  "PERFORMANCE",
                  "SUPPORT",
                ].map((item) => (
                  <span
                    key={item}
                    className="text-[9px] font-bold tracking-[0.13em] text-zinc-500 sm:text-[10px]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}