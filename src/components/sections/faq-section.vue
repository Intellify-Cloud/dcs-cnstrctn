<script setup lang="ts">
// FAQ accordion styled after the hero card: an inset rounded-3xl primary
// panel with uppercase Playfair headings, cream item cards like the hero's
// trust bar, and a light CTA button. Open/close animates via the CSS
// grid-template-rows trick — no JS measuring.
import { onMounted, onUnmounted, ref } from "vue";
import { siteText } from "../../content/siteText";

const faq = siteText.faq;
const openIndex = ref(0);
const toggle = (index: number) => {
  openIndex.value = openIndex.value === index ? -1 : index;
};

// FAQPage JSON-LD, injected with plain DOM APIs to match useSeoHead
// (the app doesn't install unhead).
let ldScript: HTMLScriptElement | null = null;
onMounted(() => {
  ldScript = document.createElement("script");
  ldScript.type = "application/ld+json";
  ldScript.textContent = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  });
  document.head.appendChild(ldScript);
});
onUnmounted(() => {
  ldScript?.remove();
  ldScript = null;
});
</script>

<template>
  <section id="faq" v-reveal class="px-margin-mobile py-stack-lg md:px-margin-desktop" aria-labelledby="faq-heading">
    <div
      class="mx-auto max-w-container-max rounded-3xl bg-primary px-margin-mobile py-14 md:px-16 md:py-20"
    >
      <div class="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1.4fr]">
        <!-- Left: heading + CTA, mirroring the hero's left-aligned copy block -->
        <div class="max-w-xl">
          <span
            class="mb-4 block font-label-md text-label-md uppercase tracking-[0.2em] text-primary-fixed"
          >
            {{ faq.eyebrow }}
          </span>
          <h2
            id="faq-heading"
            class="font-headline-lg text-headline-lg-mobile uppercase text-white md:text-headline-lg"
          >
            {{ faq.heading }}
          </h2>
          <p class="mt-5 font-body-md text-body-md leading-7 text-white/90">
            {{ faq.body }}
          </p>
          <a
            :href="faq.ctaHref"
            class="btn btn-light mt-8 px-8 py-4"
          >
            {{ faq.cta }}
          </a>
        </div>

        <!-- Right: accordion cards, echoing the hero's trust bar -->
        <div class="flex flex-col gap-4">
          <div
            v-for="(item, index) in faq.items"
            :key="item.question"
            class="faq-item rounded-xl border brass-border bg-surface px-6 py-5 shadow-soft"
            :class="{ 'is-open': openIndex === index }"
          >
            <button
              type="button"
              class="flex w-full items-center justify-between gap-4 text-left"
              :aria-expanded="openIndex === index"
              :aria-controls="`faq-panel-${index}`"
              @click="toggle(index)"
            >
              <span class="font-headline-md text-lg font-semibold text-on-surface md:text-headline-md">
                {{ item.question }}
              </span>
              <span
                class="flex h-8 w-8 flex-none items-center justify-center rounded-full bg-primary text-on-primary"
                aria-hidden="true"
              >
                <span
                  class="material-symbols-outlined text-[20px] transition-transform duration-200"
                  :class="{ 'rotate-45': openIndex === index }"
                >
                  add
                </span>
              </span>
            </button>

            <div :id="`faq-panel-${index}`" class="faq-panel" role="region">
              <div class="faq-panel-inner">
                <p class="mt-3 font-body-md text-body-md leading-7 text-on-surface-variant">
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.faq-panel {
  display: grid;
  grid-template-rows: 0fr;
  transition: grid-template-rows 300ms ease;
}

.faq-item.is-open .faq-panel {
  grid-template-rows: 1fr;
}

.faq-panel-inner {
  overflow: hidden;
}
</style>
