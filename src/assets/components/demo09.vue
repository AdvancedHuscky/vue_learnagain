<template>
<div>
    <ul>
        <li v-for="tem in arr" :key="tem.key">{{tem.value}}</li>
    </ul>
    <button @click="add">add number</button>
</div>
    

</template>
<script>
    export default{
        name:"demo09",
        data(){
            return{
                arr:[
                    {key:1,value:101},
                    {key:2,value:99},
                    {key:3,value:88},
                    ]
            }
        },
        methods:{
            add(){
                let num = Math.ceil(Math.random()*100);
                let length = this.arr.length;
                console.log(length);
                
                this.arr.push({"key":length+1,"value":num});
            }
        }
    }
</script>