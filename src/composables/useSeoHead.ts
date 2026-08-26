import { watch } from "vue";
import { useRoute } from "vue-router";
import seoData from "../content/seoData.json";

const pageMeta = Object.fromEntries([
  ...seoData.routes.map((route) => [route.name, route]),
  [seoData.notFound.name, seoData.notFound],
]);

function getSiteUrl() {
  return (import.meta.env.VITE_SITE_URL || seoData.siteUrl).replace(/\/+$/, "");
}

function getCanonicalUrl(path: string) {
  return `${getSiteUrl()}${path === "/" ? "/" : path}`;
}

function setMetaDescription(content: string) {
  setMetaTag("name", "description", content);
}

function setRobotsMeta(noindex?: boolean) {
  setMetaTag("name", "robots", noindex ? "noindex,follow" : "index,follow");
}

function setMetaTag(attribute: "name" | "property", key: string, content: string) {
  let tag = document.querySelector(`meta[${attribute}="${key}"]`);
  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attribute, key);
    document.head.appendChild(tag);
  }
  tag.setAttribute("content", content);
}

function setLinkTag(rel: string, href: string) {
  let tag = document.querySelector(`link[rel="${rel}"]`);
  if (!tag) {
    tag = document.createElement("link");
    tag.setAttribute("rel", rel);
    document.head.appendChild(tag);
  }
  tag.setAttribute("href", href);
}

function setSocialMeta(title: string, description: string, canonicalUrl: string) {
  const image = new URL(seoData.socialImage, getSiteUrl()).toString();

  setMetaTag("property", "og:type", "website");
  setMetaTag("property", "og:site_name", seoData.siteName);
  setMetaTag("property", "og:title", title);
  setMetaTag("property", "og:description", description);
  setMetaTag("property", "og:url", canonicalUrl);
  setMetaTag("property", "og:image", image);
  setMetaTag("property", "og:image:alt", seoData.socialImageAlt);
  setMetaTag("name", "twitter:card", "summary_large_image");
  setMetaTag("name", "twitter:title", title);
  setMetaTag("name", "twitter:description", description);
  setMetaTag("name", "twitter:image", image);
  setMetaTag("name", "twitter:image:alt", seoData.socialImageAlt);
}

export function useSeoHead() {
  const route = useRoute();

  watch(
    () => route.fullPath,
    () => {
      const meta = pageMeta[String(route.name)] ?? pageMeta.home;
      const canonicalUrl = getCanonicalUrl(meta.path);
      document.title = meta.title;
      setMetaDescription(meta.description);
      setRobotsMeta(meta.noindex);
      setLinkTag("canonical", canonicalUrl);
      setSocialMeta(meta.title, meta.description, canonicalUrl);
    },
    { immediate: true }
  );
}
