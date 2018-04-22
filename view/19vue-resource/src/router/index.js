import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

/*导入vue-resource模块
因为这里使用了路由，所以把导入vue-resource的方法和注册写在路由的index.js里面*/
import vueResource from 'vue-resource'
//全局注册vue-resource模块
Vue.use(vueResource);

//路由可以写在main.js里面也可以写在App.vue里面
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    }
  ]
})
