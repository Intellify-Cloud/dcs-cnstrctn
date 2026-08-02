<script setup lang="ts">
import { siteText } from "../content/siteText";
</script>

<template>
  <section class="relative mx-auto max-w-4xl px-margin-mobile py-stack-lg sm:px-margin-large-mobile md:px-margin-tablet lg:px-margin-desktop">
    <div class="flex items-center gap-3 mb-6">
      <span class="inline-block h-[1px] w-6 bg-[#942b2d]"></span>
      <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
        {{ siteText.pages.privacy.eyebrow }}
      </span>
    </div>
    <h1 class="mb-6 font-headline-lg text-headline-lg-mobile text-primary md:text-headline-lg accent-line">
      {{ siteText.pages.privacy.title }}
    </h1>
    <p class="mb-6 font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
      {{ siteText.pages.privacy.body }}
    </p>
    <div class="rounded-[5px] border border-outline-variant bg-surface-container-lowest p-6 shadow-card">
      <p class="font-body-md text-body-md leading-relaxed text-on-surface-variant">
        {{ siteText.pages.privacy.note }}
      </p>
    </div>
  </section>
</template>
