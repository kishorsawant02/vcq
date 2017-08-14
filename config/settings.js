module.exports = {
    /*'envConfig': {
        host: 'us-cdbr-iron-east-03.cleardb.net',
        connectionLimit : 10,
        port: '3306',
        user: 'bcdce0e20389fd',
        password: '976ccf7b',
        database: 'heroku_fb3d72849acbd1b',
        waitForConnections: true
    },*/
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
    	'userNameError' : 'Please enter correct Mobile Number',
        'submitted': 'You have alredy answered todays question.<br /> Please come back tomorrow for next question.',
        'contactFormSuccessMsg': 'You Request submitted successfully, Our representative will get in touch.',
        'contactFormErrorMsg': 'We couldn;t submit your request,Please try after sometime.'
    },
    saltRounds: 10
};
