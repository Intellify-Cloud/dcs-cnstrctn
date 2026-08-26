import { readFile } from "node:fs/promises";
import seoData from "../src/content/seoData.json" with { type: "json" };

const key = process.env.INDEXNOW_KEY || seoData.indexNowKey;
const endpoint = process.env.INDEXNOW_ENDPOINT || "https://api.indexnow.org/indexnow";

if (!key) {
  console.error("INDEXNOW_KEY is required to submit changed URLs.");
  process.exit(1);
}

const sitemap = await readFile("dist/sitemap.xml", "utf8");
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
const host = new URL(seoData.siteUrl).host;

const response = await fetch(endpoint, {
  method: "POST",
  headers: { "Content-Type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host,
    key,
    keyLocation: `${seoData.siteUrl.replace(/\/+$/, "")}/${key}.txt`,
    urlList: urls,
  }),
});

if (!response.ok) {
  console.error(`IndexNow submission failed with HTTP ${response.status}.`);
  process.exit(1);
}

console.log(`Submitted ${urls.length} URLs to IndexNow.`);
