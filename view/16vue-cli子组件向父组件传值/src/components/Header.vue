<template>
  <div class="header">
    <h1>{{ testName }}</h1>
    <!--这里是通过绑定一个事件来触发子组件修改父组件的值得方式-->
    <button type="button" v-on:click="changeParentTestName">
    	点我传递子组件的值“子组件父组件传值”给父组件
    </button>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props:{
  	testName:{
  		type:String,
  		require:true	
  	}
  },
  data () {
    return {}
  },
  methods:{
  	/**
  	 * 子组件通过一个注册事件，调用$emit方法来修改父元素的值。
  	 * 这个$emit方法包含两个参数：
  	 * 第一个是父组件在调用子组件时，给子组件添加的一个自定义事件，用来改变父组件的值。
  	 * 第二个参数是子组件传递给父组件改变后的值。
  	 */
  	changeParentTestName:function(){
  		this.$emit('changeName','子组件父组件传值');
  	}
  }
}
</script>

<style scoped>
.header{
  height:50px;line-height: 50px;background-color: #ccc;
}
</style>
