<script setup lang="ts">
import { siteText } from "../../content/siteText";

const services = siteText.services.items;
</script>

<template>
  <section id="services" v-reveal class="relative bg-surface-container-low py-20 md:py-[120px]">
    <div class="absolute inset-0 diagonal-pattern-dark"></div>

    <div class="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
      <div class="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
        <div class="md:col-span-8">
          <div class="flex items-center gap-3 mb-5">
            <span class="inline-block h-[1px] w-6 bg-secondary"></span>
            <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">
              {{ siteText.services.eyebrow }}
            </span>
          </div>
          <h2 class="font-headline-lg text-headline-lg uppercase text-primary md:text-5xl accent-line">
            {{ siteText.services.heading }}
          </h2>
          <p class="mt-5 max-w-3xl font-body-md text-body-md text-on-surface-variant">
            {{ siteText.services.body }}
          </p>
        </div>

        <div class="md:col-span-4 md:text-right">
          <a
            :href="siteText.services.ctaHref"
            class="group relative inline-flex min-h-12 items-center overflow-hidden bg-primary px-7 font-label-md text-label-md uppercase text-on-primary transition-all hover:text-on-primary"
          >
            <span class="absolute inset-0 bg-secondary transition-transform duration-300 group-hover:translate-x-0"></span>
            <span class="relative z-10 flex items-center gap-2">
              {{ siteText.services.cta }}
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </span>
          </a>
        </div>
      </div>

      <div class="grid gap-gutter sm:grid-cols-2 xl:grid-cols-4">
        <article
          v-for="service in services"
          :key="service.title"
          class="card-lift group relative border border-outline-variant bg-surface-container-lowest shadow-card"
        >
          <!-- Top accent bar -->
          <div class="h-1.5 bg-gradient-to-r from-secondary to-secondary/60"></div>

          <div class="p-6">
            <!-- Icon container -->
            <div class="mb-6 flex h-14 w-14 items-center justify-center bg-primary text-on-primary transition-colors group-hover:bg-secondary group-hover:text-on-secondary-fixed">
              <span class="material-symbols-outlined text-[28px]">{{ service.icon }}</span>
            </div>

            <h3 class="font-headline-md text-2xl font-bold text-primary">{{ service.title }}</h3>

            <p class="mt-3 font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {{ service.description }}
            </p>

            <a
              :href="service.href"
              class="mt-6 inline-flex items-center gap-2 font-label-md text-label-md uppercase text-primary transition-colors hover:text-secondary"
              :aria-label="`Request details about ${service.title}`"
            >
              Scope It
              <span class="material-symbols-outlined text-[18px] transition-transform group-hover:translate-x-1">arrow_forward</span>
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
