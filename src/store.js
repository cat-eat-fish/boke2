import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    changeblack:true,
    headactive:0,
  },
  mutations: {
    newchangeblack(state,msg){
      state.changeblack=msg;
    },
    newheadactive(state,msg){
      state.headactive=msg;
    },

  },
  actions: {

  }
})
