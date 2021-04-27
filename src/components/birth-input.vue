<template>
  <div>{{ message }}</div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component
export default class BirthInput extends Vue {
  message = "birth!";
}
</script>

<style scoped></style>
