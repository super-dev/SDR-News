import {fetchRedditPosts} from './reddit-api'

var redditPosts = [];
class Store {
  getRedditPosts() {
    if(redditPosts.length == 0) {
      redditPosts = fetchRedditPosts();
    }
    
    return redditPosts;
  }
}

const store = new Store();

export default store;
