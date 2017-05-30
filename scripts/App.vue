<template>
  <div class="container-wide">
    <div class="wrapper">      
      <div class="content">
        <div class="container-readable">
          <p class="entry-meta news-section-title">
            {{ title }}
          </p>
          <transition name="fade" mode="out-in">
            <router-view class="view" :key="$route.fullPath"></router-view>
          </transition>
        </div>
      </div>
      <div class="sidebar sidebar-left">
        <div class="menu-toggle">
          <input type="checkbox" id="source-toggle">
          <label class="alignright" for="source-toggle">
            <span class="css-icon-hamburger">
              <span>Toggle</span>
            </span>
            <span>Sources</span>
          </label>
          <div class="menu-toggle-content sidebar-content">
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
      <div class="sidebar sidebar-right">
        <div class="sidebar-content">
          <div style="background:rgba(0,0,0,0.01);width:300px;height:250px;margin-bottom:2em;border:1px solid #eee;">
            <a href="https://creativemarket.com/free-goods?u=monikaratan" target="_blank">
              <img src="/img/partners/creative-market-free-goods.jpg" width="300" height="250">
            </a>
          </div>
          <h3 class="h6 text-muted">Keyboard Shortcuts</h3>
          <p class="text-muted text-small">
            <ul class="bare">
              <li><kbd>&rarr;</kbd> Next news source</li>
              <li><kbd>&larr;</kbd> Previous news source</li>
              <li><kbd>b</kbd> Jump to blogs</li>
              <li><kbd>c</kbd> Jump to communities</li>
            </ul>
          </p>
        </div>
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
      },
      title: function() {
        if( this.$route.name != "Blog" ) {
          return this.$route.name
        }
        else {
          for(var i = 0; i < LinksMap.blogs.length; i++) {
           if(LinksMap.blogs[i].to === this.$route.params.blogID) {
             return LinksMap.blogs[i].title
           }
          }
          return "Blog"
        }
      }
    },
    created () {
      // Add keyboard event listener 
      window.addEventListener('keyup', this.keyup)

      //Preload blogs feed
      for(var i = 0; i < LinksMap.blogs.length; i++) {
        fetchBlogPosts(LinksMap.blogs[i].to, function() {})
      }
    },
    methods: {
      keyup: function(e) {
        var linkList = this.$route.name == "Blog" ? LinksMap.blogs : LinksMap.communities
        var total = linkList.length
        var current = -1

        for(var i = 0; i < total; i++) {
          if('/' + linkList[i].to === this.$route.path) {
            current = i;
          }
        }

        console.log(e)

        if(e.keyCode === 37) {
          current = current == 0 ? total - 1 : current - 1
          this.$router.push(linkList[current].to)
        }
        else if(e.keyCode === 39) {
          current = current == total - 1 ? 0 : current + 1
          this.$router.push(linkList[current].to)
        }
        else if(e.key === 'b') {
          this.$router.push(LinksMap.blogs[0].to)
        }
        else if(e.key === 'c') {
          this.$router.push(LinksMap.communities[0].to)
        }
      }
    }
}
</script>
