import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userName:'',
    isAdmin:false
  },
  getters:{
    isAdmin(state){
      if(!state.isAdmin){
        state.isAdmin = JSON.parse(sessionStorage.getItem('isAdmin'))
      }
      return state.isAdmin
    },
    userName(state){
      if(!state.userName){
        state.userName = JSON.parse(sessionStorage.getItem('userName'))
      }
      return state.userName
    }
  },
  mutations: {
    addUserName(state,payload){
      state.userName=payload
      sessionStorage.setItem('userName',JSON.stringify(payload))
    },
    removeUserName(state){
      state.userName=''
    },
    changeIsAdmin(state,payload){
      state.isAdmin=payload
      sessionStorage.setItem('isAdmin',JSON.stringify(payload))
    }
  },
  actions: {
  },
  modules: {
  }
})
