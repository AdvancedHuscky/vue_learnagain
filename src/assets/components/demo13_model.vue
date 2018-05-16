<template>
<div>
    <p>{{bool}}</p>
    <input type="checkbox" v-model="bool">
    <button :disabled="!bool">click me</button>
</div>
 
</template>
<script>
export default{
    data(){
        return{
            bool:true
        }
    }
}
    
</script>