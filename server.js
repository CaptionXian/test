const koa = require('koa')
const path = require('path')
const static = require('koa-static')
const Router = require('koa-router')
const fs = require('fs')

const router = (module.exports = new Router())
const app = new koa()

app.use(static(path.join(__dirname, '/dist')))

router.get(['/*'], (ctx) => {
  ctx.type = 'html'
  ctx.body = fs.createReadStream(path.join(__dirname, '/dist/index.html'))
})

app.listen(8080, function(err) {
  if (err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:8080')
})
