var _registrationEmailFormat = function (user) {
    var registrationEmailTemplate = ''+
        '    <body>'+   
            '    <div>'+
                '    <div>'+
                    '    <div>'+
                        '    <center>'+
                            '    <table border="1" width="694" cellspacing="0" cellpadding="30">'+
                                '    <tbody>'+
                                    '    <tr>'+
                                        '    <td>'+
                                            '    <table cellspacing="0" cellpadding="0">'+
                                                '    <tbody>'+
                                                    '    <tr>'+
                                                        '    <td>'+
                                                            '    <table style="height: 58px;width:100%;"  cellspacing="0" cellpadding="0">'+
                                                                '    <tbody>'+
                                                                    '    <tr>'+
                                                                        '    <td style="background-color: #5bc5a7; color: white;">'+
                                                                            '    <h1 style="text-align: center;">'+
                                                                            '    <strong>'+
                                                                                     'VBQ'+
                                                                            '    </strong>'+
                                                                        '    </h1>'+
                                                                        '    </td>'+
                                                                    '    </tr>'+
                                                                '    </tbody>'+
                                                            '    </table>'+
                                                        '    </td>'+
                                                    '    </tr>'+
                                                    '    <tr>'+
                                                        '    <td>'+
                                                            '    <table style="background-color: white;border-left: 2px solid black;padding: 10px;border-right: 2px solid black;border-top: 1px solid black;" width="650">'+
                                                                '    <tbody>'+
                                                                    '    <tr>'+
                                                                        '    <td style="font-family:Trebuchet MS;font-size:14px;color:#666666;text-align:left;line-height:30px">'+
                                                                               'Dear&nbsp;' + user.firstName +
                                                                        '    </td>'+
                                                                    '    </tr>'+
                                                                    '    <tr>'+
                                                                        '    <td width="100%" height="10" style="font-size:1px;line-height:1px">+&nbsp;</td>'+
                                                                    '    </tr>'+
                                                                    '    <tr>'+
                                                                        '    <td style="font-family:Trebuchet MS;font-size:14px;color:#666666;text-align:justify;line-height:24px">'+
                                                                                'Welcome to <a href="http://www.google.com"> vbq </a>! We\'re really pleased to have you join our community of over 1,000 user.'+
                                                                        '    </td>'+
                                                                    '    </tr>'+
                                                                    '    <tr>'+
                                                                        '    <td width="100%" height="10" style="font-size:1px;line-height:1px">+&nbsp;</td>'+
                                                                    '    </tr>'+
                                                                    '    <tr>'+
                                                                        '    <td style="font-family:Trebuchet MS;font-size:14px;color:#666666;text-align:justify;line-height:24px">'+
                                                                                'Please keep your login details for the website handy. You\'ll need them to access your questionaries, anything else you\'d like to do at <a href="http://www.google.com">vbq</a>.'+
                                                                        '    </td>'+
                                                                    '    </tr>'+
                                                                    '    <tr>'+
                                                                        '    <td width="100%" height="10" style="font-size:1px;line-height:1px">&nbsp;</td>'+
                                                                    '    </tr>'+
                                                                    '    <tr>'+
                                                                    '    </tr>'+
                                                                    '    <tr>'+
                                                                        '    <td width="100%">'+
                                                                            '    <table width="580" cellpadding="0" cellspacing="0" border="0" align="center" class="m_1616230822046759767devicewidth" style="margin:0 auto">'+
                                                                                '    <tbody>'+
                                                                                    '    <tr>'+
                                                                                        '    <td width="100%" valign="middle" bgcolor="#5bc5a7" style="font-family:Trebuchet MS;font-size:14px;padding: 8px;border-radius:5px 5px 0 0;">Please remember below details.</td>'+
                                                                                    '    </tr>'+
                                                                                '    </tbody>'+
                                                                            '    </table>'+
                                                                        '    </td>'+
                                                                    '    </tr>'+
                                                                    '    <tr>'+
                                                                        '    <td width="100%" height="10" style="font-size:1px;line-height:1px">&nbsp;</td>'+
                                                                    '    </tr>'+
                                                                    '    <tr>'+
                                                                        '    <td style="font-family:Trebuchet MS;font-size:14px;color:#666666;text-align:justify;line-height:24px">'+
                                                                            '    <table align="center">'+
                                                                                '    <tbody>'+
                                                                                    '    <tr>'+
                                                                                        '    <td style="border-radius:10px 0 0 10px;font-size:13px;width:100px;padding:11px 0;font-family:Trebuchet MS;border:1px solid #e2e3e5;background-color:rgb(241,243,242)" align="center">'+
                                                                                                'Login ID: </td>'+
                                                                                        '    <td style="width:200px;font-size:13px;border-radius:0 10px 10px 0;padding:11px 0;font-family:Trebuchet MS;border:1px solid #e2e3e5;background-color:rgb(241,243,242)" align="center">'+
                                                                                             + user.mobile +
                                                                                        '    </td>'+
                                                                                    '    </tr>'+
                                                                                    '    <tr>'+
                                                                                        '    <td style="border-radius:10px 0 0 10px;font-size:13px;width:100px;padding:11px 0;font-family:Trebuchet MS;border:1px solid #e2e3e5" bgcolor="#ffffff" align="center">'+
                                                                                                'Email: </td>'+
                                                                                        '    <td style="width:200px;font-size:13px;border-radius:0 10px 10px 0;padding:11px 0;font-family:Trebuchet MS;border:1px solid #e2e3e5" bgcolor="#ffffff" align="center">'+user.email+
                                                                                           
                                                                                        '    </td>'+
                                                                                    '    </tr>'+
                                                                                '    </tbody>'+
                                                                            '    </table>'+
                                                                        '    </td>'+
                                                                    '    </tr>'+
                                                                    '    <tr>'+
                                                                        '    <td width="100%" height="10" style="font-size:1px;line-height:1px">+&nbsp;</td>'+
                                                                    '    </tr>'+
                                                                    '    <tr>'+
                                                                        '    <td style="font-family:Trebuchet MS;font-size:14px;color:#666666;text-align:center;line-height:24px">'+
                                                                                'Remember, you may change your password at any time from the <a href="changePassword">change password</a> section in your vbq account.'+
                                                                        '    </td> '+
                                                                    '    </tr>'+
                                                                '    </tbody>'+
                                                            '    </table>'+
                                                        '    </td>'+
                                                    '    </tr>'+
                                                    '    <tr>'+
                                                        '    <td>'+
                                                            '    <table style="background-color: #5bc5a7;border-top: 1px solid black;border-bottom: 2px solid black;border-left: 2px solid black;border-right: 2px solid black;" width="650">'+
                                                                '    <tbody>'+
                                                                    '    <tr style="font-family:Trebuchet MS;font-size:14px;color:white;text-align:justify;line-height:24px">'+
                                                                        '    <td style="width: 320px; padding: 10px; box-sizing: border-box; border-right: 1px solid black;">'+
                                                                            '    <p>'+
                                                                                    'Copyright © 2017 abc, all rights reserved.'+
                                                                            '    </p>'+
                                                                            '    <p>'+
                                                                                    'Bajaj Nagar , MIDC'+
                                                                                '    <br>'+ 'Aurangabad, Maharashtra.'+
                                                                            '    </p>'+
                                                                        '    </td>'+
                                                                    '    </tr>'+
                                                                '    </tbody>'+
                                                            '    </table>'+
                                                        '    </td>'+
                                                    '    </tr>'+
                                                '    </tbody>'+
                                            '    </table>'+
                                        '    </td>'+
                                    '    </tr>'+
                                '    </tbody>'+
                            '    </table>'+
                        '    </center>'+
                    '    </div>'+
                '    </div>'+
            '    </div>'+
        '    </body>'+ 
            '';
    return registrationEmailTemplate;
}
var _contactUsEmailFormat = function (user) {
    var contactUsTemplate =  '    <body>'+
        '    <div>'+
            '    <div>'+
                '    <div>'+
                    '    <center>'+
                        '    <table border="1" width="694" cellspacing="0" cellpadding="30">'+
                            '    <tbody>'+
                                '    <tr>'+
                                    '    <td>'+
                                        '    <table cellspacing="0" cellpadding="0">'+
                                            '    <tbody>'+
                                                '    <tr>'+
                                                    '    <td>'+
                                                        '    <table style="height: 58px;" width="100%" cellspacing="0" cellpadding="0">'+
                                                            '    <tbody>'+
                                                                '    <tr>'+
                                                                    '    <td style="background-color: #5bc5a7; color: white;">'+
                                                                        '    <h1 style="text-align: center;">'+
                                                                        '    <strong>'+
                                                                                 'VBQ'+
                                                                        '    </strong>'+
                                                                    '    </h1>'+
                                                                    '    </td>'+
                                                                '    </tr>'+
                                                            '    </tbody>'+
                                                        '    </table>'+
                                                    '    </td>'+
                                                '    </tr>'+
                                                '    <tr>'+
                                                    '    <td>'+
                                                        '    <table style="background-color: white;border-left: 2px solid black;border-right: 2px solid black;border-top: 1px solid black;" width="650">'+
                                                            '    <tbody style="font-family:Trebuchet MS;font-size:14px;color:#666666;text-align:justify;line-height:24px">'+
                                                                '    <tr>'+
                                                                    '    <td style="padding: 20px;">'+
                                                                        '    <p style="text-align: left;">'+
                                                                                'Dear&nbsp;' + user.firstName + ','+
                                                                        '    </p>'+
                                                                        '    <p style="text-align: left;">'+
                                                                                'Thank you for taking the time to provide us with your valuable feedback. We strive to provide our excellent service to our clients. we take your comments to heart.'+
                                                                        '    </p>'+
                                                                        '    <p style="text-align: left;">'+
                                                                                'As always, we appreciate your confidence and trust in us.'+
                                                                        '    </p>'+
                                                                        '    <p style="text-align: left;">'+
                                                                               ' We have forwarded below details to our team:'+
                                                                        '    </p>'+
                                                                        '    <p style="text-align: left;">'+
                                                                                'Name :&nbsp; '+user.firstName + ' ' +user.lastName +
                                                                        '    </p>'+
                                                                        '    <p style="text-align: left;">'+
                                                                               ' Email :&nbsp; ' + user.email + 
                                                                        '    </p>'+
                                                                        '    <p style="text-align: left;">'+
                                                                                'Phone Number :&nbsp; '+user.mobile+
                                                                        '    </p>'+
                                                                        '    <p style="text-align: left;">'+
                                                                                'Message :&nbsp; '+user.message +
                                                                        '    </p>'+
                                                                        '    <p style="text-align: left;">'+
                                                                               ' Have a great day! –The abc Team'+
                                                                        '    </p>'+
                                                                        '    <p style="text-align: left;">'+
                                                                                'Sincerely,'+
                                                                            '    <br/>vbq Team'+
                                                                        '    </p>'+
                                                                    '    </td>'+
                                                                '    </tr>'+
                                                            '    </tbody>'+
                                                        '    </table>'+
                                                    '    </td>'+
                                                '    </tr>'+
                                                '    <tr>'+
                                                    '    <td>'+
                                                        '    <table style="background-color: #5bc5a7; color:white;border-top: 1px solid black;border-bottom: 2px solid black;border-left: 2px solid black;border-right: 2px solid black;" width="650">'+
                                                            '    <tbody style="font-family:Trebuchet MS;font-size:14px;;text-align:justify;line-height:24px">'+
                                                                '    <tr>'+
                                                                    '    <td style="width: 320px; padding: 10px; box-sizing: border-box;">'+
                                                                        '    <p>'+
                                                                                'Copyright © 2017 abc, all rights reserved.'+
                                                                        '    </p>'+
                                                                        '    <p>'+
                                                                               ' Bajaj Nagar , MIDC'+
                                                                            '    <br>Aurangabad, Maharashtra.'+
                                                                        '    </p>'+
                                                                    '    </td>'+
                                                                '    </tr>'+
                                                            '    </tbody>'+
                                                        '    </table>'+
                                                    '    </td>'+
                                                '    </tr>'+
                                            '    </tbody>'+
                                        '    </table>'+
                                    '    </td>'+
                                '    </tr>'+
                            '    </tbody>'+
                        '    </table>'+
                    '    </center>'+
                '    </div>'+
            '    </div>'+
        '    </div>'+
    '    </body>'+
    '';
    return contactUsTemplate;
};

var _forgotPasswordEmailFormat = function (user) {
    var forgotPasswordTemplate = ''+
        '  <body>'+
            '    <div>'+
                '    <div>'+
                    '    <div>'+
                        '    <center>'+
                            '    <table border="1" width="694" cellspacing="0" cellpadding="30">'+
                                '    <tbody>'+
                                    '    <tr>'+
                                        '    <td>'+
                                            '    <table cellspacing="0" cellpadding="0">'+
                                                '    <tbody>'+
                                                    '    <tr>'+
                                                        '    <td>'+
                                                            '    <table style="height: 58px;width:100%;" cellspacing="0" cellpadding="0">'+
                                                                '    <tbody>'+
                                                                    '    <tr>'+
                                                                        '    <td style="background-color: #5bc5a7; color: white;">'+
                                                                            '    <h1 style="text-align: center;">'+
                                                                            '    <strong>'+
                                                                                     'VBQ'+
                                                                            '    </strong>'+
                                                                        '    </h1>'+
                                                                        '    </td>'+
                                                                    '    </tr>'+
                                                                '    </tbody>'+
                                                            '    </table>'+
                                                        '    </td>'+
                                                    '    </tr>'+
                                                    '    <tr>'+
                                                        '    <td>'+
                                                            '    <table style="background-color: white;border-left: 2px solid black;border-right: 2px solid black;border-top: 1px solid black;" width="650">'+
                                                                '    <tbody>'+
                                                                    '    <tr>'+
                                                                        '    <td style="padding: 20px;">'+
                                                                            '    <p style="text-align: left;">'+
                                                                                    'We get it,' + user.mobile + '– you forgot your password. It happens to the best of us. We feel your pain.'+
                                                                            '    </p>'+
                                                                            '    <p style="text-align: left;">'+
                                                                                    'Please use below password for next login'+
                                                                                '    <br>'+ user.password +
                                                                            '    </p>'+
                                                                            '    <p style="text-align: left;">'+
                                                                                   ' Have a great day! –The abc Team'+
                                                                            '    </p>'+
                                                                            '    <p style="text-align: left;">'+
                                                                                  '  P.S. If you did not request a password reset, or are having any trouble logging in, please let us know at'+
                                                                                '    <a href="mailto:support@abc.com" target="_blank">'+
                                                                                 '    support@abc.com'+
                                                                            '    </a>.'+ 
                                                                            '    </p>'+
                                                                            '    <p style="text-align: left;">'+
                                                                                    'Note: We recommend you to next change you password after login.'+
                                                                            '    </p>'+
                                                                        '    </td>'+
                                                                    '    </tr>'+
                                                                '    </tbody>'+
                                                            '    </table>'+
                                                        '    </td>'+
                                                    '    </tr>'+
                                                    '    <tr>'+
                                                        '    <td>'+
                                                            '    <table style="background-color: #5bc5a7; color:white;border-top: 1px solid black;border-bottom: 2px solid black;border-left: 2px solid black;border-right: 2px solid black;" width="650">'+
                                                                '    <tbody>'+
                                                                    '    <tr>'+
                                                                        '    <td style="width: 320px; padding: 10px; box-sizing: border-box;">'+
                                                                            '    <p>'+
                                                                                    'Copyright © 2017 abc, all rights reserved.'+
                                                                            '    </p>'+
                                                                        
                                                                            '    <p>'+
                                                                                    'Bajaj Nagar , MIDC'+
                                                                                '    <br>'+ 'Aurangabad, Maharashtra.'+
                                                                            '    </p>'+
                                                                        '    </td>'+
                                                                    '    </tr>'+
                                                                '    </tbody>'+
                                                            '    </table>'+
                                                        '    </td>'+
                                                    '    </tr>'+
                                                '    </tbody>'+
                                            '    </table>'+
                                        '    </td>'+
                                    '    </tr>'+
                                '    </tbody>'+
                            '    </table>'+
                        '    </center>'+
                    '    </div>'+
                '    </div>'+
            '    </div>'+
        ' </body>'+
    '';
    return forgotPasswordTemplate;
}
module.exports = {
    'forgotPasswordEmailFormat': _forgotPasswordEmailFormat,
    'contactUsEmailFormat': _contactUsEmailFormat,
    'registrationEmailFormat': _registrationEmailFormat
}