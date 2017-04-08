<template>
  <news-list :posts="posts"></news-list>
</template>

<script>
import NewsList from './../components/NewsList.vue'
import {fetchHackerNewsPosts} from './../apis/hacker-news-api'

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
  created() {
    this.fetchData();
  },
  methods: {
    fetchData () {
      this.posts = []
      fetchHackerNewsPosts(this.loadPosts)
    },
    loadPosts (result) {
      this.posts = result
    }
  }
}
</script>
