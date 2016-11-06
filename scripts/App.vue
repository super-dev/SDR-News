<template>
  <div class="container-content">
    <div class="sdr-submenu container-readable section">
      <!--<a class="label label-ghost" href="#">All</a>-->
      <router-link to="reddit" class="button button-ghost button-reddit" active-class="button-primary">
        <svg class="icon icon-reddit-alien"><use xlink:href="#icon-reddit-alien"></use></svg>
        reddit
      </router-link>
      <router-link to="hacker-news" class="button button-ghost button-hacker-news" active-class="button-primary">
          <svg class="icon icon-hacker-news"><use xlink:href="#icon-hacker-news"></use></svg>
          Hacker News
      </router-link>
      <!--<a class="label label-ghost" href="#">Medium</a>
      <a class="label label-ghost" href="#">Product Hunt</a>
      <a class="label label-ghost" href="#">Blogs</a>
      <a class="label label-ghost" href="#">Curated</a>-->
    </div>
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
  </div>
</template>
