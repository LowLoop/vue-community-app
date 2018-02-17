<template>
  <div>
    <transition-group name="scro">
      <div
        key="sidebar"
        :style="styleObj"
        class="sidebar-box"
        ref="sidebar"
        @touchstart="touchstart"
        @touchmove="touchmove"
        @touchend="touchend"
        v-if="showSidebar">

        <cell class="sidebar-menu-first">
          <i style="font-size: 26px;" class="icon iconfont icon-yonghu"></i>
        </cell>
        <cell class="sidebar-menu-other" @click="toList('all')">
          板块
        </cell>
        <cell class="sidebar-menu-other">
          全部
        </cell>
        <cell class="sidebar-menu-other">
          精华
        </cell>
        <cell class="sidebar-menu-other">
          weex
        </cell>
        <cell class="sidebar-menu-other">
          分享
        </cell>
        <cell class="sidebar-menu-other">
          问答
        </cell>
        <cell class="sidebar-menu-other">
          招聘
        </cell>

        <div class="sidebar-bottom">
          底部底部
        </div>
      </div>

      <div
        key="mask"
        v-if="showSidebar"
        class="mask"
        @click="close"></div>

    </transition-group>
  </div>
</template>

<script>
  import { getTopcs } from '@/api/api'
  import Cell from '../components/cell'
  export default {
    name: 'sidebar',
    components:{
      Cell
    },
    data() {
      return {
        reqData:{
          page:1,
          tab:'all',
          limit:2,
          mdrender:true
        },
        topcs:null,
        screenX:null,
        styleObj:{
          position:'absolute',
          top:0,
          left:0,
        }
      }
    },
    props:{
      showSidebar:{
        type:Boolean,
        required:true,
        default:false
      }
    },
    mounted(){
      /*this.$el.addEventListener('touchstart', this.touchstart(), false)
      this.$el.addEventListener('touchmove', this.touchmove(), false)
      this.$el.addEventListener('touchend', this.touchend(), false)*/
    },
    methods:{
      close(){

      },
      toList(type){
        this.$router.push({path:'/list',query:{tab:type}})
      },
      touchstart(e){
        //console.log(e)
        let event = e || window.event
        console.log(`${event.touches[0].screenX}--${event.touches[0].screenY}`)
        this.screenX = event.touches[0].screenX
      },
      touchmove(e){
        let event = e || window.event
        console.log(`${event.touches[0].screenX}--${event.touches[0].screenY}`)
        if(event.touches[0].screenX < this.screenX){
          this.styleObj.left = `-${this.screenX - event.touches[0].screenX}px`
        }else{
          this.styleObj.left = `${this.screenX - event.touches[0].screenX}px`
        }
      },
      touchend(e){
        let event = e || window.event
        console.log(`${event.touches[0].screenX}--${event.touches[0].screenY}`)
        if((this.screenX - event.touches[0].screenX) > 80){

        }
      },
      getTopcs(){
        getTopcs(this.reqData)
          .then(res => {
            this.topcs = res
          })
          .catch(err => {
            console.log(err)
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
