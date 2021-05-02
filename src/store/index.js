import Vue from "vue";
import Vuex from "vuex";
import api from "@/api/chuckNorrisAPI";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentFacts: [],
    isLoading: false,
  },
  mutations: {
    SET_FACTS(state, value) {
      state.currentFacts = value;
    },
    SET_LOADING(state, value) {
      state.isLoading = value;
    },
  },
  actions: {
    fetchFacts({ commit }, query) {
      commit("SET_LOADING", true);
      return api
        .queryFacts(query)
        .then(({ data }) => {
          commit("SET_FACTS", data.result);
        })
        .finally(() => {
          commit("SET_LOADING", false);
        });
    },
    clearFacts({ commit }) {
      commit("SET_FACTS", []);
    },
  },
});
