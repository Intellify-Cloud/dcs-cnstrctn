import { watch } from "vue";
import { useRoute } from "vue-router";
import { siteText } from "../content/siteText";

const pageMeta: Record<string, { title: string; description: string }> = {
  home: {
    title: siteText.meta.title,
    description: siteText.meta.description,
  },
  about: {
    title: `${siteText.about.eyebrow} | ${siteText.brand.name}`,
    description: siteText.about.body,
  },
  projects: {
    title: `${siteText.pages.portfolio.title} | ${siteText.brand.name}`,
    description: siteText.pages.portfolio.body,
  },
  team: {
    title: `${siteText.team.eyebrow} | ${siteText.brand.name}`,
    description: siteText.team.body,
  },
  quality: {
    title: `${siteText.quality.eyebrow} | ${siteText.brand.name}`,
    description: siteText.quality.body,
  },
  credentials: {
    title: `${siteText.credentials.eyebrow} | ${siteText.brand.name}`,
    description: siteText.credentials.body,
  },
  contact: {
    title: `${siteText.pages.contact.title} | ${siteText.brand.name}`,
    description: siteText.pages.contact.body,
  },
  privacy: {
    title: `${siteText.pages.privacy.title} | ${siteText.brand.name}`,
    description: siteText.pages.privacy.body,
  },
};

function setMetaDescription(content: string) {
  setMetaTag("name", "description", content);
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

function setSocialMeta(title: string, description: string) {
  const image = new URL(siteText.social.image, window.location.origin).toString();

  setMetaTag("property", "og:type", siteText.social.type);
  setMetaTag("property", "og:title", title);
  setMetaTag("property", "og:description", description);
  setMetaTag("property", "og:image", image);
  setMetaTag("property", "og:image:alt", siteText.social.imageAlt);
  setMetaTag("name", "twitter:card", "summary_large_image");
  setMetaTag("name", "twitter:title", title);
  setMetaTag("name", "twitter:description", description);
  setMetaTag("name", "twitter:image", image);
  setMetaTag("name", "twitter:image:alt", siteText.social.imageAlt);
}

export function useSeoHead() {
  const route = useRoute();

  watch(
    () => route.name,
    (name) => {
      const meta = pageMeta[String(name)] ?? pageMeta.home;
      document.title = meta.title;
      setMetaDescription(meta.description);
      setSocialMeta(meta.title, meta.description);
    },
    { immediate: true }
  );
}
