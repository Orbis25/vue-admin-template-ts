import Vue from "vue";
import VueRouter from "vue-router";
import { home, login } from "./routes.json";
Vue.use(VueRouter);

const routes = [
  {
    path: home.path,
    name: home.name,
    component: () => import("../views/Home.vue")
  },
  {
    path: login.path,
    name: login.name,
    component: () => import("../views/loginview/index.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
