<template>
<div>
    <input type="text" v-model="msg">
    <p>{{msg | myFilter}}</p>
</div>    
</template>
<script>
    export default{
        data(){
            return{
                msg:'Hello world'
            }
        },
        filters:{
            myFilter(val){
                let arr = [];
                let str = "";
                for(var i=0;i<(val.split(" ")).length;i++){
                    arr.push(val.split(" ")[i]);
                }
                for(let item of arr){
                    str+=item.charAt(0).toUpperCase()+item.substring(1)+" ";
                };
                return str.trim();
            }
        }

    }
</script>
