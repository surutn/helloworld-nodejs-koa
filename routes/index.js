var koa = require('koa');
var Router = require('koa-router');
var router = new Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  //res.render('index', { title: 'koa' });
});

module.exports = router;
