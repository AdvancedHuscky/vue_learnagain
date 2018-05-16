<template>
  <div id="app">
    <p>{{msg}}</p>
    <demo13></demo13>
  </div>
</template>

<script>
import demo04 from '../src/assets/components/demo04_if';
import demo08 from '../src/assets/components/demo08_event';
import demo09 from '../src/assets/components/demo09';
import demo10 from '../src/assets/components/demo10';
import demo11 from '../src/assets/components/demo11';
import demo12 from '../src/assets/components/demo12_class';
import demo13 from '../src/assets/components/demo13_model'
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{demo04,demo08,demo09,demo10,demo11,demo12,demo13}
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
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
