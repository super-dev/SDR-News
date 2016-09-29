<template>
  <div>
    <div class="news-source container-readable section">
      <!--<a class="label label-ghost" href="#">All</a>-->
      <router-link to="reddit" class="button button-ghost" active-class="button-primary">reddit</router-link>
      <router-link to="hacker-news" class="button button-ghost" active-class="button-primary">Hacker News</router-link>
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
