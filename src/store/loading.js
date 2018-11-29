import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default {
  state: {
    isLoading: true,
  },
  actions: { // 可做非同步的行為
    updateLoading(context, payload) { // context: vuex 固定參數, payload: 外部傳遞過來的參數
      context.commit('LOADING', payload);
    },
  },
  mutations: { // 只做同步的行為
    LOADING(state, payload) {
      state.isLoading = payload;
    },
  },
  getters: { // 類似 computed
    isLoading(state) {
      return state.isLoading;
    },
  },
};
