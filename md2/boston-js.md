---- /boston-js ----
name: BostonJS


---- #cover ----

![](/images/water.jpg)
# pub-server demo
BostonJS meetup - July 30, 2015


---- #overview ----

# pub-server

- Static site generator (like Jekyll) with editor.
- Content lives in **markdown** fragments.
- Designs live in **handlebars** templates and CSS.
- Extensible - **npm** modules for designs and plugins.
- 100% javascript, MIT license, github.com/jldec.


---- #generator ----

## Generator

```js
var generator = this;
generator.load = function load(cb) {
  require('./getsources')(function(err, fragments) {
    compilePages(pageFragments)
    compileTemplates(templateFragments)
    generator.emit('loaded')
    cb()
  })
}
```


---- #compile-templates ----

## compileTemplates

```js
function compileTemplates(templateFragments) {
  u.each(templateFragments, function(fragment) {
    var name = fragment._href.slice(1,-4)
    var template = fragment._txt
    generator.template$[name] = handlebars.compile(template)
  })
}
```


---- #layout-template ----

## Sample Layout Template

```html
<!DOCTYPE html>
<html>
<head>
  {{{injectCss}}}
</head>
<body>
  {{{renderPage}}}
  {{{injectJs}}}
</body>
</html>
```


---- #render-page ----

## renderPage block helper

```js
handlebars.registerHelper('renderPage', function() {
  var template = pageTemplate(this)
  return '<div data-render-page="' + esc(template) + '">' +
         generator.template$[templateName](this)
         '</div>';
});
```

---- #default-page-template ----

## Sample Page Template

```html
<div class="container">
  {{{html}}}

  {{#each _fragments}}
    <section>
      {{{html}}}
    </section>
  {{/each}}
</div>
```

---- #render-html ----

## html block helper

```js
hb.registerHelper('html', function() {
  return '<div data-render-html="' + esc(this._href) + '">' +
         renderMarkdown(this._txt) +
         '</div>'
});
```


---- #server ----

## Server

```js
generator.load(function() {
  require('watch-sources' )()
  require('express'       )()
  require('serve-sockets' )()
  require('serve-sessions')()
  require('serve-pages'   )()
  require('serve-scripts' )()
  require('serve-statics' )()
  require('handle-errors' )()
  server.http.listen(opts.port)
})
```


---- #editor ----

## Editor

```js
$.getJSON('/pub/_opts.json', function(opts) {
  var generator = require('pub-generator')(opts)
  generator.load(function(err) {
    var $edit = $('textarea.editor')
    $edit.on('keyup', function() {
      generator.updateFragmentText(
        editor.binding,
        $edit.val())
    })
  })
})
```


---- #instant-preview ----

## Instant Preview

```js
generator.on('updatedText', function(href) {
  var fragment = generator.fragment$[href]
  var $html = $('[data-render-html="' + href + '"]')
  $html.html(generator.renderHtml(fragment))
})

generator.on('nav', function(href) {
  updatePage()             // uses [data-render-page]
}
```
