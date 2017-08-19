//Assert to cehck required null undefined condition
var assert = require('assert');
var utils = require('../config/utils');
var config = require('../config/settings');
var moment = require('moment');

//particular Question
var _isQuestionAnswered = function(payload, callback) {
    var user_ques_id = payload + moment().date();
    utils.getConnection(function(error, connection) {
        if (error) {
            callback(error);
        } else {
            var query = 'SELECT * FROM user_ques WHERE user_ques_id =' + user_ques_id + ';';
            utils.operation(query, connection, function(error, results, fields) {
                callback(error, results, fields);
            });
        }
    });
};

//save Preferance 
var _savePreference = function(payload, callback) {
    utils.getConnection(function(error, connection) {
        if (error) {
            callback(error);
        } else {
            var data = utils.getKeyValueArray(payload);
            var query = 'INSERT INTO user_ques (`' + data.keys.join('`, `') + '`) VALUES (\'' + data.values.join('\', \'') + '\');';
            utils.operation(query, connection, function(error, results, fields) {
                callback(error, results, fields);
            });
        }
    });
};

// fetch logged-in Question details
var _getQuestion = function(callback) {
    var date = moment().date();
    utils.getConnection(function(error, connection) {
        if (error) {
            callback(error);
        } else {
            var query = 'SELECT * FROM question WHERE ques_date =' + date + ';';
            utils.operation(query, connection, function(error, results, fields) {
                if (error) {
                    callback(error);
                } else {
                    var error = null;
                    //in case question not present in db
                    switch (results.length) {
                        case 0:
                            error = { message: config.authoring.genericError };
                            break;
                    }
                    callback(error, results, fields);
                }
            });
        }
    });
};

//get all Question details for admin Panel
var _getAllQuestion = function(Question) {
    console.log(Question);
};

module.exports = {
    'isQuestionAnswered': _isQuestionAnswered,
    'getQuestion': _getQuestion,
    'getAllQuestion': _getAllQuestion,
    'savePreference': _savePreference
};