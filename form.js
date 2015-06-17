$(function(){

  // initialize request object
  var request = HttpRequest();

  // initialize loginAttempts to zero for every user
  HttpResponse.set_signed_cookie('loginAttempts', 0);

  // my key as an example of googles public cite key
  // var myKey = '6LcufQgTAAAAAJ4IAJyTUfY8BAr2yCWa7ul7wpnh'
  // var mySecretKey = '6LcufQgTAAAAAJ4IAJyTUfY8BAr2yCWa7ul7wpnh'

  // method to call when user has tried to login 3 times or more
  var onloadCallback = function() {
    grecaptcha.render('g-recaptch-widget-1', {
    'sitekey' : 'your site key here',
    'callback' : verifyCallback
    });
  };

  // callback funciton when user has answered reCaptcha correctly
  var verifyCallback = function(response) {
    if (grecaptcha.getResponse('g-recaptch-widget-1').success === 'true') {
      // execute logic on the backend authenticate user and store user info in session etc if successful
    };
  };

  // listen for user trying to login, implement reCaptcha after 3 failed login attempts
  $('#btn_login').on('click', function(){
    if (request.get_signed_cookie('loginAttempts') >= 3) { onloadCallback() };
  });

});
