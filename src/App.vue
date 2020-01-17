<template>
  <v-app>
    <router-view name="drawer" />
    <v-content>
      <v-container>
        <bread-crumb />
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import BreadCrumb from "@/components/shared/breadcrumb/index.vue";
export default Vue.extend({
  name: "App",
  components: {
    "bread-crumb": BreadCrumb
  },
  data: () => ({
    //
  })
});
</script>
