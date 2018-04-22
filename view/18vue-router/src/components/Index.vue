<template>
<div class="index">
    <ul>
        <li>
            <a href="/home">利用a标签跳转/home链接【会重载页面】</a>
        </li>
        <li>
            <router-link to="/home">利用router-link跳转/home链接【不会重载页面】</router-link>
        </li>
        <li>
            <router-link :to="{ name: 'Admin', params: {id:123465789} }">Admin跳转params带参数的链接</router-link>
        </li>
    </ul>
</div>
</template>

<script>
export default {
    name: 'Index',
    data() {
        return {
            msg: '首页'
        }
    }
}
</script>
