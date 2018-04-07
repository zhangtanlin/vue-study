<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
/**
 * 调用局部组件 
 */
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
  	/**
  	 * 一般的注册组件有两个方法：
  	 * 一个是直接调用导入的组件名【系统下面就是是用这种方式】，
  	 * 另一个是以对象的方式引入key:value【前面参数表示DOM节点名称，后面参数表示导入的组件名】
  	 * 注意：使用对象的方式注册组件时，第一个key参数不能和html的标签名冲突！
  	 * 注意：导入组件首字母一般大写，而注册组件的key首字母一般不大写。
  	 */
    HelloWorld
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
