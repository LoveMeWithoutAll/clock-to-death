<template>
  <v-main>
    <v-container fluid>
      <v-row>
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

@Component({
  components: {
    Timer,
  },
})
export default class Home extends Vue {}
</script>
