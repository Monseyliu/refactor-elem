import Vue from 'vue'
import Vuex from 'vuex'
import state from "./state"
import mutations from "./mutations"
import * as getters from "./getters"
import * as actions from "./actions"
import createLogger from "vuex/dist/logger"

Vue.use(Vuex)
//调试
const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state,
  mutations,
  getters,
  actions,
  plugins: debug ? [createLogger()] : []
})
