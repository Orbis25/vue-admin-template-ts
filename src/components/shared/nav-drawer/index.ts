import Vue from "vue";

export default Vue.extend({
  data: () => ({
    drawer: true,
    items: [
      { title: "Dashboard", icon: "mdi-view-dashboard" },
      { title: "Photos", icon: "mdi-image" },
      { title: "About", icon: "mdi-help-box" }
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
