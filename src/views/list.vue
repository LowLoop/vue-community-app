<template>
  <section class="content">
    <cell
      v-for="(item, index) in list"
      class="cell-list" :key="index"
      @click.native="toDetail(item.id)">
      <div class="title">{{item.title.length > 22 ? `${item.title.substr(0, 22)}...` : item.title}}</div>
      <badge v-if="item.top" type="success">置顶</badge>
      <badge v-else type="other">{{getTabText(item.tab)}}</badge>
      <div class="author">{{item.author.loginname}}</div>
    </cell>
  </section>
</template>

<script>
  import { getTopics } from '@/api/api'
  import Cell from '@/components/cell'
  import Badge from '@/components/badge'
  export default {
    name: 'list',
    components:{
      Cell,
      Badge
    },
    data() {
      return {
        list:[],
        tabType:this.$route.query.tab
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
        let reqData = {
          page:1,
          tab:this.tabType,
          limit:10,
          mdrender:true
        }
        getTopics(reqData)
          .then(res => {
            this.list = res.data
          })
          .catch(err => {
            console.log(err)
          })
      },
      toDetail(id){
        this.$router.push({name:'topicDetail', query:{detailId:id}})
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
