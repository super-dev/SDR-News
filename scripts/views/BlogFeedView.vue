<template>
  <news-list :posts="posts"></news-list>
</template>

<script>
import NewsList from './../components/NewsList.vue'
import {fetchBlogPosts} from './../apis/blog-feed-api'

export default {
  name: 'blog-feed-view',
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
      fetchBlogPosts(this.$route.params.blogID, this.loadPosts)
    },
    loadPosts (result) {
      this.posts = result
    }
  }
}
</script>
