<template>
  <header class="header">
    <slot></slot>
  </header>
</template>

<script>
  export default {
    name: 'lheader',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
