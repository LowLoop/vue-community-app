<template>
  <section class="page">
    <l-header>
      <div style="width: 40%;text-align: left">
        <i
          class="icon iconfont icon-gengduo"
          @click="showSidebar"
        ></i>
      </div>
      <div @click="showTabList">
        {{titleText}}
        <i class="icon iconfont icon-jiantouarrow483"></i>
      </div>
    </l-header>

    <router-view></router-view>

    <sidebar :showSidebar="isShowSidebar"></sidebar>

    <popup :isShow="showPop" @close="showPop = false">
      <ul>
        <li v-for="item in tabList">
          <input type="radio" class="l-radio">
          {{item}}
        </li>
      </ul>
    </popup>

  </section>
</template>

<script>
  import LHeader from '@/components/LHeader'
  import Popup from '@/components/Popup'
  import List from './list.vue'
  import Sidebar from './sidebar.vue'
  export default {
    name: 'index',
    components:{
      LHeader,
      List,
      Sidebar,
      Popup
    },
    data() {
      return {
        tab:'',
        showPop:false,
        isShowSidebar:false,
        tabList:[
          '全部',
          '精华',
          'weex',
          '分享',
          '问答',
          '招聘'
        ]
      }
    },
    computed:{
      getTab(){
        let tab = this.$route.query.tab
        if(tab && tab !== 'null'){
          this.tab = tab
          return tab
        }else{
          this.tab = 'all'
          return 'all'
        }
      },
      titleText(){
        let tab = this.getTab
        let str = ''
        switch (tab){
          case 'all':
            str = '全部'
            break
          case 'good':
            str = '精华'
            break
          case 'weex':
            str = 'weex'
            break
          case 'share':
            str = '分享'
            break
          case 'ask':
            str = '问答'
            break
          case 'job':
            str = '招聘'
            break
          default:
            str = '未知'
            break
        }
        return str
      }
    },
    mounted(){
      /*let tab = this.$route.query.tab
      if(tab && tab !== 'null'){
        this.tab = tab
        this.getTitleText(tab)
      }*/
    },
    methods:{
      showSidebar(){
        this.isShowSidebar = true
      },
      showTabList(){
        this.showPop = true
      },
      getTitleText(tab){
        let str = ''
        switch (tab){
          case 'all':
            str = '全部'
            break
          case 'good':
            str = '精华'
            break
          case 'weex':
            str = 'weex'
            break
          case 'share':
            str = '分享'
            break
          case 'ask':
            str = '问答'
            break
          case 'job':
            str = '招聘'
            break
          default:
            str = '未知'
            break
        }
        return str
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
