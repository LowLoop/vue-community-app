<template>
  <div>
    <l-header>123</l-header>
    <router-view></router-view>
    <sidebar></sidebar>
  </div>
</template>

<script>
  import LHeader from '@/components/LHeader'
  import List from './list.vue'
  import Sidebar from './sidebar.vue'
  export default {
    name: 'Hello',
    components:{
      LHeader,
      List,
      Sidebar
    },
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
