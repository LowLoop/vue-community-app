<template>
  <div>
    <transition-group name="fade">
      <div
        key="pop"
        class="popup"
        v-if="isShow">
        <slot></slot>
      </div>
      <div
        key="mask"
        v-if="isShow"
        class="mask"
        @click="close"></div>
    </transition-group>
  </div>
</template>

<script>
  export default {
    name: 'popup',
    data() {
      return {
        msg: 'Welcome to Your Vue.js App'
      }
    },
    props:{
      isShow:{
        type:Boolean,
        required:true,
        default:false
      }
    },
    methods:{
      close(){
        this.$emit('close', false)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .popup{
    width: 80%;
    min-height: 30%;
    position: absolute;
    left: 10%;
    top: 10%;
    border-radius: 5px;
    z-index: 999;
    padding: 5px;
    background: #fff;
  }
</style>
