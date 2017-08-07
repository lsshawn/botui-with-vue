<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view></router-view>
    <div class="botui-app-container" id="my-botui-app">
      <bot-ui></bot-ui>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BotUI from 'botui'

const botui = BotUI('my-botui-app', {
  vue: Vue // pass the dependency.
})

export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
