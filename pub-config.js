var opts = module.exports = {

  sources: [
    { path:'./md', glob:'**/*.md', fragmentDelim:'md-headings', writable:true }
  ],

  staticPaths: [
    { path:'./images', route:'/images' },
    { path:'./static' }
  ],

  pkgs: [
    'pub-theme-shower-ribbon'
  ],

  injectCss: '/css/extra.css',
  noRobots: true
}
