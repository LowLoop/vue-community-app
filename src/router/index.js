import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'sidebar',
      component:  resolve => {
        require(['@/views/sidebar.vue'], resolve)
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
