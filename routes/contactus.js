var express = require('express');
var router = express.Router();
var config = require('../config/settings');
var mail = require('../config/mail');

//contact us page
router.get('/', function(req, res) {
	console.log('req.user', req.user);
    res.render('contact');
});
router.post('/contactForm', function (req, res) {
	var mailPromise = mail.triggerMail(req.body, 'CONTACTUS');
	mailPromise.then(function () {
		req.flash('success_msg', config.authoring.contactFormSuccessMsg);
        res.redirect('/');
	}, function () {
		req.flash('error_msg', config.authoring.contactFormErrorMsg);
        res.redirect('/');
	});
});

function submitPreference() {
	console.log('ddd')
}

module.exports = router;
