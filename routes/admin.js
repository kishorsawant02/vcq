var express = require('express');
var router = express.Router();
var userApi = require('../models/user');


router.get('/', function(req, res){
	userApi.getAllUser(function (err, results, fields) {
        if (err) {
            req.flash('error_msg', err.message);
            res.redirect('/error');
        } else{
		    res.render('admin', {data : results});
        }
    });
});

router.get('/error', function(req, res){
	res.render('error');
});


module.exports = router;