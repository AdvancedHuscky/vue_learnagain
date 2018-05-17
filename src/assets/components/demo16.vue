<template>
    <div v-test="1">
        <input type="text" v-focus>
    </div>
</template>
<script>
    export default{
        data(){
            return{

            }
        },
        directives:{
            test:{
                bind:function(el,bindings){
                    console.log(bindings);
                }
            },
            focus:{
                bind(){
                    console.log("bind");
                },
                inserted(el){
                    console.log('inserted');
                    el.focus();
                }
            }
        }
    }
</script>
