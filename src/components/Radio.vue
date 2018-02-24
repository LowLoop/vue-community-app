<template>
  <div @click="click" class="radio">
    <label style="width: 100%;display: flex">
      <input v-if="false" type="radio" :checked="item.checked" :disabled="disabled">
      <span style="width: 60%">
        <slot></slot>
      </span>
      <span style="color: #55a532;width: 30%;text-align: right">
        <i v-if="item.checked" class="icon iconfont icon-gouxuan"></i>
        <i v-else></i>
      </span>
    </label>
  </div>
</template>

<script>
  export default {
    name: 'Radio',
    data() {
      return {
        disabled:false
      }
    },
    props:{
      /*checked:{
        type:Boolean,
        required:true,
        default:false
      },*/
      item:{
        type:Object,
        required:true,
        default:{}
      }
    },
    methods:{
      click(){
        this.$emit('radioChange', this.item)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .radio{
    display: flex;
  }
</style>
