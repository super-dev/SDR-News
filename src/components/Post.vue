<template>

    <div class="article">
        <a :href="item.data.url | unescape" :style="item.data.thumbnail | setAsBackground" :title="item.data.title | unescape" target="_blank" class="article-thumbnail"></a>
        <a :href="item.data.url | unescape" :title="item.data.title | unescape" target="_blank" class="entry-title">
            <h2>
                {{ item.data.title  | unescape | truncate }}                
                <span class="title-domain">({{item.data.domain}})</span>
            </h2>
        </a>	
            
        <div class="entry-meta">
            <a class="category" href="https://www.reddit.com/r/{{ item.data.subreddit }}" title="View subreddit" target="_blank">{{ item.data.subreddit | uppercase }}</a> • <a href="https://www.reddit.com/{{ item.data.permalink }}" title="View comments on Reddit" target="_blank">{{ item.data.num_comments }} comments</a> •  {{ item.data.created_utc | epochToDate }} via reddit
        </div>
    </div>
    
</template>


<script>

export default {
  name: 'Post',
  props: ['item']
}
</script>

<style>
.article {
    position: relative;
}

.article-thumbnail {
    position: absolute;
    background-color: #000;
    background-blend-mode: screen;
    padding: 6px;
    opacity: 0.8;
    left: 0;
    top: 4px;
	height: 60px;
    width: 60px;
    background-image: url('/static/img/default-icon.png');
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 4px;
}

.article-thumbnail:visited  {
    background-color: #999;
}

.article-thumbnail:hover {
    border-bottom: 0;
}

.entry-title h2 {
	font-size: 24px;
	margin-bottom: 8px;
	margin-left: 76px;
}

.entry-title:visited h2,
.entry-title:visited .entry-meta {
	color: #aaa;
}

.entry-title .title-domain {
    font-size: 12.8px;
    font-weight: normal;
    color: #777;
}

.entry-meta {
    font-weight: 300;
    font-size: 95%;
	margin-left: 76px;
}

.entry-meta .category {    
    font-size: 90%;
    font-weight: normal;
    letter-spacing: 0.04em;
}

.entry-meta a:hover {
    border-bottom: 1px dotted;
}
</style>