<script setup lang="ts">
import { siteText } from "../../content/siteText";

const credentials = siteText.credentials;
</script>

<template>
  <section id="credentials" v-reveal class="relative bg-background py-20 md:py-[120px]">
    <div class="absolute top-0 left-0 right-0 h-px section-divider"></div>

    <div class="mx-auto grid max-w-container-max gap-10 px-margin-mobile sm:px-margin-large-mobile md:grid-cols-12 md:px-margin-tablet lg:px-margin-desktop">
      <div class="md:col-span-5">
        <div class="mb-5 flex items-center gap-3">
          <span class="inline-block h-[1px] w-6 bg-[#942b2d]"></span>
          <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
            {{ credentials.eyebrow }}
          </span>
        </div>
        <h2 class="font-headline-lg text-headline-lg-mobile uppercase text-primary md:text-headline-lg accent-line">
          {{ credentials.heading }}
        </h2>
      </div>

      <div class="md:col-span-7">
        <p class="font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
          {{ credentials.body }}
        </p>
        <ul class="mt-8 grid gap-3">
          <li
            v-for="point in credentials.points"
            :key="point"
            class="flex gap-4 rounded-[5px] border-l-[3px] border-[#942b2d] bg-surface-container-low p-5 shadow-card"
          >
            <span class="material-symbols-outlined mt-0.5 text-[#942b2d]">verified</span>
            <span class="font-body-md text-body-md text-on-surface">{{ point }}</span>
          </li>
        </ul>
        <p class="mt-8 rounded-[5px] bg-primary p-6 font-body-md text-body-md leading-relaxed text-white shadow-card">
          {{ credentials.publishable }}
        </p>
      </div>
    </div>
  </section>
</template>
