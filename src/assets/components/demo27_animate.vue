<template>
<div>
    <button @click="show=!show">show or hide</button>
    <transition>
    <p v-if="show">{{msg}}</p>
    </transition>
    <button @click="show2=!show2">toggle2</button>
    <transition name="fade">
    <h2 v-if="show2">area for animate</h2>

    </transition>
    <button @click="show3=!show3">toggle3</button>
    <transition
        enter-active-class="animated flipInx"
        leave-active-class="animated zoomOut"
    >
        <h2 v-if="show3">hahahaha</h2>
    </transition>
</div>
    
</template>
<script>
    export default{
        data(){
            return{
                msg:"this is a demo for animate",
                show:true,
                show2:true,
                show3:true
            }
        }
    }
</script>
<style scoped>
@import '../../../animate.css';
    .v-enter,.v-leave{
        transform:translate(200px)
    }
    .v-enter-active,.v-leave-active{
        transition: all .5s
    }
    .fade-enter,.fade-leave-to{
        transform:translateY(200px)
    }
    .fade-enter-active,.fade-leave-active{
        transition: all .5s
    }
</style>
