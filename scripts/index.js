let logo = document.getElementById('logo');
let button_signup = document.getElementById('signup');
let button_login = document.getElementById('login');
let button_getstarted = document.getElementById('get-started');

let replaceTo = 'pages/sign-up.html'; //replace location to pages

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
    location.replace(replaceTo);
})

let success = localStorage.getItem("loginSuccess");

if(success === "true") {
    button_signup.style.visibility = "hidden";
    button_login.textContent = "Log Out";
    button_getstarted.textContent = "Open Dashboard";
    replaceTo = "pages/dashboard.html"; //replace location to dashboard

    button_login.addEventListener('click',() => {
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("email");
        localStorage.loginSuccess = "false";
    }); 
}