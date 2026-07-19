<script setup lang="ts">
import { siteText } from "../content/siteText";
</script>

<template>
  <section class="relative mx-auto max-w-4xl px-margin-mobile py-stack-lg md:px-margin-desktop">
    <div class="flex items-center gap-3 mb-6">
      <span class="inline-block h-[1px] w-6 bg-secondary"></span>
      <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">Portfolio</span>
    </div>
    <h1 class="mb-6 font-headline-lg text-headline-lg text-primary accent-line">
      {{ siteText.pages.portfolio.title }}
    </h1>
    <p class="font-body-lg text-body-lg leading-relaxed text-on-surface-variant max-w-3xl">
      {{ siteText.pages.portfolio.body }}
    </p>

    <div class="mt-16 grid gap-12">
      <div class="border border-outline-variant bg-surface-container-lowest p-8 shadow-card text-center">
        <span class="material-symbols-outlined text-5xl text-secondary/40 mb-4">construction</span>
        <p class="font-body-md text-body-md text-on-surface-variant">Portfolio projects will be showcased here. Check back soon.</p>
      </div>
    </div>
  </section>
</template>
