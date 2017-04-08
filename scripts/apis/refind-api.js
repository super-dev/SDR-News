import url from 'url'
import axios from 'axios'

var topics = [
  'design',
  'ux',
  'programming',
  'bots',
  'seo',
  'mobile',
  'tech',
  'startups',
  'frontend',
  'javascript',
  'marketing'
];


var refindPosts = null;

export function fetchRefindPosts(cb) {
  if(!refindPosts) {
    var posts = [];
    for(var i = 0; i < topics.length; i++) {
      axios.get('https://api.superdevresources.com/rss2json', {
          params: {
            url: "https://refind.com/feed/"+ topics[i] +".rss"
          }
        })
        .then(function(response){
          // console.log(JSON.stringify(response, null, 4))
          var items = response.data.items
          // console.log(items)

          var category = response.data.title.split('–')[0]
          var category_url = response.data.link
          items.forEach( function(post) {
            if(shouldAdd(post)) {
              post.url = post.link
              post.pubDate = post.created
              post.time = Math.floor((new Date(post.pubDate)).getTime() / 1000)
              if(post.creator) {
                // string html tags
                var div = document.createElement("div")
                div.innerHTML = post.creator
                post.creator =  div.textContent || div.innerText || ""
                post.creator = post.creator.split(',')[0] // remove anything extra after the name
              }
              post.categories = [{ title: category, url: category_url}];
              post.domain = url.parse(post.url).hostname;
              posts.push(post)
            }
          })
        })
        .catch(function (error) {
          console.log(error);
        })
    }
    refindPosts = posts;
    cb(refindPosts);
  }
  else {
    cb(refindPosts);
  }  
}

function shouldAdd(post) {
  return isAsciiOnly(post.title) && post.title.indexOf("http://") < 0 && post.title.indexOf("https://") < 0 && post.title.indexOf("sponsor") < 0
}

function isAsciiOnly(str) {
  for (var i = 0; i < str.length; i++)
    if (str.charCodeAt(i) > 127)
      return false;
  return true;
}