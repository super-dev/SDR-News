import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import RedditView from '../views/RedditView.vue'
import MediumView from '../views/MediumView.vue'
import HackerNewsView from '../views/HackerNewsView.vue'
import BlogFeedView from '../views/BlogFeedView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/:category/reddit', component: RedditView },
    { path: '/:category/medium', component: MediumView },
    { path: '/:category/hacker-news', component: HackerNewsView },
    { path: '/:category/:blog', component: BlogFeedView },
    { path: '/:category', redirect: '/:category/reddit' },
    { path: '*', redirect: '/design/reddit' }
  ]
})
