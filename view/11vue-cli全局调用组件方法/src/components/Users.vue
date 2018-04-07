<template>
  <div class="users">
  	<ul>
  		<li v-for="(user,index) in users">{{user}}</li>
  	</ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  data () {
    return {
      users: ['姓名一','姓名二','姓名三','姓名四','姓名五']
    }
  }
}
</script>

<style scoped>
h1{
  font-weight: normal;
}
</style>
