<script setup lang="ts">
import HeroHomeSection from "../components/sections/hero-home-section.vue";
import ApproachSection from "../components/sections/approach-section.vue";
import ServicesSection from "../components/sections/services-section.vue";
import FeaturedProjectsSection from "../components/sections/featured-projects-section.vue";
import TeamSection from "../components/sections/team-section.vue";
import FaqSection from "../components/sections/faq-section.vue";
import ContactSection from "../components/sections/contact-section.vue";
</script>

<template>
  <div>
    <HeroHomeSection />
    <ServicesSection />
    <FeaturedProjectsSection />
    <ApproachSection />
    <TeamSection compact />
    <FaqSection />
    <ContactSection />
  </div>
</template>
