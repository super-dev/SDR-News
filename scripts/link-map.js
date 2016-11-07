const designLinks = {
  communities: [
    {to: 'reddit', iconClass: 'icon icon-reddit-alien', iconID: '#icon-reddit-alien', title: 'reddit'},
    {to: 'medium', iconClass: 'icon icon-medium', iconID: '#icon-medium', title: 'Medium'}
  ],
  blogs: [
    {to: 'smashing-magazine', title: 'Smashing Magazine'},
    {to: 'graphic-flip', title: 'GraphicFlip'},
    {to: 'sdr', title: 'Super Dev Resources'},
  ]
}

const developmentLinks = {
  communities: [
    {to: 'reddit', iconClass: 'icon icon-reddit-alien', iconID: '#icon-reddit-alien', title: 'reddit'},
    {to: 'medium', iconClass: 'icon icon-medium', iconID: '#icon-medium', title: 'Medium'},
    {to: 'hacker-news', iconClass: 'icon icon-hacker-news', iconID: '#icon-hacker-news', title: 'Hacker News'}
  ],
  blogs: [
    {to: 'smashing-magazine', title: 'Smashing Magazine'},
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