<template>
<div>
    <h2>this is a</h2>
    <button @click="sendMsg">send to b</button>  
</div>

</template>
<script>
import Bus from './bus.js';
    export default{
        data(){
            return{
                msg:"haha from a"
            }
        },
        methods:{
            sendMsg(){
                //trigger event
                console.log("send");
                Bus.$emit('rcvEventX1',this.msg)
            }
        },
    }
</script>
