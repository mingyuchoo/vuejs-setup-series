import { createRouter, createWebHashHistory } from "vue-router";

import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Picture from "../views/Picture.vue";
import Pictures from "../views/Pictures.vue";
import User from "../views/User.vue";
import Users from "../views/Users.vue";
import NotFound from "../views/NotFound.vue";

const routes = [
  { path: "/", name: "home", component: Home },
  { path: "/users", name: "users", component: Users },
  { path: "/users/:id", name: "user", component: User },
  { path: "/pictures", name: "pictures", component: Pictures },
  { path: "/pictures/:id", name: "picture", component: Picture },
  { path: "/about", name: "about", component: About },
  { path: "/:pathMatch(.*)*", name: "NotFound", component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
