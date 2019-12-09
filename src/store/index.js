import Vue from 'vue'
import  Vuex from 'vuex'
Vue.use(Vuex)
const state={
  count:10,
  numbers:[1,2,3,4,5,6]
}
const getters={
  filterNumbers(state){
    return state.numbers.filter(item=>{
      return item>3
    })
  }
}
const mutations={
  add(state){
    state.count++
  },
  changeCount(state){
    state.count=3000
  }
}
const actions={
  changeCount3000s(context) {
    setTimeout(()=>{
      context.commit('changeCount')
    },3000)
  }
}

  export  default  new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})
