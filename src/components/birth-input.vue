<template>
  <v-row justify="center">
    <v-card>
      <v-card-title>탄생일</v-card-title>
      <v-card-text>
        <v-date-picker
          v-model="birth"
          @change="set"
          color="green lighten-1"
        ></v-date-picker>
      </v-card-text>
    </v-card>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import { mapMutations } from "vuex";

@Component({
  methods: {
    ...mapMutations({
      set: "setBirth",
    }),
  },
})
export default class BirthInput extends Vue {
  birth: string = new Date().toISOString().substring(0, 10);
}
</script>

<style scoped></style>
