<template>
  <div id="app">
    <p>{{msg}}</p>
    <demorouter></demorouter>
  </div>
</template>

<script>
import Vue from 'vue';
const Bus = new Vue();
import demo04 from '../src/assets/components/demo04_if';
import demo08 from '../src/assets/components/demo08_event';
import demo09 from '../src/assets/components/demo09';
import demo10 from '../src/assets/components/demo10';
import demo11 from '../src/assets/components/demo11';
import demo12 from '../src/assets/components/demo12_class';
import demo13 from '../src/assets/components/demo13_model';
import demo14 from '../src/assets/components/demo14';
import demo15 from '../src/assets/components/demo15';
import demo16 from '../src/assets/components/demo16';
import demo17 from '../src/assets/components/demo17';
import demo18 from '../src/assets/components/demo18';
import demo19 from '../src/assets/components/demo19';
import demo20 from '../src/assets/components/demo20';
import demo21 from '../src/assets/components/demo21';
import demo22 from '../src/assets/components/demo22_emit';
import demo23 from '../src/assets/components/demo23_parent';
import demo24 from '../src/assets/components/demo24_parent';
import demo25 from '../src/assets/components/demo25_parent';
import demo26 from '../src/assets/components/demo26_todo';
import demo27 from '../src/assets/components/demo27_animate'
import demo28 from '../src/assets/components/demo28_spa';
import demo29 from '../src/assets/components/demo29vuex'
import demorouter from '../src/assets/components2/demorouterMain'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
    }
  },
  components:{demo04,demo08,demo09,demo10,demo11,demo12,demo13,demo14,demo15,demo16,demo17,demo18,demo19,demo20,demo21,demo22,demo23,demo24,demo25,demo26,demo27,demo28,demo29,demorouter},
  methods:{
    rcvMsg(msg){
      console.log(msg);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
