<script setup lang="ts">
import SmartLink from "../SmartLink.vue";
import { navigation } from "../../content/navigation";
import { siteText } from "../../content/siteText";
</script>

<template>
  <footer class="relative bg-primary text-white">
    <!-- Decorative top border -->
    <div class="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-secondary/20 via-secondary to-secondary/20"></div>

    <div class="mx-auto grid max-w-container-max gap-10 px-margin-mobile py-16 sm:grid-cols-2 sm:px-margin-large-mobile md:px-margin-tablet lg:grid-cols-4 lg:px-margin-desktop">
      <!-- Brand column -->
      <div>
        <div class="flex items-center">
          <img
            :src="siteText.brand.logo"
            :alt="siteText.brand.logoAlt"
            class="h-24 w-auto max-w-[220px] object-contain"
          />
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
            class="font-body-sm text-body-sm text-white/60 transition-colors hover:text-secondary"
          >
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
            class="font-body-sm text-body-sm text-white/60 transition-colors hover:text-secondary"
          >
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
            class="rounded-[5px] bg-[#942b2d] px-4 text-white transition-colors hover:bg-[#7f2426]"
            :aria-label="siteText.ui.newsletterSubmit"
          >
            <span class="material-symbols-outlined text-[20px]">send</span>
          </button>
        </form>
      </div>
    </div>

    <!-- Bottom bar -->
    <div class="border-t border-white/10 px-margin-mobile py-6 sm:px-margin-large-mobile md:px-margin-tablet lg:px-margin-desktop">
      <div class="mx-auto grid max-w-container-max gap-3 text-center font-label-md text-label-md uppercase tracking-[0.1em] text-white/40 sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
        <span>
          {{ siteText.footer.copyright }}
        </span>
        <SmartLink
          v-for="link in siteText.footer.legalLinks"
          :key="link.label"
          :link="link.link"
          class="transition-colors hover:text-white"
        >
          {{ link.label }}
        </SmartLink>
        <a
          :href="siteText.footer.credit.link"
          target="_blank"
          rel="noopener noreferrer"
          class="transition-colors hover:text-white"
        >
          {{ siteText.footer.credit.label }}
        </a>
      </div>
    </div>
  </footer>
</template>
