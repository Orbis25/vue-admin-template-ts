import Vue from "vue";
import { clients, home, login, forms } from "@/router/routes.json";
export default Vue.extend({
  data: () => ({
    drawer: true,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard", path: home.path },
      { title: "Clients", icon: "fas fa-users", path: clients.path },
      { title: "Forms", icon: "fab fa-wpforms", path: forms.path },
      { title: "Login", icon: "fas fa-lock", path: login.path },
      { title: "Axios example", icon: "fas fa-database", path: "/axios" }
    ],
    color: "primary",
    colors: ["primary", "blue", "success", "red", "teal"],
    right: false,
    miniVariant: true,
    expandOnHover: true,
    background: false
  }),
  computed: {
    bg() {
      return this.background
        ? "https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
        : undefined;
    }
  }
});
