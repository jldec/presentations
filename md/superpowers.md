# superpowers

## five superpowers 
from node and javascript

## 1. http.createServer().listen()
- javascript on the server
- accessible async
- great for light, fast HTTP servers

## 2. npm install(x), require('x')
- catalyst for a new javascript ecosystem
- successfully sharing and re-using npm modules
- small versioned packages with dependencies
- simple file-based architecture just works
- easy to consume
- easy to publish

## 3. browserify
- require() for the browser
- uses AST magic to bundle recursively
- no package manifest to maintain
- includes just the code you actually need
- polyfills for node libs
- hooks for special cases

## 4. handlebars.registerHelper
- separates logic/code from HTML layout
- clean and simple 
- {{property}} injects context object.property
- {{helper}} calls function helper() -> returns something
- {{#blockHelper}} template {{#blockHelper}} calls function blockHelper()
- block helpers iterate over the included template

## 5. express
- the "batteries" for building websites with node.js
- with origins in REST and ruby DSLs
- sinatra: `get '/user/:id' do`
- express: `app.get('/user/:id', function (req, res, next)`
- extensible via middleware modules for sessions, compression etc

## pub-server config
- with pub-server a wider audience can enjoy these superpowers
- zero-conf express (batteries included)
- markdown based static site generator and CMS
- uses handlebars to generate HTML
- designs and layouts distributed via npm modules
