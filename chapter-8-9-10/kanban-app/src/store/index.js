import Vue from 'vue'
import Vuex from 'vuex'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// 状態`Auth`と状態`Board`をVuexのstateで一元管理できるよう定義する
const state = {
  auth: { // 状態`Auth`
    token: null, // `token`はnullで初期化
    userId: null // `userId`はnullで初期化
  },
  board: { // 状態`Board`
    lists: [] // `TaskList`は空で初期化
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
  strict: process.env.NODE_ENV !== 'production'
})
