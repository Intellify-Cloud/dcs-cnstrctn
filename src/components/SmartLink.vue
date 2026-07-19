<script setup lang="ts">
// Renders a RouterLink for internal paths (so /#section and /contact
// navigate client-side and scroll via the router's scrollBehavior) and a
// plain <a> for everything else (#same-page anchors, tel:, mailto:, http…).
import { computed } from "vue";
import { RouterLink } from "vue-router";

const props = defineProps<{ link: string }>();

const isRouterLink = computed(() => props.link.startsWith("/"));
</script>

<template>
  <RouterLink v-if="isRouterLink" :to="link"><slot /></RouterLink>
  <a v-else :href="link"><slot /></a>
</template>
