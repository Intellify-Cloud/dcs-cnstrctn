<script setup lang="ts">
import SmartLink from "../SmartLink.vue";
import { siteText } from "../../content/siteText";

defineProps<{ compact?: boolean }>();

const team = siteText.team;
</script>

<template>
  <section id="team" v-reveal class="relative bg-background py-20 md:py-[120px]">
    <div class="absolute top-0 left-0 right-0 h-px section-divider"></div>

    <div class="mx-auto max-w-[1200px] px-margin-mobile sm:px-margin-large-mobile md:px-margin-tablet lg:px-margin-desktop">
      <div class="mb-12 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
        <div>
          <div class="mb-5 flex items-center gap-3">
            <span class="inline-block h-[1px] w-6 bg-[#942b2d]"></span>
            <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
              {{ team.eyebrow }}
            </span>
          </div>
          <h2 class="font-headline-lg text-headline-lg-mobile uppercase text-primary md:text-headline-lg accent-line">
            {{ compact ? team.compactHeading : team.heading }}
          </h2>
        </div>
        <p class="font-body-md text-body-md leading-relaxed text-on-surface-variant">
          {{ compact ? team.compactBody : team.body }}
        </p>
      </div>

      <div v-if="compact" class="grid gap-gutter lg:grid-cols-[1fr_1fr]">
        <article class="overflow-hidden rounded-[5px] border border-outline-variant bg-primary text-white shadow-card">
          <img
            :src="team.leader.image"
            :alt="team.leader.imageAlt"
            class="aspect-[4/3] w-full object-cover object-top"
            loading="lazy"
          />
          <div class="p-8">
            <p class="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">
              {{ team.leader.role }}
            </p>
            <h3 class="mt-4 font-headline-md text-3xl font-bold">
              {{ team.leader.name }}
            </h3>
            <p class="mt-5 font-body-md text-body-md leading-relaxed text-white/75">
              {{ team.leader.summary }}
            </p>
          </div>
        </article>

        <div class="rounded-[5px] border border-outline-variant bg-surface-container-lowest p-8 shadow-card">
          <div class="grid gap-4">
            <div
              v-for="highlight in team.highlights"
              :key="highlight"
              class="flex items-start gap-4 rounded-[5px] border-l-[3px] border-[#942b2d] bg-surface-container-low p-4"
            >
              <span class="material-symbols-outlined text-[#942b2d]">check_circle</span>
              <span class="font-body-md text-body-md text-on-surface">{{ highlight }}</span>
            </div>
          </div>

          <SmartLink
            :link="team.completeHref"
            class="mt-8 inline-flex min-h-12 items-center justify-center rounded-[5px] bg-[#942b2d] px-8 font-label-lg text-label-lg uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#7f2426]"
          >
            {{ team.completeCta }}
            <span class="material-symbols-outlined ml-2 text-[18px]">arrow_forward</span>
          </SmartLink>
        </div>
      </div>

      <div v-else class="grid gap-gutter">
        <div class="grid gap-gutter lg:grid-cols-2">
          <article class="flex min-h-full flex-col overflow-hidden rounded-[5px] border border-outline-variant bg-primary text-white shadow-card">
            <img
              :src="team.leader.image"
              :alt="team.leader.imageAlt"
              class="aspect-[16/13] w-full object-cover object-top"
              loading="lazy"
            />
            <div class="flex flex-1 flex-col p-8">
              <p class="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">
                {{ team.leader.role }}
              </p>
              <h3 class="mt-4 font-headline-md text-3xl font-bold">
                {{ team.leader.name }}
              </h3>
              <p class="mt-5 font-body-sm text-body-sm leading-relaxed text-white/75">
                {{ team.leader.summary }}
              </p>
              <div class="mt-auto flex flex-wrap gap-2 pt-6">
                <span
                  v-for="affiliation in team.leader.affiliations"
                  :key="affiliation"
                  class="bg-white/10 px-3 py-1 font-label-md text-label-md uppercase text-secondary"
                >
                  {{ affiliation }}
                </span>
              </div>
            </div>
          </article>

          <article class="flex min-h-full flex-col overflow-hidden rounded-[5px] border border-outline-variant bg-primary text-white shadow-card">
            <img
              :src="team.featuredMember.image"
              :alt="team.featuredMember.imageAlt"
              class="aspect-[16/13] w-full object-cover object-top"
              loading="lazy"
            />
            <div class="flex flex-1 flex-col p-8">
              <p class="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">
                {{ team.featuredMember.role }}
              </p>
              <h3 class="mt-4 font-headline-md text-3xl font-bold">
                {{ team.featuredMember.name }}
              </h3>
              <p class="mt-5 font-body-sm text-body-sm leading-relaxed text-white/75">
                {{ team.featuredMember.summary }}
              </p>
            </div>
          </article>
        </div>

        <div class="overflow-hidden rounded-[5px] border border-outline-variant bg-surface-container-lowest shadow-card">
          <div class="grid border-b border-outline-variant bg-surface-container-low px-5 py-4 font-label-md text-label-md uppercase tracking-[0.1em] text-primary sm:grid-cols-[1fr_1fr]">
            <span>Name</span>
            <span>Discipline / Qualification</span>
          </div>
          <div class="divide-y divide-outline-variant">
            <div
              v-for="member in team.members"
              :key="member[0]"
              class="grid gap-2 px-5 py-4 sm:grid-cols-[1fr_1fr]"
            >
              <span class="font-body-sm text-body-sm font-semibold text-primary">{{ member[0] }}</span>
              <span class="font-body-sm text-[13px] leading-5 text-on-surface-variant">{{ member[1] }}</span>
            </div>
          </div>
        </div>
      </div>

      <p v-if="!compact" class="mt-8 max-w-3xl font-body-md text-body-md leading-relaxed text-on-surface-variant">
        {{ team.close }}
      </p>
    </div>
  </section>
</template>
