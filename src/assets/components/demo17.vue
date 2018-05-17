<template>
<div>
    <input type="text" v-model="msg">
    <p>{{msg | myFilter}}</p>
</div>
</template>
<script>
    export default{
        data(){
            return{
                msg:0
            }
        },
        filters:{
            myFilter(value){
                return "$"+value;
            }
        }
    }
</script>