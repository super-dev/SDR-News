<template>
  <news-list :posts="posts"></news-list>
</template>

<script>
import NewsList from './../components/NewsList.vue'

export default {
  name: 'reddit-view',
  components: {
    NewsList
  },
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
