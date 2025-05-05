let logo = document.getElementById('logo');
let button_signup = document.getElementById('signup');
let button_login = document.getElementById('login');
let button_getstarted = document.getElementById('get-started');
let questions = document.querySelectorAll('.question');
let answers = document.querySelectorAll('.answer');
let kofiContainer = document.querySelector('.kofi-container');

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
        localStorage.removeItem("chores");
        localStorage.removeItem("people");
        localStorage.loginSuccess = "false";
    }); 
}

for(let i = 0; i < questions.length; i++) {
    questions[i].addEventListener('click', () => {
        if (answers[i].style.display === 'block') {
            answers[i].style.display = 'none';
        } else {
            answers[i].style.display = 'block';
        }
    });
}

kofiContainer.addEventListener('click', () => {
    location.replace('https://ko-fi.com');
});