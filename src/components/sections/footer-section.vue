<script setup lang="ts">
import SmartLink from "../SmartLink.vue";
import { navigation } from "../../content/navigation";
import { siteText } from "../../content/siteText";
</script>

<template>
  <footer class="relative bg-primary text-white">
    <!-- Decorative top border -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20"></div>

    <div class="mx-auto grid max-w-container-max gap-10 px-margin-mobile py-16 sm:grid-cols-2 lg:grid-cols-4 md:px-margin-desktop">
      <!-- Brand column -->
      <div>
        <div class="flex items-center gap-3">
          <span class="flex h-8 w-8 items-center justify-center bg-secondary text-[14px] font-bold text-on-secondary-fixed">D</span>
          <div>
            <div class="font-headline-md text-2xl font-extrabold uppercase">{{ siteText.brand.name }}</div>
            <div class="font-label-md text-label-md uppercase tracking-[0.1em] text-secondary">
              {{ siteText.brand.tagline }}
            </div>
          </div>
        </div>
        <p class="mt-6 font-body-sm text-body-sm text-white/60 leading-relaxed">
          {{ siteText.footer.description }}
        </p>
      </div>

      <!-- Services column -->
      <div>
        <h5 class="mb-5 font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">
          {{ siteText.footer.servicesHeading }}
        </h5>
        <div class="grid gap-3">
          <SmartLink
            v-for="service in siteText.footer.services"
            :key="service"
            link="/#services"
            class="group flex items-center gap-2 font-body-sm text-body-sm text-white/60 transition-colors hover:text-secondary"
          >
            <span class="h-[1px] w-3 bg-white/20 transition-all group-hover:w-5 group-hover:bg-secondary"></span>
            {{ service }}
          </SmartLink>
        </div>
      </div>

      <!-- Company column -->
      <div>
        <h5 class="mb-5 font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">
          {{ siteText.footer.companyHeading }}
        </h5>
        <div class="grid gap-3">
          <SmartLink
            v-for="link in navigation.footer"
            :key="link.label"
            :link="link.link"
            class="group flex items-center gap-2 font-body-sm text-body-sm text-white/60 transition-colors hover:text-secondary"
          >
            <span class="h-[1px] w-3 bg-white/20 transition-all group-hover:w-5 group-hover:bg-secondary"></span>
            {{ link.label }}
          </SmartLink>
        </div>
      </div>

      <!-- Newsletter column -->
      <div>
        <h5 class="mb-5 font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">
          {{ siteText.footer.newsletterHeading }}
        </h5>
        <p class="font-body-sm text-body-sm text-white/60">{{ siteText.footer.newsletterBody }}</p>
        <form class="mt-5 grid grid-cols-[1fr_auto]" @submit.prevent>
          <input
            type="email"
            :placeholder="siteText.footer.newsletterPlaceholder"
            class="min-w-0 border border-white/20 bg-white/5 px-4 py-3 text-body-sm text-white placeholder:text-white/35 focus:border-secondary focus:ring-0"
          />
          <button
            type="submit"
            class="bg-secondary px-4 text-on-secondary-fixed transition-colors hover:bg-secondary/80"
            :aria-label="siteText.ui.newsletterSubmit"
          >
            <span class="material-symbols-outlined text-[20px]">send</span>
          </button>
        </form>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/10 px-margin-mobile py-6 md:px-margin-desktop">
      <div class="mx-auto flex max-w-container-max flex-col items-center justify-between gap-4 text-center md:flex-row">
        <span class="font-label-md text-label-md uppercase tracking-[0.1em] text-white/40">
          {{ siteText.footer.copyright }}
        </span>
        <div class="flex gap-6">
          <a href="#" class="font-label-md text-label-md uppercase tracking-[0.1em] text-white/40 transition-colors hover:text-secondary">Privacy</a>
          <a href="#" class="font-label-md text-label-md uppercase tracking-[0.1em] text-white/40 transition-colors hover:text-secondary">Terms</a>
        </div>
      </div>
    </div>
  </footer>
</template>
