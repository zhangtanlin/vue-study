<template>
  <div class="users">
    <ul>
    	<!--
    		注意：子组件遍历的应该是父节点绑定的值
    		注意：给每个li添加点击事件，根据show属性控制显示
    	-->
    	<li v-for="(user,index) in appUser">
    		{{user.name}}的工作是{{user.job}}
    	</li>
    </ul>
    <button type="button" v-on:click="delAppUser">点击删除appUser</button>
  </div>
</template>

<script>
/**
 * 这个非常重要，
 * 利用props可以传值和传引用。
 * 传值包含：String，Number，Boolean；
 * 传引用包含：Array，Object。
 * 如果穿的是引用，对这个引用进行操作，会影响与这个引用相关的组件。
 */
export default {
  name: 'Users',
  /**
   * 使用props获取父组件传递过来的引用【值】。
   * props的值，可以是对象或者是数组，但是数组里面可以是字符串
   * 【但父组件传递的是字符串时，需要写在prop的数组里】。
   * Vue中的严格要求写法是：
   * props:{
   * 	appUser:{
   * 		type:Array,	//类型
   * 		require:true//必传
   * 	},
   * appUser2:{
   * 		type:Array,	//类型
   * 		require:true//必传
   * 	}
   * }
   */
  props:['appUser'],
  data () {
  	/**
  	 * 如果有data，写在组件里面了，就要返回一个数据
  	 * 【即使是空对象，不然会报错】
  	 */
  	return {}
  	
//  return {
//    users: [
//    	{name:'姓名1',job:'java',show:false},
//    	{name:'姓名2',job:'node',show:false},
//    	{name:'姓名3',job:'javascript',show:false},
//    	{name:'姓名4',job:'python',show:false},
//    ]
//  }
  },
  methods:{
  	/**
  	 * 添加删除(父组件传递过来的数据)的方法
  	 */
  	delAppUser:function(){
  		this.appUser.pop();//设置appUser出栈【功能实现删除appUser的最后面一条数据】
  	}
  }
}
</script>

<style scoped>
.users{width: 100%;max-width: 1200px;margin: 40px auto;box-sizing: border-box;}
ul{display: flex;flex-wrap: wrap;list-style-type: none;padding: 0;}
li{flex-grow: 1;flex-basis: 200px;text-align: center;padding: 15px;border: 1px solid #FF0000;}
</style>
