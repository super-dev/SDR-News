<template>
  <news-list :posts="posts"></news-list>
</template>

<script>
import NewsList from './../components/NewsList.vue'
import {fetchRedditPosts} from './../apis/reddit-api'

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
  created () {
    this.fetchData()
  },
  watch: {
    // call again the method if the route changes
    '$route': 'fetchData'
  },
  methods: {
    fetchData () {
      this.posts = []
      fetchRedditPosts(this.$route.params.category, this.loadPosts)
    },
    loadPosts (result) {
      this.posts = result
    }
  }
}
</script>
