<script setup lang="ts">
import { reactive } from "vue";
import ContactSection from "../components/sections/contact-section.vue";
import { siteText } from "../content/siteText";

const form = siteText.pages.contact.form;
const enquiry = reactive({
  name: "",
  organisation: "",
  email: "",
  phone: "",
  location: "",
  service: "",
  message: "",
  preference: "",
});

function handleSubmit() {
  const subject = encodeURIComponent(`Project enquiry from ${enquiry.name || "website visitor"}`);
  const body = encodeURIComponent(
    [
      `Name: ${enquiry.name}`,
      `Organisation: ${enquiry.organisation}`,
      `Email: ${enquiry.email}`,
      `Phone: ${enquiry.phone}`,
      `Project location: ${enquiry.location}`,
      `Service required: ${enquiry.service}`,
      `Preferred contact method: ${enquiry.preference}`,
      "",
      "Brief project description:",
      enquiry.message,
    ].join("\n"),
  );

  window.location.href = `mailto:${siteText.contact.email}?subject=${subject}&body=${body}`;
}
</script>

<template>
  <div>
    <section class="relative mx-auto max-w-5xl px-margin-mobile py-stack-lg sm:px-margin-large-mobile md:px-margin-tablet lg:px-margin-desktop">
      <div class="mb-6 flex items-center gap-3">
        <span class="inline-block h-[1px] w-6 bg-[#942b2d]"></span>
        <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
          {{ siteText.pages.contact.eyebrow }}
        </span>
      </div>
      <h1 class="mb-6 font-headline-lg text-headline-lg-mobile text-primary md:text-headline-lg accent-line">
        {{ siteText.pages.contact.title }}
      </h1>
      <p class="mb-10 max-w-3xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
        {{ siteText.pages.contact.body }}
      </p>

      <form class="grid gap-5 md:grid-cols-2" @submit.prevent="handleSubmit">
        <input v-model="enquiry.name" required type="text" :placeholder="form.namePlaceholder" class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover" />
        <input v-model="enquiry.organisation" type="text" :placeholder="form.organisationPlaceholder" class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover" />
        <input v-model="enquiry.email" required type="email" :placeholder="form.emailPlaceholder" class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover" />
        <input v-model="enquiry.phone" type="tel" :placeholder="form.phonePlaceholder" class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover" />
        <input v-model="enquiry.location" type="text" :placeholder="form.locationPlaceholder" class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover" />
        <input v-model="enquiry.service" type="text" :placeholder="form.servicePlaceholder" class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover" />
        <textarea v-model="enquiry.message" required :placeholder="form.messagePlaceholder" rows="4" class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover md:col-span-2"></textarea>
        <input v-model="enquiry.preference" type="text" :placeholder="form.preferencePlaceholder" class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover md:col-span-2" />
        <button type="submit" class="group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-[5px] bg-[#942b2d] px-8 font-label-md text-label-md uppercase text-white transition-colors hover:bg-[#7f2426] hover:text-white md:col-span-2 md:w-fit">
          <span class="relative z-10 flex items-center gap-2">
            {{ form.submit }}
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </span>
        </button>
      </form>
    </section>

    <ContactSection />
  </div>
</template>
