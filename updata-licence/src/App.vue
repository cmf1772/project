<template>
  <div id="app">
      <router-view/>

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


</style>
