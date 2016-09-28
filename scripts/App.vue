<template>
  <header class="header">
    <div class="container">
      <div class="site-branding header-left">
        <img class="site-logo" src="./assets/logo.png">
      </div>
      <nav role="navigation">
        <ul class="menu">
          <li class="menu-item"><a href="https://superdevresources.com/">Articles</a></li>
          <li class="menu-item current-menu-item"><a href="/">News</a></li>
          <li class="menu-item"><a href="https://superdevresources.com/tools/">Tools </a></li>
          <li class="menu-item"><a href="https://superdevresources.com/directory/">Directory</a></li>
        </ul>
      </nav>
    </div>
  </header>
  <div class="sub-header text-center section-medium">
    <h1 class="h3">News for Web Developers</h1>
  </div>
  <div class="container-readable">
    <ul class="news-list">
        <li v-for="obj in posts | orderBy 'data.created_utc' -1">
            <post :item="obj"></post>
        </li>
    </ul>
  </div>
  <footer class="footer section text-center">
    <div class="container-content">
        To get a better understanding of how this boilerplate works, check out
        <a href="http://vuejs-templates.github.io/webpack" target="_blank">its documentation</a>.
    </div>
  </footer>
</template>

<script>

import Post from './components/Post'


export default {
  components: {
    Post
  },

  props: ['name'],


  data () {
      return { 
          posts: []
      }
  },

  created() {
    var subreddits = [
            'angular2',
            'browsers',
            'coding',
            'css',
            'devlist',
            'frontend',
            'html5',
            'javascript',
            'jquery',
            'node',
            'opensource',
            'php',
            'ProgrammerHumor',
            'ProWordPress',
            'python',
            'reactjs',
            'Sass',
            'vuejs',
            'web_design',
            'Web_Development',
            'web_programming',
            'webdev',
            'webgl',
            'websecurity',
            'Wordpress'
          ];

          var url_dict = [];

    for (var index = 0; index < subreddits.length; index++) {
      this.$http.get("https://www.reddit.com/r/"+ subreddits[index] +"/new.json?limit=20")
      .then(function(resp){
          for (var i = 0; i < resp.data.data.children.length; i++) {
            var item = resp.data.data.children[i];
            var add = true;

            //remove duplicate urls
            if(url_dict[item.data.url] == 1) {
              add = false;
            }

            //filter posts older than a week
            var days_old = Math.round((new Date() - (new Date(item.data.created_utc * 1000)))/(1000*60*60*24));

            if(days_old > 7) {
              add = false;
            }

            //filter posts that have not yet achieved a threshold score determined by magic
            if(item.data.is_self) {
              if(item.data.score < 10) { // tighter score requirements from self posts
                add = false;
              }
            }
            else if(item.data.score < 6 || item.data.ups < 3) {
                add = false;
            }

            if(add) {
              this.posts.push(item);
              //remember that we added this url
              url_dict[item.data.url] = 1;
            }
          }
      });
    }
  }
}
</script>

<style src="./../node_modules/mmcss/dist/mm.css"></style>

<style scoped>    
    .news-list {
        margin-top: 20px;
        list-style: none;
        padding-left: 0;
    }
    
    .news-list li {
        margin-bottom: 40px;
    }
</style>