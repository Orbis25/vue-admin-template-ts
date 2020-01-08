<template>
  <v-app>
    <!-- <v-app-bar app color="primary" dark></v-app-bar> -->
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
