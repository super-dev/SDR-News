<template>
<div class="media media-left">
    <a :href="url" :title="title" target="_blank" class="thumbnail thumbnail-small">
      <img :src="'https://www.google.com/s2/favicons?domain_url='+item.url"></img>
    </a>
    <div class="media-body">
        <h2 class="entry-title">
            <a :href="url" :title="title" target="_blank">{{ item.title  | unescape | truncate }}</a>
            <span class="title-domain" v-if="item.domain">({{item.domain}})</span>
        </h2>
        <div class="preview-image" v-if="item.previewImage">
          <img :src="item.previewImage"></img>        
        </div>
        <div class="entry-meta">
            <span v-for="category in item.categories">
              <a class="category" :href="category.url" target="_blank">{{ category.title }}</a>
            </span>
            <span class="dot" v-if="item.categories">•</span> 
            <span v-if="item.creator">
              by {{ item.creator }}
            </span>
            <span class="dot" v-if="item.creator">•</span>
            <a :href="item.comments_url" title="View comments"
                target="_blank" v-if="item.comments_url">{{ item.num_comments }} comments</a>
            <span class="dot" v-if="item.comments_url">•</span>
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
