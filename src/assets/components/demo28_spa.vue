<template>
    <div>
        <router-link to="/a"><p>turn to a</p></router-link>
        <router-link to="/b"><p>turn to b</p></router-link>
        <router-link to="/c"><p>turn to c</p></router-link>
        <router-view></router-view>
    </div>
</template>

<script>
import router from './demo28spa_router.js'
    export default{
        router
    }
</script>

<style scoped>
ul li{
    display: inline-block;
    border: 1px solid #edf;
    padding:3px;
}
routerLink{
    color:#edf;
    text-decoration: none;
}
</style>
