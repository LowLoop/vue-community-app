<template>
  <section class="content">
    <div class="topic-title">
      {{detail.title}}
    </div>
    <div v-if="detail.id" class="topic-other-info">
      {{detail.author.loginname}}
    </div>
    <div class="topic-content" v-html="compiledMarkdown"></div>
  </section>
</template>

<script>
  import { getTopicsDetail } from '@/api/api'
  import marked from 'marked'

  export default {
    name: 'topicDetail',
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
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .topic-title{
    max-width: 100%;
    font-size: 18px;
    min-height: 18px;
    padding: 5px;
  }
  .topic-content{
    max-width: 100%;
    height: auto;
    font-size: 14px;
    padding: 10px;
  }
  .topic-other-info{
    padding-left: 5px;
    font-size: 12px;
    color: #ababab;
  }
</style>
