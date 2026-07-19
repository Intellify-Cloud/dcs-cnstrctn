<script setup lang="ts">
import { siteText } from "../../content/siteText";

const hero = siteText.hero;
</script>

<template>
  <section
    class="relative flex min-h-[600px] items-center overflow-hidden bg-primary md:h-[819px]"
  >
    <!-- Background image with dramatic overlay -->
    <div class="absolute inset-0 z-0">
      <div
        class="h-full w-full bg-cover bg-center scale-105 transition-transform duration-[20s] hover:scale-100"
        role="img"
        :aria-label="hero.imageAlt"
        :style="{ backgroundImage: `url('${hero.image}')` }"
      ></div>
      <div class="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/70 to-primary/30"></div>
      <!-- Blueprint grid overlay -->
      <div class="absolute inset-0 blueprint-grid"></div>
      <!-- Diagonal pattern accent -->
      <div class="absolute inset-0 diagonal-pattern"></div>
    </div>

    <!-- Scroll indicator -->
    <div class="absolute bottom-8 left-1/2 z-20 hidden -translate-x-1/2 flex-col items-center gap-2 md:flex">
      <span class="text-[10px] font-medium uppercase tracking-[0.2em] text-white/40">Scroll</span>
      <div class="scroll-indicator h-8 w-[1px] bg-gradient-to-b from-secondary/60 to-transparent"></div>
    </div>

    <div
      class="relative z-10 mx-auto grid w-full max-w-container-max grid-cols-1 gap-grid-gutter px-6 md:grid-cols-12"
    >
      <div class="flex flex-col gap-8 text-on-primary md:col-span-7 lg:col-span-6">
        <!-- Eyebrow badge -->
        <div class="flex items-center gap-3">
          <span class="inline-block h-[1px] w-8 bg-secondary"></span>
          <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">
            {{ hero.eyebrow }}
          </span>
        </div>

        <h1 class="font-display-lg text-display-lg leading-[1.05] text-on-primary hero-rise d1">
          {{ hero.heading }}
        </h1>

        <p class="max-w-xl font-body-lg text-body-lg text-on-primary/80 hero-rise d2">
          {{ hero.body }}
        </p>

        <div class="mt-4 flex flex-wrap gap-4 hero-rise d3">
          <a
            :href="hero.ctaHref"
            class="group relative inline-flex min-h-12 items-center overflow-hidden border border-secondary bg-secondary px-8 py-4 font-label-lg text-label-lg uppercase tracking-[0.1em] text-on-secondary-fixed transition-all hover:text-on-secondary-fixed"
          >
            <span class="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 group-hover:translate-x-0"></span>
            <span class="relative z-10">{{ hero.cta }}</span>
          </a>
          <a
            :href="hero.secondaryCtaHref"
            class="group relative inline-flex min-h-12 items-center overflow-hidden border-2 border-white/40 px-8 py-4 font-label-lg text-label-lg uppercase tracking-[0.1em] text-on-primary transition-all hover:border-secondary hover:text-secondary"
          >
            <span class="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-300 group-hover:translate-x-0"></span>
            <span class="relative z-10">{{ hero.secondaryCta }}</span>
          </a>
        </div>
      </div>
    </div>

    <!-- Bottom gradient edge -->
    <div class="absolute bottom-0 left-0 right-0 z-10 h-16 bg-gradient-to-t from-background to-transparent"></div>
  </section>
</template>
