var opts = module.exports = {

  sources: [
    { path:'./md2', glob:'**/*.md', writable:true },
    { path:'./md', glob:'**/*.md', fragmentDelim:'md-headings', writable:true }
  ],

  staticPaths: [
    { path:'./images', route:'/images' },
    { path:'./static' },
    './.gitignore',
    './.nojekyll'
  ],

  pkgs: [
    'pub-theme-shower'
  ],

  outputs: [
    {
      path:'./docs',
      relPaths:true
    }
  ],

  injectCss: '/css/extra.css',
  noRobots: true,
  noEditor: true,
  jquery: false
}
