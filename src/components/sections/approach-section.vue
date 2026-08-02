<script setup lang="ts">
import { siteText } from "../../content/siteText";

const approach = siteText.approach;
</script>

<template>
  <section id="approach" v-reveal class="px-3 py-stack-lg md:px-4">
    <div class="mx-auto max-w-container-max overflow-hidden rounded-[5px] bg-primary shadow-hero">
      <div class="grid min-h-[680px] grid-cols-1 lg:grid-cols-[0.95fr_1.05fr]">
        <!-- Image panel -->
        <div class="relative flex min-h-[520px] items-end overflow-hidden p-6 sm:p-10 lg:min-h-full">
          <div
            class="absolute inset-0 bg-cover bg-center scale-105 transition-transform duration-[15s] hover:scale-110"
            :style="{ backgroundImage: `url('${approach.image}')` }"
            role="img"
            :aria-label="approach.imageAlt"
          ></div>
          <div class="absolute inset-0 bg-gradient-to-t from-black/90 via-black/65 to-black/40"></div>
          <div class="absolute inset-0 blueprint-grid"></div>

          <div class="relative z-10 max-w-xl text-white">
            <span class="mb-4 block font-label-md text-label-md uppercase tracking-[0.2em] text-white">
              {{ approach.eyebrow }}
            </span>
            <h2 class="font-headline-xl text-headline-lg-mobile uppercase md:text-[48px] md:leading-[56px]">
              {{ approach.heading }}
            </h2>
            <p class="mt-6 font-body-lg text-body-md leading-7 text-white/80 md:text-body-lg md:leading-8">
              {{ approach.body }}
            </p>
            <a
              :href="approach.ctaHref"
              class="group relative mt-8 inline-flex min-h-12 items-center justify-center overflow-hidden rounded-[5px] bg-[#942b2d] px-6 font-body-sm text-sm font-bold text-white shadow-soft transition-colors hover:bg-[#7f2426] hover:text-white"
            >
              <span class="relative z-10 flex items-center gap-2">
                {{ approach.cta }}
                <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
              </span>
            </a>
          </div>
        </div>

        <!-- Steps panel -->
        <div class="bg-surface-container-low px-5 py-8 sm:px-8 sm:py-10 lg:px-12 lg:py-14">
          <div class="flex h-full flex-col justify-center gap-4">
            <article
              v-for="step in approach.items"
              :key="step.number"
              class="card-lift group relative overflow-hidden rounded-[5px] bg-surface-container-high p-5 shadow-card sm:p-6"
            >
              <div class="grid gap-5 sm:grid-cols-[auto_1fr] sm:items-start">
                <div class="flex items-center gap-3 sm:block">
                  <div
                    class="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-on-primary transition-all duration-300 group-hover:bg-secondary group-hover:scale-110 group-hover:shadow-lg"
                  >
                    <span class="material-symbols-outlined text-[22px]">{{ step.icon }}</span>
                  </div>
                </div>

                <div>
                  <h3 class="font-headline-md text-headline-md text-primary">
                    {{ step.title }}
                  </h3>
                  <p class="mt-3 font-body-sm text-body-sm leading-6 text-on-surface-variant">
                    {{ step.description }}
                  </p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
