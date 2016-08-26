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
                via <a href="https://reddit.com/{{ item.data.permalink }}" title="View this on Reddit">reddit</a> • {{ item.data.subreddit }} • {{ item.data.created_utc | epochToDate }}
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
	font-size: 22px;
    margin-top: -4px; 
	margin-bottom: 3px;
}

.entry-title:visited h2 {
	color: #999;
}

.entry-title .title-domain {
    font-size: 12.8px;
    font-weight: normal;
    color: #777;
}
</style>