import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  /*  {
    path: "/search/:query",
    name: "Fact",
    component: Home,
  },
  {
    path: "/fact/:id",
    name: "Fact",
    component: () => import("../views/Fact.vue"),
  }, */
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
