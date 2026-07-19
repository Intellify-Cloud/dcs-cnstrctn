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
    class="fixed bottom-6 left-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-secondary text-on-secondary shadow-depth transition-transform hover:-translate-y-1 hover:scale-105 active:scale-95"
  >
    <span class="material-symbols-outlined">chat</span>
  </a>
</template>
