<template>
    <ul>
        <button :disabled="currentPage == 1" @click="nextPage(-1)">last page</button>
        <li v-for="item of pageList" :key="item" ><button :class="{current:item==currentPage}" @click="onHandle(item)">{{item}}</button></li>
        <button @click="nextPage(1)" :disabled="currentPage == pageList.length">next page</button>
    </ul>
</template>
<script>
    export default{
       data(){
           return{
               pageList:[1,2,3,4,5],
               currentPage:1
           }
       },
       methods:{
           onHandle(item){
               this.currentPage = item;
           },
           nextPage(i){
               this.currentPage+=i;
           }
       } 
    }
</script>
<style>
    .current{
       background: #294fce;
    }
</style>
