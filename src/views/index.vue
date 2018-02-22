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

    <sidebar :showSidebar="isShowSidebar" @close="isShowSidebar = false"></sidebar>

    <!--<popup :isShow="showPop" @close="showPop = false">
      <ul>
        <li v-for="item in tabList">
          &lt;!&ndash;<input type="radio" class="l-radio">
          {{item}}&ndash;&gt;
          <radio :item="item" @radioChange="radioChange">{{item.label}}</radio>
        </li>
      </ul>
    </popup>-->

    <transition name="dropDown">
      <div class="drop-down" v-if="showPop">
        <ul v-if="showPop">
          <li v-for="item in tabList">
            <radio :item="item" @radioChange="radioChange">{{item.label}}</radio>
          </li>
        </ul>
      </div>
    </transition>

  </section>
</template>

<script>
  import LHeader from '@/components/LHeader'
  import Popup from '@/components/Popup'
  import List from './list.vue'
  import Sidebar from './sidebar.vue'
  import Radio from '@/components/Radio'
  export default {
    name: 'index',
    components:{
      LHeader,
      List,
      Sidebar,
      Popup,
      Radio
    },
    data() {
      return {
        tab:'',
        showPop:false,
        isShowSidebar:false,
        tabList:[
          {
            label:'全部',
            value:'all',
            checked:false
          },
          {
            label:'精华',
            value:'good',
            checked:false
          },
          {
            label:'weex',
            value:'weex',
            checked:false
          },
          {
            label:'分享',
            value:'share',
            checked:false
          },
          {
            label:'问答',
            value:'ask',
            checked:false
          },
          {
            label:'招聘',
            value:'job',
            checked:false
          }
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
      radioChange(item){
        item.checked = !item.checked
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
  .drop-down{
    width: 100%;
    max-height: 500px;
    background: pink;
    position: fixed;
    top: 60px;
    left: 0;
  }
  .dropDown-enter-active, .dropDown-leave-active {
    transition: max-height .3s;
  }

  .dropDown-enter, .dropDown-leave-to {
    max-height: 0;
  }
</style>
