import Vue from 'vue'
import Router from 'vue-router'
import Demo from '../page/demo'
import Detail from '../page/detail'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Demo',
            component: Demo
        },
        {
            path: '/detail',
            name: 'Detail',
            component: Detail
        }
    ]
})
