<template>

    <div class="article">
        <a :href="item.data.url" :style="item.data.thumbnail | setAsBackground" target="_blank" class="article-thumbnail"></a>

        <div class="details">
            <a :href="item.data.url" :title="item.data.title" target="_blank" class="entry-title">
                <h2>
                    {{ item.data.title | truncate }}                
                    <span class="title-domain">({{item.data.domain}})</span>
                </h2>
            </a>	
            
            <div class="entry-meta">
               <a class="category" href="https://www.reddit.com/r/{{ item.data.subreddit }}" title="View subreddit" target="_blank">{{ item.data.subreddit | uppercase }}</a> • <a href="https://www.reddit.com/{{ item.data.permalink }}" title="View comments on Reddit" target="_blank">{{ item.data.num_comments }} comments</a> •  {{ item.data.created_utc | epochToDate }} via reddit
            </div>
        </div>
    </div>
    
</template>


<script>

export default {
  name: 'Post',
  props: ['item']
}
</script>

<style scoped>
.article {
    display: flex;
}

.article-thumbnail {
	display: block;
	flex: 0 0 60px;
	height: 60px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 4px;
	margin-right: 16px;
}

.article-thumbnail:hover {
    border-bottom: 0;
}

.entry-title h2 {
	font-size: 24px;
    margin-top: -4px; 
	margin-bottom: 5px;
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
    font-size: 90%;
}

.entry-meta .category {    
    font-size: 90%;
    letter-spacing: 0.04em;
}

.entry-meta a:hover {
    border-bottom: 1px dotted;
}
</style>