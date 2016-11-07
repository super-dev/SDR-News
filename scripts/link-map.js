const designLinks = {
  communities: [
    {to: 'reddit', iconClass: 'icon icon-reddit-alien', iconID: '#icon-reddit-alien', title: 'reddit'},
    {to: 'medium', iconClass: 'icon icon-medium', iconID: '#icon-medium', title: 'Medium'}
  ],
  blogs: [
    {to: 'smashing-magazine', title: 'Smashing Magazine'},
    {to: 'webdesignerdepot', title: 'Webdesigner Depot'},
    {to: 'designmodo', title: 'Designmodo'},
    {to: 'graphicdesignjunction', title: 'Graphic Design Junction'},
    {to: 'designshack', title: 'Design Shack'},
    {to: 'speckyboy', title: 'Speckyboy Design Magazine'},
    {to: 'awwwards', title:'Awwwards'},
    {to: 'graphic-flip', title: 'GraphicFlip'}
  ]
}

const developmentLinks = {
  communities: [
    {to: 'reddit', iconClass: 'icon icon-reddit-alien', iconID: '#icon-reddit-alien', title: 'reddit'},
    {to: 'hacker-news', iconClass: 'icon icon-hacker-news', iconID: '#icon-hacker-news', title: 'Hacker News'},
    {to: 'medium', iconClass: 'icon icon-medium', iconID: '#icon-medium', title: 'Medium'}
  ],
  blogs: [
    {to: 'sdr', title: 'Super Dev Resources'},
    {to: 'template-flip', title: 'TemplateFlip'},]
}

const marketingLinks = {
  communities: [
    {to: 'reddit', iconClass: 'icon icon-reddit-alien', iconID: '#icon-reddit-alien', title: 'reddit'},
    {to: 'medium', iconClass: 'icon icon-medium', iconID: '#icon-medium', title: 'Medium'}
  ],
  blogs: []
}

const linkMap = {
  'design': designLinks,
  'development': developmentLinks,
  'marketing': marketingLinks
}

export default linkMap