import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default {
  state: {
    zones: [],
    data: [],
    selectedZone: '',
    pagination: {
      currentPage: 1,
      totalPage: 1,
      hasPre: false,
      hasNext: false,
      limit: 10,
      total: 0,
    },
  },
  actions: {
    getZones(context) {
      context.commit('LOADING', true, { root: true });
      axios.get(`${process.env.VUE_APP_API_PATH}&fields=%22Zone%22&distinct=true&limit=1000`)
        .then((res) => {
          if (res.success) {
            context.commit('ZONES', Array.from(res.data.result.records, item => item.Zone));
          }
          context.commit('LOADING', false, { root: true });
        });
    },
    getData(context) {
      const { pagination, selectedZone } = context.state;
      context.commit('LOADING', true, { root: true });
      axios.get(`${process.env.VUE_APP_API_PATH}http://data.kcg.gov.tw/api/action/datastore_search?resource_id=92290ee5-6e61-456f-80c0-249eae2fcc97&offset=${(pagination.currentPage - 1) * 10 + 1}&limit=${pagination.limit}${selectedZone && selectedZone !== '' ? `&filters={"Zone":"${selectedZone}"}` : ''}`)
        .then((res) => {
          if (res.success) {
            context.commit('DATA', res.data.result.records);
            context.commit('PAGINATION', {
              ...pagination,
              total: res.data.result.total,
            });
          }
          context.commit('LOADING', false, { root: true });
        });
    },
    goPage(context, { page }) {
      context.commit('PAGINATION', {
        ...context.state.pagination,
        currentPage: page,
      });
      context.dispatch('getData');
    },
    selectZone(context, { zone }) {
      context.commit('SELECTED_ZONE', zone);
      context.dispatch('getData');
    },
  },
  mutations: {
    ZONES(state, payload) {
      state.zones = payload;
    },
    DATA(state, payload) {
      state.data = payload;
    },
    SELECTED_ZONE(state, payload) {
      state.selectedZone = payload;
    },
    PAGINATION(state, payload) {
      state.pagination = payload;
      state.totalPage = Math.floor(state.pagination.total / state.pagination.limit)
        + ((state.pagination.total % state.pagination.limit === 0) ? 0 : 1);
      state.pagination.hasPre = state.pagination.totalPage > 1 && state.pagination.currentPage > 1;
      state.pagination.hasNext = state.pagination.totalPage > state.pagination.currentPage;
    },
  },
  getters: {
    zones(state) {
      return state.zones;
    },
    data(state) {
      return state.data;
    },
    selectedZone(state) {
      return state.selectedZone;
    },
    pagination(state) {
      return state.pagination;
    },
  },
};
