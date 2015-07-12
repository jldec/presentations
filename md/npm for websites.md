# pub-config

## staticPaths
- point to images, css, js inside the module
- glob or single file
- served on a route
- some injectable, some not

## sources
- markdown
- templates
- e.g login page

## browserScripts
- client-side code which depends on npm modules
- auto-browserified
- served on a route

## serverPlugins
- injected into express (or other server)
- e.g. oauth routes

## generatorPlugins
- extend markdown renderer
- extend handlebars

## packages
- npm modules
- with a pub-config