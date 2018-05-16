<template>
    <div>
        <img :src="myUrl" alt="">
    </div>
</template>
<script>
    export default{
        data(){
            return{
                myUrl:'src/assets/logo.png',
            }
        }
    }
</script>
