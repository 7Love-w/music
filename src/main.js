<<<<<<< HEAD
import Vue from 'vue'
import App from './App'
import router from './router/index'
import store from './store/index'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import './assets/css/main.css'
import 'babel-polyfill'
import VCharts from 'v-charts'

Vue.use(ElementUI)
Vue.use(VCharts)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
=======
version https://git-lfs.github.com/spec/v1
oid sha256:7c28158c89d707a6d51b54d0e4c95a57d5b0a33c344e0ab1ff313b63306eee8b
size 437
>>>>>>> c3222162 (code)
