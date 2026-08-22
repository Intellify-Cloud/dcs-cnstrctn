<script setup lang="ts">
import { computed, ref } from "vue";
import { siteText } from "../content/siteText";

interface ProjectCard {
  id: string;
  title: string;
  client: string;
  location: string;
  scope: string;
  image?: string;
  imageAlt?: string;
}

const activeProject = ref<string | null>(null);

function getClient(details: string[]) {
  return details.find((detail) => detail.toLowerCase().startsWith("client:"))?.replace(/^client:\s*/i, "") ?? "To be confirmed";
}

function shuffledCards(cards: ProjectCard[]) {
  const shuffled = [...cards];

  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[randomIndex]] = [shuffled[randomIndex], shuffled[index]];
  }

  return shuffled;
}

const selectedProjectCards = ref(
  shuffledCards(
    siteText.projects.items.map((project, index) => ({
      id: `featured-${index}`,
      title: project.title,
      client: getClient(project.details),
      location: project.location,
      scope: project.description,
      image: project.image,
      imageAlt: project.imageAlt,
    })),
  ).slice(0, 6),
);

const projectCards = computed<ProjectCard[]>(() => selectedProjectCards.value);

const registerCards = computed(() => siteText.projects.register.slice(0, 6));
const registerStartIndex = ref(0);
const registerVisibleCount = 4;

const visibleRegisterCards = computed(() => {
  const cards = registerCards.value;
  const visibleCount = Math.min(registerVisibleCount, cards.length);

  return Array.from({ length: visibleCount }, (_, offset) => cards[(registerStartIndex.value + offset) % cards.length]);
});

function toggleProject(id: string) {
  activeProject.value = activeProject.value === id ? null : id;
}

function showPreviousRegister() {
  const total = registerCards.value.length;
  registerStartIndex.value = (registerStartIndex.value - 1 + total) % total;
}

function showNextRegister() {
  const total = registerCards.value.length;
  registerStartIndex.value = (registerStartIndex.value + 1) % total;
}
</script>

<template>
  <section class="relative mx-auto max-w-container-max px-margin-mobile py-stack-lg sm:px-margin-large-mobile md:px-margin-tablet lg:px-margin-desktop">
    <div class="mb-6 flex items-center gap-3">
      <span class="inline-block h-[1px] w-6 bg-[#942b2d]"></span>
      <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
        {{ siteText.pages.portfolio.eyebrow }}
      </span>
    </div>
    <h1 class="mb-6 font-headline-lg text-headline-lg-mobile text-primary md:text-headline-lg accent-line">
      {{ siteText.pages.portfolio.title }}
    </h1>
    <p class="mb-10 max-w-3xl font-body-lg text-body-lg leading-relaxed text-on-surface-variant">
      {{ siteText.pages.portfolio.body }}
    </p>

    <div class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      <article
        v-for="project in projectCards"
        :key="project.id"
        class="card-lift group relative min-h-[520px] overflow-hidden rounded-[5px] border shadow-card transition-colors duration-300"
        :class="activeProject === project.id ? 'border-[#942b2d] bg-primary' : 'border-outline-variant bg-surface-container-lowest'"
      >
        <div class="block w-full text-left">
          <div class="relative aspect-[4/3] overflow-hidden bg-[#942b2d]">
            <img
              v-if="project.image"
              :src="project.image"
              :alt="project.imageAlt"
              class="h-full w-full object-cover transition-transform duration-[1800ms] ease-out group-hover:scale-105"
              loading="lazy"
            />
            <div v-else class="h-full w-full bg-[#942b2d]"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/28 to-transparent"></div>
          </div>

          <div
            class="p-6 pb-24 transition-opacity duration-300"
            :class="activeProject === project.id ? 'opacity-0' : 'opacity-100'"
          >
            <p class="font-label-md text-label-md uppercase tracking-[0.1em] text-[#942b2d]">
              {{ project.location }}
            </p>
            <h3 class="mt-2 font-headline-md text-2xl font-bold text-primary">
              {{ project.title }}
            </h3>
          </div>
        </div>

        <div
          class="absolute inset-x-0 top-0 z-20 flex min-h-full flex-col justify-start overflow-y-auto bg-gradient-to-b from-primary/68 via-primary/58 to-primary/48 p-6 pb-24 text-white backdrop-blur-[1px] transition-transform duration-500 ease-out"
          :class="activeProject === project.id ? 'translate-y-0' : 'translate-y-full'"
        >
          <p class="font-label-md text-label-md uppercase tracking-[0.1em] text-[#f3b7b8]">
            Project Details
          </p>
          <h3 class="mt-2 font-headline-md text-2xl font-bold text-white">
            {{ project.title }}
          </h3>

          <dl class="mt-6 grid gap-4">
            <div>
              <dt class="font-label-md text-label-md uppercase tracking-[0.12em] text-[#f3b7b8]">Client:</dt>
              <dd class="mt-1 font-body-md text-body-md text-white/86">{{ project.client }}</dd>
            </div>
            <div>
              <dt class="font-label-md text-label-md uppercase tracking-[0.12em] text-[#f3b7b8]">Project Location:</dt>
              <dd class="mt-1 font-body-md text-body-md text-white/86">{{ project.location }}</dd>
            </div>
            <div>
              <dt class="font-label-md text-label-md uppercase tracking-[0.12em] text-[#f3b7b8]">Project Scope:</dt>
              <dd class="mt-1 font-body-md text-body-md leading-relaxed text-white/86">{{ project.scope }}</dd>
            </div>
          </dl>
        </div>

        <button
          type="button"
          class="absolute bottom-6 left-6 right-6 z-30 inline-flex min-h-11 items-center justify-center rounded-[5px] border border-[#942b2d]/35 bg-[#942b2d] px-4 py-3 text-center font-label-md text-label-md uppercase text-white transition-colors hover:bg-[#5f191b]"
          :class="activeProject === project.id ? 'border-white/50 bg-[#5f191b] hover:bg-[#421112]' : ''"
          @click="toggleProject(project.id)"
        >
          {{ activeProject === project.id ? "Close" : "View Details" }}
        </button>
      </article>
    </div>

    <p class="mt-10 max-w-3xl font-body-sm text-body-sm text-on-surface-variant">
      Project photographs will be updated as approved images become available.
    </p>

    <div class="mt-16 border-t border-outline-variant pt-12">
      <div class="mb-8 flex items-end justify-between gap-6">
        <div>
          <p class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
            {{ siteText.projects.registerHeading }}
          </p>
          <h2 class="mt-3 font-headline-md text-3xl font-bold text-primary">
            Additional Delivered Works
          </h2>
        </div>
      </div>

      <div class="grid items-center gap-4 lg:grid-cols-[auto_1fr_auto]">
        <button
          type="button"
          class="hidden h-12 w-12 items-center justify-center rounded-[5px] bg-[#942b2d] text-white transition-colors hover:bg-[#7f2426] lg:flex"
          aria-label="Previous delivered works"
          @click="showPreviousRegister"
        >
          <span class="material-symbols-outlined">chevron_left</span>
        </button>

        <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <article
            v-for="project in visibleRegisterCards"
            :key="project.title"
            class="min-h-[180px] rounded-[5px] border border-outline-variant bg-surface-container-lowest p-5 shadow-card transition-transform duration-300"
          >
            <h3 class="font-headline-md text-xl font-bold leading-snug text-primary">
              {{ project.title }}
            </h3>
            <div class="mt-5">
              <p class="font-label-md text-label-md uppercase tracking-[0.12em] text-[#942b2d]">
                Client / Location
              </p>
              <p class="mt-2 font-body-md text-body-md leading-relaxed text-on-surface-variant">
                {{ project.client }} / {{ project.location }}
              </p>
            </div>
          </article>
        </div>

        <button
          type="button"
          class="hidden h-12 w-12 items-center justify-center rounded-[5px] bg-[#942b2d] text-white transition-colors hover:bg-[#7f2426] lg:flex"
          aria-label="Next delivered works"
          @click="showNextRegister"
        >
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      </div>

      <div class="mt-6 flex justify-center gap-3 lg:hidden">
        <button
          type="button"
          class="h-12 w-12 rounded-[5px] bg-[#942b2d] text-white transition-colors hover:bg-[#7f2426]"
          aria-label="Previous delivered works"
          @click="showPreviousRegister"
        >
          <span class="material-symbols-outlined">chevron_left</span>
        </button>
        <button
          type="button"
          class="h-12 w-12 rounded-[5px] bg-[#942b2d] text-white transition-colors hover:bg-[#7f2426]"
          aria-label="Next delivered works"
          @click="showNextRegister"
        >
          <span class="material-symbols-outlined">chevron_right</span>
        </button>
      </div>
    </div>
  </section>
</template>
