<template>
  <div
    class="badge"
    :style="getStyle">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'badge',
    data() {
      return {

      }
    },
    props:{
      type:{
        type: String,
        required: false,
        default:'success'
      },
    },
    methods:{
      getStyle(){
        let style = {}
        switch (this.type){
          case 'success':
            style = {
              background:'green',
              color:'white'
            }
            break
          default:
            style = {
              background:'green',
              color:'white'
            }
            break
        }
        return style
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .badge{
    height: 20px;
    width: 50px;
    background:green;
    color:white;
    font-size: 12px;
    text-align: center;
    line-height: 20px;
    border-radius: 3px;
  }
</style>
