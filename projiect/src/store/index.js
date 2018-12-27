import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {
    
  },
  mutations: {
    //添加空间
    get_spaceCount (state, payload) {
      state.count = payload;
    }
  },
  actions: {}
})

export default store