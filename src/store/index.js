// import createPersistedState from "vuex-persistedstate";
import Vue from "vue";
import Vuex from "vuex";
import authentication from "./authentication";
import seminar from "./seminar";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: true,
  state: {
    baseUrl: "/"
  },
  mutations: {},
  actions: {},
  modules: { authentication, seminar }
  // plugins: [createPersistedState()]
});
