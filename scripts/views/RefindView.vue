<template>
  <news-list :posts="posts"></news-list>
</template>

<script>
import NewsList from './../components/NewsList.vue'
import {fetchRefindPosts} from './../apis/refind-api'

export default {
  name: 'refind-view',
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
      fetchRefindPosts(this.loadPosts)
    },
    loadPosts (result) {
      this.posts = result
    }
  }
}
</script>
