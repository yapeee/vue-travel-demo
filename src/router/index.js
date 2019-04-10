import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import City from '@/pages/city/City'
import Detail from '@/pages/detail/Detail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', // 根路径
      name: 'Home',
      component: Home
    },
    {
      path: '/city',
      name: 'City',
      component: City
    },
    {
      path: '/detail/:id', // 动态路由，含有函数
      name: 'Detail',
      component: Detail
    }
  ],
  scrollBehavior (to, from, savedPosition) { // 页面回到最顶部
    return { x: 0, y: 0 }
  }
})
