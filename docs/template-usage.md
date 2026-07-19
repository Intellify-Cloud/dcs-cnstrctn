# Template Usage

## Run it

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # type-check + production build to dist/
npm run preview    # serve the production build locally
```

## Change the copy

Everything editable lives in two files — you never need to touch
component markup for text or link changes:

- `src/content/siteText.ts` — all copy, image paths, and content lists
  (hero, services, steps, experience, testimonials, FAQ, contact, footer,
  page meta, form placeholders, a11y labels).
- `src/content/navigation.yml` — navigation links (main nav, phone CTA,
  footer "Company" column). `link` accepts a route (`/contact`), a
  home-page section (`/#services`), a same-page anchor (`#faq`), or an
  external/`tel:` URL.

Images are referenced by path in `siteText.ts`. Swap in your own hosted
images (or add files under `public/` and reference `/your-file.jpg`).

## Add a page

1. Add `src/pages/your-page.vue`.
2. Register a route in `src/router/index.ts` (point `component` at the new
   file).
3. Add copy to `siteText.pages` in `src/content/siteText.ts` if the page
   needs a title/meta description (picked up automatically by
   `useSeoHead`, keyed by route `name`).
4. Add a link in `src/content/navigation.yml` (main nav and/or footer).

## Add a section to the home page

1. Create `src/components/sections/your-section.vue` (kebab-case,
   `*-section.vue`). It's self-contained — no separate primitive layer.
2. Pull its content from `siteText.ts` (and links from `navigation.yml`)
   rather than hardcoding strings.
3. Wrap the section root with `v-reveal` if it should fade in on scroll.
4. Import it into `src/pages/home-page.vue` in the order you want it to
   appear.

## Deploy

`vercel.json` rewrites all routes to `index.html` so client-side routing
works on Vercel. `deploy.sh` installs, builds, and runs
`vercel --prod` — run `vercel login` once first, or wire up the
`VERCEL_TOKEN` env var in CI.

`.env.development` / `.env.production` hold `VITE_*` variables read via
`import.meta.env`. Update `VITE_SITE_URL` in `.env.production` to your
real domain before deploying (used for canonical/meta tags if you extend
`useSeoHead`).

## What's intentionally not included

- **Real testimonials**: `testimonials-section.vue` ships with placeholder
  quotes — replace them with real, permission-cleared quotes before
  launch. See `docs/composer-plan.md` for why.
- **CMS wiring**: content is static TS/YAML, not fetched from a backend.
  If you outgrow that, the natural seam is swapping the `siteText.ts` import
  for a fetch inside a Pinia store (`src/stores/`) and reading from the
  store in sections instead of importing the module directly.
