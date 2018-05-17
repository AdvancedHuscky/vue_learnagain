<template>
<div>
    <h1 :style="{opacity:opa}">this is an example of life-circle</h1>
    <button @click="handleClick">clear</button>
</div>
</template>
<script>
    export default{
        data(){
            return{
               opa:0,
               timer:null,
               isChange:true
            }
        },
        mounted(){
            this.timer = setInterval(()=>{
                this.opa+=0.1;
            },500)
        },
        updated(){
            this.opa=this.opa>1?0:this.opa;
        },
        methods:{
            handleClick(){
                if(this.isChange){
                    clearInterval(this.timer);
                    this.isChange = false;
                }else{
                    this.timer = setInterval(()=>{
                        this.opa+=0.1;
                    },500);
                    this.isChange = true;
                }
                
            }
        }
    }
</script>
<style>
    h1{
        color:brown
    }
</style>

