import vue from "vue";

export default vue.extend({
  data: () => ({
    items: [] as any
  }),
  watch: {
    $route() {
      this.items = this.$route.meta.breadcrumb;
    }
  }
});
