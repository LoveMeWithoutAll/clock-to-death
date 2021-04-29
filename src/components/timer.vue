<template>
  <v-card>
    <v-card-title>인생시계</v-card-title>
    <v-card-subtitle>오늘</v-card-subtitle>
    <v-card-text>{{ new Date().toDateString() }}</v-card-text>
    <v-card-subtitle>남은 시간</v-card-subtitle>
    <v-card-text>{{ leftHours }} 시간</v-card-text>
    <v-card-subtitle>남은 날</v-card-subtitle>
    <v-card-text>{{ leftDays }} 일</v-card-text>
  </v-card>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { DateTime, Interval } from "luxon";

@Component({
  computed: {
    ...mapGetters({
      birth: "getBirth",
      death: "getDeath",
    }),
  },
})
export default class Timer extends Vue {
  now = "";

  mounted() {
    setInterval(this.getNow, 1000);
  }

  getNow() {
    this.now = DateTime.now().toISODate();
  }

  get leftTime() {
    const end = DateTime.fromISO(this.death);
    return Interval.fromDateTimes(DateTime.fromISO(this.now), end);
  }

  get leftDays() {
    return this.leftTime.length("days");
  }

  get leftHours() {
    return this.leftTime.length("hours");
  }
}
</script>

<style scoped></style>
