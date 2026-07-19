<script setup lang="ts">
import { siteText } from "../../content/siteText";

const projects = siteText.projects.items;
</script>

<template>
  <section id="projects" v-reveal class="relative bg-background py-20 md:py-[120px]">
    <div class="absolute top-0 left-0 right-0 h-px section-divider"></div>

    <div class="mx-auto max-w-container-max px-margin-mobile md:px-margin-desktop">
      <div class="mb-12 max-w-4xl">
        <div class="flex items-center gap-3 mb-5">
          <span class="inline-block h-[1px] w-6 bg-secondary"></span>
          <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">
            {{ siteText.projects.eyebrow }}
          </span>
        </div>
        <h2 class="font-headline-lg text-headline-lg uppercase text-primary md:text-5xl accent-line">
          {{ siteText.projects.heading }}
        </h2>
        <p class="mt-5 font-body-md text-body-md text-on-surface-variant">
          {{ siteText.projects.body }}
        </p>
      </div>

      <div class="grid gap-gutter lg:grid-cols-3">
        <article
          v-for="project in projects"
          :key="project.title"
          class="card-lift group border border-outline-variant bg-surface-container-lowest shadow-card"
        >
          <div class="relative overflow-hidden">
            <img
              :src="project.image"
              :alt="project.imageAlt"
              class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
            <!-- Metric badge -->
            <div class="absolute right-3 top-3 bg-secondary px-3 py-1.5 font-label-md text-label-md uppercase text-on-secondary-fixed shadow-card">
              {{ project.metric }}
            </div>
          </div>
          <div class="h-0.5 bg-gradient-to-r from-secondary to-secondary/40"></div>
          <div class="p-6">
            <div class="mb-4">
              <p class="font-label-md text-label-md uppercase tracking-[0.1em] text-on-surface-variant">
                {{ project.location }}
              </p>
              <h3 class="mt-2 font-headline-md text-2xl font-bold text-primary">
                {{ project.title }}
              </h3>
            </div>
            <p class="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
              {{ project.description }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
