<template>
  <v-main>
    <v-container>
      <sleep-input></sleep-input>
      <v-spacer></v-spacer>
      <timer></timer>
    </v-container>
  </v-main>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Timer from "@/components/timer.vue";
import SleepInput from "@/components/sleep-input.vue";

@Component({
  components: {
    SleepInput,
    Timer,
  },
})
export default class Home extends Vue {}
</script>
