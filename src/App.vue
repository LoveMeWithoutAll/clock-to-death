<template>
  <v-app>
    <menu-bar></menu-bar>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from "vue";
import MenuBar from "@/components/menu-bar.vue"

export default Vue.extend({
  name: "App",
  components: {
    MenuBar
  },
  data: () => ({
    //
  }),
});
</script>
