import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    birth: "",
    death: "",
    time: "",
  },
  getters: {
    getBirth(state) {
      return state.birth;
    },
    getDeath(state) {
      return state.death;
    },
    getTime(state) {
      return state.time;
    },
  },
  mutations: {
    setBirth(state, birth) {
      state.birth = birth;
    },
    setDeath(state, death) {
      state.death = death;
    },
    setTime(state, time) {
      state.time = time;
    },
  },
  actions: {},
  modules: {},
});
