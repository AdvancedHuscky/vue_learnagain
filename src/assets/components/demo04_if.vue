<template>
    <div>
        <h2 v-if="seen">{{msg}}</h2>
    </div>
</template>
<script>
    export default{
        name:'demo04',
        data(){
            return {
                msg: 'hello word',
                seen: true
            }
            
        }
    }
</script>
