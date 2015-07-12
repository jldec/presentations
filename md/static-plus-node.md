# CDNs and node.js services

## CDNs and node.js services

## CDN: the de-facto best-practise way to deliver web content today

## Why CDN?
- performance at variable load
- protect against DOS and other attacks
- lowest cost to HTTPS

## dynamic OR static?
- no brainer for static content
- your server -> CDN -> users
  vs.
  storage svc like S3 -> CDN -> users
- don't operate servers unless you have to...
- (your spouse and kids will love you for it)

## Q: what about...
- sessions
- logins
- contact forms
- shopping carts
- payments
- live chat
- etc.

## CDNs are routers

![](/images/cloudfront-behaviors.png)

## E.g.
- /images/* -> s3 bucket
- /log/* -> session server
- one endpoint can be backed by many back end services
- use the right tools for the job


## Example - redis for session state

## redislabs
![](/images/redislabs.png)

## use client-side javascript to track clicks
- it works on static pages
- it works on single-page apps with client-side routers
- its async
- it can record more than just clicks
- it filters out bot traffic (mostly)
- it's what google uses

## session server stores each event
- using a redis key per session
- easy to manage expiration
- redis cleans up itself
- it's fast
- works with express-session
- wishlist: easy way to do encrypted storage in redis

## one (more) way to do analytics?
- perhaps not the best, but low cost and reasonably scalable
- aggregate session data by crunching the json dumps from redis backups
- as long as you backup before keys expire you won't lose any session
- e.g. backup every 24 hours, and expire redis keys after 48 hours
- doen't mean you have to allow 48 hour sessions (that's a separate knob)

## pub-server
- built-in session support
- uses memory or redis
- auto-mounts request logger at /server/log
- ACLs e.g. for managing CMS roles like READ and WRITE
- route authorization e.g. only admins can request /admin routes
- for more details see pub-server/server/serve-sessions.js

## pub-server
![](/images/session-json.png)
