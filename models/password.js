var assert = require('assert');
var utils = require('../config/utils');
var config = require('../config/settings');
var bcrypt = require('bcryptjs');
var mail = require('../config/mail');
const uuidv1 = require('uuid/v1');

var _resetPassword = function(payload, callback) {
    isUserExist(payload, function(error, results) {
        if (error) {
            callback(error, results);
        } else {
            utils.getConnection(function(error, connection) {
                if (error) {
                    callback(error);
                } else {
                    var randonPasskeys = uuidv1().substr(0,12);
                    payload['password'] = randonPasskeys;
                    var password = bcrypt.hashSync(randonPasskeys, config.saltRounds);
                    var query = 'Update user set password = \'' + password + '\' where mobile = \'' + payload.mobile + '\';';
                    utils.operation(query, connection, function(error, results, fields) {
                        if (error) {
                            callback(true, results, fields);
                        } else {
                            var mailPromise = mail.triggerMail(payload, 'FORGOTPASSWORD');
                            mailPromise.then(function() {
                                callback(error, results, fields);
                            }, function() {
                                callback(true, results, fields);
                            });
                        }
                    });
                }
            });
        }
    });
};

function isUserExist(payload, callback) {
    utils.getConnection(function(error, connection) {
        if (error) {
            callback(error);
        } else {
            var query = 'SELECT mobile, email, password FROM user WHERE mobile = \'' + payload.mobile + '\';';
            utils.operation(query, connection, function(error, results, fields) {
                if (error || (results.length == 0)) {
                    callback(true, results, fields);
                } else if (results[0].email == payload.email) {
                    callback(error, results, fields);
                } else {
                    callback(error, results, fields);
                }
            });
        }
    });
};

function _updatePassword(payload, callback) {
    isUserExist(payload, function(error, results) {
        if (error) {
            callback(error, results);
        } else {
            //check for old password
            if (bcrypt.compareSync(payload.oldPassword, results[0].password)) {
                utils.getConnection(function(error, connection) {
                    if (error) {
                        callback(error);
                    } else {
                        var password = bcrypt.hashSync(payload.newPassword, config.saltRounds);
                        var query = 'Update user set password = \'' + password + '\' where mobile = \'' + payload.mobile + '\';';
                        utils.operation(query, connection, function(error, results, fields) {
                            if (error) {
                                callback(true, results, fields);
                            } else {
                                callback(error, results, fields);
                            }
                        });
                    }
                });
            } else {
                //old password does not match
                callback(true, results);
            }
        }
    });
}

module.exports = {
    'resetPassword': _resetPassword,
    'updatePassword': _updatePassword
};