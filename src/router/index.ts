import Vue from "vue";
import VueRouter from "vue-router";
import { home, login, clients, forms } from "./routes.json";
import NavDrawer from "@/components/shared/nav-drawer/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: home.path,
    name: home.name,
    meta: {
      breadcrumb: [
        {
          text: "Dashboard",
          href: home.path
        }
      ]
    },
    components: {
      default: () => import("../views/home/index.vue"),
      drawer: NavDrawer
    }
  },
  {
    path: login.path,
    name: login.name,
    component: () => import("../views/login/index.vue")
  },
  {
    path: clients.path,
    name: clients.name,
    meta: {
      breadcrumb: [
        {
          text: "Dashboard",
          href: home.path
        },
        {
          text: clients.name,
          href: clients.path
        }
      ]
    },
    components: {
      default: () => import("../views/clients/index.vue"),
      drawer: NavDrawer
    }
  },
  {
    path: forms.path,
    name: forms.name,
    meta: {
      breadcrumb: [
        {
          text: "Dashboard",
          href: home.path
        },
        {
          text: forms.name,
          href: forms.path
        }
      ]
    },
    components: {
      default: () => import("../views/forms/index.vue"),
      drawer: NavDrawer
    }
  },
  {
    path: "/axios",
    name: "axios",
    meta: {
      breadcrumb: [
        {
          text: "Dashboard",
          href: home.path
        },
        {
          text: "axios-example",
          href: "/axios"
        }
      ]
    },
    components: {
      default: () => import("../views/axios-example/index.vue"),
      drawer: NavDrawer
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
