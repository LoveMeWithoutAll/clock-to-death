<template>
  <v-row justify="center">
    <v-card>
      <v-card-title>사망일</v-card-title>
      <v-card-text>
        <v-date-picker
          v-model="death"
          @change="set"
          color="red lighten-1"
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
      set: "setDeath",
    }),
  },
})
export default class DeathInput extends Vue {
  death: string = new Date().toISOString().substring(0, 10);
}
</script>

<style scoped></style>
