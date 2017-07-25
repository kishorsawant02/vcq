var express = require('express');
var router = express.Router();



// Get Homepage
router.get('/', function(req, res){
	res.render('index');
});

router.get('/error', function(req, res){
	res.render('error');
});


module.exports = router;