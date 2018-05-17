<template>
<div>
       <input type="text" v-model="gender">
       <p>{{gender | myGender("bottom")}}</p>
</div>
</template>
<script>
    export default{
        data(){
            return{
                gender:"",
            }
        },
        filters:{
            myGender(val,love){
                return val==1?(love=="bottom"?"top":"攻"):(love=="top"?"受":"bottom");
            }
        }
    }
</script>
