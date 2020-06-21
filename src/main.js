import Vue from 'vue'
import Vuex from 'vuex'
import App from './App.vue'

// Vue.use(Vuex) で使ったVuexをそのままVueインスタンス生成時の new Vuex.Store() で使わないと
// Uncaught Error: [vuex] must call Vue.use(Vuex) before creating a store instance. というエラーが発生する。
Vue.use(Vuex);


// 別ファイル分離しようとしたが工夫が必要かも
const store = new Vuex.Store({
  state: {
    count: 0,
    waiting: false,
    todos: [
      { id: 1, text: 'aaa', done: true },
      { id: 2, text: 'bbb', done: false }
    ]
  },
  mutations: {
    // ミューテーションは同期的でなければならない
    increment(state) {
      state.count++;
    },
    incrementN(state, n) {
      state.count += n;
    },
    incrementN2(state, payload) {
      state.count += payload.amount;
    }
  },
  getters: {
    doneTodos: state => {
      return state.todos.filter(todo => todo.done);
    },
    doneTodosCount: (state, getters) => {
      // 第２引数に他のゲッターを取れる
      return getters.doneTodos.length;
    },
    // 関数を返すこともできる
    getTodoById: (state) => (id) => {
      return state.todos.find(todo => todo.id === id);
    }
  },
  actions: {
    // アクションは非同期にできる
    // store.dispatchで呼び出される
    // { commit }を引数にしてcontextを省略できる
    incrementAsync(context) {
      this.state.waiting = true;
      setTimeout(() => {
        context.commit('incrementN', 100);
        this.state.waiting = false;
      }, 5000);
    }
  }
});

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  store: store
}).$mount('#app')
