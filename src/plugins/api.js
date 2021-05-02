import chuckNorrisAPI from "@/api/chuckNorrisAPI";

export default {
  install(Vue) {
    Vue.prototype.$api = chuckNorrisAPI;
  },
};
