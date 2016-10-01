<template>
  <div class="container-readable">
    <p v-if="!orderedPosts || orderedPosts < 1">Loading...</p>
    <ul class="news-list">
        <li v-for="obj in orderedPosts">
            <post :item="obj"></post>
        </li>
    </ul>
  </div>
</template>

<script>
import Post from './Post.vue'
import {orderBy} from 'lodash/collection'

export default {
  name: 'news-list',
  components: {
    Post
  },
  props: ['posts'],
  computed: {
    orderedPosts: function () {
      return orderBy(this.posts, ['time'], ['desc']);
    }
  },
}
</script>
