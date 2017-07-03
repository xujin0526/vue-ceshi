import Vue from 'vue'
import App from './App.vue'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import VueRouter from 'vue-router'
import routes from './router'
import flexible from './assets/js/flexible.js'
import bootstrap from './assets/bootstrap/css/bootstrap.min.css'
import $http from './config/axios.js'


Vue.prototype.$http = $http
Vue.use(VueRouter)
Vue.use(ElementUI)
Vue.use(bootstrap)
// Vue.use(flexible)

const router = new VueRouter({
	routes
})


var vm = new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
