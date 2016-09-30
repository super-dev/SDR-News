<template>
<div class="media media-left">
    <a :href="url" :style="thumbnail" :title="title" target="_blank" class="thumbnail thumbnail-small"></a>
    <div class="media-body">
        <h2 class="entry-title">
            <a :href="url" :title="title" target="_blank">
                {{ item.title  | unescape | truncate }}
            </a>
            <span class="title-domain">({{item.domain}})</span>
        </h2>
        <div class="entry-meta">
            <a class="category" v-bind:href="'https://www.reddit.com/r/' + item.subreddit" title="View subreddit" target="_blank">{{ subreddit }}</a><span class="dot">•</span><a v-bind:href="'https://www.reddit.com/' + item.permalink" title="View comments on Reddit"
                target="_blank">{{ item.num_comments }} comments</a><span class="dot">•</span>{{ item.created_utc | timeAgo }} ago
        </div>
    </div>
</div>
</template>


<script>
import { unescape, setAsBackground } from './../filters'

export default {
    name: 'Post',
    props: ['item'],
    computed: {
      url: function() {
        return unescape(this.item.url);
      },
      title: function() {
        return unescape(this.item.title);
      },
      thumbnail: function() {
        return setAsBackground(this.item.thumbnail);
      },
      subreddit: function() {
        return this.item.subreddit.toUpperCase();
      }
    }
}
</script>
