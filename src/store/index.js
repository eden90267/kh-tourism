import Vue from 'vue';
import Vuex from 'vuex';

import loadingModule from './loading';
import mainModule from './main';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    loadingModule,
    mainModule,
  },
});
