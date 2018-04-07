<template>
  <div id="app">
    <Header/>
    <Users/>
    <Footer/>
  </div>
</template>

<script>
/**
 * 组件嵌套时，调用组件使用inport导入 
 */
import Header from './components/Header'
import Users from './components/Users'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
  	/**
  	 * 组件嵌套时，导入组件后还需要注册，注册方式可以是：
  	 * Header,Users,Footer在对象里用逗号分隔
  	 * 还可以是：
  	 * "header":Header,"users":Users,"footer":Footer
  	 * 其中使用第二种方式注册时，
  	 * 在调用组件时需要调用key而不是使用value作为元素调用。
  	 */
    Header,Users,Footer
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
