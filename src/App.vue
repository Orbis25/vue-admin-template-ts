<template>
  <v-app>
    <router-view name="drawer" />
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "App",
  data: () => ({
    //
  })
});
</script>
