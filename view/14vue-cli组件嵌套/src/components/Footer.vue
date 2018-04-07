<template>
  <div class="footer">
    <h1>{{ title }}</h1>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      title: '我是尾部'
    }
  }
}
</script>

<style scoped>
.footer{
  height:50px;line-height: 50px;background-color: #ccc;
}
</style>
