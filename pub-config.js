var opts = module.exports = {

  sources: [
    { path:'./md2', glob:'**/*.md', writable:true },
    { path:'./md', glob:'**/*.md', fragmentDelim:'md-headings', writable:true }
  ],

  staticPaths: [
    { path:'./images', route:'/images' },
    { path:'./static' }
  ],

  pkgs: [
    'pub-theme-shower-ribbon',
    'pub-pkg-highlight'
  ],

  injectCss: '/css/extra.css',
  noRobots: true
}
