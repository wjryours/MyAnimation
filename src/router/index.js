import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const home =resolve => require(['@/view/home'],resolve)
const bounce =resolve => require(['@/view/bounce'],resolve)
const seekers =resolve => require(['@/view/seekers'],resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/bounce',
      name: 'bounce',
      component: bounce
    },
    {
      path:'/seekers',
      name:'seekers',
      component:seekers
    }
  ]
})
