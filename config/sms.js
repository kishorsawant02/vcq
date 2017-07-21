var credential = require('./credential');
var twilio = require('twilio');

function getSMSClient() {
    var smsClient = twilio(credential.sms.sid, credential.sms.token);
    return smsClient;
}

function _messageContent(user, type) {
    var messageOption = {
        to: '+918275540195', //user.mobile
        from: credential.sms.phoneNo,
        body: _getMessage(user,type)
    }
    return messageOption;
}

function _getMessage (user,type) {
    var content ;
    switch(type) {
        case 'REGISTRATION':
            content = 'Hi' +user.firstName+', Welcome VqA app, Enjoy quiz contest...';
        break;
    }
    return content;
}

function _sendMessage(user, type) {
    var client = getSMSClient();
    var messageContent = _messageContent(user, type);
    return new Promise(function (resolve, reject) {
        client.messages.create(messageContent, function(err, data) {
            if (err) {
                console.log('err --> ', +err);
            } else {
                console.log('Data --> ', +data);
            }
            resolve('true');
        });
    });
}

module.exports = {
    'sendSMS': _sendMessage
};
