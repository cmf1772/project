import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import BaseLayoute from '../layoute/baseLayoute'
import FillLayoute from '../layoute/fillLayoute'
import space from '../view/space'
import Container from '../layoute/container'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'space',
      component: space
    },
    {
      path: '/base',
      name: 'BaseLayoute',
      component: BaseLayoute
    },
    {
      path: '/con',
      name: 'Container',
      component: Container
    }
  ]
})
