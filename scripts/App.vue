<template>
  <div class="container-content section">
    <div class="grid grid-sidebar-left">
      
      <div class="one-half">
        <div class="menu-toggle">
          <input type="checkbox" id="source-toggle">
          <label class="alignright" for="source-toggle">
            <span class="css-icon-hamburger">
              <span>Toggle</span>
            </span>
            <span>Sources</span>
          </label>
          <div class="menu-toggle-content">
            <nav>
              <ul class="news-scoure-menu">
                <li class="menu-header">Communities</li>
                <li v-for="link in links.communities">
                  <router-link :to="link.to">
                    <svg :class="link.iconClass"><use v-bind:xlink:href=link.iconID></use></svg>
                    {{ link.title }}
                  </router-link>
                </li>
                <li class="menu-header">Blogs</li>
                <li v-for="link in links.blogs">
                  <router-link :to="link.to">
                    {{ link.title }}
                  </router-link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>

      <div class="one-half">
        <transition name="fade" mode="out-in">
          <router-view class="view" :key="$route.fullPath"></router-view>
        </transition>
      </div>
    </div>
  </div>
</template>


<script>
import LinksMap from './link-map'
import {fetchBlogPosts} from './apis/blog-feed-api'

export default {
    computed: {
      links: function() {
        return LinksMap
      }
    },
    created () {
      //Preload blogs feed
      for(var i = 0; i < LinksMap.blogs.length; i++) {
        fetchBlogPosts(LinksMap.blogs[i].to, function() {})
      }
    }
}
</script>
