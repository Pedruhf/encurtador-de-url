import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";
import { userStore } from "../store/modules/user";

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

router.afterEach((to, from) => {
  if (to.name === "account" && !userStore.getters?.isLogged(userStore.state as any, null, null, null)) {
    return router.go(-1);
  }

  if (to.name === "account" && from.name === "login") {
    router.go(0);
  }
})

export default router;
