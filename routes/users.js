var koa = require('koa');
var Router = require('koa-router');
var router = new Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
