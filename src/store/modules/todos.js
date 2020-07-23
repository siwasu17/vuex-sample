export default {
  state: () => ({
    todos: [
      { id: 1, text: 'aaa', done: true },
      { id: 2, text: 'bbb', done: false }
    ]
  }),
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
  }
}