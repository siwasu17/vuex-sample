<template>
  <div id="todolist">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        {{ getTodoById(todo.id) }}
      </li>
    </ul>
    <p>完了数: {{ doneTodosCount }}</p>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoList",
  computed: {
    ...mapGetters(["doneTodosCount", "getTodoById"]),
    todos: function(){
      return this.$store.state.todoList.todos;
    }
  }
};
</script>