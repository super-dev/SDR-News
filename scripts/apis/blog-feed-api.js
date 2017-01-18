import axios from 'axios'

const BlogMap = {
  'graphic-flip': 'https://graphicflip.com/feed/',
  'smashing-magazine': 'https://www.smashingmagazine.com/feed/',
  'sdr': 'https://superdevresources.com/feed/',
  'template-flip' : 'https://templateflip.com/feed/',
  'awwwards': 'http://www.awwwards.com/blog/feed/',
  'webdesignerdepot': 'http://feeds2.feedburner.com/webdesignerdepot',
  'graphicdesignjunction': 'http://feeds.feedburner.com/GraphicDesignJunction',
  'designmodo': 'http://feeds.feedburner.com/designmodo',
  'designshack': 'http://feedpress.me/designshack',
  'creativebloq': 'http://www.creativebloq.com/feed',
  'alistapart': 'http://alistapart.com/main/feed',
  'spoongraphics': 'http://feeds2.feedburner.com/SpoonGraphics',
  'tutsplus-design': 'https://design.tutsplus.com/posts.rss',
  'onextrapixel': 'http://feeds2.feedburner.com/onextrapixel',
  'google-design': 'https://design.google.com/services/newsfeed/feed.rss',
  'line25': 'http://feeds2.feedburner.com/Line25',
  'tutsplus-code': 'https://code.tutsplus.com/posts.rss',
  'scotch': 'https://scotch.io/feed',
  'sitepoint': 'http://feeds.feedburner.com/SitepointFeed',
  'webappers': 'http://feeds.feedburner.com/Webappers',
  'codyhouse': 'http://feeds.feedburner.com/codyhouse/feeds',
  'tutorialzine': 'http://feeds.feedburner.com/Tutorialzine',
  'wordpress-tavern': 'http://feeds2.feedburner.com/WordpressTavern',
  'polyglot-dev': 'https://www.thepolyglotdeveloper.com/feed/',
  'david-walsh': 'https://davidwalsh.name/feed',
  'programmable-web': 'http://feeds.feedburner.com/ProgrammableWeb',
  'toptal': 'https://www.toptal.com/developers/blog.rss',
  'risingstack': 'https://blog.risingstack.com/rss/',
  'moz': 'http://feedpress.me/mozblog',
  'quick-sprout': 'http://feeds2.feedburner.com/quicksprout',
  'sez': 'http://feeds.feedburner.com/SearchEngineJournal',
  'socialmediaexaminer': 'http://www.socialmediaexaminer.com/feed/',
  'hubspot': 'http://blog.hubspot.com/marketing/rss.xml',
  'neil': 'http://neilpatel.com/feed/',
}

const IsAtom = {
  'moz': true,
  'google-webmaster': true,
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

  axios.get('https://kanishkkunal.stdlib.com/rss2json', {
      params: {
        url: BlogMap[id]
      }
    })
    .then(function (response) {
      var posts = []

      // console.log(JSON.stringify(response, null, 4))
      var items = response.data.items

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
  return isAsciiOnly(post.title) && post.title.indexOf("http://") < 0 && post.title.indexOf("https://") < 0 && post.title.indexOf("sponsor") < 0
}

function isAsciiOnly(str) {
  for (var i = 0; i < str.length; i++)
    if (str.charCodeAt(i) > 127)
      return false;
  return true;
}