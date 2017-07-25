//Assert to cehck required null undefined condition
var assert =  require('assert');
var utils = require('../config/utils');
var config = require('../config/settings');
var moment = require('moment');

//Register Question
var _createQuestion = function (Question, callback) {

};

//Update  Question details
var _updateQuestion = function (Question) {
	console.log(Question);
};

//Delete particular Question
var _deleteQuestion = function (Question) {
	console.log(Question);
};

// fetch logged-in Question details
var _getQuestion = function (callback) {
	var date = moment().date();
	utils.getConnection(function (error, connection) {
        if(error) {
            callback(error);
        } else {
            var query = 'SELECT * FROM question WHERE ques_date =' + date +';';
            utils.operation(query, connection, function (error, results, fields) {
            	if(error) {callback (error);}
            	var error = null;
            	switch(results.length) {
            		case 0: 
            			error = {message: config.authoring.submitted};
            			break;
            	}
            	callback(error, results, fields);
            });
        }
    });
};

//get all Question details for admin Panel
var _getAllQuestion = function (Question) {
	console.log(Question);
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
	'createQuestion' : _createQuestion,
	'updateQuestion' : _updateQuestion,
	'deleteQuestion' : _deleteQuestion,
	'getQuestion' : _getQuestion,
	'getAllQuestion' : _getAllQuestion
};