import {fetchRedditPosts} from './reddit-api'
import {fetchHackerNewsPosts} from './hacker-news-api'

var redditPosts = {};
var hackerNewsPosts = [];

class Store {
  getRedditPosts(category) {
    if(!redditPosts[category]) {
      redditPosts[category] = fetchRedditPosts(category);
    }

    return redditPosts[category];
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
