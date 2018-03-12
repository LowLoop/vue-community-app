<template>
  <div class="l-box">
    <div class="l-header">
      head
    </div>
    <div class="l-content">
      <table class="l-table" ref="lTable">
        <tr>

        </tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
        <tr></tr>
      </table>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'lTableDrag',
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
          {val:'kotomi', isEdit:false},
          {val:'nagato', isEdit:false},
          {val:'yuki', isEdit:false},
          {val:'sisimiya', isEdit:false},
          {val:'kosaya', isEdit:false},
          {val:'panghu', isEdit:false},
        ],
        lTd:null,
        lTr:null
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
      },
      trDragStart(event){
        //event.dataTransfer.setData('Text', event.target)
        this.lTr = event.screenY
        console.log(event)
        console.log(`start`)
        console.log(`y-${event.y}, screenY-${event.screenY}, clientY-${event.clientY}, offsetHeight-${event.currentTarget.offsetHeight}`)
        console.log(`-------分割线-----------`)
      },
      trDrag(event){
        //console.log(event)
        console.log('拖放中...')
        console.log(`y-${event.y}, screenY-${event.screenY}, clientY-${event.clientY}, offsetHeight-${event.currentTarget.offsetHeight}`)

        if(Math.abs(event.screenY - this.lTr) > 20){
          console.log(event.currentTarget.nextSibling)
          console.log(event.currentTarget.parentNode)
          console.log(event.currentTarget.parentNode.rows)
          event.currentTarget.nextSibling.style.background = 'pink'
        }

      },
      tdDblClick(e){

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
