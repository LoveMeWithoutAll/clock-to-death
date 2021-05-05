<template>
  <v-card>
    <v-card-title>잘 시간</v-card-title>
    <v-card-text>
      <v-time-picker
        v-model="time"
        @change="set"
        format="24hr"
        landscape
        scrollable
      ></v-time-picker>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapMutations } from "vuex";

@Component({
  methods: {
    ...mapMutations({
      set: "setTime",
    }),
  },
})
export default class SleepInput extends Vue {
  time = "";
}
</script>

<style scoped></style>
