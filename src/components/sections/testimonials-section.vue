<script setup lang="ts">
import { siteText } from "../../content/siteText";

interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

const items = siteText.testimonials.items as Testimonial[];
</script>

<template>
  <section
    id="testimonials"
    v-reveal
    class="relative bg-surface-container py-stack-lg"
  >
    <div class="absolute inset-0 diagonal-pattern-dark"></div>

    <div class="relative z-10 mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
      <div class="mb-16 text-center">
        <span class="mb-4 block font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
          {{ siteText.testimonials.eyebrow }}
        </span>
        <h2 class="mb-4 font-headline-lg text-headline-lg text-primary">
          {{ siteText.testimonials.heading }}
        </h2>
        <div class="mx-auto h-1 w-16 bg-gradient-to-r from-secondary/40 via-secondary to-secondary/40"></div>
        <p class="mx-auto mt-6 max-w-2xl font-body-md text-body-md text-on-surface-variant">
          {{ siteText.testimonials.body }}
        </p>
      </div>

      <div class="grid grid-cols-1 gap-gutter sm:grid-cols-2">
        <figure
          v-for="item in items"
          :key="item.name + item.detail"
          class="card-lift flex flex-col border border-outline-variant bg-surface p-8 shadow-card"
        >
          <span class="material-symbols-outlined mb-4 text-4xl text-secondary/40">format_quote</span>
          <blockquote class="flex-1 font-body-lg text-body-lg italic leading-relaxed text-on-surface-variant">
            &ldquo;{{ item.quote }}&rdquo;
          </blockquote>
          <figcaption class="mt-6 border-t border-outline-variant/40 pt-5">
            <strong class="block font-headline-md text-headline-md text-primary">{{ item.name }}</strong>
            <span class="font-label-md text-label-md tracking-[0.1em] text-on-surface-variant">{{ item.detail }}</span>
          </figcaption>
        </figure>
      </div>
    </div>
  </section>
</template>
