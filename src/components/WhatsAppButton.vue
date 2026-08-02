<script setup lang="ts">
import { siteText } from "../content/siteText";

const href = `https://wa.me/${siteText.whatsapp.phone}?text=${encodeURIComponent(siteText.whatsapp.message)}`;
</script>

<template>
  <a
    :href="href"
    target="_blank"
    rel="noopener noreferrer"
    :aria-label="siteText.whatsapp.ariaLabel"
    class="whatsapp-float fixed bottom-4 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_10px_28px_rgba(37,211,102,0.35)] transition-transform hover:-translate-y-1 hover:scale-105 hover:bg-[#1ebe5d] active:scale-95 md:bottom-[5.75rem] md:right-6 md:h-16 md:w-16"
  >
    <svg aria-hidden="true" class="relative z-10 h-8 w-8 md:h-9 md:w-9" viewBox="0 0 32 32" fill="currentColor">
      <path
        d="M16.04 4.5c-6.28 0-11.38 5.08-11.38 11.34 0 2.14.6 4.22 1.73 6.02L4.5 27.5l5.84-1.86a11.4 11.4 0 0 0 5.7 1.54c6.28 0 11.38-5.08 11.38-11.34S22.32 4.5 16.04 4.5Zm0 20.75c-1.82 0-3.6-.52-5.12-1.51l-.36-.23-3.08.98.99-2.95-.25-.38a9.32 9.32 0 0 1-1.62-5.32c0-5.19 4.23-9.41 9.44-9.41s9.44 4.22 9.44 9.41-4.23 9.41-9.44 9.41Zm5.17-7.05c-.28-.14-1.67-.82-1.93-.91-.26-.1-.45-.14-.64.14-.19.28-.74.91-.91 1.1-.17.19-.34.21-.62.07-.28-.14-1.2-.44-2.29-1.41-.85-.75-1.42-1.68-1.59-1.96-.17-.28-.02-.43.13-.57.13-.13.28-.34.43-.5.14-.17.19-.28.28-.47.1-.19.05-.36-.02-.5-.07-.14-.64-1.54-.88-2.11-.23-.55-.47-.48-.64-.49h-.55c-.19 0-.5.07-.76.36s-1 1-1 2.4 1.03 2.77 1.17 2.96c.14.19 2.02 3.08 4.89 4.32.68.29 1.21.47 1.63.6.68.22 1.31.19 1.8.12.55-.08 1.67-.68 1.91-1.34.24-.66.24-1.22.17-1.34-.07-.12-.26-.19-.55-.33Z"
      />
    </svg>
  </a>
</template>
