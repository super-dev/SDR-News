import {fetchRedditPosts} from './reddit-api'

var redditPosts = {};
var hackerNewsPosts = [];

class Store {
  getRedditPosts(category) {
    if(!redditPosts[category]) {
      redditPosts[category] = fetchRedditPosts(category);
    }

    return redditPosts[category];
  }
}


const store = new Store();

export default store;
