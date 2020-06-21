<template>
<div id="disp">
  <p>{{ count }}</p>
</div>
</template>


<script>
export default {
  name: 'Display',
  computed: {
    count() {
      return this.$store.state.count;
    }
  }
}
</script>