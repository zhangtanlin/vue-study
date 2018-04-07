<template>
  <div class="users">
    <ul>
    	<li v-for="(user,index) in users">
    		{{user.name}}的工作是{{user.job}}
    	</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'users',
  /**
   * 所有的状态都在data里面，即使用函数表达式，返回值状态也在data里面 
   */
  data () {
    return {
      users: [
      	{name:'姓名1',job:'java',show:false},
      	{name:'姓名2',job:'node',show:false},
      	{name:'姓名3',job:'javascript',show:false},
      	{name:'姓名4',job:'python',show:false},
      ]
    }
  },
  methods:{}
}
</script>

<style scoped>
.users{width: 100%;max-width: 1200px;margin: 40px auto;box-sizing: border-box;}
ul{display: flex;flex-wrap: wrap;list-style-type: none;padding: 0;}
li{flex-grow: 1;flex-basis: 200px;text-align: center;padding: 15px;border: 1px solid #FF0000;}
</style>
