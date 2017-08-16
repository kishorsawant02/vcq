var express = require('express');
var router = express.Router();
var embed = require("embed-video");
var config = require('../config/settings');
var api = require('../models/question');
var moment = require('moment');
var utils = require('../config/utils');

// quiz page render
router.get('/', utils.ensureAuthenticated , function(req, res) {
	/*var youtubeUrl = "https://www.youtube.com/watch?v=CU1woo3MVgE";
	var question = 'Pick correct options from below after video';
	var options = ['options A','option B', 'option C', 'options D'];
	console.log('+++++req.user', req.user);
    res.render('quiz', {title :'Watch Video carefully', url:embed(youtubeUrl),options: options,question: question});
	*/
	//req.flash('success_msg', 'Loading ........');
	//res.render('loader');
	var user_id = res.locals.user;
	api.isQuestionAnswered(user_id, function (err, results, fields) {
		if (err || (results.length > 0)) {
			req.flash('error_msg', config.authoring.alreadyAnswered);
		    res.redirect('/');
		} else {
		    api.getQuestion(function (err, results, fields) {
		        if (err) {
		            req.flash('error_msg', err.message);
		            res.redirect('/error');
		        } else{
		        	results[0].url = embed(results[0].url);
		        	results[0].options = results[0].options.split(',');
		            /*var youtubeUrl = "https://www.youtube.com/watch?v=CU1woo3MVgE";
					var question = 'Pick correct options from below after video';
					var options = ['options A','option B', 'option C', 'options D'];*/
					console.log('+++++req.user', req.user);
				    res.render('quiz', {title :'Watch Video carefully', data: results[0]});
		        }
		    });
		}		
	});
});
router.post('/savePreferance', function(req, res) {
	// question date and question id would be same.
	var payload = {
		user_id : res.locals.user,
		user_ques_id: res.locals.user + moment().date(),
		ques_id : moment().date(),
		ques_date: moment().date(),
		ans_option : req.body.options.trim()
	};
    api.savePreference(payload, function (err, results, fields) {
        if (err) {
            req.flash('error_msg', config.authoring.quizAnswerError);
            res.redirect('/quiz');
        } else{
            req.flash('success_msg', config.authoring.quizAnswerSuccess);
            res.redirect('/');
        }
    });
});

module.exports = router;
