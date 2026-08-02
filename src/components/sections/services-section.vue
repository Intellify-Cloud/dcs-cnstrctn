<script setup lang="ts">
import { siteText } from "../../content/siteText";

const services = siteText.services.items;
</script>

<template>
  <section id="services" v-reveal class="relative bg-surface-container-low py-20 md:py-[120px]">
    <div class="absolute inset-0 diagonal-pattern-dark"></div>

    <div class="relative z-10 mx-auto max-w-container-max px-margin-mobile sm:px-margin-large-mobile md:px-margin-tablet lg:px-margin-desktop">
      <div class="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
        <div class="md:col-span-8">
          <div class="flex items-center gap-3 mb-5">
            <span class="inline-block h-[1px] w-6 bg-[#942b2d]"></span>
            <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
              {{ siteText.services.eyebrow }}
            </span>
          </div>
          <h2 class="font-headline-lg text-headline-lg-mobile uppercase text-primary md:text-headline-lg accent-line">
            {{ siteText.services.heading }}
          </h2>
          <p class="mt-5 max-w-3xl font-body-md text-body-md text-on-surface-variant">
            {{ siteText.services.body }}
          </p>
        </div>

        <div class="md:col-span-4 md:text-right">
          <a
            :href="siteText.services.ctaHref"
            class="group relative inline-flex min-h-12 items-center overflow-hidden rounded-[5px] bg-[#942b2d] px-7 font-label-md text-label-md uppercase text-white transition-colors hover:bg-[#7f2426] hover:text-white"
          >
            <span class="relative z-10 flex items-center gap-2">
              {{ siteText.services.cta }}
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </span>
          </a>
        </div>
      </div>

      <div class="grid gap-gutter sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.title"
          class="card-lift group relative min-h-[440px] overflow-hidden rounded-[5px] border-2 border-transparent bg-primary shadow-card transition-colors duration-300 hover:border-[#942b2d]"
        >
          <img
            :src="service.image"
            :alt="service.imageAlt"
            class="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/72 to-primary/20"></div>
          <div class="pointer-events-none absolute inset-0 rounded-[3px] border-2 border-transparent bg-[linear-gradient(to_top,rgba(255,255,255,0.9),rgba(255,255,255,0.42)_50%,rgba(0,0,0,0.55)_100%)] bg-origin-border [mask:linear-gradient(#000_0_0)_padding-box,linear-gradient(#000_0_0)] [mask-composite:exclude] group-hover:opacity-0"></div>

          <div class="relative z-10 flex min-h-[440px] flex-col justify-end p-6">
            <!-- Icon container -->
            <div class="mb-6 flex h-14 w-14 items-center justify-center bg-[#942b2d] text-white">
              <span class="material-symbols-outlined text-[28px]">{{ service.icon }}</span>
            </div>

            <h3 class="font-headline-md text-2xl font-bold text-white">{{ service.title }}</h3>

            <p class="mt-3 font-body-sm text-body-sm leading-relaxed text-white/86">
              {{ service.description }}
            </p>

            <a
              :href="service.href"
              class="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-[5px] border border-white/55 bg-[#942b2d]/90 px-4 py-3 text-center font-label-md text-label-md uppercase text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_10px_24px_rgba(0,0,0,0.22)] transition-[background-color,border-color,box-shadow] duration-200 hover:border-white/70 hover:bg-[#5f191b] hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_28px_rgba(0,0,0,0.32)]"
              :aria-label="`Request details about ${service.title}`"
            >
              {{ siteText.services.itemCta }}
            </a>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
