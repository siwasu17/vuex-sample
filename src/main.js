import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'
import counter from './store/modules/counter'
import todos from './store/modules/todos'

// Vue.use(Vuex) で使ったVuexをそのままVueインスタンス生成時の new Vuex.Store() で使わないと
// Uncaught Error: [vuex] must call Vue.use(Vuex) before creating a store instance. というエラーが発生する。
Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    counter: counter,
    todoList: todos
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
