<template>
  <v-card flat>
    <v-card-text class="text-h3">{{ leftTime }}</v-card-text>
  </v-card>
</template>

<script>
import { Component, Vue } from "vue-property-decorator";
import { mapGetters } from "vuex";
import { DateTime } from "luxon";

@Component({
  computed: {
    ...mapGetters({
      time: "getTime",
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
    let end = DateTime.fromISO(this.time);
    if (end < this.now) end = end.plus({ days: 1 });
    return end.diff(this.now).toFormat("hh':'mm':'ss''");
  }
}
</script>

<style scoped></style>
