<template>
  <div style="max-width: 45%">
    <!--<el-date-picker
      v-model="startDate"
      type="datetime"
      placeholder="选择开始时间"></el-date-picker>
    -
    <el-date-picker
      v-model="endDate"
      type="datetime"
      placeholder="选择结束时间"></el-date-picker>-->

    <el-input v-model="diffValObj" :disabled="true" placeholder="时差">
      <template slot="append">
        <el-select style='width:60px' @change="unitChange" v-model="dateUnit" placeholder="请选择">
          <el-option v-for="(item, index) in arr" :key="index" :label="item.label" :value="item.val"></el-option>
        </el-select>
      </template>
    </el-input>
    <!--<el-input v-model="diffValObj.mon" placeholder="">
      <template slot="append">月</template>
    </el-input>
    <el-input v-model="diffValObj.w" placeholder="">
      <template slot="append">周</template>
    </el-input>
    <el-input v-model="diffValObj.d" placeholder="">
      <template slot="append">天</template>
    </el-input>
    <el-input v-model="diffValObj.h" placeholder="">
      <template slot="append">小时</template>
    </el-input>
    <el-input v-model="diffValObj.min" placeholder="">
      <template slot="append">分钟</template>
    </el-input>
    <el-input v-model="diffValObj.s" placeholder="">
      <template slot="append">秒</template>
    </el-input>-->

  </div>
</template>

<script>
  export default {
    name: 'dateDiff',
    data() {
      return {
        /*startDate:'',
        endDate:'',*/
        dateUnit:this.unit,
        arr:[
          {label:'年', val:'y'},
          {label:'月', val:'mon'},
          {label:'周', val:'w'},
          {label:'天', val:'d'},
          {label:'时', val:'h'},
          {label:'分', val:'min'},
          {label:'秒', val:'s'},
        ]
      }
    },
    props:{
      startDate:{
        /*type: Date,*/
        required:false,
        default:null
      },
      endDate:{
        /*type: Date,*/
        required:false,
        default:null
      },
      unit:{
        type: String,
        required: false,
        default:'h'
      }
    },
    watch:{
      unit(newVal, oldVal){
        console.log(`${newVal}--${oldVal}`)
        if(!newVal){
          this.dateUnit = 'h'
        }
      }
    },
    mounted(){
      if(!this.unit){
        this.dateUnit = 'h'
      }
    },
    computed:{
      diffValObj(){
        console.log('diffValObj')
        let obj = {
          y:null,
          mon:null,
          w:null,
          d:null,
          h:null,
          min:null,
          s:null
        }

        let str = ''

        if(this.startDate && this.endDate){
          let i = Math.abs(this.startDate.getTime() - this.endDate.getTime())
          console.log(`${this.startDate.toLocaleString()}--${this.endDate.toLocaleString()}`)

          let startY = this.startDate.getFullYear()
          let y = i / 1000 / 60 / 60 / 24 / 365
          if((startY % 4 === 0) && (startY % 100 !== 0 || startY % 400 === 0)){
            y = i / 1000 / 60 / 60 / 24 / 366
          }

          let mon = i / 1000 / 60 / 60 / 24 / 30
          let w = i / 1000 / 60 / 60 / 24 / 7
          let d = i / 1000 / 60 / 60 / 24
          let h = i / 1000 / 60 / 60
          let min = i / 1000 / 60
          let s = i / 1000

          if(y >= 1){
            obj.y = y
          }else{
            obj.y = 0
          }

          if(mon >= 1){
            obj.mon = mon
          }else{
            obj.mon = 0
          }

          if(w >= 1){
            obj.w = w
          }else {
            obj.w = 0
          }

          if(d >= 1){
            obj.d = d
          }else{
            obj.d = 0
          }

          if(h >= 1){
            obj.h = h
          }else {
            obj.h = 0
          }

          if(min >= 1){
            obj.min = min
          }else {
            obj.min = 0
          }

          if(s >= 1){
            obj.s = s
          }else {
            obj.s = 0
          }

        }

        switch (this.dateUnit){
          case 'y':
            str = obj.y
            break
          case 'mon':
            str = obj.mon
            break
          case 'w':
            str = obj.w
            break
          case 'd':
            str = obj.d
            break
          case 'h':
            str = obj.h
            break
          case 'min':
            str = obj.min
            break
          case 's':
            str = obj.s
            break
          default:
            break
        }

        return str
        //return obj
      }
    },
    methods:{
      unitChange(val){
        this.$emit('updateUnit', this.dateUnit)
        this.diffValObj
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

</style>
