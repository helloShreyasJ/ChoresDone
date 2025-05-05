let signUp_button = document.getElementById('signUp_button');
let logInPage_button = document.getElementById('logIn-page');

signUp_button.addEventListener('click', () => {
    event.preventDefault();
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const emailValidation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    if(username == "" || email == "") {
        alert("Enter your details create an account.")
    } else if (!emailValidation.test(email)) {
        alert("Please enter a valid email address.");
        return;
    } else if (password == "") {
        alert("Password cannot be empty. Try again.");
    } else {
        localStorage.setItem("username", username);
        localStorage.setItem("email", email);
        localStorage.setItem("password", password);
        
        location.replace('log-in.html');
    }
});

let logo = document.getElementById('logo');

logo.addEventListener('click', () => {
    location.replace('../index.html');
});

logInPage_button.addEventListener('click', () => {
    location.replace('log-in.html');
});