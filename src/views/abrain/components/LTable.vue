<template>
  <div class="l-box">
    <div class="l-header">
      head
    </div>
    <div class="l-content">
      <table class="l-table" ref="lTable">
        <tr>
          <td
            v-for="(item, index) in tdArr"
            @mousedown="tdMouseDown"
            @mouseup="tdMouseUp"
            @mousemove="tdMouseMove">
            <button @click="editTd(item)">{{item.isEdit ? '关闭编辑' : '编辑整列'}}</button>
          </td>
        </tr>
        <tr
          v-for="(item, index) in trArr"
          :key="index">
          <td
            v-for="(x, tdIndex) in tdArr"
            :key="tdIndex"
            @click="">
            <span v-if="!item.isEdit && !x.isEdit">{{`${index}-${tdIndex}`}}</span>
            <input v-model="x.val" v-if="item.isEdit || x.isEdit" type="text">
          </td>
          <td>
            <button @click="editTr(item)">{{item.isEdit ? '关闭编辑' : '编辑整行'}}</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lTable',
    data() {
      return {
        trArr:[
          {val:'nagato', isEdit:false},
          {val:'nagato', isEdit:false},
          {val:'nagato', isEdit:false},
          {val:'nagato', isEdit:false},
          {val:'nagato', isEdit:false},
          {val:'nagato', isEdit:false},
          {val:'nagato', isEdit:false},
          {val:'nagato', isEdit:false},
          {val:'nagato', isEdit:false},
        ],
        tdArr:[
          {val:'ichinose', isEdit:false},
          {val:'ichinose', isEdit:false},
          {val:'ichinose', isEdit:false},
          {val:'ichinose', isEdit:false},
          {val:'ichinose', isEdit:false},
          {val:'ichinose', isEdit:false},
          {val:'ichinose', isEdit:false},
        ],
        lTd:null
      }
    },
    methods:{
      editTr(i){
        i.isEdit = !i.isEdit
      },
      editTd(item){
        item.isEdit = !item.isEdit
      },
      tdMouseDown(event){
        this.lTd = event.currentTarget
        if(event.offsetX > this.lTd.offsetWidth - 10){
          this.lTd.mouseDown = true
          this.lTd.oldX = event.x
          this.lTd.oldWidth = this.lTd.offsetWidth
        }
      },
      tdMouseUp(event){
        if(!this.lTd){
          this.lTd = event.currentTarget
        }
        this.lTd.mouseDown = false
      },
      tdMouseMove(event){
        if(!this.lTd){
          this.lTd = event.currentTarget
        }

        if(event.offsetX > event.currentTarget.offsetWidth - 10){
          event.currentTarget.style.cursor = 'col-resize'
        }else{
          event.currentTarget.style.cursor = 'pointer'
        }

        if(this.lTd.mouseDown){
          if(this.lTd.oldWidth + (event.x - this.lTd.oldX) > 0){
            this.lTd.style.minWidth = this.lTd.oldWidth + (event.x - this.lTd.oldX) + 'px'
          }
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .l-box{
    display: flex;
    flex-wrap: wrap;
    width: 70%;
    margin: 0 auto;
    padding: 15px;
    .l-header{
      width: 100%;
      min-height: 50px;
    }
    .l-content{
      width: 100%;
      min-height: 200px;
    }
  }
  .l-table{
    table-layout: fixed;
    border-collapse: collapse;
  }
  button{
    cursor: pointer;
    &.hover{
      background: #C4C4C4;
    }
    &.active{
      background: #686868;
    }
  }
  table{
    border: 1px solid;
    td{
      border: 1px solid;
      cursor: pointer;
      min-width: 125px;
      text-align: center;
      &:hover{
        background: pink;
      }
      &:active{
        background: green;
      }
      input{
        width: 100px;
      }
    }
  }
</style>
