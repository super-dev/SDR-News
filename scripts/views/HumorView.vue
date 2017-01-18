<template>
  <news-list :posts="posts"></news-list>
</template>

<script>
import NewsList from './../components/NewsList.vue'
import {fetchHumorPosts} from './../apis/humor-api'

export default {
  name: 'prgrammer-humor-view',
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
      fetchHumorPosts(this.loadPosts)
    },
    loadPosts (result) {
      this.posts = result
    }
  }
}
</script>
