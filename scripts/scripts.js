var btnSignin = document.querySelector('[data-js="signin"]');
var btnSignup = document.querySelector('[data-js="signup"]');
var body = document.querySelector('body');

btnSignin.addEventListener('click', function() {
    body.className = "sign-in-js";
});

btnSignup.addEventListener('click', function() {
    body.className = "sign-up-js"
});

