(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
require("/Users/hello/pub/presentations/node_modules/pub-theme-shower-ribbon/plugins/generator-plugin.js")(generator);
},{"/Users/hello/pub/presentations/node_modules/pub-theme-shower-ribbon/plugins/generator-plugin.js":2}],2:[function(require,module,exports){
module.exports=function(e){var r=e.util,n=e.opts,t=n.sources,a=e.handlebars,s=e.renderer.image;e.on("pages-ready",function(){r.each(t,function(n){n._pkg||r.each(e.sourcePage$[n.name],function(e){r.each(e._fragments,function(e){e["background-image"]&&(e["class"]=(e["class"]||"")+" background-image"),0===r.trim(e._txt.replace(/^.*$/m,"")).length&&(e["class"]=(e["class"]||"")+" shout")});var n=e._fragments&&e._fragments[0];n&&/^\!\[/m.test(n._txt)&&(e._fragments[0]["class"]=(e._fragments[0]["class"]||"")+" cover")})})}),e.on("update-view",function(e,r,n,t,a){a.attr("data-render-html")||(t.$(".live-region").remove(),t.shower.slideList=[],t.shower.init(),t.shower.run())}),a.registerHelper("background-image",function(e){var r=this["background-image"];return r?s(r,"full=1",""):void 0}),a.registerHelper("menu",function(e){return this.menu||"="})};
},{}]},{},[1])

