import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import seoData from "../src/content/seoData.json" with { type: "json" };

const distDir = path.resolve("dist");
const indexPath = path.join(distDir, "index.html");

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function trimTrailingSlash(value) {
  return value.replace(/\/+$/, "");
}

function absoluteUrl(siteUrl, routePath) {
  return `${trimTrailingSlash(siteUrl)}${routePath === "/" ? "/" : routePath}`;
}

function replaceOrInsertHead(html, selector, tag) {
  const pattern = new RegExp(selector, "i");
  if (pattern.test(html)) {
    return html.replace(pattern, tag);
  }
  return html.replace("</head>", `    ${tag}\n  </head>`);
}

function setMeta(html, attribute, key, content) {
  const escaped = escapeHtml(content);
  const selector = `<meta\\s+${attribute}="${key}"[^>]*>`;
  return replaceOrInsertHead(html, selector, `<meta ${attribute}="${key}" content="${escaped}" />`);
}

function setRobotsMeta(html, noindex) {
  return setMeta(html, "name", "robots", noindex ? "noindex,follow" : "index,follow");
}

function maybeSetVerification(html) {
  let output = html;

  if (seoData.verification.google) {
    output = setMeta(output, "name", "google-site-verification", seoData.verification.google);
  }

  if (seoData.verification.bing) {
    output = setMeta(output, "name", "msvalidate.01", seoData.verification.bing);
  }

  return output;
}

function setLink(html, rel, href) {
  const selector = `<link\\s+rel="${rel}"[^>]*>`;
  return replaceOrInsertHead(html, selector, `<link rel="${rel}" href="${escapeHtml(href)}" />`);
}

function buildStructuredData(route, canonicalUrl, imageUrl) {
  const organization = {
    "@type": ["LocalBusiness", "HomeAndConstructionBusiness", "GeneralContractor"],
    "@id": `${trimTrailingSlash(seoData.siteUrl)}/#organization`,
    name: seoData.organization.name,
    alternateName: seoData.organization.alternateName,
    url: trimTrailingSlash(seoData.siteUrl),
    image: imageUrl,
    logo: `${trimTrailingSlash(seoData.siteUrl)}/images/logo/logo.png`,
    email: seoData.organization.email,
    telephone: seoData.organization.telephone,
    address: seoData.organization.address,
    areaServed: seoData.organization.areaServed
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    url: canonicalUrl,
    name: route.title,
    description: route.description,
    isPartOf: {
      "@type": "WebSite",
      "@id": `${trimTrailingSlash(seoData.siteUrl)}/#website`,
      name: seoData.siteName,
      url: trimTrailingSlash(seoData.siteUrl)
    },
    about: { "@id": organization["@id"] }
  };

  const graph = [organization, webPage];

  if (route.name === "services") {
    graph.push(
      ...seoData.services.map((serviceName) => ({
        "@type": "Service",
        name: serviceName,
        provider: { "@id": organization["@id"] },
        areaServed: seoData.organization.areaServed,
        serviceType: "Construction and engineering services"
      })),
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: seoData.faq.map((item) => ({
          "@type": "Question",
          name: item.question,
          acceptedAnswer: {
            "@type": "Answer",
            text: item.answer
          }
        }))
      }
    );
  }

  return {
    "@context": "https://schema.org",
    "@graph": graph
  };
}

function buildFallback(route) {
  const sections = [];

  if (route.name === "home") {
    sections.push(
      `<h2>Construction Services</h2><ul>${seoData.services.map((serviceName) => `<li>${escapeHtml(serviceName)}</li>`).join("")}</ul>`,
      `<h2>Selected Projects</h2><ul>${seoData.projects.map((projectName) => `<li>${escapeHtml(projectName)}</li>`).join("")}</ul>`,
      `<h2>Common Questions</h2>${seoData.faq.map((item) => `<h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.answer)}</p>`).join("")}`
    );
  }

  if (route.name === "services") {
    sections.push(
      `<h2>Services Offered</h2><ul>${seoData.services.map((serviceName) => `<li>${escapeHtml(serviceName)}</li>`).join("")}</ul>`,
      `<h2>Construction FAQ</h2>${seoData.faq.map((item) => `<h3>${escapeHtml(item.question)}</h3><p>${escapeHtml(item.answer)}</p>`).join("")}`
    );
  }

  if (route.name === "projects") {
    sections.push(
      `<h2>Project Examples</h2><ul>${seoData.projects.map((projectName) => `<li>${escapeHtml(projectName)}</li>`).join("")}</ul>`
    );
  }

  return `<noscript><main class="seo-fallback"><h1>${escapeHtml(route.heading)}</h1><p>${escapeHtml(route.summary)}</p>${sections.join("")}<p><a href="/contact">Contact FYK Construction</a></p></main></noscript>`;
}

function prepareRouteHtml(template, route) {
  const canonicalUrl = absoluteUrl(seoData.siteUrl, route.path);
  const imageUrl = absoluteUrl(seoData.siteUrl, seoData.socialImage);
  let html = template.replace(/<script\s+type="application\/ld\+json">[\s\S]*?<\/script>\s*/gi, "");

  html = html.replace(/<title>.*?<\/title>/i, `<title>${escapeHtml(route.title)}</title>`);
  html = setMeta(html, "name", "description", route.description);
  html = setRobotsMeta(html, route.noindex);
  html = maybeSetVerification(html);
  html = setMeta(html, "property", "og:type", "website");
  html = setMeta(html, "property", "og:site_name", seoData.siteName);
  html = setMeta(html, "property", "og:title", route.title);
  html = setMeta(html, "property", "og:description", route.description);
  html = setMeta(html, "property", "og:url", canonicalUrl);
  html = setMeta(html, "property", "og:image", imageUrl);
  html = setMeta(html, "property", "og:image:alt", seoData.socialImageAlt);
  html = setMeta(html, "name", "twitter:card", "summary_large_image");
  html = setMeta(html, "name", "twitter:title", route.title);
  html = setMeta(html, "name", "twitter:description", route.description);
  html = setMeta(html, "name", "twitter:image", imageUrl);
  html = setLink(html, "canonical", canonicalUrl);

  const structuredData = JSON.stringify(buildStructuredData(route, canonicalUrl, imageUrl));
  html = html.replace("</head>", `    <script type="application/ld+json" data-schema="route">${structuredData}</script>\n  </head>`);
  html = html.replace('<div id="app"></div>', `<div id="app"></div>\n    ${buildFallback(route)}`);

  return html;
}

function sitemapXml() {
  const urls = seoData.routes
    .map((route) => `  <url><loc>${absoluteUrl(seoData.siteUrl, route.path)}</loc></url>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

function robotsTxt() {
  return `User-agent: *\nAllow: /\n\nSitemap: ${absoluteUrl(seoData.siteUrl, "/sitemap.xml")}\n`;
}

const template = await readFile(indexPath, "utf8");

for (const route of seoData.routes) {
  const html = prepareRouteHtml(template, route);
  const routeDir = route.path === "/" ? distDir : path.join(distDir, route.path.replace(/^\/+/, ""));
  await mkdir(routeDir, { recursive: true });
  await writeFile(path.join(routeDir, "index.html"), html);
}

await writeFile(path.join(distDir, "404.html"), prepareRouteHtml(template, seoData.notFound));

await writeFile(path.join(distDir, "sitemap.xml"), sitemapXml());
await writeFile(path.join(distDir, "robots.txt"), robotsTxt());
await writeFile(path.join(distDir, ".gitattributes"), "* text=auto eol=lf\n*.png binary\n*.jpg binary\n*.jpeg binary\n*.ico binary\n*.mp4 binary\n");
