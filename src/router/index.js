import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const home =resolve => require(['@/view/home'],resolve)
export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    }
  ]
})
