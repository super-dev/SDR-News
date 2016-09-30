<template>
<div class="media media-left">
    <a :href="url" :title="title" target="_blank" class="thumbnail thumbnail-small">
      <img :src="'https://www.google.com/s2/favicons?domain_url='+item.url"></img>
    </a>
    <div class="media-body">
        <h2 class="entry-title">
            <a :href="url" :title="title" target="_blank">
                {{ item.title  | unescape | truncate }}
            </a>
            <span class="title-domain">({{item.domain}})</span>
        </h2>
        <div class="entry-meta">
            <a class="category" v-if="item.category" :href="item.category_url" title="View subreddit" target="_blank">{{ item.category }}</a>
            <span class="dot" v-if="item.category">•</span>
            <a :href="item.comments_url" title="View comments on Reddit"
                target="_blank">{{ item.num_comments }} comments</a>
            <span class="dot">•</span>
            {{ item.time | timeAgo }} ago
        </div>
    </div>
</div>
</template>


<script>
import { unescape } from './../filters'

export default {
    name: 'Post',
    props: ['item'],
    computed: {
      url: function() {
        return unescape(this.item.url);
      },
      title: function() {
        return unescape(this.item.title);
      }
    }
}
</script>
