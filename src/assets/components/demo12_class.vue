<template>
<div>
    <p :class="{font:bool}">my font</p>
    <button @click="tab">click me</button>
</div>
</template>
<script>
    export default{
        data(){
            return{
                bool:true
            }
        },
        methods:{
            tab(){
                this.bool=!this.bool;
            }
        }
    }
</script>
<style scoped>
.font{
    color:aqua;
}
</style>
