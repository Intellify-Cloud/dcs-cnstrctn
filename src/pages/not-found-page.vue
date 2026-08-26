<script setup lang="ts">
import SmartLink from "../components/SmartLink.vue";
import { siteText } from "../content/siteText";

const notFound = siteText.pages.notFound;
</script>

<template>
  <section class="relative mx-auto max-w-4xl px-margin-mobile py-stack-lg sm:px-margin-large-mobile md:px-margin-tablet lg:px-margin-desktop">
    <div class="mb-6 flex items-center gap-3">
      <span class="inline-block h-[1px] w-6 bg-[#942b2d]"></span>
      <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
        {{ notFound.eyebrow }}
      </span>
    </div>

    <h1 class="mb-6 font-headline-lg text-headline-lg-mobile text-primary md:text-headline-lg accent-line">
      {{ notFound.title }}
    </h1>

    <p class="max-w-3xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
      {{ notFound.body }}
    </p>

    <div class="mt-10 grid gap-4 sm:grid-cols-2">
      <SmartLink
        v-for="link in notFound.links"
        :key="link.label"
        :link="link.link"
        class="inline-flex min-h-12 items-center justify-center rounded-[5px] bg-[#942b2d] px-6 text-center font-label-md text-label-md uppercase text-white transition-colors hover:bg-[#7f2426] hover:text-white"
      >
        {{ link.label }}
      </SmartLink>
    </div>
  </section>
</template>
