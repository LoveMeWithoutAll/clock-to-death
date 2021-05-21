<template>
  <v-container fill-height>
    <v-row class="justify-center">
      <timer></timer>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Timer from "@/components/timer.vue";

@Component({
  components: {
    Timer,
  },
})
export default class Home extends Vue {}
</script>
