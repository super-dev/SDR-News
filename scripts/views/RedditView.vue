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
      this.posts = store.getRedditPosts(this.$route.params.category)
    }
  }
}
</script>
