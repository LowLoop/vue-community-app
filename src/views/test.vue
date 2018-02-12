<template>
  <div>

  </div>
</template>

<script>
  import { getTopcs } from '@/api/api'
  export default {
    name: 'test',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App',
        reqData:{
          page:1,
          tab:'',
          limit:2,
          mdrender:true
        },
        topcs:null
      }
    },
    mounted(){
      getTopcs(this.reqData)
        .then(res => {
          this.topcs = res
        })
        .catch(err => {
          console.log(err)
        })
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
