var mysql = require('mysql');
var config = require('./settings');

// set enviroment specific values
var pool = mysql.createPool({
	    connectionLimit: config.envConfig.connectionLimit,
	    host: config.envConfig.host,
	    user: config.envConfig.user,
	    port : config.envConfig.port,
	    waitForConnections: config.envConfig.waitForConnections,
	    password: config.envConfig.password,
	    database: config.envConfig.database
});

function _getConnection (callback) {
	pool.getConnection(function(err, connection) {
		callback(err,connection);
	});
}

function _operation (q, connection, callback) {
	connection.query(q, function (error, results, fields) {
    	connection.release();
		callback(error, results, fields)    	
	});
}
module.exports = {
	'getConnection' : _getConnection,
	'operation': _operation
};