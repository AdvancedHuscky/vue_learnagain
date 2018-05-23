<template>
    <div>
        <router-view></router-view>
    </div>
</template>
<script>
import login from './demorouterLogin'
import signin from './demorouterSignin'
import router from './demorouter.js'
    export default {
        components:{
            login,
            signin
        },
        router
    }
</script>
