<template>

    <div class="post">
        <a :href="item.data.url" :style="item.data.thumbnail | setAsBackground" target="_blank" class="thumbnail"></a>

        <div class="details">
            <a :href="item.data.url" :title="item.data.title" target="_blank" class="title">
                {{ item.data.title | truncate }}
                
                <span class="title-domain">({{item.data.domain}})</span>
            </a>	
            
            <div class="meta">
                via <a href="https://reddit.com/{{ item.data.permalink }}" title="View this on Reddit">reddit</a> • {{ item.data.created_utc | epochToDate }}
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
.post{
	display: flex;
}

.post .thumbnail{
	display: block;
	flex: 0 0 60px;
	height: 60px;
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	border-radius: 4px;
	margin-right: 16px;
}

.post .details{
	display: flex;
	flex-direction: column;
}

.post .details .title{
	font-size: 22px;
    line-height: 1.4;
    margin-top: -4px; 
	margin-bottom: 3px;
    font-weight: bold;
	color: #444;
}

.post .details .title:visited{
	color: #999;
}


.post .details .title-domain {
    font-size: 12.8px;
    font-weight: normal;
    color: #777;
}

.post .details .meta{
	font-size: 12.5px;
	margin-right: 4px;
	display: inline-block;
	color: #aaa;
}

.post .details .meta a {
    color: #999;
    font-weight: normal;
    border-bottom: 1px dotted #eee;
}

.post .details .meta a:hover {
    color: #777;
    text-decoration: none;
    border-bottom: 1px dotted #eee;
}
</style>