import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
import * as filters from './filters'

// register filters globally
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(require('vue-resource'));

Vue.use(VueRouter)

/* eslint-disable no-new */

 new Vue({
  el: '#app',
  render: (h) => h(App)
})
