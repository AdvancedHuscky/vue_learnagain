<template>
    <div>
        <h2>{{number}}</h2>
        <button @click="add">click me</button>
    </div>
</template>

<script>
    export default{
        name:'demo08',
        data(){
            return{
                number:1
            }
        },
        methods:{
            add(){
                this.number++;
            }
        }
    }
</script>