import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import("@/pages/Home.vue"),
  },
  {
    path: "/logged",
    name: "Logged",
    component: () => import("@/pages/Logged.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () => import("@/pages/About.vue"),
  },
  {
    path: "/calc",
    name: "Calculator",
    component: () => import("@/pages/Calculator.vue"),
  },
  {
    path: "/users",
    name: "Users",
    component: () => import("@/pages/Users.vue"),
  },
  {
    path: "/posts",
    name: "Posts",
    component: () => import("@/pages/Posts.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
