<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from "vue";
import { siteText } from "../../content/siteText";

const hero = siteText.hero;
const assetVersion = "2026-08-02";

function withCacheBust(path: string) {
  return `${path}?v=${assetVersion}`;
}

const heroImages = [1, 2, 3, 4, 5, 6].map((index) => withCacheBust(`/images/hero/${index}.jpg`));

const heroCaptions = [
  {
    heading: "We Are FYK Construction",
    body: "Building Nigeria's infrastructure with technical depth and responsible delivery.",
  },
  {
    heading: "Engineered for Communities That Move Forward",
    body: "Roads, water systems and essential infrastructure that serve people every day.",
  },
  {
    heading: "Built Safely. Delivered Responsibly.",
    body: "Quality-led construction that protects people, property and the environment.",
  },
  {
    heading: "Local Expertise. Lasting Impact.",
    body: "Creating value through skilled Nigerian participation and reliable project delivery.",
  },
  {
    heading: "We Build With Purpose",
    body: "Engineering and construction solutions that create lasting value.",
  },
  {
    heading: "Infrastructure That Connects Communities",
    body: "Delivering roads, drainage and civil works built to endure.",
  },
  {
    heading: "Building Nigeria's Future, One Project at a Time",
    body: "Trusted construction for public, private and institutional spaces.",
  },
  {
    heading: "Technical Excellence. Reliable Delivery.",
    body: "From water and energy systems to buildings and infrastructure.",
  },
];

const heroEvidence =
  "Indeed, 21 years since its founding, the company has had an exceptional record of delivery across roads, buildings, water infrastructure, institutional facilities, maintenance and procurement.";

const currentImageIndex = ref(0);
const previousImageIndex = ref<number | null>(null);
const displayedHeading = ref("");
const isTypingHeading = ref(false);
const motionKey = ref(0);
let heroTimer: ReturnType<typeof window.setInterval> | undefined;
let fadeTimer: ReturnType<typeof window.setTimeout> | undefined;
let typeTimer: ReturnType<typeof window.setTimeout> | undefined;

const activeCaption = computed(() => heroCaptions[currentImageIndex.value % heroCaptions.length]);

function clearTypeTimer() {
  if (typeTimer) {
    window.clearTimeout(typeTimer);
    typeTimer = undefined;
  }
}

function typeHeading(heading: string) {
  clearTypeTimer();

  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    displayedHeading.value = heading;
    isTypingHeading.value = false;
    return;
  }

  displayedHeading.value = "";
  isTypingHeading.value = true;

  let characterIndex = 0;
  const typeNextCharacter = () => {
    characterIndex += 1;
    displayedHeading.value = heading.slice(0, characterIndex);

    if (characterIndex < heading.length) {
      typeTimer = window.setTimeout(typeNextCharacter, 34);
      return;
    }

    isTypingHeading.value = false;
    typeTimer = undefined;
  };

  typeTimer = window.setTimeout(typeNextCharacter, 120);
}

function showImage(index: number) {
  if (index === currentImageIndex.value) {
    return;
  }

  previousImageIndex.value = currentImageIndex.value;
  currentImageIndex.value = index;
  motionKey.value += 1;
  typeHeading(heroCaptions[index % heroCaptions.length].heading);

  if (fadeTimer) {
    window.clearTimeout(fadeTimer);
  }

  fadeTimer = window.setTimeout(() => {
    previousImageIndex.value = null;
  }, 1600);
}

function showNextImage() {
  showImage((currentImageIndex.value + 1) % heroImages.length);
}

onMounted(() => {
  typeHeading(activeCaption.value.heading);
  heroTimer = window.setInterval(showNextImage, 7000);
});

onBeforeUnmount(() => {
  if (heroTimer) {
    window.clearInterval(heroTimer);
  }
  if (fadeTimer) {
    window.clearTimeout(fadeTimer);
  }
  clearTypeTimer();
});
</script>

<template>
  <section
    class="relative flex min-h-[760px] items-start overflow-hidden border-b-4 border-[#942b2d] bg-primary pb-28 pt-32 md:h-[90vh] md:min-h-[600px] md:items-center md:py-0"
  >
    <!-- Background image with dramatic overlay -->
    <div class="absolute inset-0 z-0 h-full">
      <div class="absolute inset-0 h-full" role="img" :aria-label="hero.imageAlt">
        <div
          v-for="(image, index) in heroImages"
          :key="image"
          class="hero-carousel-image absolute inset-0 h-full"
          :class="[
            index === currentImageIndex ? 'is-active' : '',
            index === previousImageIndex ? 'is-fading' : '',
          ]"
        >
          <div
            :key="index === currentImageIndex ? `motion-${index}-${motionKey}` : `motion-${index}`"
            class="hero-carousel-motion absolute inset-0 h-full bg-cover bg-center"
            :class="[
              index === currentImageIndex ? 'is-moving' : '',
              index % 2 === 0 ? 'pan-right' : 'pan-left',
            ]"
            :style="{ backgroundImage: `url('${image}')` }"
          ></div>
        </div>
      </div>
      <div class="absolute inset-0 bg-gradient-to-r from-primary/95 via-primary/75 to-primary/35"></div>
      <div class="hero-spotlight absolute inset-0"></div>
      <!-- Blueprint grid overlay -->
      <div class="absolute inset-0 blueprint-grid"></div>
      <!-- Diagonal pattern accent -->
      <div class="absolute inset-0 diagonal-pattern"></div>
    </div>

    <div
      class="relative z-10 mx-auto grid w-full max-w-container-max grid-cols-1 gap-grid-gutter px-6 md:grid-cols-12"
    >
      <div class="flex flex-col gap-6 text-on-primary md:col-span-7 md:translate-y-[100px] md:gap-8 lg:col-span-6">
        <!-- Eyebrow badge -->
        <div class="flex items-center gap-3">
          <span class="inline-block h-[1px] w-8 bg-[#942b2d]"></span>
          <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
            {{ hero.eyebrow }}
          </span>
        </div>

        <h1
          :aria-label="activeCaption.heading"
          class="hero-title-fade min-h-[calc(3em*1.08)] font-display-lg text-headline-lg-mobile leading-[1.08] text-on-primary drop-shadow-[0_2px_10px_rgba(0,0,0,0.85)] md:min-h-[calc(3em*1.05)] md:text-[52px] md:leading-[1.05]"
        >
          {{ displayedHeading }}<span
            aria-hidden="true"
            :class="[
              'ml-1 inline-block h-[0.9em] w-[0.08em] translate-y-[0.08em] bg-secondary',
              isTypingHeading ? 'opacity-100' : 'opacity-0',
            ]"
          ></span>
        </h1>

        <p
          :key="`hero-body-${currentImageIndex}`"
          class="max-w-xl font-body-lg text-body-lg text-on-primary/90 hero-rise d2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)] md:max-w-[45rem]"
        >
          {{ activeCaption.body }}
        </p>
        <p
          :key="`hero-evidence-${currentImageIndex}`"
          class="max-w-xl font-body-lg text-body-lg text-on-primary/90 hero-rise d2 drop-shadow-[0_2px_6px_rgba(0,0,0,0.75)] md:max-w-[45rem]"
        >
          {{ heroEvidence }}
        </p>

        <div :key="`hero-actions-${currentImageIndex}`" class="mt-4 flex flex-wrap gap-4 hero-rise d3">
          <a
            :href="hero.ctaHref"
            class="group relative inline-flex min-h-12 items-center overflow-hidden rounded-[5px] border border-white/55 bg-[#942b2d] px-8 py-4 font-label-lg text-label-lg uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/75 hover:bg-[#7f2426] hover:text-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
          >
            <span class="relative z-10">{{ hero.cta }}</span>
          </a>
          <a
            :href="hero.secondaryCtaHref"
            class="group relative inline-flex min-h-12 items-center overflow-hidden rounded-[5px] border border-white/55 bg-[#942b2d] px-8 py-4 font-label-lg text-label-lg uppercase tracking-[0.1em] text-white transition-all duration-300 hover:-translate-y-1 hover:border-white/75 hover:bg-[#7f2426] hover:text-white hover:shadow-[0_12px_30px_rgba(0,0,0,0.25)]"
          >
            <span class="relative z-10">{{ hero.secondaryCta }}</span>
          </a>
        </div>
      </div>
    </div>

    <div class="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 items-center gap-4 md:bottom-8">
      <button
        v-for="(_, index) in heroImages"
        :key="`hero-dot-${index}`"
        type="button"
        class="hero-carousel-dot"
        :class="{ 'is-active': index === currentImageIndex }"
        :aria-label="`Show hero image ${index + 1}`"
        :aria-current="index === currentImageIndex ? 'true' : undefined"
        @click="showImage(index)"
      ></button>
    </div>

    <div class="absolute bottom-0 left-0 right-0 z-10 h-[1px] bg-white/30"></div>
  </section>
</template>
