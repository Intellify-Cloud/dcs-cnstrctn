<script setup lang="ts">
import { siteText } from "../../content/siteText";

interface Role {
  title: string;
  organisation: string;
  type: string;
  period: string;
  location: string;
  mode: string;
  url?: string;
  summary: string;
  highlights: string[];
}

interface Education {
  institution: string;
  qualification: string;
  period: string;
  summary: string;
}

const roles = siteText.experience.roles as Role[];
const education = siteText.experience.education as Education[];

// Horizontal 50/30/20 split: featured current role, condensed previous role,
// compact education column.
const currentRole = roles[0];
const previousRoles = roles.slice(1);
</script>

<template>
  <section id="experience" v-reveal class="bg-surface py-stack-lg">
    <div class="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
      <div class="mb-12 grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
        <div>
          <span class="mb-4 block font-label-md text-label-md uppercase tracking-[0.2em] text-secondary">
            {{ siteText.experience.eyebrow }}
          </span>
          <h2 class="font-headline-xl text-headline-lg-mobile text-primary md:text-headline-xl">
            {{ siteText.experience.heading }}
          </h2>
        </div>
        <p class="max-w-3xl font-body-lg text-body-md leading-7 text-on-surface-variant md:text-body-lg">
          {{ siteText.experience.body }}
        </p>
      </div>

      <div class="grid items-stretch gap-gutter lg:grid-cols-[5fr_3fr_2fr]">
        <!-- Current role — featured, 50% -->
        <article class="glass-edge flex flex-col rounded-3xl bg-primary p-5 text-white shadow-soft sm:p-8">
          <div class="mb-6 flex items-center justify-between gap-4">
            <h3 class="font-headline-md text-headline-md">
              {{ siteText.experience.experienceHeading }}
            </h3>
            <span class="rounded-full bg-surface px-4 py-2 font-label-md text-label-md uppercase text-primary">
              {{ siteText.experience.currentLabel }}
            </span>
          </div>

          <div class="flex items-center gap-4">
            <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-surface text-primary">
              <span class="material-symbols-outlined text-[22px]">child_care</span>
            </div>
            <div>
              <h4 class="font-headline-md text-headline-md">{{ currentRole.title }}</h4>
              <p class="mt-1 font-body-md text-body-md font-semibold text-white/90">
                {{ currentRole.organisation }}
              </p>
            </div>
          </div>

          <p class="mt-5 font-label-md text-label-md uppercase text-white/80">
            {{ currentRole.period }} · {{ currentRole.type }} · {{ currentRole.mode }}
          </p>
          <p class="mt-2 font-body-sm text-body-sm text-white/75">
            {{ currentRole.location }}
          </p>
          <p class="mt-4 font-body-md text-body-md leading-7 text-white/90">
            {{ currentRole.summary }}
          </p>

          <div class="mt-5 flex flex-wrap gap-2">
            <span
              v-for="highlight in currentRole.highlights"
              :key="highlight"
              class="rounded-full bg-surface px-3 py-1 font-label-md text-label-md text-primary"
            >
              {{ highlight }}
            </span>
          </div>

          <div class="mt-auto pt-6">
            <a
              v-if="currentRole.url"
              :href="currentRole.url"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 rounded-lg bg-surface px-5 py-3 font-body-sm text-sm font-bold text-primary transition-[opacity,transform] hover:opacity-90 active:scale-95"
            >
              {{ siteText.experience.employerCta }}
              <span class="material-symbols-outlined text-[18px]">open_in_new</span>
            </a>
          </div>
        </article>

        <!-- Previous role(s) — condensed, 30% -->
        <article
          v-for="role in previousRoles"
          :key="role.title + role.period"
          class="glass-edge-grey flex flex-col rounded-3xl bg-surface-container-high p-5 shadow-soft sm:p-6"
        >
          <div class="flex items-center gap-3">
            <div class="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary">
              <span class="material-symbols-outlined text-[20px]">health_and_safety</span>
            </div>
            <span class="font-label-md text-label-md uppercase text-secondary">
              {{ role.period }}
            </span>
          </div>

          <h4 class="mt-5 font-headline-md text-headline-md text-primary">{{ role.title }}</h4>
          <p class="mt-1 font-body-md text-body-md font-semibold text-on-surface">
            {{ role.organisation }}
          </p>
          <p class="mt-2 font-body-sm text-body-sm text-on-surface-variant">
            {{ role.type }} · {{ role.mode }} · {{ role.location }}
          </p>
          <p class="mt-4 font-body-sm text-body-sm leading-6 text-on-surface-variant">
            {{ role.summary }}
          </p>

          <div class="mt-auto flex flex-wrap gap-2 pt-5">
            <span
              v-for="highlight in role.highlights"
              :key="highlight"
              class="rounded-full bg-surface-container px-3 py-1 font-label-md text-label-md text-primary"
            >
              {{ highlight }}
            </span>
          </div>
        </article>

        <!-- Education — two standalone cards stacked in a 20% column -->
        <div class="flex flex-col gap-gutter">
          <article
            v-for="item in education"
            :key="item.institution"
            class="glass-edge-grey flex flex-1 flex-col rounded-3xl bg-surface-container-high p-5 shadow-soft"
          >
            <p class="font-label-md text-label-md uppercase text-secondary">
              {{ siteText.experience.educationHeading }}
            </p>
            <p class="mt-4 font-label-md text-label-md uppercase text-on-surface-variant">
              {{ item.period }}
            </p>
            <h4 class="mt-2 font-body-md text-body-md font-bold text-primary">{{ item.institution }}</h4>
            <p class="mt-1 font-body-sm text-body-sm font-semibold text-on-surface">
              {{ item.qualification }}
            </p>
          </article>
        </div>
      </div>
    </div>
  </section>
</template>
