<template>
  <div class="header">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Header',
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
</style>
