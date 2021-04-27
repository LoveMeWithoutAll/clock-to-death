<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class DeathInput extends Vue {
  message = "death";
}
</script>

<style scoped></style>
