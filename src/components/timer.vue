<template>
  <v-card>
    <v-card-title>인생시계</v-card-title>
    <v-card-subtitle>남은 시간</v-card-subtitle>
    <v-card-text class="text-h1">{{ leftTime }}</v-card-text>
  </v-card>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { DateTime } from "luxon";

@Component({
  computed: {
    ...mapGetters({
      birth: "getBirth",
      death: "getDeath",
    }),
  },
})
export default class Timer extends Vue {
  now = DateTime.local();

  mounted() {
    setInterval(this.getNow, 1000);
  }

  getNow() {
    this.now = DateTime.local();
  }

  get leftTime() {
    const end = DateTime.fromISO(this.death);
    return end
      .diff(this.now)
      .toFormat("hh'시간' mm'분' ss'초'");
  }
}
</script>

<style scoped></style>
