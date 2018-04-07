<template>
  <div id="app">
  	<!--往子组件里面传递一个值(v-bind:testName="")-->
    <appHeader v-bind:testName="testName"></appHeader>
    
    <!--
    	作者：zhangtanlin90@126.com
    	时间：2018-04-07
    	描述：往子组件appUser的属性appUser里绑定users【注意用法】
    -->
    <appUsers v-bind:appUser="users"></appUsers>
    <appFooter></appFooter>
  </div>
</template>

<script>
import Header from './components/Header'
import Users from './components/Users'
import Footer from './components/Footer'

export default {
  name: 'App',
  data(){
  	/**
  	 * users为App父组件传递给子组件的值
  	 */
  	return {
  		/**
  		 * 传递的是一个数组【传引用】
  		 * 传引用会有关联【即删除这个引用，别的地方的引用也会被删除】
  		 */
  		users:[
  			{name:'张1',age:18,show:false},
  			{name:'张2',age:22,show:false},
  			{name:'张3',age:24,show:false},
  			{name:'张4',age:27,show:false},
  			{name:'张5',age:28,show:false}
  		],
  		/**
  		 * 传递的是一个值【传值】
  		 * 传值不会关联【即删除这个引用，别的地方的引用不会被删除】
  		 */
  		testName:'我传递的是一个值，可以是String，Number，Boolean'
  	}
  },
  components: {
    appHeader:Header,
    appUsers:Users,
    appFooter:Footer
  }
}
</script>

<style>
#app {}
</style>
