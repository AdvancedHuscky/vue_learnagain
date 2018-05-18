<template>
<div>
    <child ref="child"></child>
    <button @click="handleClick">click</button>
</div>
    
</template>
<script>
import child from "./demo24_child";
    export default{
        data(){
            return{

            }
        },
        components:{
            child
        },
        methods:{
            handleClick(){
                console.log(this.$refs.child.uname)
            }
        }
    }
</script>