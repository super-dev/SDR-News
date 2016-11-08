import axios from 'axios'

const subreddits = {
      'design': [
        'Design',
        'designinspire',
        'designthought',
        'designtools',
        'graphic_design',
        'idesignedthis',
        'learndesign',
        'learnwebdesign',
        'logodesign',
        'typography',
        'UI_Design',
        'UnsolicitedRedesigns',
        'userexperience',
        'web_design'],
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
        'Wordpress'],
      'marketing': [
        'AppBusiness',
        'bigseo',
        'content_marketing',
        'marketing',
        'Mobile_Marketing',
        'SEO',
        'socialmedia',
        'startups',
        'webmarketing'
      ]
};

var redditCache = {}

export function fetchRedditPosts(category, cb) {
  var url_dict = [];

  if(!redditCache[category]) {
    redditCache[category] = [];
    for (var index = 0; index < subreddits[category].length; index++) {
      var subreddit = subreddits[category][index]      
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
              redditCache[category].push(post);
              //remember that we added this url, to remove duplicates
              url_dict[post.url] = 1;
            }
          }
        })
        .catch(function (error) {
          console.log(error);
        })
      }
      cb(redditCache[category])
    }

  else {
    cb(redditCache[category])
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
