import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 根路径
      name: 'Home',
      component: Home
    }
  ]
})
