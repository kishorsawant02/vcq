module.exports = {
    'envConfig': {
        host: 'us-cdbr-iron-east-03.cleardb.net',
        connectionLimit : 10,
        port: '3306',
        user: 'bcdce0e20389fd',
        password: '976ccf7b',
        database: 'heroku_fb3d72849acbd1b',
        waitForConnections: true
    },
    'authoring': {
    	'passwordError' : 'Please enter correct password',
    	'userNameError' : 'Please enter correct Mobile Number'
    },
    'notification': {
        host: 'smtp.gmail.com',
        port: 465,
        secure: true, // secure:true for port 465, secure:false for port 587
        user: 'lendenonline@gmail.com',
        pass: 'abc123xyz'
    },
    saltRounds: 10
};
