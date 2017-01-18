import axios from 'axios'

const subreddits = {
      'development': [
        'angular2',
        'browsers',
        'coding',
        'css',
        'frontend',
        'html5',
        'javascript',
        'jquery',
        'node',
        'opensource',
        'php',
        'ProgrammerHumor',
        'ProWordPress',
        'reactjs',
        'Sass',
        'vuejs',
        'Web_Development',
        'web_programming',
        'webdev',
        'websecurity',
        'Wordpress']
};


var redditCache = []

export function fetchRedditPosts(cb) {
  var url_dict = [];

  if(redditCache.length == 0) {
    for (var index = 0; index < subreddits['development'].length; index++) {
      var subreddit = subreddits['development'][index]      
      axios.get("https://www.reddit.com/r/"+ subreddit +"/new.json?limit=20")
        .then(function(resp){
          for (var i = 0; i < resp.data.data.children.length; i++) {
            var post = resp.data.data.children[i].data;


            if(url_dict[post.url] != 1 && shouldAdd(post)) {
              post.time = post.created_utc;
              post.categories = [{ title: post.subreddit, url: 'https://www.reddit.com/r/' + post.subreddit}];
              post.comments_url = 'https://www.reddit.com/' + post.permalink;
              /*var thumbnail = post.thumbnail;
              if(!thumbnail || thumbnail=='self' || thumbnail =='nsfw' || thumbnail == 'default' ) {
                post.thumbnail = "";
                post.default_icon = "icon-reddit-alien";
              }*/ //disabled all thumbnails until we find a better way to display them
              
              // console.log(post)
              redditCache.push(post);
              //remember that we added this url, to remove duplicates
              url_dict[post.url] = 1;
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        })
      }
      cb(redditCache)
    }

  else {
    cb(redditCache)
  }
}

function shouldAdd(post) {
  var add = true;

  //filter posts older than a week
  var days_old = Math.round((new Date() - (new Date(post.created_utc * 1000)))/(1000*60*60*24));

  if(days_old > 7) {
    add = false;
  }

  //filter posts that have not yet achieved a threshold score determined by magic
  if(post.is_self) {
    if(post.score < 10) { // tighter score requirements from self posts
      add = false;
    }
  }
  else if(post.score < 6 || post.ups < 3) {
      add = false;
  }

  return add;
}
