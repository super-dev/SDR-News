<template>
<div class="media media-left">
    <a :href="url" :style="thumbnail" :title="title" target="_blank" class="thumbnail thumbnail-small"></a>
    <div class="media-body">
        <h2 class="entry-title">
            <a :href="url" :title="title" target="_blank">
                {{ item.data.title  | unescape | truncate }}
            </a>
            <span class="title-domain">({{item.data.domain}})</span>
        </h2>
        <div class="entry-meta">
            <a class="category" v-bind:href="'https://www.reddit.com/r/' + item.data.subreddit" title="View subreddit" target="_blank">{{ subreddit }}</a><span class="dot">•</span><a v-bind:href="'https://www.reddit.com/' + item.data.permalink" title="View comments on Reddit"
                target="_blank">{{ item.data.num_comments }} comments</a><span class="dot">•</span>{{ item.data.created_utc | epochToDate }}
        </div>
    </div>
</div>
</template>


<script>
import { unescape, setAsBackground } from './../lib/filters'

export default {
    name: 'Post',
    props: ['item'],
    computed: {
      url: function() {
        return unescape(this.item.data.url);
      },
      title: function() {
        return unescape(this.item.data.title);
      },
      thumbnail: function() {
        return setAsBackground(this.item.data.thumbnail);
      },
      subreddit: function() {
        return this.item.data.subreddit.toUpperCase();
      }
    }
}
</script>
