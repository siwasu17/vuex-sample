<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <Display />
    <Counter />
    <AsyncCounter />
    <TodoList />

  </div>
</template>

<script>
import Counter from './components/Counter.vue'
import AsyncCounter from './components/AsyncCounter.vue'
import Display from './components/Display.vue'
import TodoList from './components/TodoList.vue'

export default {
  name: 'App',
  components: {
    Counter,
    AsyncCounter,
    Display,
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
