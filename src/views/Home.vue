<template>
  <div>
    <birth-input></birth-input>
    <death-input></death-input>
    <timer></timer>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import BirthInput from "@/components/birth-input.vue";
import DeathInput from "@/components/death-input.vue";
import Timer from "@/components/timer.vue";

@Component({
  components: {
    BirthInput,
    DeathInput,
    Timer
  },
})
export default class Home extends Vue {}
</script>
