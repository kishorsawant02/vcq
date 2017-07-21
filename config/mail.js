var credential = require('./credential');
var nodemailer = require('nodemailer');
var emailTemplate = require('../notification/registerEmail');

/**
* credentialure sender mail
*/
function _getMailTransporter() {
    var transporter = nodemailer.createTransport({
        host: credential.email.host,
        port: credential.email.port,
        secure: credential.email.secure, // secure:true for port 465, secure:false for port 587
        auth: {
            user: credential.email.user,
            pass: credential.email.pass
        }
    });
    return transporter;
}
function _getMailOptions (user, subject, template) {
	var mailOptions = {
	    from: credential.email.user, // sender address
	    to: user.email, // list of receivers
	    subject: subject, // Subject line
	    html: template// html body
	};
	return mailOptions
}
function _getMailTemplate (user, type) {
    var template ;
    switch(type) {
        case 'REGISTRATION':
            template = emailTemplate.registrationEmailFormat(user)
        break;
    }
    return template;
}

function _getMailSubject (type) {
    var subject ;
    switch(type) {
        case 'REGISTRATION':
            subject = 'Registration Success!!!!'
        break;
    }
    return subject;
}

function _triggerMail(user, type) {
	var transporter = _getMailTransporter();
    var template = _getMailTemplate(user,type);
    var subject = _getMailSubject(type);
	var mailOptions = _getMailOptions(user, subject, template);
    return new Promise(function (resolve, reject) {
        transporter.sendMail(mailOptions, function (error, info) {
            if (info){ 
               console.log('Message %s sent: %s', info.messageId, info.response);
            }
            transporter.close();
            resolve(error || info);
        });
    });
}

module.exports = {
	'triggerMail': _triggerMail
};