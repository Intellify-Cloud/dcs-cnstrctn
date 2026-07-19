<script setup lang="ts">
import { RouterView } from "vue-router";
import NavbarSection from "./components/sections/navbar-section.vue";
import FooterSection from "./components/sections/footer-section.vue";
import WhatsAppButton from "./components/WhatsAppButton.vue";
import BackToTopButton from "./components/BackToTopButton.vue";
import { useSeoHead } from "./composables/useSeoHead";

useSeoHead();
</script>

<template>
  <div class="flex min-h-screen flex-col bg-background text-on-background">
    <NavbarSection />
    <main class="flex-1">
      <RouterView />
    </main>
    <FooterSection />
    <WhatsAppButton />
    <BackToTopButton />
  </div>
</template>
