<template>
  <news-list :posts="posts"></news-list>
</template>

<script>
import NewsList from './../components/NewsList.vue'
import store from './../store'

export default {
  name: 'hacker-news-view',
  components: {
    NewsList
  },
  data () {
      return {
          posts: []
      }
  },
  beforeMount() {
    this.posts = store.getHackerNewsPosts();
  }
}
</script>
