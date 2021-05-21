<template>
  <v-card v-click-outside="closeModal">
    <v-time-picker
      v-model="time"
      @change="set"
      format="24hr"
      full-width
    ></v-time-picker>
  </v-card>
</template>

<script lang="ts">
import { Vue, Component, Emit } from "vue-property-decorator";
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

  @Emit()
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  closeModal(): void {
    console.log('in sleep input')
  }
}
</script>

<style scoped></style>
