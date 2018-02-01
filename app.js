const http = require('http');
const https = require('https');
const Koa = require('koa');
var Router = require('koa-router');

const app = new Koa();
var router = new Router();

var index = require('./routes/index');
var users = require('./routes/users');


// Middleware 1
app.use(async (ctx, next) => {
  ctx.status = 200
  console.log('Middleware 1:Setting status');

  // Call the next middleware, wait for it to complete
  await next();
})

// Middleware 2
app.use(async (ctx) => {
  console.log('Middleware 2:');

  //ctx.body = 'Hello from Koa';
})


app
  .use(router.routes())
  .use(router.allowedMethods()
);

http.createServer(app.callback()).listen(3000, () => console.log('App listening on 3000'));
https.createServer(app.callback()).listen(3001, () => console.log('App listening on 3001'));