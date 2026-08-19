<script setup lang="ts">
import { reactive, ref } from "vue";
import ContactSection from "../components/sections/contact-section.vue";
import { siteText } from "../content/siteText";

const form = siteText.pages.contact.form;
const isSubmitting = ref(false);
const submitMessage = ref("");
const submitStatus = ref<"idle" | "success" | "error">("idle");
const enquiry = reactive({
  name: "",
  email: "",
  phone: "",
  location: "",
  message: "",
  website: "",
});

async function handleSubmit() {
  isSubmitting.value = true;
  submitMessage.value = "";
  submitStatus.value = "idle";

  const formData = new FormData();
  Object.entries(enquiry).forEach(([key, value]) => {
    formData.append(key, value);
  });

  try {
    const response = await fetch("/send-mail.php", {
      method: "POST",
      body: formData,
    });
    const responseText = await response.text();
    const result = responseText
      ? JSON.parse(responseText)
      : { message: "The mail server returned an empty response." };

    if (!response.ok || !result.success) {
      throw new Error(result.message);
    }

    submitStatus.value = "success";
    submitMessage.value = result.message;
    enquiry.name = "";
    enquiry.email = "";
    enquiry.phone = "";
    enquiry.location = "";
    enquiry.message = "";
    enquiry.website = "";
  } catch (error) {
    submitStatus.value = "error";
    submitMessage.value =
      error instanceof SyntaxError
        ? "The mail server returned an invalid response. Check send-mail.php and mail-debug.log on the server."
        : error instanceof Error
          ? error.message
          : "Something went wrong. Please try again.";
  } finally {
    isSubmitting.value = false;
  }
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
        <input v-model="enquiry.email" required type="email" :placeholder="form.emailPlaceholder" class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover" />
        <input v-model="enquiry.phone" type="tel" :placeholder="form.phonePlaceholder" class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover" />
        <input v-model="enquiry.location" type="text" :placeholder="form.locationPlaceholder" class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover" />
        <textarea v-model="enquiry.message" required :placeholder="form.messagePlaceholder" rows="4" class="border border-outline-variant/50 bg-surface-container-lowest px-4 py-3 text-body-md shadow-card outline-none transition-all focus:border-secondary focus:shadow-card-hover md:col-span-2"></textarea>
        <input v-model="enquiry.website" type="text" name="website" autocomplete="off" tabindex="-1" class="hidden" aria-hidden="true" />
        <button type="submit" :disabled="isSubmitting" class="group relative inline-flex min-h-12 items-center justify-center overflow-hidden rounded-[5px] bg-[#942b2d] px-8 font-label-md text-label-md uppercase text-white transition-colors hover:bg-[#7f2426] hover:text-white disabled:cursor-not-allowed disabled:opacity-60 md:col-span-2 md:w-fit">
          <span class="relative z-10 flex items-center gap-2">
            {{ isSubmitting ? "Sending..." : form.submit }}
            <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
          </span>
        </button>
        <p
          v-if="submitMessage"
          class="font-body-md text-body-md md:col-span-2"
          :class="submitStatus === 'success' ? 'text-[#2f6f3e]' : 'text-[#942b2d]'"
        >
          {{ submitMessage }}
        </p>
      </form>
    </section>

    <ContactSection />
  </div>
</template>
