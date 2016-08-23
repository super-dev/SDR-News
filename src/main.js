import Vue from 'vue'
import App from './App'


import { truncate, setAsBackground } from './filters'
// register filters globally
Vue.filter('truncate', truncate)
Vue.filter('setAsBackground', setAsBackground)

Vue.use(require('vue-resource'));

/* eslint-disable no-new */
new Vue({
  el: 'body',
  components: { App }
})

