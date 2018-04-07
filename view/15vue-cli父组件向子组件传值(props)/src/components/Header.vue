<template>
  <div class="header">
    <h1>{{ title }},<span>父组件传递过来的值是:{{testName}}</span></h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
  /**
   * 接受父组件传递过来的 一个值【接收的不是一个引用】
   */
  props:{
  	testName:{
  		type:String,
  		require:true	
  	}
  },
  data () {
    return {
      title: '我是头部'
    }
  }
}
</script>

<style scoped>
.header{
  height:50px;line-height: 50px;background-color: #ccc;
}
.header span{
  font-size: 12px;
}
</style>
