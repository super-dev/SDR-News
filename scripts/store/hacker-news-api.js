import firebase from 'firebase'
import url from 'url'

var config = {
  databaseURL: "https://hacker-news.firebaseio.com/"
};

firebase.initializeApp(config);
var database = firebase.database();

export function fetchHackerNewsPosts() {
  var posts = [];
  var topStories = database.ref('v0/topstories').limitToFirst(50);
  topStories.once('value', function(snapshot) {
    snapshot.val().forEach(function(itemId) {
      var postItem = database.ref('v0/item/'+itemId);
      postItem.once('value', function(snapshot) {
        var post = snapshot.val();

        post.comments_url = "https://news.ycombinator.com/item?id=" + post.id;
        if(!post.url) { //self post
          post.url = post.comments_url;
        }
        post.domain = url.parse(post.url).hostname;
        post.num_comments = post.descendants;
        posts.push(post);
      });
    });
  });
  return posts;
}
