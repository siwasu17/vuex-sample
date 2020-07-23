<template>
  <div class="async-counter">
    <button v-on:click="incrementAsync">+100(非同期)</button>
    <h3 v-if="isWaiting">待機中...</h3>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AsyncCounter",
  computed: {
    isWaiting: function(){
      return this.$store.state.counter.waiting;
    }
  },
  methods: {
    ...mapActions([
      'incrementAsync'
    ])
  }
};
</script>

