<template>
  <section class="page">
    <l-header>
      <div style="width: 33.3%;text-align: left">
        <i
          v-if="isIndex"
          class="icon iconfont icon-gengduo"
          @click="showSidebar"
        ></i>
        <i
          v-if="!isIndex"
          class="icon iconfont icon-fanhui"
          @click="back"></i>
      </div>

      <div v-if="isIndex" style="width: 33.3%" @click="showTabList">
        {{titleText}}
        <i
          :class="headIconClass"></i>
      </div>
      <div v-else style="width: 33.3%">
        详情
      </div>

      <div style="width: 33.3%">

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
        <div v-if="showPop" class="item" v-for="item in tabList">
          <radio :item="item" @radioChange="radioChange">{{item.label}}</radio>
        </div>
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
  import { mapGetters } from 'vuex'

  export default {
    name: 'layout',
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
        headIconClass:'icon iconfont icon-jiantouarrow483',
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
      },
      ...mapGetters([
        'isIndex'
      ])
    },
    mounted(){
      let tab = this.$route.query.tab
      if(tab && tab !== 'null'){
        for (let i of this.tabList){
          if(i.value === tab){
            i.checked = true
          }
        }
      }else{
        this.tabList[0].checked = true
      }
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
        if(this.showPop){
          this.headIconClass = 'icon iconfont icon-jiantouarrow483'
        }else{
          this.headIconClass = 'icon iconfont head-arrow'
        }
        this.showPop = !this.showPop
      },
      radioChange(item){
        item.checked = !item.checked
        for (let i of this.tabList){
          if(i.value !== item.value){
            i.checked = false
          }
        }
        this.showTabList()
        this.$router.push({path:'/list',query:{tab:item.value}})
      },
      back(){
        this.$router.go(-1)
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
<style lang="scss" scoped>
</style>
