<template>
    <div>
        <h3>{{$store.state.count}}</h3>
        <button @click="$store.commit('add')">+</button>
        <button @click = "$store.commit('reduce')">-</button>
    </div>
</template>
<script>
    import store from '../vuex/store.js'
    export default{
        store
    }
</script>