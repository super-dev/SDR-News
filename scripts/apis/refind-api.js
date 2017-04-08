import url from 'url'

var config = {
};


var refindPosts = null;

export function fetchRefindPosts(cb) {
  if(!refindPosts) {
    var posts = [];
    refindPosts = posts;
    cb(refindPosts);
  }
  else {
    cb(refindPosts);
  }  
}
