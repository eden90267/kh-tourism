import Vue from 'vue';
import Vuex from 'vuex';

import indexModules from './store/index';
import loadingModules from './store/loading';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    indexModules,
    loadingModules,
  },
});
