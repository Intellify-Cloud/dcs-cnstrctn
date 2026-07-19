# Composer Plan

The home page is composed from section components in `src/components/sections/`
and content from `src/content/siteText.ts`.

## Home Page Order

| Section | File | Anchor |
| ------- | ---- | ------ |
| Navbar | `navbar-section.vue` | App shell |
| Hero | `hero-home-section.vue` | Top |
| About | `about-section.vue` | `#about` |
| Services | `services-section.vue` | `#services` |
| Featured Projects | `featured-projects-section.vue` | `#projects` |
| Contact / Quote CTA | `contact-section.vue` | `#quote` |
| Footer | `footer-section.vue` | App shell |

To change copy, update `src/content/siteText.ts`. To change navigation, update
`src/content/navigation.yml`.
