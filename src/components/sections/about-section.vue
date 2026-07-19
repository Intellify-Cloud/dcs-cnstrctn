<script setup lang="ts">
import { siteText } from "../../content/siteText";

const about = siteText.about;
</script>

<template>
  <section id="about" v-reveal class="relative bg-background py-20 md:py-[120px]">
    <!-- Decorative top divider -->
    <div class="absolute top-0 left-0 right-0 h-px section-divider"></div>

    <div class="mx-auto grid max-w-container-max gap-12 px-margin-mobile md:grid-cols-12 md:px-margin-desktop">
      <!-- Left column: heading area -->
      <div class="md:col-span-5">
        <div class="flex items-center gap-3 mb-5">
          <span class="inline-block h-[1px] w-6 bg-secondary"></span>
          <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">{{ about.eyebrow }}</span>
        </div>
        <h2 class="font-headline-lg text-headline-lg uppercase text-primary md:text-5xl accent-line">
          {{ about.heading }}
        </h2>
      </div>

      <!-- Right column: content + image -->
      <div class="md:col-span-7">
        <div class="grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div>
            <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
              {{ about.body }}
            </p>
            <ul class="mt-8 grid gap-3">
              <li
                v-for="point in about.points"
                :key="point"
                class="card-lift flex gap-4 border-l-[3px] border-secondary bg-surface-container-low p-5 shadow-card"
              >
                <span class="material-symbols-outlined mt-0.5 text-secondary">check_circle</span>
                <span class="font-body-md text-body-md text-on-surface">{{ point }}</span>
              </li>
            </ul>
          </div>

          <div class="relative">
            <div class="absolute -bottom-4 -right-4 h-full w-full border-2 border-secondary/20 hidden lg:block"></div>
            <img
              :src="about.image"
              :alt="about.imageAlt"
              class="relative h-full min-h-[360px] w-full object-cover shadow-card"
            />
            <div class="corner-brackets absolute inset-0 hidden lg:block"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
