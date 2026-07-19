<script setup lang="ts">
// Reusable section header: eyebrow chip + gold accent rule + heading + optional
// body. Keeps section intros consistent and crafted across the site.
withDefaults(
  defineProps<{
    eyebrow?: string;
    heading: string;
    body?: string;
    align?: "left" | "center";
  }>(),
  { align: "left" }
);
</script>

<template>
  <div
    class="flex flex-col gap-5"
    :class="align === 'center' ? 'items-center text-center' : 'items-start'"
  >
    <p
      v-if="eyebrow"
      class="flex items-center gap-3 font-label-md text-label-md uppercase tracking-[0.2em] text-secondary"
      :class="align === 'center' ? 'flex-row' : ''"
    >
      <span class="accent-rule"></span>
      {{ eyebrow }}
    </p>
    <h2
      class="font-headline-lg text-headline-lg uppercase text-primary [text-wrap:balance] md:text-5xl"
    >
      {{ heading }}
    </h2>
    <p
      v-if="body"
      class="max-w-3xl font-body-md text-body-md text-on-surface-variant"
    >
      {{ body }}
    </p>
  </div>
</template>
