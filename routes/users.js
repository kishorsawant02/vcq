var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var userApi = require('../models/user');
var mail = require('../config/mail');
var sms = require('../config/sms');
//Registration page
router.get('/register', function(req, res) {
    res.render('register');
});

//Login Page
router.get('/login', function(req, res) {
    res.render('login');
});

/*router.post('/login', function(req, res) {
     userApi.getUser(req.body, function (err, results, fields) {
        if (err) {
            req.flash('error_msg', err.message);
            res.redirect('/users/login');
        } else {
            req.flash('success_msg', 'Logged in successfully...........');
            res.redirect('/info/contact');
        }
    });
});*/


router.post('/register', function(req, res) {
    userApi.createUser(req.body, function (err, results, fields) {
        if (err) {
            req.flash('error_msg', err.message);
            res.redirect('/users/register');
        } else{
            const user = req.body.mobile;
            req.login(user, function (err) {
                var mailPromise = mail.triggerMail(req.body, 'REGISTRATION');
                var smsPromise = sms.sendSMS(req.body, 'REGISTRATION');
                Promise.all([mailPromise, smsPromise]).then(function(){
                    req.flash('success_msg', 'You are registered and can now login');
                    res.redirect('/');
                });
            });
        }
    });
});

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('username', +username);
    userApi.getUser(username, password, function (err, results, fields) {
        if (err) {
            return done(null, false, {message: 'Unknown User'});
        } else {
            return done(null, username, {message: 'Logged in successfully...........'});
        }
    });
    
  }
));

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(user, done) {
    done(null, user);
});

router.post('/login',
  passport.authenticate('local', 
    {successRedirect:'/', failureRedirect:'/users/login',failureFlash: true}),
  function(req, res) {
    res.redirect('/');
  });

//Logout Page
router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success_msg', 'you have logged out successfully');
    res.redirect('/users/login');
});

module.exports = router;
