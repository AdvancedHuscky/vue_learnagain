<template>
<div>
    <input type="number" v-model="num1"><br>
    <input type="number" v-model="num2"><br>
    <button @click="add">add</button>
    <p>{{result}}</p>
</div>
</template>
<script>
    export default{
        data(){
            return{
                result:0,
                num1:0,
                num2:0
            }
        },
        methods:{
            add(){
                this.result = Number(this.num1)+Number(this.num2)
            }
        }
    }
</script>