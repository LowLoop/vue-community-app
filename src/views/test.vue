<template>
  <div class="wrap flex flex-v">
    <div class="header">我想要它固定顶部部</div>
    <div class="main flex-1">
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p><input value="54545455654"/></p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
      <p>高度自动适应</p>
    </div>
    <div class="footer">我想要它固定底部<input value="54545455654"/></div>
  </div>
</template>

<script>
  import { getTopics } from '@/api/api'
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
      /*getTopics(this.reqData)
        .then(res => {
          this.topcs = res
        })
        .catch(err => {
          console.log(err)
        })*/
    },
    methods:{

    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  *{padding: 0;margin: 0;}
  html,body{height: 100%}
  .wrap{width: 100%;height: 100%;}
  .header,.footer{height:40px;line-height:40px;background-color:#D8D8D8;}
  .main{overflow:auto;-webkit-overflow-scrolling: touch;}
  /* ============================================================
     flex：定义布局为盒模型
     flex-v：盒模型垂直布局
     flex-1：子元素占据剩余的空间
     flex-align-center：子元素垂直居中
     flex-pack-center：子元素水平居中
     flex-pack-justify：子元素两端对齐
     兼容性：ios 4+、android 2.3+、winphone8+
     ============================================================ */
  .flex{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}
  .flex-v{-webkit-box-orient:vertical;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;}
  .flex-1{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;}
  .flex-align-center{-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;}
  .flex-pack-center{-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;}
  .flex-pack-justify{-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;}
</style>
