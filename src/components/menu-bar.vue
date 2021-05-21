<template>
  <v-app-bar app color="primary" dark class="pa-4">
    <v-spacer></v-spacer>
    <v-dialog
      ref="dialog"
      v-model="modal"
      :return-value.sync="time"
      persistent
      width="290px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-text-field
          v-model="time"
          label="Set sleep time"
          prepend-icon="mdi-clock-time-four-outline"
          readonly
          v-bind="attrs"
          v-on="on"
        ></v-text-field>
      </template>
      <v-time-picker
        v-if="modal"
        v-model="time"
        full-width
        @change="set"
        format="24hr"
      >
        <v-spacer></v-spacer>
        <v-btn text color="primary" @click="modal = false"> Cancel </v-btn>
        <v-btn text color="primary" @click="$refs.dialog.save(time)">
          OK
        </v-btn>
      </v-time-picker>
    </v-dialog>
  </v-app-bar>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import SleepInput from "@/components/sleep-input.vue";
import { mapMutations } from "vuex";

@Component({
  components: {
    SleepInput,
  },
  methods: {
    ...mapMutations({
      set: "setTime",
    }),
  },
})
export default class MenuBar extends Vue {
  modal = false;
  time = null;
}
</script>

<style scoped></style>
