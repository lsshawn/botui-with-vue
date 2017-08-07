// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

// BotUI
import '../node_modules/botui/build/botui.min.css'
import '../node_modules/botui/build/botui-theme-default.css'
import '../node_modules/botui/build/botui.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
