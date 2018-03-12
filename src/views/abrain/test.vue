<template>
  <div class="test-box">

    <l-form :formCol="2" :formRow="2">
      <el-date-picker
        slot="1-1"
        v-model="startDate"
        type="datetime"
        placeholder="选择开始时间"></el-date-picker>
      <el-date-picker
        slot="1-2"
        v-model="endDate"
        type="datetime"
        placeholder="选择结束时间"></el-date-picker>
      <date-diff
        slot="2-1"
        :startDate="startDate"
        :endDate="endDate"
        :unit="unit"
        @updateUnit="updateUnit"></date-diff>
    </l-form>

  </div>
</template>

<script>
  import DateDiff from './components/DateDiff.vue'
  import LForm from './components/LForm.vue'

  let countCol = 1
  let countRow = 1

  export default {
    name: 'test',
    components:{
      DateDiff,
      LForm
    },
    data() {
      return {
        startDate: null,
        endDate:null,
        unit:'',
        formCol:2,
        formRow:3,
      }
    },
    computed:{
      computeColRow(){
        let str = ''
        if(countCol <= Number(this.formCol)){
          str = `${countRow}-${countCol}`
          countCol++

        }else{
          countCol = 1
          if(countRow <= Number(this.formRow)){
            countRow++
          }
          str = `${countRow}-${countCol}`
        }
        return str
      },
    },
    methods:{
      updateUnit(val){
        this.unit = val
      },
      colChange(val){
      },
      rowChange(val){
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .test-box{
    width: 80%;
    height: 300px;
    margin: 0 auto;
    padding-top: 50px;
  }
</style>
