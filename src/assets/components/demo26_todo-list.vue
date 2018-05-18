<template>
    <ul>
        <li v-for="(item,key) in msgList" :key="key">{{item}}<button :key="key" @click="handleDelete(key)">delete</button></li>
    </ul>
</template>
<script>
    export default{
        data(){
            return{
                msgList:[]
            }
        },
        created(){
            console.log(this.$root);
            this.$root.Bus.$on('recieveMsg',(msg)=>{
                this.msgList.push(msg)
            })
        },
        methods:{
            handleDelete(key){
                this.msgList.splice(key,1);
            }
        }

    }
</script>
