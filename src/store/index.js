import Vue from "vue";
import Vuex from "vuex";
import api from "@/api/chuckNorrisAPI";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentFacts: [],
  },
  mutations: {
    setFacts(state, value) {
      state.currentFacts = value;
    },
  },
  actions: {
    fetchFacts({ commit }, query) {
      return api.queryFacts(query).then(({ data }) => {
        commit(data.result);
      });
    },
  },
});
