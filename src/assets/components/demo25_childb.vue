<template>
<div>
    <h2>this is b</h2>
    <button @click="sendMsg">send to a</button>  
</div>

</template>
<script>
import Bus from './bus.js';
    export default{
        data(){
            return{
                msg:"haha from b"
            }
        },
        methods:{
            sendMsg(){
                
            }
        },
        created(){
            Bus.$on('rcvEventX1',function(msg){
                console.log('well recieved from a'+msg)
            })
        }
    }
</script>