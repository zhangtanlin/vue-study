import Vue from 'vue'

//引入vue-router模块
import Router from 'vue-router'

//导入组件
import Index from '@/components/Index'
import Home from '@/components/Home'
import Admin from '@/components/Admin'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index
    },
    {
      path: '/home',
      name: 'Home',
      component: Home
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ],
  /**
   * mode属性为history时，http://localhost:8080/#/可以不用输入/#/
   */
  mode:'history'
})
