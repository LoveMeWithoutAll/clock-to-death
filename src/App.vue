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
import MenuBar from "@/components/menu-bar.vue";
import { Component } from "vue-property-decorator";
import { mapMutations } from "vuex";

@Component({
  components: {
    MenuBar,
  },
  methods: {
    ...mapMutations({
      setTime: "setTime",
    }),
  },
})
export default class App extends Vue {
  setTime!: (time: string) => void;
  mounted(): void {
    const localStorageTime = localStorage.getItem("time");
    if (localStorageTime) this.setTime(localStorageTime);
  }
}
</script>
