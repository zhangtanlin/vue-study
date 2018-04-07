<template>
  <div id="app">
		<!--描述：调用全局组件方法一【单标签】-->
    <users/>
    
		<!--描述：调用全剧组建方法二【双标签】-->
		<users></users>
		
  </div>
</template>

<script>
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
