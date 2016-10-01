import Vue from 'vue'
import App from './App.vue'
import * as filters from './filters'
import router from './router'

// register filters globally
// register global utility filters.
Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.use(require('vue-resource'));

//google analytics for page views
if(typeof ga !== 'undefined') {
  router.beforeEach(function (to, from, next) {
    ga('set', 'page', to.path);
    ga('send', 'pageview');
    next();
  });
}

/* eslint-disable no-new */
const app = new Vue({
  router,
  render: (h) => h(App)
}).$mount('#app')
