import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: () => import(/* webpackChunkName: "home" */ "@/pages/Home.vue"),
  },
  {
    path: "/logged",
    name: "Logged",
    component: () =>
      import(/* webpackChunkName: "logged" */ "@/pages/Logged.vue"),
  },
  {
    path: "/about",
    name: "About",
    component: () =>
      import(/* webpackChunkName: "about" */ "@/pages/About.vue"),
  },
  {
    path: "/calc",
    name: "Calculator",
    component: () =>
      import(/* webpackChunkName: "calculator" */ "@/pages/Calculator.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
