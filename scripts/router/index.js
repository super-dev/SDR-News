import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import RedditView from '../views/RedditView.vue'
import HackerNewsView from '../views/HackerNewsView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/design/reddit', component: RedditView },
    { path: '/development/reddit', component: RedditView },
    { path: '/marketing/reddit', component: RedditView },
    { path: '/development/hacker-news', component: HackerNewsView },
    { path: '/design', redirect: '/design/reddit' },
    { path: '/development', redirect: '/development/reddit' },
    { path: '/marketing', redirect: '/marketing/reddit' },
    { path: '*', redirect: '/design/reddit' }
  ]
})
