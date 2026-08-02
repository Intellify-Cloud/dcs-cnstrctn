<script setup lang="ts">
import { computed, ref } from "vue";
import SmartLink from "../SmartLink.vue";
import { siteText } from "../../content/siteText";

const projects = siteText.projects.items;
const activeIndex = ref(0);

const visibleProjects = computed(() => [
  projects[activeIndex.value],
  projects[(activeIndex.value + 1) % projects.length],
]);

function showPrevious() {
  activeIndex.value = (activeIndex.value - 2 + projects.length) % projects.length;
}

function showNext() {
  activeIndex.value = (activeIndex.value + 2) % projects.length;
}
</script>

<template>
  <section id="projects" v-reveal class="relative bg-background py-20 md:py-[120px]">
    <div class="absolute top-0 left-0 right-0 h-px section-divider"></div>

    <div class="mx-auto max-w-container-max px-margin-mobile sm:px-margin-large-mobile md:px-margin-tablet lg:px-margin-desktop">
      <div class="mx-auto mb-12 max-w-4xl text-center">
        <div class="mb-5 flex items-center justify-center gap-3">
          <span class="inline-block h-[1px] w-6 bg-[#942b2d]"></span>
          <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
            {{ siteText.projects.eyebrow }}
          </span>
          <span class="inline-block h-[1px] w-6 bg-[#942b2d]"></span>
        </div>
        <h2 class="font-headline-lg text-headline-lg-mobile uppercase text-primary md:text-headline-lg">
          {{ siteText.projects.heading }}
        </h2>
        <p class="mx-auto mt-5 max-w-3xl font-body-md text-body-md text-on-surface-variant">
          {{ siteText.projects.body }}
        </p>
      </div>

      <div class="mx-auto grid max-w-6xl items-center gap-4 md:grid-cols-[auto_1fr_auto]">
        <button
          type="button"
          class="hidden h-12 w-12 items-center justify-center rounded-[5px] bg-[#942b2d] text-white transition-colors hover:bg-[#7f2426] md:flex"
          :aria-label="siteText.projects.previousLabel"
          @click="showPrevious"
        >
          <span class="material-symbols-outlined">chevron_left</span>
        </button>

        <div class="grid gap-gutter md:grid-cols-2">
          <article
            v-for="project in visibleProjects"
            :key="project.title"
            class="card-lift group rounded-[5px] border border-outline-variant bg-surface-container-lowest shadow-card"
          >
            <div class="relative overflow-hidden">
              <img
                :src="project.image"
                :alt="project.imageAlt"
                class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
              <div class="absolute right-3 top-3 rounded-[5px] bg-secondary px-3 py-1.5 font-label-md text-label-md uppercase text-on-secondary-fixed shadow-card">
                {{ project.metric }}
              </div>
            </div>
            <div class="h-0.5 bg-gradient-to-r from-secondary to-secondary/40"></div>
            <div class="p-6">
              <p class="font-label-md text-label-md uppercase tracking-[0.1em] text-on-surface-variant">
                {{ project.location }}
              </p>
              <h3 class="mt-2 font-headline-md text-2xl font-bold text-primary">
                {{ project.title }}
              </h3>
              <p class="mt-3 font-body-sm text-body-sm leading-relaxed text-on-surface-variant">
                {{ project.description }}
              </p>
              <ul class="mt-4 grid gap-2">
                <li
                  v-for="detail in project.details"
                  :key="detail"
                  class="font-body-sm text-body-sm text-on-surface-variant"
                >
                  {{ detail }}
                </li>
              </ul>
            </div>
          </article>
        </div>

        <button
          type="button"
          class="hidden h-12 w-12 items-center justify-center rounded-[5px] bg-[#942b2d] text-white transition-colors hover:bg-[#7f2426] md:flex"
          :aria-label="siteText.projects.nextLabel"
          @click="showNext"
        >
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      <div class="mt-8 flex justify-center gap-3 md:hidden">
        <button
          type="button"
          class="h-12 w-12 rounded-[5px] bg-[#942b2d] text-white transition-colors hover:bg-[#7f2426]"
          :aria-label="siteText.projects.previousLabel"
          @click="showPrevious"
        >
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          type="button"
          class="h-12 w-12 rounded-[5px] bg-[#942b2d] text-white transition-colors hover:bg-[#7f2426]"
          :aria-label="siteText.projects.nextLabel"
          @click="showNext"
        >
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      <div class="mt-10 flex justify-center">
        <SmartLink
          :link="siteText.projects.allHref"
          class="inline-flex min-h-12 items-center justify-center rounded-[5px] bg-[#942b2d] px-8 font-label-lg text-label-lg uppercase tracking-[0.1em] text-white transition-colors hover:bg-[#7f2426]"
        >
          {{ siteText.projects.allLabel }}
        </SmartLink>
      </div>
    </div>
  </section>
</template>
