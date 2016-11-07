import axios from 'axios'

const BlogMap = {
  'graphic-flip': 'https://graphicflip.com/feed/',
  'smashing-magazine': 'https://www.smashingmagazine.com/feed/',
  'sdr': 'https://superdevresources.com/feed/',
  'template-flip' : 'https://templateflip.com/feed/',
}

var blogCache = {}

export function fetchBlogPosts(id, cb) {

  if(blogCache[id]) {
    cb(blogCache[id])
    return
  }

  if(!BlogMap[id]) {
    console.log("No blog configured with id: " + id)
    return
  }
  
  var query = 'select * from rss where url="'

  query += BlogMap[id]
  query += '"'

  axios.get('https://query.yahooapis.com/v1/public/yql', {
      params: {
        q: query,
        format: 'json'
      }
    })
    .then(function (response) {
      var posts = []

      response.data.query.results.item.forEach( function(post) {
        if(shouldAdd(post)) {
          // console.log(JSON.stringify(post, null, 4))
          post.url = post.link
          post.time = Math.floor((new Date(post.pubDate)).getTime() / 1000)
          post.author = post.creator
          posts.push(post)
        }
      })
      blogCache[id] = posts
      cb(posts)
    })
    .catch(function (error) {
      console.log(error);
    });
}

function shouldAdd(post) {
  return isAsciiOnly(post.title) && post.title.indexOf("http://") < 0 && post.title.indexOf("https://") < 0
}

function isAsciiOnly(str) {
  for (var i = 0; i < str.length; i++)
    if (str.charCodeAt(i) > 127)
      return false;
  return true;
}