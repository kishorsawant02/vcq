var express = require('express');
var router = express.Router();
var userApi = require('../models/user');
var _ = require('lodash');


router.get('/', ensureAuthenticated , function(req, res) {
    userApi.getAllUser(function(err, results, fields) {
            if (err) {
                req.flash('error_msg', err.message);
                res.redirect('/error');
            } else {
                var data = {};
                _.each(results, function(item) {
                        if (data[item.mobile]) {
                        data[item.mobile]['ques_date'] = data[item.mobile]['ques_date'].concat(item.ques_date);
                        data[item.mobile]['ans_option'] = data[item.mobile]['ans_option'].concat(item.ques_date);
                    } else {
                        data[item.mobile] = {
                            mobile: item.mobile,
                            firstName: item.firstName,
                            ques_date:[],
                            ans_option:[]
                        }
                        data[item.mobile]['ques_date'].push(item.ques_date);
                        data[item.mobile]['ans_option'].push(item.ques_date);
                    }
                });
            res.render('admin', { data: data });
        }
    });
});
function ensureAuthenticated(req, res, next){
	console.log('req.user', req.user);
	if(req.isAuthenticated()){
		return next();
	} else {
		console.log('req.user', req.user);
		res.redirect('/user/login');
		console.log('req.user', req.user);
	}
}
router.get('/error', function(req, res) {
    res.render('error');
});


module.exports = router;