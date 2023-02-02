import { createRouter, createWebHistory } from "vue-router";

import AppHome from "./pages/AppHome.vue";
import ShowProject from "./pages/ShowProject.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: AppHome,
    },
    {
      path: "/blog/:slug",
      name: "show-project",
      component: ShowProject,
    },
  ],
});
export { router };
