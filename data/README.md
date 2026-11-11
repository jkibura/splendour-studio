# Site content

- `content.ts` contains editable copy used by the page sections.
- `siteConfig.ts` contains the studio identity, contact details and navigation.
- `services.ts` contains the service cards.
- `projects.ts` contains each portfolio card, including its image and optional live URL.

Put project screenshots in `public/projects/` and update the matching `image` path in `projects.ts`. The bundled SVGs are temporary visual placeholders. Landscape 4:3 screenshots work well; use `imageAlt` to describe each real image. Add a project's live site to its optional `url` to make the arrow link active.

Global colors, fonts and key layout values are in `src/app/globals.css` under `:root`.
