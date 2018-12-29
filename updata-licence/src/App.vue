<template>
  <div id="app">
      <button @click="login">登陆</button>
  </div>
</template>

<script>
const chelunJSBridge = require('./utils/JSBridge.js')

export default {
  name: 'app',
  data () {
    return {

    }
  },
  methods: {
    login() {
      chelunJSBridge.invoke('app', 'login', {
        loginCallBackName: res=>{
          console.log('res...', res);
        }
      });
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

</style>
