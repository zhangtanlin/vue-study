<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!--
	作者：zhangtanlin90@126.com
	时间：2018-04-07
	描述：在组建中的样式里面必须添加scoped属性，
				这样组件中的样式不会影响到别的组件的样式，
				h1[data-v-656039f0]{font-weight: normal;}
-->
<style scoped>
h1{
  font-weight: normal;
}
</style>
