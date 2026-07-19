# Composer Plan

Source: a single static HTML mock ("Empower OT") built with Tailwind's CDN
build, Google Fonts (Playfair Display + Inter), and Material Symbols icons.

## Sections

Every block of the site is a single self-contained **section** component in
`src/components/sections/`, named `*-section.vue` (kebab-case). There is no
separate "primitive" layer — each section reads its own content from
`siteText.ts` and renders its own markup.

Home page (`pages/home-page.vue`), in order:

| Section              | File                                   | Anchor        |
| -------------------- | -------------------------------------- | ------------- |
| Nav bar (in App.vue) | `sections/navbar-section.vue`          | —              |
| Hero                 | `sections/hero-home-section.vue`       | —              |
| Services grid        | `sections/services-section.vue`        | `#services`    |
| Our Approach (steps) | `sections/approach-section.vue`        | `#approach`    |
| Experience & educ.   | `sections/experience-section.vue`      | `#experience`  |
| Testimonials         | `sections/testimonials-section.vue`    | `#testimonials`|
| FAQ (+ JSON-LD)      | `sections/faq-section.vue`             | `#faq`         |
| Contact CTA + map    | `sections/contact-section.vue`         | `#contact`     |
| Footer (in App.vue)  | `sections/footer-section.vue`          | —              |

`sections/about-section.vue` (the "Meet Neha" visionary bio, anchor
`#about`) exists but is **not mounted** on any page yet — drop it into
`home-page.vue` when you want it.

Per-page heroes follow the `hero-<page>-section.vue` convention
(`hero-home-section.vue` today); add e.g. `hero-contact-section.vue` for a
sub-page hero.

Two floating elements not in the original mock were added because they're
standard on clinic sites: `WhatsAppButton.vue` and `BackToTopButton.vue`.
Both are optional — delete them and their two lines in `App.vue` if unwanted.

`testimonials-section.vue` ships with placeholder quotes. For a healthcare
business, fabricated patient quotes are a liability — replace them with
real, permission-cleared quotes before launch.

## Content model

All copy and structured content lives in two places, not in components:

- `src/content/siteText.ts` — the single source of truth for every piece
  of copy, image path, and content list (hero, services, steps, experience,
  testimonials, FAQ, contact, footer, page meta, a11y labels).
- `src/content/navigation.yml` — navigation links (main nav, the phone CTA,
  the footer "Company" column). Each entry is `label` + `link`, where
  `link` can be a route (`/contact`), a home-page section (`/#services`),
  a same-page anchor (`#faq`), or an external/`tel:` URL. Rendered through
  `components/SmartLink.vue`, which picks RouterLink vs `<a>` automatically.

Components import from these and stay presentational. To change any text on
the site, edit one of these two files — you should never need to touch a
`.vue` file just to reword something. (`src/assets/site.json` is the
retired predecessor of `siteText.ts` and is no longer referenced.)

## Structure

- `src/pages/*-page.vue` — one file per route (`home-page`, `contact-page`,
  `portfolio-page`, `privacy-page`), wired up in `src/router/index.ts`.
  A page just composes the sections it needs.
- `src/components/sections/*-section.vue` — the sections themselves. Each is
  self-contained: it reads content from `siteText.ts` (and links from
  `navigation.yml`) and renders its own markup.
- `src/components/*.vue` — small shared UI that isn't a section
  (`SmartLink`, `WhatsAppButton`, `BackToTopButton`).

## Animation

The original page used a manual `IntersectionObserver` + class toggle for
fade-in-on-scroll. That's now a global directive, `v-reveal`
(`src/composables/useScrollReveal.ts`), applied to section roots. The CSS
classes it toggles (`fade-in-section` / `is-visible`) live in
`src/assets/theme.css`.
