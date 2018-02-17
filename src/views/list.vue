<template>
  <section class="content">
    <cell
      v-for="(item, index) in list"
      class="cell-list" :key="index">
      <div class="title">{{item.title.length > 22 ? `${item.title.substr(0, 22)}...` : item.title}}</div>
      <badge v-if="item.top" type="success">置顶</badge>
      <badge v-else>{{item.tab}}</badge>
      <div class="author">{{item.author.loginname}}</div>
    </cell>
  </section>
</template>

<script>
  import { getTopcs } from '@/api/api'
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
        tabType:null,
        list:[],
      }
    },
    mounted(){
      let tabType = this.$route.query.tab
      if(tabType && tabType !== 'null'){
        this.tabType = tabType
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
        getTopcs(reqData)
          .then(res => {
            this.list = res.data
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
