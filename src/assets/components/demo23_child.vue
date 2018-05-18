<template>
<div>
    <label>{{uname}}<input type="text" v-model="inputValue"></label>
    <button @click="sendMsg">send</button>
</div>
    
</template>
<script>
    export default{
        data(){
            return{
                inputValue:'',
            }
        },
        props:{
            uname:String
        },
        methods:{
            sendMsg(){
                this.$emit('handle',`${this.uname}: ${this.inputValue}`);
                this.inputValue = "";
            }
        }
    }
</script>
