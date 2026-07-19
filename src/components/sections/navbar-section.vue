<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink } from "vue-router";
import SmartLink from "../SmartLink.vue";
import { navigation } from "../../content/navigation";
import { siteText } from "../../content/siteText";

const mobileOpen = ref(false);
const scrolled = ref(false);

function handleScroll() {
  scrolled.value = window.scrollY > 20;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<template>
  <header
    :class="[
      'sticky top-0 z-50 w-full transition-all duration-300',
      scrolled
        ? 'border-b border-outline-variant/60 bg-surface/95 shadow-card backdrop-blur-md dark:border-outline dark:bg-primary/95'
        : 'border-b border-transparent bg-surface dark:bg-primary'
    ]"
  >
    <div class="mx-auto flex max-w-container-max items-center justify-between px-6 py-3">
      <div class="flex items-center gap-4">
        <button
          class="flex h-11 w-11 items-center justify-center rounded text-primary transition-colors hover:bg-secondary-container hover:text-on-secondary-container dark:text-on-primary md:hidden"
          :aria-expanded="mobileOpen"
          aria-controls="mobile-nav"
          :aria-label="mobileOpen ? siteText.ui.closeMenu : siteText.ui.openMenu"
          @click="mobileOpen = !mobileOpen"
        >
          <span class="material-symbols-outlined">{{ mobileOpen ? 'close' : 'menu' }}</span>
        </button>
        <RouterLink
          to="/"
          class="flex items-center gap-3 font-headline-md text-headline-md font-bold tracking-tighter text-primary dark:text-on-primary"
          @click="mobileOpen = false"
        >
          <span class="flex h-8 w-8 items-center justify-center bg-secondary text-[14px] font-bold text-on-secondary-fixed">
            D
          </span>
          {{ siteText.brand.name.toUpperCase() }}
        </RouterLink>
      </div>

      <nav
        class="hidden items-center gap-1 font-label-lg text-label-lg uppercase tracking-[0.1em] md:flex"
      >
        <SmartLink
          v-for="item in navigation.main"
          :key="item.label"
          :link="item.link"
          class="relative rounded px-4 py-2 text-on-surface transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:w-0 after:-translate-x-1/2 after:bg-secondary after:transition-all after:duration-300 hover:bg-surface-container hover:text-primary hover:after:w-3/4 dark:text-on-primary-container dark:hover:bg-primary-container dark:hover:text-on-primary"
        >
          {{ item.label }}
        </SmartLink>
      </nav>

      <SmartLink
        :link="navigation.cta.link"
        class="group relative hidden items-center overflow-hidden bg-secondary px-6 py-3 font-label-lg text-label-lg uppercase tracking-[0.1em] text-on-secondary-fixed transition-all hover:text-on-secondary-fixed md:flex"
      >
        <span class="absolute inset-0 -translate-x-full bg-primary transition-transform duration-300 group-hover:translate-x-0"></span>
        <span class="relative z-10 flex items-center gap-2">
          {{ navigation.cta.label }}
          <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
        </span>
      </SmartLink>
    </div>

    <!-- Mobile dropdown -->
    <div
      v-if="mobileOpen"
      id="mobile-nav"
      class="border-t border-outline-variant bg-surface px-4 pb-6 pt-3 shadow-card md:hidden dark:border-outline dark:bg-primary"
    >
      <div class="flex flex-col gap-1">
        <SmartLink
          v-for="item in navigation.main"
          :key="item.label"
          :link="item.link"
          class="rounded px-3 py-3 font-label-lg text-label-lg uppercase tracking-[0.1em] text-on-surface transition-colors hover:bg-secondary-container hover:text-on-secondary-container dark:text-on-primary-container dark:hover:bg-secondary-container dark:hover:text-on-secondary-container"
          @click="mobileOpen = false"
        >
          {{ item.label }}
        </SmartLink>
        <SmartLink
          :link="navigation.cta.link"
          class="mt-3 flex items-center justify-center bg-secondary px-6 py-3 font-label-lg text-label-lg uppercase tracking-[0.1em] text-on-secondary-fixed transition-opacity hover:opacity-90 active:opacity-80"
          @click="mobileOpen = false"
        >
          {{ navigation.cta.label }}
        </SmartLink>
      </div>
    </div>
  </header>
</template>
