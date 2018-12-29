<template>
  <div>
    <button @click="login">登陆</button>
  </div>
</template>

<script>
const chelunJSBridge = require('../utils/JSBridge.js')

export default {
  name: "HelloWorld",
  data() {
    return {};
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
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
