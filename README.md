# FYK Construction Nigeria Limited

Vue 3 + Vite + TypeScript website for FYK Construction Nigeria Limited, an
engineering and construction company serving clients across Nigeria.

## Quick Start

```bash
npm install
npm run dev
npm run build
npm run seo:validate
```

## SEO Build

`npm run build` runs the Vite production build and then generates route-specific
HTML for SEO metadata, canonical URLs, structured data, `robots.txt`,
`sitemap.xml`, and `404.html`.

Use `npm run seo:validate` before deployment to check core SEO files, route
metadata and referenced static assets.

## Search Console, Bing and IndexNow

Production domain: `https://fykconstructions.com`

Add verified Google Search Console and Bing Webmaster Tools tokens to
`src/content/seoData.json` when available. Empty values are ignored by the
SEO generator.

The public IndexNow key is available at
`/2304e4cd-2341-49f5-8385-3a50030e06ba.txt`. After deployment, changed URLs can
be submitted to IndexNow with:

```bash
npm run indexnow:submit
```
