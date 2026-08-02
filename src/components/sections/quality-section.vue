<script setup lang="ts">
import { siteText } from "../../content/siteText";

const quality = siteText.quality;
</script>

<template>
  <section id="quality" v-reveal class="relative bg-surface-container-low py-20 md:py-[120px]">
    <div class="absolute inset-0 diagonal-pattern-dark"></div>

    <div class="relative z-10 mx-auto max-w-container-max px-margin-mobile sm:px-margin-large-mobile md:px-margin-tablet lg:px-margin-desktop">
      <div class="mb-12 max-w-4xl">
        <div class="mb-5 flex items-center gap-3">
          <span class="inline-block h-[1px] w-6 bg-[#942b2d]"></span>
          <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
            {{ quality.eyebrow }}
          </span>
        </div>
        <h2 class="font-headline-lg text-headline-lg-mobile uppercase text-primary md:text-headline-lg accent-line">
          {{ quality.heading }}
        </h2>
        <p class="mt-5 font-body-md text-body-md leading-relaxed text-on-surface-variant">
          {{ quality.body }}
        </p>
      </div>

      <div class="grid gap-gutter md:grid-cols-2 lg:grid-cols-4">
        <article
          v-for="item in quality.items"
          :key="item.title"
          class="card-lift rounded-[5px] border border-outline-variant bg-surface-container-lowest p-6 shadow-card"
        >
          <div class="mb-6 flex h-14 w-14 items-center justify-center bg-primary text-on-primary">
            <span class="material-symbols-outlined text-[28px]">{{ item.icon }}</span>
          </div>
          <h3 class="font-headline-md text-2xl font-bold text-primary">{{ item.title }}</h3>
          <p class="mt-3 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
            {{ item.description }}
          </p>
        </article>
      </div>

      <p class="mt-10 rounded-[5px] border-l-[3px] border-[#942b2d] bg-surface-container-lowest p-6 font-body-lg text-body-lg leading-relaxed text-primary shadow-card">
        {{ quality.statement }}
      </p>
    </div>
  </section>
</template>
