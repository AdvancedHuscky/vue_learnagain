<template>
    <div>
        <h2>待做事项列表</h2>
        <input type="text" v-model="msgItem"><button @click="handleClick">add</button>
    </div>
</template>
<script>
    export default{
        data(){
            return{
                msgItem:''
            }
        },
        methods:{
            handleClick(){
                this.$root.Bus.$emit('recieveMsg',this.msgItem);
                this.msgItem = "";
            }
        }
    }
</script>
