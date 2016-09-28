import Vue from 'vue'
import App from './App.vue'

import { truncate, setAsBackground, epochToDate, unescape } from './lib/filters'

// register filters globally
Vue.filter('truncate', truncate)
Vue.filter('setAsBackground', setAsBackground)
Vue.filter('epochToDate', epochToDate)
Vue.filter('unescape', unescape)

Vue.use(require('vue-resource'));

/* eslint-disable no-new */

 new Vue({
  el: '#app',  
  render: (h) => h(App)
})
