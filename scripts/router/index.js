import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import RedditView from '../views/RedditView.vue'
import HackerNewsView from '../views/HackerNewsView.vue'
import RefindView from '../views/RefindView.vue'
import HumorView from '../views/HumorView.vue'
import BlogFeedView from '../views/BlogFeedView.vue'

export default new Router({
  mode: 'history',
  scrollBehavior: () => ({ y: 0 }),
  routes: [
    { path: '/reddit', component: RedditView, name: 'reddit' },
    { path: '/hacker-news', component: HackerNewsView, name: 'Hacker News' },
    { path: '/refind', component: RefindView, name: 'Refind' },
    { path: '/humor', component: HumorView, name: 'Humor' },
    { path: '/:blogID', component: BlogFeedView, name: 'Blog' },
    { path: '*', redirect: '/reddit' }
  ]
})
