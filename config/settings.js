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
        'contactFormErrorMsg': 'We couldn;t submit your request,Please try after sometime.',
        'quizAnswerError': 'Unable to submit your preference, Please try after sometime.',
        'quizAnswerSuccess': 'successfully Submitted your preference.',
        'alreadyAnswered': 'You have already answered todays question.',
        'newPasswordDoesNotMatch': 'Please Make sure your new password should match.',
        'oldPasswordDoesNotMatch': 'Old Password Does not Match',
        'passwordUpdated': 'Password Updated successfully !!!!',
        'passwordUpdateFailed': 'Password Update Failed, Please try after sometime.',
        'registrationSuccess':'Congratulation !! Your account is successfully created.',
        'genericError':'Please call customer care on  or try after sometime.',
        'noRecordFound':'No record found.',
        'systemError':'This feature is not available currently, Please try after sometime.',
        'resetPasswordSuccess':'Temporary password has been sent to your registered email id.',
        'invalidUserName':'Please enter correct user Name',
        'invalidEmail':'Please enter registered email id.Entered email does not match.',
        'resetMailError':'Unable to send temporary password on your mail. Please try after sometime.'
    },
    saltRounds: 10
};