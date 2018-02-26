import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      redirect:'/list',
      component:  resolve => {
        require(['@/views/layout.vue'], resolve)
      },
      children:[
        {
          path: '/list',
          name:'list',
          component: resolve => {
            require(['@/views/list.vue'], resolve)
          },
        },
        {
          path: '/topicDetail',
          name:'topicDetail',
          component: resolve => {
            require(['@/views/topicDetail.vue'], resolve)
          },
        }
      ]
    },
    /*{
      path: '/list',
      name: 'list',
      component:  resolve => {
        require(['@/views/list.vue'], resolve)
      }
    },*/
    {
      path: '/test',
      name: 'test',
      component:  resolve => {
        require(['@/views/test.vue'], resolve)
      }
    },
  ]
})
