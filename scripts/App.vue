<template>
  <div class="container-content">
    <div class="sdr-submenu container-readable section">
      <router-link to="/design" class="button button-ghost" active-class="button-primary">
        <svg class="icon icon-brush"><use xlink:href="#icon-brush"></use></svg>
        Design
      </router-link>
      <router-link to="/development" class="button button-ghost" active-class="button-primary">
        <svg class="icon icon-code"><use xlink:href="#icon-code"></use></svg>
        Development
      </router-link>
      <router-link to="/marketing" class="button button-ghost" active-class="button-primary">
        <svg class="icon icon-bullhorn"><use xlink:href="#icon-bullhorn"></use></svg>
        Marketing
      </router-link>
    </div>
    <div class="grid grid-sidebar-left">
      <div class="one-half">
        <nav>
          <ul class="news-scoure-menu">
            <li v-for="link in links">
              <router-link :to="link.to" active-class="active">
                {{ link.title }}
                <svg :class="link.iconClass"><use v-bind:xlink:href=link.iconID></use></svg>
              </router-link>
            </li>
          </ul>
        </nav>
      </div>

      <div class="one-half">
        <transition name="fade" mode="out-in">
          <router-view class="view"></router-view>
        </transition>
      </div>
  </div>
</template>


<script>
import LinksMap from './link-map'
export default {
    computed: {
      links: function() {
        return LinksMap[this.$route.params.category]
      }
    }
}
</script>
