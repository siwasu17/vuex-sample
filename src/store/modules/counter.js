export default {
  // モジュール分割するときはstateの書き方がちょっと違う。() => ({ ... })
  state: () => ({
    count: 0,
    waiting: false
  }),
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
}