<template>
<div class="hello">
    <ul>
        <!-- 循环请求的数据 -->
        <li v-for="(list,index) in lists">
            id是：{{ list.id }}，title是{{list.title}}
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            //定义装数据的盒子
            lists: []
        }
    },
    /**
     * vue-resource请求，一定要写在组件创建里面。
     * 一般写在：created里面，beforeCreat里面写的是等待数据加载的gif图标。
     * 注意vue-resource的使用方法，只有注册了才能使用$http方法。
     * 还有，这里因为使用了路由所以vue-resource的导入和注册写在路由的index.js里面，
     * 如果没有使用路由则写在main.js里面。
     * @return {[type]} [description]
     */
    created() {
        this.$http.get('http://jsonplaceholder.typicode.com/posts')
            .then((data) => {
                console.log(data);
                this.lists = data.body;
            })
    }
}
</script>
