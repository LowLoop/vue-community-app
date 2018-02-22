<template>
  <div>
    <label @click="click">
      <input v-if="false" type="radio" :checked="item.checked" :disabled="disabled">
      <span style="color: #55a532">
        <i v-if="!item.checked" class="icon iconfont icon-radio02"></i>
        <i v-if="item.checked" class="icon iconfont icon-radio"></i>
      </span>
      <span>
        <slot></slot>
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

</style>
