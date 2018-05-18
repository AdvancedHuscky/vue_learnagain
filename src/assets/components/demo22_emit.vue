<template>
    <!--  -->
    <div>
        <p>hahaha</p>
        <button @click="handleClick">click emit</button>
    </div>
</template>
<script>
    export default{
        methods:{
            handleClick(){
                this.$emit('parentEvent','hello');
            },
        }
    }
</script>
