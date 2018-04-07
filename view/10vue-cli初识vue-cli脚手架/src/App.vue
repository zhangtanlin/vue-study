<!--
	作者：zhangtanlin90@126.com
	时间：2018-04-02
	描述：每一个模块里面都包含模板【template】、行为【script】、样式【style】。
				template节点不会被渲染到DOM里，
				template里面有且只有一个根标签，根节点有多少子节点不限制。
-->
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <HelloWorld/>
  </div>
</template>

<script>
	/**
	 * 导入组件HelloWorld，
	 * 注意导入组件后，一定要components【注册】一下。
	 */
import HelloWorld from './components/HelloWorld'

export default {
  name: 'App',
  components: {
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
