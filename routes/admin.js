var express = require('express');
var router = express.Router();
var api = require('../models/user');
var _ = require('lodash');
var utils = require('../config/utils');


router.get('/', utils.ensureAuthenticated , function(req, res) {
    api.getAllUser(function(err, results, fields) {
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

router.get('/error', function(req, res) {
    res.render('error');
});


module.exports = router;