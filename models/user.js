//Assert to cehck required null undefined condition
var assert =  require('assert');
var utils = require('../config/utils');
var config = require('../config/settings');
var bcrypt = require('bcryptjs');

//Register user
var _createUser = function (user, callback) {
	bcrypt.hash(user.password, config.saltRounds, function (error, hash) {
		if (error) {
			callback(error);
		} else {
			user.password = hash;
			var data = getKeyValueArray(user);
			utils.getConnection(function (error, connection) {
		        if(error) {
		            callback(error);
		        } else {
		            var query = 'INSERT INTO user (`' + data.keys.join('`, `')+ '`) VALUES (\'' + data.values.join('\', \'') + '\');';
		            utils.operation(query, connection, callback);
		        }
		    });
		}
	});
};

//Update  user details
var _updateUser = function (user) {
	console.log(user);
};

//Delete particular user
var _deleteUser = function (user) {
	console.log(user);
};

// fetch logged-in user details
var _getUser = function (username, password, callback) {
	utils.getConnection(function (error, connection) {
        if(error) {
            callback(error);
        } else {
            var query = 'SELECT mobile, password FROM user WHERE mobile = \'' + username + '\';';
            utils.operation(query, connection, function (error, results, fields) {
            	if(error) {callback (error);}
            	var error = null;
            	switch(results.length) {
            		case 0: 
            			error = {message :config.authoring.userNameError };
            			callback(error, results, fields);
            			break;
            		case 1:
	            		bcrypt.compare(password, results[0].password).then(function(res) {
						    if (!res) {
						    	error = {message : config.authoring.passwordError};
						    }
						    callback(error, results, fields);
						});
						break;
            	}
            });
        }
    });
};

//get all user details for admin Panel
var _getAllUser = function (user) {
	console.log(user);
};

function getKeyValueArray(object) {
	var keys = [], values = [];
	for(var i in object) {
		keys.push(i);
		values.push(object[i]);
	}
	return {keys:keys,values: values};
};
module.exports = {
	'createUser' : _createUser,
	'updateUser' : _updateUser,
	'deleteUser' : _deleteUser,
	'getUser' : _getUser,
	'getAllUser' : _getAllUser
};