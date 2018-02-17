import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      redirect:'list?tab=all',
      component:  resolve => {
        require(['@/views/index.vue'], resolve)
      },
      children:[
        {
          path: '/list',
          component: resolve => {
            require(['@/views/list.vue'], resolve)
          },
        }
      ]
    },
    {
      path: '/list',
      name: 'list',
      component:  resolve => {
        require(['@/views/list.vue'], resolve)
      }
    },
    {
      path: '/test',
      name: 'test',
      component:  resolve => {
        require(['@/views/test.vue'], resolve)
      }
    },
  ]
})
