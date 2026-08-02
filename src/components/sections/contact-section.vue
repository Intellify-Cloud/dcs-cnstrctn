<script setup lang="ts">
import { siteText } from "../../content/siteText";

const contact = siteText.contact;
</script>

<template>
  <section id="quote" v-reveal class="relative bg-primary py-20 text-white md:py-[120px]">
    <!-- Decorative overlays -->
    <div class="absolute inset-0 blueprint-grid"></div>
    <div class="absolute inset-0 diagonal-pattern"></div>

    <div class="relative z-10 mx-auto grid max-w-container-max gap-10 px-margin-mobile sm:px-margin-large-mobile md:grid-cols-12 md:px-margin-tablet lg:px-margin-desktop">
      <div class="md:col-span-7">
        <div class="flex items-center gap-3 mb-5">
          <span class="inline-block h-[1px] w-6 bg-[#942b2d]"></span>
          <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">{{ contact.eyebrow }}</span>
        </div>
        <h2 class="font-headline-lg text-headline-lg-mobile uppercase md:text-headline-lg accent-line">
          {{ contact.heading }}
        </h2>
        <p class="mt-6 max-w-2xl font-body-lg text-body-lg text-white/70 leading-relaxed">
          {{ contact.body }}
        </p>
      </div>

      <div class="rounded-[5px] border border-white/15 bg-white/5 p-6 shadow-card backdrop-blur-sm md:col-span-5 md:p-8">
        <div class="grid gap-4">
          <a
            :href="`mailto:${contact.email}`"
            class="group flex items-center gap-4 border border-white/15 p-4 transition-all hover:border-secondary hover:bg-secondary/10"
          >
            <span class="flex h-10 w-10 items-center justify-center bg-secondary/20 text-secondary">
              <span class="material-symbols-outlined">mail</span>
            </span>
            <span class="font-body-md text-body-md text-white/80 group-hover:text-secondary">{{ contact.email }}</span>
          </a>
          <a
            :href="`tel:${contact.phone.replaceAll(' ', '')}`"
            class="group flex items-center gap-4 border border-white/15 p-4 transition-all hover:border-secondary hover:bg-secondary/10"
          >
            <span class="flex h-10 w-10 items-center justify-center bg-secondary/20 text-secondary">
              <span class="material-symbols-outlined">call</span>
            </span>
            <span class="font-body-md text-body-md text-white/80 group-hover:text-secondary">{{ contact.phone }}</span>
          </a>
          <div class="flex items-center gap-4 border border-white/15 p-4">
            <span class="flex h-10 w-10 items-center justify-center bg-secondary/20 text-secondary">
              <span class="material-symbols-outlined">location_on</span>
            </span>
            <span class="font-body-md text-body-md text-white/80">{{ contact.address }}</span>
          </div>
        </div>

        <a
          href="/contact"
          class="group relative mt-8 inline-flex min-h-12 w-full items-center justify-center overflow-hidden rounded-[5px] bg-[#942b2d] px-7 font-label-md text-label-md uppercase text-white transition-colors hover:bg-[#7f2426] hover:text-white"
        >
          <span class="relative z-10 flex items-center gap-2">
            {{ contact.cta }}
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </span>
        </a>
      </div>
    </div>
  </section>
</template>
