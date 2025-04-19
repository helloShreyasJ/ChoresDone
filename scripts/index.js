let logo = document.getElementById('logo');
let button_signup = document.getElementById('signup');
let button_login = document.getElementById('login');
let button_getstarted = document.getElementById('get-started');

logo.addEventListener('click,', () => {
    location.replace('index.html');
});
button_login.addEventListener('click', () => {
    location.replace('pages/log-in.html');
});
button_signup.addEventListener('click', () => {
    location.replace('pages/sign-up.html')
});
button_getstarted.addEventListener('click', () => {
    location.replace('pages/sign-up.html');
})