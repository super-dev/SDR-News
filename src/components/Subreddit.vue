<template>
    <div class="subreddit">
        <h2>{{ name | uppercase }}</h2>

        <ul class="item-list">
            <li v-for="obj in posts | orderBy 'data.created_utc' -1">
                <post :item="obj"></post>
            </li>
        </ul>
    </div>
</template>

<script>
import Post from './Post'

export default {
    name: 'Subreddit',

    components: {
        Post
    },

    props: ['name'],

    data () {
        return { 
            posts: []
        }
    },

    created() {
        this.$http.get("https://www.reddit.com/r/"+ this.name +"/top.json?limit=5")
        .then(function(resp){
            this.posts = resp.data.data.children;
        });
    }
}
</script>

<style scoped>
    .subreddit {
        margin-top: 60px;
    }
    
    .subreddit h2 {
        font-size: 18px;
        margin-bottom: 10px;
    }
    
    .subreddit .item-list {
        border-top: 1px solid #eee;
        padding-top: 20px;
        list-style: none;
        padding-left: 0;
    }
    
    .subreddit .item-list li {
        margin-bottom: 32px;
    }
</style>