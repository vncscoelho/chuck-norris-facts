import Vue from "vue";
import Vuex from "vuex";
import api from "@/api/chuckNorrisAPI";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentFacts: null,
    isLoading: false,
  },
  getters: {
    getCurrentFacts({ currentFacts }) {
      if (isNaN(currentFacts?.length)) {
        return null;
      }
      return currentFacts;
    },
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
    clearFacts({ commit }) {
      commit("SET_FACTS", []);
    },
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
    findFact({ commit }, id) {
      commit("SET_LOADING", true);
      return api
        .getFact(id)
        .then(({ data }) => data)
        .finally(() => commit("SET_LOADING", false));
    },
    fetchRandomFact({ commit }) {
      commit("SET_LOADING", true);
      return api
        .getRandomFact()
        .then(({ data }) => data)
        .finally(() => commit("SET_LOADING", false));
    },
  },
});
