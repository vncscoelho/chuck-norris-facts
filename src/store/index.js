import Vue from "vue";
import Vuex from "vuex";
import api from "@/api/chuckNorrisAPI";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentFacts: [],
  },
  mutations: {
    SET_FACTS(state, value) {
      state.currentFacts = value;
    },
  },
  actions: {
    fetchFacts({ commit }, query) {
      return api.queryFacts(query).then(({ data }) => {
        commit("SET_FACTS", data.result);
      });
    },
    clearFacts({ commit }) {
      commit("SET_FACTS", []);
    },
  },
});
