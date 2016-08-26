<template>
  <header class="site-header">
    <div class="container-full">
      <img class="site-logo header-left" src="./assets/logo.png">
      <h1 class="site-title"> News</h1>
    </div>
  </header>
  <div class="site-sub-header section-medium">
    <h1 class="h2">News for Web Developers</h1>
  </div>
  <div class="container-readable">
    <Subreddit name="web_design"></Subreddit>
    <Subreddit name="webdev"></Subreddit>
    <Subreddit name="frontend"></Subreddit>
    <Subreddit name="css"></Subreddit>
    <Subreddit name="programmerhumor"></Subreddit>
    <Subreddit name="javascript"></Subreddit>
  </div>
  <footer class="site-footer section text-center">
    <div class="container-content">
        To get a better understanding of how this boilerplate works, check out
        <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
    </div>
  </footer>
</template>

<script>
import Subreddit from './components/Subreddit'


export default {
  components: {
    Subreddit
  }
}
</script>

<style src="./styles/mm.css"></style>
