// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import router from './router'
import axios from 'axios'

import 'es6-promise/auto'

Vue.use(Vuex)
Vue.config.productionTip = false
Vue.prototype.$ajax = axios

const store = new Vuex.Store({
  state: {
    count: 0,
    todos: [
      { id: 1, text: '...', done: true },
      { id: 2, text: '...', done: false }
    ]
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    increment (state) {
      state.count++
    },
    decrement (state){
      state.count--
    }
  },
  actions: {
    increment (context) {
      context.commit('increment')
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // template: '<App/>',
  store,
  computed: {
    count () {
      return store.state.count
    }
  },
  components: {App},
  methods: {
    increment () {
      store.commit('increment')
    },
    decrement () {
      store.commit('decrement')
    },
    toDo () {
      console.log(store.getters.doneTodos)
    },
    actionIncrement(){
      // store.dispatch('increment')
      setTimeout( () => {
        store.dispatch('increment')
      }, 1000)
    }
  }
})
