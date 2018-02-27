import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'
import user from './modules/user'
import appParameter from './modules/appParameter'

Vue.use(Vuex)

const store = new Vuex.Store({
  modules:{
    user,
    appParameter
  },
  getters
})

export default store
