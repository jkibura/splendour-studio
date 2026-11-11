# Site content

- `content.ts` contains editable copy used by the page sections.
- `siteConfig.ts` contains the studio identity, contact details and navigation.
- `services.ts` contains the service cards.
- `projects.ts` contains each portfolio card, including its image and optional live URL.

Put project screenshots in `public/projects/` and update the matching `image` path in `projects.ts`. Landscape 16:9 screenshots work well; use `imageAlt` to describe each real image. Add a project's live site to its optional `url` to make the external link active.

Use optional `cardImage` and `cardImageAlt` when a project needs a lightweight custom card visual. Use `detailImage` and `detailImageAlt` for the larger screenshot on its project page. The psychology card uses an SVG preview while its detail page keeps the full screenshot; Keli and Script IQ use their wordmarks on the cards and full-page captures on their detail pages.

Global colors, fonts and key layout values are in `src/app/globals.css` under `:root`.

For canonical URLs, Open Graph links, and an absolute sitemap, copy `.env.example` to `.env.local` and set `NEXT_PUBLIC_SITE_URL` to the production domain (see `.env.example`). Add the same variable in the production host's environment settings, then redeploy. Project detail pages stay out of the sitemap and search index until their factual case study details are added to `projects.ts`.

After the domain is live, add it as a Domain property in Google Search Console, verify ownership with the DNS TXT record Google provides, and submit `https://<your-domain>/sitemap.xml`. Keep the same canonical host in `NEXT_PUBLIC_SITE_URL` and redirect the alternate `www` or non-`www` host to it.

For portfolio cards, use a deliberate crop of the first screen: the brand, strongest product or service image, and one clear visual cue. Avoid squeezing an entire long page into a tiny thumbnail. On project pages, use the full-width 16:9 desktop capture, followed by a few focused screenshots of key interactions or sections. Mobile captures are useful when they show a genuinely different responsive layout. Add URLs and only verified outcomes to each project entry.
