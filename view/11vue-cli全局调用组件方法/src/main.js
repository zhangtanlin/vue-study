// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/**
 * 全局注册组件
 * Vue.component('uesrs',Users)表示：
 * 当有元素调用单标签构成的<users/>
 * 或者调用双标签<users></users>时，
 * 都能够调用到components模块里的Users组件，
 * 因为是在main里面调用，所以无论在哪里都能够调用。
 */
import Users from './components/Users'
Vue.component('users',Users);

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>'
})
