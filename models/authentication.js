//Mongo client for Operation
var mongo = require('mongodb').MongoClient;
//for mapping with mongo generated ID
var objectId = require('mongodb').ObjectID;
//Assert to cehck required null undefined condition
var assert =  require('assert');


var url = 'mongodb://localhost:27017/loginApp';

function getConnection (callback) {
	mongo.connect(url, function (err, db) {
		assert.equal(null, err);
		callback(db);
		db.close();
	});
};

function _getCurrentUser (callback) {
	console.log(user);
	getConnection(function (db){
			db.collection('user').insertOne(user, function (err, result) {
			callback(err, result);
		});
	});
}


module.exports = {
	'getCurrentUser' : _getCurrentUser
};