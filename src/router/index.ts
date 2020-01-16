import Vue from "vue";
import VueRouter from "vue-router";
import { home, login } from "./routes.json";
import NavDrawer from "@/components/shared/nav-drawer/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: home.path,
    name: home.name,
    components: {
      default: () => import("../views/homeview/index.vue"),
      drawer: NavDrawer
    }
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
