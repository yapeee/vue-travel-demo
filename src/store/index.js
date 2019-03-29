import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import mutations from './mutations'

Vue.use(Vuex)

export default new Vuex.Store({ // 通过vuex创建一个仓库
  state,
  mutations
  // getters: {
  //   doubleCity (state) {
  //     return state.city + ' ' + state.city
  //   }
  // }
})
