<template>
    <div>
      <button @click="login">登陆</button>
      <router-link to="./detail">跳转页面</router-link>
    </div>
</template>

<script>
import chelunJSBridge from '../utils/JSBridge.js'

export default {
  methods: {
    login() {
      chelunJSBridge.invoke("app", "login", {
        loginCallBackName: res => {
          console.log("res...", res);
        }
      });
    }
  }
};
</script>

<style>
</style>
