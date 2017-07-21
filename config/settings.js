module.exports = {
    'envConfig': {
        host: 'localhost',
        connectionLimit : 10,
        port: '3306',
        user: 'root',
        password: 'root',
        database: 'vcapp',
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
