import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    hover: [],
    backgroundTransition: null,
    lastVisitedPage: null,
    aboutPageIcon: null,
    menuBag: null,
    menuListHeight: 0,
    navList: null,
  },
  mutations: {},
  actions: {},
  modules: {},
});
