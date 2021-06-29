import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  {
    path: "/users",
    name: "users",
    component: () =>
      import(/* webpackChunkName: "users" */ "../views/Users.vue"),
  },
  {
    path: "/users/:id",
    name: "user",
    component: () => import(/* webpackChunkName: "user" */ "../views/User.vue"),
  },
  {
    path: "/pictures",
    name: "pictures",
    component: () =>
      import(/* webpackChunkName: "pictures" */ "../views/Pictures.vue"),
  },
  {
    path: "/pictures/:id",
    name: "picture",
    component: () =>
      import(/* webpackChunkName: "picture" */ "../views/Picture.vue"),
  },
  {
    path: "/about",
    name: "about",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () =>
      import(/* webpackChunkName: "not-found" */ "../views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes,
});

export default router;
