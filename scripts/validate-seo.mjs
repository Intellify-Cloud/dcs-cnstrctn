import { access, readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";
import seoData from "../src/content/seoData.json" with { type: "json" };

const distDir = path.resolve("dist");
const failures = [];

function fail(message) {
  failures.push(message);
}

async function exists(filePath) {
  try {
    await access(filePath);
    return true;
  } catch {
    return false;
  }
}

async function readDist(relativePath) {
  return readFile(path.join(distDir, relativePath), "utf8");
}

async function collectHtmlFiles(directory = distDir) {
  const entries = await readdir(directory, { withFileTypes: true });
  const files = [];

  for (const entry of entries) {
    const fullPath = path.join(directory, entry.name);
    if (entry.isDirectory()) {
      files.push(...await collectHtmlFiles(fullPath));
    } else if (entry.name.endsWith(".html")) {
      files.push(fullPath);
    }
  }

  return files;
}

async function validateRoutes() {
  const titles = new Map();

  for (const route of seoData.routes) {
    const relativePath = route.path === "/" ? "index.html" : `${route.path.replace(/^\/+/, "")}/index.html`;
    const html = await readDist(relativePath);
    const canonical = `${seoData.siteUrl.replace(/\/+$/, "")}${route.path === "/" ? "/" : route.path}`;

    if (!html.includes(`<title>${route.title.replaceAll("&", "&amp;")}</title>`) && !html.includes(`<title>${route.title}</title>`)) {
      fail(`${relativePath} is missing the expected title.`);
    }

    if (!html.includes(`rel="canonical" href="${canonical}"`)) {
      fail(`${relativePath} is missing canonical ${canonical}.`);
    }

    if (!html.includes('name="description"')) {
      fail(`${relativePath} is missing a meta description.`);
    }

    titles.set(route.title, (titles.get(route.title) || 0) + 1);
  }

  for (const [title, count] of titles) {
    if (count > 1) {
      fail(`Duplicate title found ${count} times: ${title}`);
    }
  }
}

async function validateCoreFiles() {
  for (const file of ["robots.txt", "sitemap.xml", "404.html"]) {
    if (!await exists(path.join(distDir, file))) {
      fail(`dist/${file} is missing.`);
    }
  }

  const robots = await readDist("robots.txt");
  if (!robots.includes(`${seoData.siteUrl.replace(/\/+$/, "")}/sitemap.xml`)) {
    fail("robots.txt does not reference the production sitemap.");
  }

  const sitemap = await readDist("sitemap.xml");
  if (sitemap.includes("/404")) {
    fail("sitemap.xml must not include the 404 page.");
  }

  const notFound = await readDist("404.html");
  if (!notFound.includes('name="robots" content="noindex,follow"')) {
    fail("404.html must be noindex,follow.");
  }
}

async function validateAssets() {
  const htmlFiles = await collectHtmlFiles();
  const assetPattern = /\s(?:src|href)="(\/(?!\/)[^"#?]+\.[a-z0-9]+)[^"]*"/gi;

  for (const file of htmlFiles) {
    const html = await readFile(file, "utf8");
    for (const match of html.matchAll(assetPattern)) {
      const assetPath = path.join(distDir, match[1]);
      if (!await exists(assetPath)) {
        fail(`${path.relative(distDir, file)} references missing asset ${match[1]}.`);
      }
    }
  }

  const socialImage = path.join(distDir, seoData.socialImage);
  if (!await exists(socialImage)) {
    fail(`Social image is missing: ${seoData.socialImage}`);
  }

  const socialStat = await stat(socialImage);
  if (socialStat.size === 0) {
    fail(`Social image is empty: ${seoData.socialImage}`);
  }
}

await validateRoutes();
await validateCoreFiles();
await validateAssets();

if (failures.length) {
  console.error("SEO validation failed:");
  for (const failure of failures) {
    console.error(`- ${failure}`);
  }
  process.exit(1);
}

console.log("SEO validation passed.");
