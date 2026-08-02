<script setup lang="ts">
import QualitySection from "../components/sections/quality-section.vue";
import CredentialsSection from "../components/sections/credentials-section.vue";
import { siteText } from "../content/siteText";
</script>

<template>
  <div>
    <QualitySection />

    <section id="csr" v-reveal class="relative bg-background py-20 md:py-[120px]">
      <div class="absolute top-0 left-0 right-0 h-px section-divider"></div>

      <div class="mx-auto grid max-w-container-max gap-10 px-margin-mobile sm:px-margin-large-mobile md:grid-cols-12 md:px-margin-tablet lg:px-margin-desktop">
        <div class="md:col-span-5">
          <div class="mb-5 flex items-center gap-3">
            <span class="inline-block h-[1px] w-6 bg-[#942b2d]"></span>
            <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
              {{ siteText.csr.eyebrow }}
            </span>
          </div>
          <h2 class="font-headline-lg text-headline-lg-mobile uppercase text-primary md:text-headline-lg accent-line">
            {{ siteText.csr.heading }}
          </h2>
        </div>

        <div class="md:col-span-7">
          <p class="font-body-lg text-body-lg leading-relaxed text-primary">
            {{ siteText.csr.intro }}
          </p>
          <p class="mt-6 font-body-md text-body-md leading-relaxed text-on-surface-variant">
            {{ siteText.csr.body }}
          </p>
          <p class="mt-8 rounded-[5px] border-l-[3px] border-[#942b2d] bg-surface-container-low p-6 font-body-lg text-body-lg leading-relaxed text-primary shadow-card">
            {{ siteText.csr.closing }}
          </p>
        </div>
      </div>
    </section>

    <CredentialsSection />
  </div>
</template>
