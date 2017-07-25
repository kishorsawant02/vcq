var express = require('express');
var router = express.Router();
var embed = require("embed-video");
var questionApi = require('../models/question');

router.get('/quiz',ensureAuthenticated , function(req, res) {
	/*var youtubeUrl = "https://www.youtube.com/watch?v=CU1woo3MVgE";
	var question = 'Pick correct options from below after video';
	var options = ['options A','option B', 'option C', 'options D'];
	console.log('+++++req.user', req.user);
    res.render('quiz', {title :'Watch Video carefully', url:embed(youtubeUrl),options: options,question: question});
	*/
	//req.flash('success_msg', 'Loading ........');
	//res.render('loader');
    questionApi.getQuestion(function (err, results, fields) {
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
});
router.get('/contact', function(req, res) {
	console.log('req.user', req.user);
    res.render('contact');
});
router.post('/contactForm', function () {
	console.log(JSON.stringify(res.body));
});

function submitPreference() {
	console.log('ddd')
}
function ensureAuthenticated(req, res, next){
	console.log('req.user', req.user);
	if(req.isAuthenticated()){
		return next();
	} else {
		console.log('req.user', req.user);
		res.redirect('/users/login');
		console.log('req.user', req.user);
	}
}
module.exports = router;
