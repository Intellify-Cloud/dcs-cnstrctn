<script setup lang="ts">
import { computed, onBeforeUnmount, ref, watch } from "vue";
import { siteText } from "../../content/siteText";

const services = siteText.services.items;
const activeServiceTitle = ref<string | null>(null);

const activeService = computed(() =>
  services.find((service) => service.title === activeServiceTitle.value) ?? null,
);

function openServiceDetails(title: string) {
  activeServiceTitle.value = title;
}

function closeServiceDetails() {
  activeServiceTitle.value = null;
}

function handleModalKeydown(event: KeyboardEvent) {
  if (event.key === "Escape") {
    closeServiceDetails();
  }
}

watch(activeServiceTitle, (title) => {
  if (typeof document === "undefined") {
    return;
  }

  document.body.style.overflow = title ? "hidden" : "";
});

onBeforeUnmount(() => {
  if (typeof document !== "undefined") {
    document.body.style.overflow = "";
  }
});
</script>

<template>
  <section id="services" v-reveal class="relative bg-surface-container-low pb-20 pt-32 md:pb-[120px] md:pt-[140px]">
    <div class="absolute inset-0 diagonal-pattern-dark"></div>

    <div class="relative z-10 mx-auto max-w-container-max px-margin-mobile sm:px-margin-large-mobile md:px-margin-tablet lg:px-margin-desktop">
      <div class="mb-12 grid gap-8 md:grid-cols-12 md:items-end">
        <div class="md:col-span-8">
          <div class="flex items-center gap-3 mb-5">
            <span class="inline-block h-[1px] w-6 bg-[#942b2d]"></span>
            <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-[#942b2d]">
              {{ siteText.services.eyebrow }}
            </span>
          </div>
          <h2 class="font-headline-lg text-headline-lg-mobile uppercase text-primary md:text-headline-lg accent-line">
            {{ siteText.services.heading }}
          </h2>
          <div class="mt-5 grid max-w-3xl gap-4">
            <p
              v-for="paragraph in siteText.services.body"
              :key="paragraph"
              class="font-body-md text-body-md leading-relaxed text-on-surface-variant"
            >
              {{ paragraph }}
            </p>
          </div>
        </div>

        <div class="md:col-span-4 md:text-right">
          <a
            :href="siteText.services.ctaHref"
            class="group relative inline-flex min-h-12 items-center overflow-hidden rounded-[5px] bg-[#942b2d] px-7 font-label-md text-label-md uppercase text-white transition-colors hover:bg-[#7f2426] hover:text-white"
          >
            <span class="relative z-10 flex items-center gap-2">
              {{ siteText.services.cta }}
              <span class="material-symbols-outlined text-[18px]">arrow_forward</span>
            </span>
          </a>
        </div>
      </div>

      <div class="grid gap-gutter sm:grid-cols-2 lg:grid-cols-3">
        <article
          v-for="service in services"
          :key="service.title"
          class="card-lift group relative min-h-[440px] overflow-hidden rounded-[5px] border-2 border-transparent bg-primary shadow-card transition-colors duration-300 hover:border-[#942b2d]"
        >
          <img
            :src="service.image"
            :alt="service.imageAlt"
            class="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
          <div class="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/72 to-primary/20"></div>
          <div class="pointer-events-none absolute inset-0 rounded-[3px] border-2 border-transparent bg-[linear-gradient(to_top,rgba(255,255,255,0.9),rgba(255,255,255,0.42)_50%,rgba(0,0,0,0.55)_100%)] bg-origin-border [mask:linear-gradient(#000_0_0)_padding-box,linear-gradient(#000_0_0)] [mask-composite:exclude] group-hover:opacity-0"></div>

          <div class="relative z-10 flex min-h-[440px] flex-col justify-end p-6">
            <!-- Icon container -->
            <div class="mb-6 flex h-14 w-14 items-center justify-center bg-[#942b2d] text-white">
              <span class="material-symbols-outlined text-[28px]">{{ service.icon }}</span>
            </div>

            <h3 class="font-headline-md text-2xl font-bold text-white">{{ service.title }}</h3>

            <p class="mt-3 font-body-sm text-body-sm leading-relaxed text-white/86">
              {{ service.description }}
            </p>

            <button
              type="button"
              class="mt-6 inline-flex min-h-11 w-full items-center justify-center rounded-[5px] border border-white/55 bg-[#942b2d]/90 px-4 py-3 text-center font-label-md text-label-md uppercase text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.28),0_10px_24px_rgba(0,0,0,0.22)] transition-[background-color,border-color,box-shadow] duration-200 hover:border-white/70 hover:bg-[#5f191b] hover:text-white hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_12px_28px_rgba(0,0,0,0.32)]"
              :aria-label="`More information about ${service.title}`"
              @click="openServiceDetails(service.title)"
            >
              {{ siteText.services.itemCta }}
            </button>
          </div>
        </article>
      </div>

      <section class="mt-16 grid gap-8 rounded-[5px] bg-primary p-6 text-white shadow-depth md:grid-cols-12 md:p-10">
        <div class="md:col-span-5">
          <span class="font-label-md text-label-md uppercase tracking-[0.15em] text-secondary">
            {{ siteText.services.integrity.eyebrow }}
          </span>
          <h3 class="mt-4 font-headline-lg text-[30px] uppercase leading-[1.15] md:text-[40px]">
            {{ siteText.services.integrity.heading }}
          </h3>
        </div>
        <div class="md:col-span-7">
          <p class="font-body-md text-body-md leading-7 text-white/78">
            {{ siteText.services.integrity.body }}
          </p>
          <ul class="mt-6 grid gap-3">
            <li
              v-for="item in siteText.services.integrity.items"
              :key="item"
              class="flex gap-3 rounded-[5px] bg-white/8 p-4 font-body-sm text-body-sm text-white/86"
            >
              <span class="material-symbols-outlined text-[18px] text-secondary">verified</span>
              <span>{{ item }}</span>
            </li>
          </ul>
        </div>
      </section>
    </div>

    <Teleport to="body">
      <div
        v-if="activeService"
        class="fixed inset-0 z-50 flex items-stretch justify-center md:items-center md:p-6"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="`service-modal-${activeService.title.replaceAll(' ', '-')}`"
        @keydown="handleModalKeydown"
      >
        <Transition
          enter-active-class="transition-opacity duration-300 ease-out"
          enter-from-class="opacity-0"
          enter-to-class="opacity-100"
          leave-active-class="transition-opacity duration-200 ease-in"
          leave-from-class="opacity-100"
          leave-to-class="opacity-0"
        >
          <button
            v-if="activeService"
            type="button"
            class="absolute inset-0 bg-primary/76 backdrop-blur-sm"
            aria-label="Close service details"
            @click="closeServiceDetails"
          ></button>
        </Transition>

        <Transition
          enter-active-class="transition duration-300 ease-out"
          enter-from-class="translate-y-8 opacity-0 md:translate-y-4 md:scale-[0.98]"
          enter-to-class="translate-y-0 opacity-100 md:scale-100"
          leave-active-class="transition duration-200 ease-in"
          leave-from-class="translate-y-0 opacity-100 md:scale-100"
          leave-to-class="translate-y-8 opacity-0 md:translate-y-4 md:scale-[0.98]"
        >
          <div
            v-if="activeService"
            class="relative flex h-dvh w-full flex-col overflow-hidden bg-surface-container-lowest shadow-depth md:h-auto md:max-h-[88vh] md:max-w-3xl md:rounded-[5px]"
          >
            <div class="relative min-h-[160px] overflow-hidden bg-primary md:min-h-[220px]">
              <img
                :src="activeService.image"
                :alt="activeService.imageAlt"
                class="absolute inset-0 h-full w-full object-cover"
              />
              <div class="absolute inset-0 bg-gradient-to-t from-primary/92 via-primary/58 to-primary/24"></div>
              <button
                type="button"
                class="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-[5px] bg-white/90 text-primary shadow-card transition-colors hover:bg-white"
                aria-label="Close service details"
                @click="closeServiceDetails"
              >
                <span class="material-symbols-outlined">close</span>
              </button>
              <div class="absolute bottom-0 left-0 right-0 p-6">
                <div class="mb-4 flex h-12 w-12 items-center justify-center bg-[#942b2d] text-white">
                  <span class="material-symbols-outlined text-[26px]">{{ activeService.icon }}</span>
                </div>
                <h3
                  :id="`service-modal-${activeService.title.replaceAll(' ', '-')}`"
                  class="font-headline-md text-3xl font-bold text-white md:text-4xl"
                >
                  {{ activeService.title }}
                </h3>
              </div>
            </div>

            <div class="flex-1 overflow-y-auto p-6 md:p-8">
              <p class="font-body-md text-body-md leading-8 text-on-surface-variant">
                {{ activeService.details }}
              </p>

              <a
                :href="activeService.href"
                class="mt-8 inline-flex min-h-12 w-full items-center justify-center rounded-[5px] bg-[#942b2d] px-6 text-center font-label-md text-label-md uppercase text-white transition-colors hover:bg-[#7f2426] md:w-auto"
                @click="closeServiceDetails"
              >
                Contact FYK About This Service
              </a>
            </div>
          </div>
        </Transition>
      </div>
    </Teleport>
  </section>
</template>
