<template>
  <div>{{ msg }}</div>
</template>

<script>
import { Vue, Component } from "vue-property-decorator";

@Component
export default class Timer extends Vue {
  msg = "timer!";
}
</script>

<style scoped></style>
