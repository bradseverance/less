var express = require('express');
var router = express.Router();

var arrKitty = [];
var kittyPath = '/images/funny/cute/kitties/';

for (i = 1; i <= 6; i++) { 
  arrKitty.push(kittyPath + 'k' + i + '.jpg');
}

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { arrKitty: arrKitty });
});

module.exports = router;
