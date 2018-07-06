import Vue from 'vue'
import Router from 'vue-router'
// import home from '@/page/home'

const home = () => import ('@/pages/home');
const login = () => import('@/pages/login')
// lazyload
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home
    },
    {
      path: '/login',
      component: login,
      meta: {
        keepalive: true
      }
    }
  ]
})
