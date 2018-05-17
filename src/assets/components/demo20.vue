<template>
    <h1 :style="{opacity:opa}">this is an example of life-circle</h1>
</template>
<script>
    export default{
        data(){
            return{
               opa:0
            }
        },
        mounted(){
            let timer = setInterval(()=>{
                this.opa+=0.1;
            },500)
        },
        updated(){
            this.opa=this.opa>1?0:this.opa;
        }
    }
</script>
<style>
    h1{
        color:brown
    }
</style>

