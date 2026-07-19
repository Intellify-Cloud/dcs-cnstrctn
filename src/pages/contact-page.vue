<script setup lang="ts">
import ContactSection from "../components/sections/contact-section.vue";
import { siteText } from "../content/siteText";
</script>

<template>
  <div>
    <section class="relative mx-auto max-w-4xl px-margin-mobile py-stack-lg md:px-margin-desktop">
      <div class="flex items-center gap-3 mb-6">
        <span class="inline-block h-[1px] w-6 bg-secondary"></span>
        <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">Contact</span>
      </div>
      <h1 class="mb-6 font-headline-lg text-headline-lg text-primary accent-line">
        {{ siteText.pages.contact.title }}
      </h1>
      <p class="mb-10 font-body-lg text-body-lg leading-relaxed text-on-surface-variant max-w-3xl">
        {{ siteText.pages.contact.body }}
      </p>

      <form class="grid gap-5 md:grid-cols-2" @submit.prevent>
        <input
          type="text"
          :placeholder="siteText.pages.contact.form.namePlaceholder"
          class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover"
        />
        <input
          type="email"
          :placeholder="siteText.pages.contact.form.emailPlaceholder"
          class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover"
        />
        <textarea
          :placeholder="siteText.pages.contact.form.messagePlaceholder"
          rows="4"
          class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover md:col-span-2"
        ></textarea>
        <button
          type="submit"
          class="group relative inline-flex min-h-12 items-center justify-center overflow-hidden bg-primary px-8 font-label-md text-label-md uppercase text-on-primary transition-all hover:text-on-primary md:col-span-2 md:w-fit"
        >
          <span class="absolute inset-0 bg-secondary transition-transform duration-300 group-hover:translate-x-0"></span>
          <span class="relative z-10 flex items-center gap-2">
            {{ siteText.pages.contact.form.submit }}
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </span>
        </button>
      </form>
    </section>

    <ContactSection />
  </div>
</template>
