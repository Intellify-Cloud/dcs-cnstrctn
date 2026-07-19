import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    // `top` offsets the target so sections aren't hidden under the
    // floating sticky nav (wrapper pt-4 + bar h-20 ≈ 96px).
    if (to.hash) return { el: to.hash, top: 112, behavior: "smooth" };
    return { top: 0 };
  },
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../pages/home-page.vue"),
    },
    {
      path: "/portfolio",
      name: "portfolio",
      component: () => import("../pages/portfolio-page.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: () => import("../pages/contact-page.vue"),
    },
    {
      path: "/privacy",
      name: "privacy",
      component: () => import("../pages/privacy-page.vue"),
    },
  ],
});

export default router;
