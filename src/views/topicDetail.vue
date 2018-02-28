<template>
  <section class="content">
    <div class="topic topic-title">
      {{detail.title}}
    </div>
    <div v-if="detail.id" class="topic topic-other-info">
      {{detail.author.loginname}}
    </div>
    <div class="topic topic-content" v-html="compiledMarkdown"></div>

    <div class="topic-replies">
      <div class="replies-head">评论:</div>
      <cell
        style="color: black;border-bottom: 1px solid #ababab;"
        v-for="(item, index) in detail.replies"
        :key="index">
        <div class="replies-author name">{{item.author.loginname}}</div>
        <div class="replies-author time">{{item.create_at | fmtDate}}</div>
        <div class="replies-content">{{item.content}}</div>
      </cell>
    </div>

  </section>
</template>

<script>
  import { getTopicsDetail } from '@/api/api'
  import { formatDate } from '@/utils/dateUtils'
  import marked from 'marked'
  import Cell from '@/components/cell'

  export default {
    name: 'topicDetail',
    components:{
      Cell
    },
    data() {
      return {
        detail:{}
      }
    },
    computed:{
      compiledMarkdown () {
        if(this.detail.id){
          return marked(this.detail.content, { sanitize: true })
        }else{
          return ''
        }
      }
    },
    async created(){
      await this.getDetail()
    },
    methods:{
      getDetail(){
        let reqData = {
          id:this.$route.query.detailId,
          mdrender:false
        }
        getTopicsDetail(reqData)
          .then(res => {
            this.detail = res.data
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    filters: {
      fmtDate(time) {
        var date = new Date(time);
        return formatDate(date, "yyyy-MM-dd hh:mm");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .topic{
    background: #D5D5D5;
    &.topic-title{
      max-width: 100%;
      font-size: 18px;
      min-height: 18px;
      padding: 5px;
    }
    &.topic-content{
      max-width: 100%;
      height: auto;
      font-size: 14px;
      padding: 10px;
    }
    &.topic-other-info{
      padding-left: 5px;
      font-size: 12px;
      color: #ababab;
    }
  }
  .topic-replies{
    max-width: 100%;
    height: auto;
  }
  .replies-author{
    width: 50%;
    height: 14px;
    font-size: 12px;
    color: #ababab;
    &.name{
      text-align: left;
    }
    &.time{
      text-align: right;
    }
  }
  .replies-content{
    width: 100%;
    height: auto;
    font-size: 14px;
    color: #454545;
  }
  .replies-head{
    color: #454545;
    margin-bottom: 10px;
    border-bottom: 1px solid #000;
  }
</style>
