import chuckNorrisAPI from "@/api/chuck_norris";

export default {
  install(Vue) {
    Vue.prototype.$api = chuckNorrisAPI;
  },
};
