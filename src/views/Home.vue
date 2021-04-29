<template>
  <v-main>
    <v-container>
      <death-input></death-input>
      <v-spacer></v-spacer>
      <timer></timer>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BirthInput from "@/components/birth-input.vue";
import DeathInput from "@/components/death-input.vue";
import Timer from "@/components/timer.vue";

@Component({
  components: {
    BirthInput,
    DeathInput,
    Timer
  },
})
export default class Home extends Vue {}
</script>
