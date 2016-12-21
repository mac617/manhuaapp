// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import AwesomeSwiper from 'vue-awesome-swiper'
// import VueResource from 'vue-resource'
import routes from '../config/routes'
import api from '../config/api'
// import search from './assets/js/search.js'
Vue.prototype.$api = api
// const AwesomeSwiper = require('vue-awesome-swiper')
/* eslint-disable no-new */
Vue.use(AwesomeSwiper)
Vue.use(VueRouter)
// Vue.use(search)
const router = new VueRouter({
  // hashbang: false,
  // history: true,
  mode: 'history',
  routes
})
new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
