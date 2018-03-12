<template>
  <div>
    <el-form :model="formModel" label-width="80px">
      <el-row v-for="i in Number(formRow)" :key="i" :gutter="10">
        <el-col
          v-for="x in Number(formCol)"
          :span="24 / Number(formCol)"
          :key="x">
          <span>{{`${i}-${x}`}}</span>
          <slot :name="`${i}-${x}`"></slot>
        </el-col>
      </el-row>
    </el-form>
  </div>
</template>

<script>
  export default {
    name: 'lForm',
    data() {
      return {

      }
    },
    props:{
      formModel:{
        type: Object,
        required:false,
        default:() => {}
      },
      formCol:{
        required:false,
        default:2
      },
      formRow:{
        required:false,
        default:2
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
