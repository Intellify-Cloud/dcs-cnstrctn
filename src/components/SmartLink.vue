<script setup lang="ts">
// Renders a RouterLink for internal paths and a plain anchor for same-page
// anchors, tel:, mailto:, and external links.
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps<{ link: string }>();

const isRouterLink = computed(() => props.link.startsWith("/"));
</script>

<template>
  <RouterLink v-if="isRouterLink" :to="link"><slot /></RouterLink>
  <a v-else :href="link"><slot /></a>
</template>
