import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/search/:query",
    name: "fact-search",
    component: Home,
  },
  {
    path: "/fact/:id",
    name: "fact-page",
    props: true,
    component: () => import("../views/FactPage.vue"),
  },
  {
    path: "*",
    name: "404",
    component: () => import("../views/404.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
