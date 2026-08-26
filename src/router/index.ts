import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, _from, savedPosition) {
    if (savedPosition) return savedPosition;
    // `top` offsets the target so sections are not hidden under the sticky nav.
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
      path: "/about",
      name: "about",
      component: () => import("../pages/about-page.vue"),
    },
    {
      path: "/services",
      name: "services",
      component: () => import("../pages/services-page.vue"),
    },
    {
      path: "/portfolio",
      redirect: "/projects",
    },
    {
      path: "/projects",
      name: "projects",
      component: () => import("../pages/portfolio-page.vue"),
    },
    {
      path: "/team",
      name: "team",
      component: () => import("../pages/team-page.vue"),
    },
    {
      path: "/quality",
      name: "quality",
      component: () => import("../pages/quality-page.vue"),
    },
    {
      path: "/credentials",
      redirect: "/quality#credentials",
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
    {
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: () => import("../pages/not-found-page.vue"),
    },
  ],
});

export default router;
