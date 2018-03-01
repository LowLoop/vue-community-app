<template>
  <section class="content">
    <pull-drop-down :on-refresh="onRefresh" :on-infinite="onInfinite" :dataList="scrollData">
      <cell
        v-for="(item, index) in list"
        class="cell-list"
        :key="index"
        @click.native="toDetail(item.id)">
        <div class="title">{{item.title.length > 22 ? `${item.title.substr(0, 22)}...` : item.title}}</div>
        <badge v-if="item.top" type="success">置顶</badge>
        <badge v-else type="other">{{getTabText(item.tab)}}</badge>
        <div class="author">{{item.author.loginname}}</div>
      </cell>
    </pull-drop-down>
  </section>
</template>

<script>
  import { getTopics } from '@/api/api'
  import Cell from '@/components/cell'
  import Badge from '@/components/badge'
  import PullDropDown from '@/components/pullDropDown'
  import LScroll from '@/components/lScroll'

  export default {
    name: 'list',
    components:{
      Cell,
      Badge,
      PullDropDown,
      LScroll
    },
    data() {
      return {
        list:[],
        tabType:this.$route.query.tab,
        scrollData: {
          noFlag: false //暂无更多数据显示
        },
        reqData:{
          page:1,
          tab:this.tabType,
          limit:10,
          mdrender:true
        }
      }
    },
    watch:{
      $route(to, form){
        //console.log(to.path)
        this.tabType = this.$route.query.tab
        this.getList()
      }
    },
    mounted(){
      if(this.tabType && this.tabType !== 'null'){
        this.getList()
      }else{
        this.tabType = 'all'
        this.getList()
      }
    },
    methods:{
      getList(){
        /*let reqData = {
          page:1,
          tab:this.tabType,
          limit:10,
          mdrender:true
        }*/
        getTopics(this.reqData)
          .then(res => {
            if(this.list.length > 0){
              this.list = this.list.concat(res.data)
            }else{
              this.list = res.data
            }
          })
          .catch(err => {
            console.log(err)
          })
      },
      toDetail(id){
        this.$router.push({name:'topicDetail', query:{detailId:id}})
      },
      onRefresh(done) {
        this.getList();
        done(); // call done
      },
      onInfinite(done) {
        this.reqData.page++;
        this.getList()
        /*let end = this.pageEnd = this.num * this.reqData.page;
        let i = this.pageStart = this.pageEnd - this.num;

        let more = this.$el.querySelector('.load-more')
        for(i; i < end; i++) {
          if(i >= 30) {
            more.style.display = 'none'; //隐藏加载条
            //走完数据调用方法
            this.scrollData.noFlag = true;

            break;
          } else {
            this.listdata.push({
              date: "2017-06-1"+i,
              portfolio: "1.5195"+i,
              drop: i+"+.00 %" ,
              state: 2
            })
            more.style.display = 'none'; //隐藏加载条
          }
        }*/
        done();
      },
      getTabText(tab){
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
  .cell-list{
    color: black !important;
    font-size: 14px;
    border-bottom: 0.5px solid #ababab !important;
    line-height: 30px !important;
    height: auto !important;
  }
  .author{
    color: #ababab;
    font-size: 12px;
    max-width: 40%;
    line-height: 20px;
    padding-left: 2px;
  }
  .title{
    width: 100%;
    overflow: hidden;
  }
</style>
