<template>
  <div id="app">
  	<!--
  		这里有两个方法：
  		一个是父组件传递给子组件的值，
  		一个是父组件自定义的一个事件，传递给子组件。
  		注意：自定义事件方式是v-on:不是v-bind:。
  				   还要注意父组件绑定的事件里面有个形参$event。
  				  
  	-->
    <appHeader v-bind:testName="testName" v-on:changeName="updataName($event)"></appHeader>
    
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  data(){
  	return {
  		testName:'我传递的是一个值，可以是String，Number，Boolean'
  	}
  },
  components: {
    appHeader:Header
  },
  methods:{
  	/**
  	 * 子组件传递的值都包含在data里 
  	 */
  	updataName:function(data){
  		this.testName = data;
  	}
  }
}
</script>

<style>
#app {}
</style>
