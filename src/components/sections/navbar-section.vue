<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";
import { RouterLink, useRoute } from "vue-router";
import SmartLink from "../SmartLink.vue";
import { navigation } from "../../content/navigation";
import { siteText } from "../../content/siteText";

const mobileOpen = ref(false);
const scrolled = ref(false);
const route = useRoute();

function isActiveLink(link: string) {
  const [path, hash] = link.split("#");
  const targetPath = path || route.path;

  if (targetPath !== route.path) {
    return false;
  }

  return hash ? route.hash === `#${hash}` : true;
}

function handleScroll() {
  scrolled.value = window.scrollY > 20;
}

function handleLogoClick() {
  mobileOpen.value = false;

  if (route.path === "/") {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
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
      'fixed left-0 top-0 z-50 w-full text-white backdrop-blur-md transition-[height,background-color,box-shadow] duration-700 ease-in-out',
      mobileOpen
        ? 'h-auto overflow-visible bg-primary/95'
        : scrolled
        ? 'h-[75px] bg-primary/70 shadow-[0_2px_8px_rgba(0,0,0,0.12)]'
        : 'h-[80px] bg-[#F9F9F9] text-primary shadow-[0_3px_10px_rgba(0,0,0,0.08)]'
    ]"
  >
    <div class="mx-auto grid h-full max-w-container-max grid-cols-[1fr_auto] items-center gap-4 px-4 sm:px-6 md:px-8 lg:grid-cols-[180px_1fr_auto] lg:gap-6">
      <div class="flex min-w-0 items-center">
        <RouterLink
          to="/"
          :class="[
            'flex h-full w-[132px] items-center justify-center rounded-sm font-headline-md text-headline-md font-bold tracking-tighter text-white transition-[background-color,box-shadow,filter] duration-700 ease-in-out sm:w-[150px] md:w-[170px] lg:w-[180px]',
            scrolled
              ? 'bg-transparent shadow-none ring-0'
              : 'bg-transparent shadow-none ring-0'
          ]"
          @click="handleLogoClick"
        >
          <img
            :src="scrolled ? siteText.brand.logo : siteText.brand.defaultLogo"
            :alt="siteText.brand.logoAlt"
            :class="[
              'w-full object-contain transition-[height,filter] duration-700 ease-in-out',
              scrolled
                ? 'h-[64px]'
                : 'h-[75px] drop-shadow-[0_2px_8px_rgba(255,255,255,0.45)]'
            ]"
          />
        </RouterLink>
      </div>

      <button
        class="flex h-11 w-11 items-center justify-center justify-self-end rounded-[5px] bg-[#942b2d] text-white transition-colors hover:bg-[#7f2426] lg:hidden"
        :aria-expanded="mobileOpen"
        aria-controls="mobile-nav"
        :aria-label="mobileOpen ? siteText.ui.closeMenu : siteText.ui.openMenu"
        @click="mobileOpen = !mobileOpen"
      >
        <span class="material-symbols-outlined">{{ mobileOpen ? 'close' : 'menu' }}</span>
      </button>

      <nav
        class="hidden items-center justify-center gap-1 font-label-lg text-[13px] font-extrabold leading-[1.2] uppercase tracking-[0.1em] lg:flex"
      >
        <SmartLink
          v-for="item in navigation.main"
          :key="item.label"
          :link="item.link"
          :class="[
            'relative rounded px-[0.6rem] py-2 transition-colors after:absolute after:bottom-0 after:left-1/2 after:h-[2px] after:-translate-x-1/2 after:bg-[#942b2d] after:transition-all after:duration-300 hover:after:w-3/4',
            isActiveLink(item.link) ? 'after:w-3/4' : 'after:w-0',
            isActiveLink(item.link)
              ? scrolled
                ? 'bg-white/12 text-white'
                : 'bg-primary/10 text-primary'
              : scrolled
              ? 'text-white hover:bg-white/10 hover:text-white'
              : 'text-primary hover:bg-primary/10 hover:text-primary'
          ]"
          :aria-current="isActiveLink(item.link) ? 'page' : undefined"
        >
          {{ item.label }}
        </SmartLink>
      </nav>

      <SmartLink
        :link="navigation.cta.link"
        class="group relative hidden min-w-[188px] items-center justify-center overflow-hidden rounded-[5px] bg-[#942b2d] px-6 py-3 font-label-lg text-label-lg uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#7f2426] hover:text-white lg:flex"
      >
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
      class="border-t border-white/10 bg-primary/95 px-4 pb-6 pt-3 shadow-card lg:hidden"
    >
      <div class="flex flex-col gap-1">
        <SmartLink
          v-for="item in navigation.main"
          :key="item.label"
          :link="item.link"
          :class="[
            'rounded px-3 py-3 font-label-lg text-label-lg uppercase tracking-[0.1em] text-white transition-colors hover:bg-white/10',
            isActiveLink(item.link) ? 'bg-white/10 text-secondary' : ''
          ]"
          :aria-current="isActiveLink(item.link) ? 'page' : undefined"
          @click="mobileOpen = false"
        >
          {{ item.label }}
        </SmartLink>
        <SmartLink
          :link="navigation.cta.link"
          class="mt-3 flex items-center justify-center rounded-[5px] bg-[#942b2d] px-6 py-3 font-label-lg text-label-lg uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#7f2426] active:opacity-80"
          @click="mobileOpen = false"
        >
          {{ navigation.cta.label }}
        </SmartLink>
      </div>
    </div>
  </header>
</template>
