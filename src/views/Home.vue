<template>
  <v-main>
    <v-container fluid>
      <v-row>
        <v-col>
          <sleep-input></sleep-input>
        </v-col>
        <v-col>
          <timer></timer>
        </v-col>
      </v-row>
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
