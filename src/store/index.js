import Vue from "vue";
import Vuex from "vuex";

import VuexPersistence from "vuex-persist"; // plugin for stre the variable when refresh

// import * as axios from "axios";
Vue.use(Vuex);

export default new Vuex.Store({
  plugins: [new VuexPersistence().plugin], // plugin for stre the variable when refresh
  state: {

  },
  getters: {
    
  },
  mutations: {

  },
  actions: {
 
  },
  modules: {}
});
