import axios from 'axios'
import url from 'url'

const Tags = {
  'design': [
    'design',
    'responsive-design',
    'ui-design',
    'user-experience',
    'ux',
    'ux-design',
    'web-design'
  ],
  'development': [
    'css',
    'html5',
    'javascript',
    'react',
    'nodejs',
    'front-end-development',
    'vuejs',
    'web-development'],
  'marketing': [
    'blogging',
    'marketing',
    'seo',
    'social-media',
    'startup',

  ]
}

var mediumCache = {}

export function fetchMediumPosts(category, cb) {

  if(mediumCache[category]) {
    cb(mediumCache[category])
    return
  }
  
  var query = 'select * from rss where url in ('

  for(var i = 0; i < Tags[category].length; i++) {
    query += ('"https://medium.com/feed/tag/' + Tags[category][i] + '"')
    if(i != Tags[category].length - 1) {
      query += ', '
    }
  }
  query += ')'

  axios.get('https://query.yahooapis.com/v1/public/yql', {
      params: {
        q: query,
        format: 'json'
      }
    })
    .then(function (response) {
      var posts = []      
      var url_dict = []

      response.data.query.results.item.forEach( function(post) {
        if(!url_dict[post.guid.content] && shouldAdd(post)) {
          console.log(JSON.stringify(post, null, 4))
          post.url = post.link
          post.domain = url.parse(post.link).hostname;
          post.time = Math.floor((new Date(post.pubDate)).getTime() / 1000)
          var categories = []
          if( typeof post.category === 'string' ) {
              // convert to array if it is not already
              post.category = [ post.category ];
          }
          post.category.forEach(function (tag) {
            console.log(tag)
            if(categories.length < 3 && shouldIncludeTag(Tags[category], tag)) {
              categories.push( { title: tag, url: "https://medium.com/tag/"+tag+"/latest"})
            }
          })
          post.categories = categories
          posts.push(post)
          url_dict[post.guid.content] = true
        }
      })
      mediumCache[category] = posts
      cb(posts)
    })
    .catch(function (error) {
      console.log(error);
    });
}

function shouldIncludeTag(list, tag) {
  for(var i = 0; i < list.length; i++) {
    if(list[i] === tag) return true
  }
  return false
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