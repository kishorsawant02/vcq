var express = require('express');
var router = express.Router();
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var api = require('../models/user');
var password_api = require('../models/password');
var config = require('../config/settings');

//Login Page
router.get('/login', function(req, res) {
    res.render('login');
});

/*router.post('/login', function(req, res) {
     api.getUser(req.body, function (err, results, fields) {
        if (err) {
            req.flash('error_msg', err.message);
            res.redirect('/users/login');
        } else {
            req.flash('success_msg', 'Logged in successfully...........');
            res.redirect('/info/contact');
        }
    });
});*/

passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('username', +username);
    api.getUser(username, password, function (err, results, fields) {
        if (err) {
            return done(null, false, {message: err.message});
        } else {
            return done(null, username, {successMessage: ''});
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
    {successRedirect:'/', failureRedirect:'/user/login',failureFlash: true, successMessage: 'Logged in successfully...........'}),
  function(req, res) {
    res.redirect('/');
  });

//Logout Page
router.get('/logout', function(req, res) {
    req.logout();
    req.flash('success_msg', 'you have logged out successfully');
    res.redirect('/user/login');
});

router.post('/forgotPassword', function (req, res, next) {
  var payload = {
    email: req.body.email,
    mobile: req.body.mobile
  };
  password_api.resetPassword(payload, function (err, results, fields) {
        if (err) {
            req.flash('error_msg', err);
            res.redirect('/user/login');
        } else {
            req.flash('success_msg', config.authoring.resetPasswordSuccess);
            res.redirect('/user/login');
        }
    });
});

module.exports = router;
