import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Demo from '@/page/demo'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {
      path: '/',
      name: 'Demo',
      component: Demo
    }
    // , {
    //   path: '/demo',
    //   name: 'demo',
    //   component: Demo
    // }
  ]
})
