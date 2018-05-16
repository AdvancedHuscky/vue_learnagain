<template>
    <div @click="divClick">
        <button @click.stop="buttonClick">click me</button>
        <br>
        <a href="www.tmooc.com" @click.prevent.stop="aturn">turn to</a>
    </div>
</template>
<script>
    export default{
        name:'demo10',
        data(){
            return {

            }
        },
        methods:{
            buttonClick:function(){
                console.log('btn clicked');
            },
            divClick:function(){
                console.log('div clicked');
            },
            aturn(){
                console.log('turn to ')
            }
        }
    }
</script>
<style scoped>
    div{
        background: #887733;
    }
</style>

