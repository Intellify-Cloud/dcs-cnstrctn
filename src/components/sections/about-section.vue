<script setup lang="ts">
import { siteText } from "../../content/siteText";

const about = siteText.about;
</script>

<template>
  <section id="about" v-reveal class="relative bg-background pb-20 pt-32 md:pb-[120px] md:pt-[140px]">
    <!-- Decorative top divider -->
    <div class="absolute top-0 left-0 right-0 h-px section-divider"></div>

    <div class="mx-auto grid max-w-container-max gap-12 px-margin-mobile sm:px-margin-large-mobile md:grid-cols-12 md:px-margin-tablet lg:px-margin-desktop">
      <!-- Left column: image-backed heading area -->
      <div class="relative min-h-[360px] overflow-hidden rounded-[5px] bg-primary p-6 text-white shadow-depth sm:p-8 md:col-span-5 lg:min-h-[520px]">
        <img
          :src="about.image"
          :alt="about.imageAlt"
          class="absolute inset-0 h-full w-full object-cover"
        />
        <div class="absolute inset-0 bg-primary/55"></div>
        <div class="absolute inset-0 bg-gradient-to-b from-primary/20 via-primary/50 to-primary/70"></div>
        <div class="relative z-10 flex h-full flex-col justify-start">
          <div class="flex items-center gap-3 mb-5">
            <span class="inline-block h-[1px] w-6 bg-secondary"></span>
            <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">{{ about.eyebrow }}</span>
          </div>
          <h1 class="about-page-title font-headline-lg text-headline-lg-mobile uppercase text-white md:text-headline-lg">
            {{ about.heading }}
          </h1>
          <p class="mt-12 max-w-[28rem] font-label-lg text-[15px] font-semibold uppercase leading-[22px] tracking-[0.12em] text-white/85 md:mt-16">
            {{ about.highlight }}
          </p>
        </div>
      </div>

      <!-- Right column: content -->
      <div class="md:col-span-7">
        <div>
          <p class="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
            {{ about.body }}
          </p>
          <p class="mt-6 font-body-lg text-body-lg font-semibold leading-relaxed text-primary">
            {{ about.foundingStatement }}
          </p>
          <ul class="mt-8 grid gap-3">
            <li
              v-for="point in about.points"
              :key="point"
              class="card-lift flex gap-4 rounded-[5px] bg-surface-container-low p-5 shadow-card"
            >
              <span class="material-symbols-outlined mt-0.5 text-[#942b2d]">check_circle</span>
              <span class="font-body-md text-body-md text-on-surface">{{ point }}</span>
            </li>
          </ul>

          <div class="mt-10 rounded-[5px] bg-surface-container-lowest p-6 shadow-depth md:p-8">
            <h3 class="font-headline-md text-[26px] font-bold leading-8 text-primary md:text-[32px] md:leading-10">
              {{ about.partnershipHeading }}
            </h3>
            <div class="mt-5 grid gap-5">
              <p
                v-for="paragraph in about.partnership"
                :key="paragraph"
                class="font-body-md text-body-md leading-7 text-on-surface-variant"
              >
                {{ paragraph }}
              </p>
            </div>
          </div>

          <div class="mt-8 rounded-[5px] border border-outline-variant bg-surface-container-lowest p-6 shadow-card">
            <h3 class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
              {{ about.missionLabel }}
            </h3>
            <ul class="mt-3 grid gap-2">
              <li
                v-for="item in about.mission"
                :key="item"
                class="flex gap-3 font-body-sm text-body-sm text-on-surface-variant"
              >
                <span class="material-symbols-outlined text-[18px] text-[#942b2d]">check</span>
                <span>{{ item }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
@media (min-width: 768px) {
  .about-page-title.md\:text-headline-lg {
    font-size: 35px;
    line-height: 1.2;
    letter-spacing: -0.01em;
    font-weight: 700;
  }
}
</style>
