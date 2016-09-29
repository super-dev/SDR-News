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
    <div class="container-readable">
      <ul class="news-list">
          <li v-for="obj in orderedPosts">
              <post :item="obj"></post>
          </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Post from './components/Post.vue'
import {orderBy} from 'lodash/collection'

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

  computed: {
    orderedPosts: function () {
      return orderBy(this.posts, ['data.created_utc'], ['desc']);
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
            'reactjs',
            'Sass',
            'vuejs',
            'web_design',
            'Web_Development',
            'web_programming',
            'webdev',
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
