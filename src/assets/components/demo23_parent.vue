<template>
<div>
    <child uname="Rose" @handle="rcvMsg"></child>
    <child uname="Jack" @handle="rcvMsg"></child>
    <ul>
        <li v-for="(item,key) in msgList" :key="key">{{item}}</li>
    </ul>
</div>

</template>
<script>
    import child from './demo23_child.vue';
    export default{
        data(){
            return{
                msgList:[]
            }
        },
        components:{child},
        methods:{
            rcvMsg(msg){
                this.msgList.push(msg);
            }
        }
    }
</script>
