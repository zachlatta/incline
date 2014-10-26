var Nightmare = require('nightmare');
var Q = require('q');

module.exports.transactions = function() {
  var deferred = Q.defer();

  new Nightmare({cookiesFile: '/tmp/cookies'})
    .goto('https://chase.com')
      .type('#usr_name_home', 'TODO')
      .type('#usr_password_home', 'TODO')
      .click('div.initialized:nth-child(11) > div:nth-child(1) > div:nth-child(1) > a:nth-child(1)')
    .wait()
      .click('#NextButton')
    .wait('#usrCtrlOtp_otpDeliveryModePanel')
      .click('#usrCtrlOtp_rdoDelMethod1')
      .click('#NextButton')
    .wait()
      .type('#usrCtrlOtp_txtActivationCode', 'TODO')
      .type('#usrCtrlOtp$txtPassword', 'TODO')
      .click('#NextButton')
    .wait()
    .screenshot('/tmp/foo.png')
    .run(function (err, nightmare) {
      if (err) {
        deferred.reject(err);
      }

      deferred.resolve();
    });

  return deferred.promise;
}
