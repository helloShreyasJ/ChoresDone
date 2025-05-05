let logo = document.getElementById('logo');
let request_button = document.getElementById('request');
const emailValidation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

logo.addEventListener('click', () => {
    location.replace("../index.html");
});

request.addEventListener('click', () => {
    event.preventDefault();
    let email = document.getElementById('email').value;
    if(!emailValidation.test(email)) {
        alert("Please enter a valid email address.");
        return;
    } else{
        alert("An email has been sent to you providing the instructions to reset your password.")
        location.replace("log-in.html");
    }
});