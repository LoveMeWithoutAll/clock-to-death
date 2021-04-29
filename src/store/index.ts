import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    birth: "",
    death: "",
  },
  getters: {
    getBirth(state) {
      return state.birth;
    },
    getDeath(state) {
      return state.death;
    },
  },
  mutations: {
    setBirth(state, birth) {
      state.birth = birth;
    },
    setDeath(state, death) {
      state.death = death;
    },
  },
  actions: {},
  modules: {},
});
