var express = require('express');
var router = express.Router();
var config = require('../config/settings');
var api = require('../models/password');
var utils = require('../config/utils');

// quiz page render
router.get('/', utils.ensureAuthenticated, function(req, res) {
    res.render('changePassword');
});

router.post('/updatePassword', function(req, res) {
    var values = req.body;
    values['mobile'] = res.locals.user;
    if (values.newPassword == values.repeatPassword) {
        api.updatePassword(values, function(error, success) {
            if (error) {
                req.flash('error_msg', config.authoring.passwordUpdateFailed);
            } else {
                req.flash('success_msg', config.authoring.passwordUpdated);
            }
            res.redirect('/');
        });
    } else {
        req.flash('error_msg', config.authoring.newPasswordDoesNotMatch);
        res.redirect('/changePassword');
    }
});

module.exports = router;