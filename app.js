var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var hbs = require('express-handlebars');
var expressValidator = require('express-validator');
var flash = require('connect-flash');

var session = require('express-session');
var passport = require('passport');

var LocalStrategy = require('passport-local').Strategy;

//Mongo configuration
//var mongo = require('mongodb');
//var mongoose = require('mongoose');
//mongoose.connect('mongodb://localhost/loginApp');
//var db = mongoose.connection;

var routes = require('./routes/index');
var users = require('./routes/users');
var info = require('./routes/info');

//init App
var app = express();

app.set('views', path.join(__dirname, 'views'));
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts/'}));
app.set('view engine', 'hbs');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());

app.use(express.static(path.join(__dirname, 'public')));

// Express  
app.use(session({
    secret: 'qwertyuiop',
    resave: true, //save sesssion on init n on change
    saveUninitialized: true  // create only when user is logged in
}));

// Passport init
app.use(passport.initialize());
app.use(passport.session());

// Connect Flash
app.use(flash());

// Global Vars
app.use(function (req, res, next) {
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user = req.user || null;
  next();
});
//router
app.use('/', routes);
app.use('/users', users);
app.use('/info', info);

//set port
app.set('port', (process.env.PORT) || 3000);

app.listen(app.get('port'), function () {
	console.log('Server is listing to ', app.get('port'));
});