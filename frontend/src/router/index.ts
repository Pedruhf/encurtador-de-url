import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "home",
    component: () => import("@/views/Home/index.vue"),
  },
  {
    path: "/entrar",
    name: "login",
    component: () => import("@/views/Login/index.vue"),
  },
  {
    path: "/cadastro",
    name: "signup",
    component: () => import("@/views/SignUp/index.vue"),
  },
  {
    path: "/conta",
    name: "account",
    component: () => import("@/views/UserArea/index.vue"),
  },
  {
    path: "/urls-mais-acessadas",
    name: "urls",
    component: () => import("@/views/MostAccessedUrls/index.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

export default router;
