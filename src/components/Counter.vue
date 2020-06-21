<template>
  <div class="counter">
    <button v-on:click="incr(1)">+1</button>
    <button v-on:click="incr(10)">+10</button>
  </div>
</template>

<script>
export default {
  name: 'Counter',
  methods: {
    incr(v) {
//      this.$store.commit('incrementN', v);
      this.$store.commit({
        type: 'incrementN2',
        amount: v
      });
    }
  }
}
</script>

