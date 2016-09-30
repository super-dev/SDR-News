<template>
  <news-list :posts="posts"></news-list>
</template>

<script>
import NewsList from './../components/NewsList.vue'
import store from './../store'

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

  beforeMount() {
    this.posts = store.getRedditPosts();
  }
}
</script>
