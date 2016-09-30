import {fetchRedditPosts} from './reddit-api'
import {fetchHackerNewsPosts} from './hacker-news-api'

var redditPosts = [];
var hackerNewsPosts = [];

class Store {
  getRedditPosts() {
    if(redditPosts.length == 0) {
      redditPosts = fetchRedditPosts();
    }

    return redditPosts;
  }

  getHackerNewsPosts() {
    if(hackerNewsPosts.length == 0) {
      hackerNewsPosts = fetchHackerNewsPosts();
    }

    return hackerNewsPosts;
  }
}


const store = new Store();

export default store;
