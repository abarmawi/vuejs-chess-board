import Vue from 'vue'
import Vuex from 'vuex'

import AppModule from '@/store/appStore'

Vue.use(Vuex)

export default new Vuex.Store<{}>({
  state: {},
  mutations: {},
  actions: {},
  modules: {
    AppModule,
  },
  getters: {},
})
