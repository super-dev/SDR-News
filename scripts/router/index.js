import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import RedditView from '../views/RedditView.vue'
import HackerNewsView from '../views/HackerNewsView.vue'
import HumorView from '../views/HumorView.vue'
import BlogFeedView from '../views/BlogFeedView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/reddit', component: RedditView },
    { path: '/hacker-news', component: HackerNewsView },
    { path: '/humor', component: HumorView },
    { path: '/:blogID', component: BlogFeedView },
    { path: '*', redirect: '/reddit' }
  ]
})
