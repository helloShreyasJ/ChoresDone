let logo = document.getElementById('logo'); // ChoresDone logo
let request_button = document.getElementById('request'); // Request Instructions button
const emailValidation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //Regex for email validation. I got this regex from https://regexr.com

logo.addEventListener('click', () => { // When the logo is clicked, take the user to the Index page
    location.replace("../index.html");
});

request.addEventListener('click', () => { // When Request Instructions button is clicked, do a quick email validation, if email is valid then alert that instructions have been sent. If email is invalid, then ask the user to enter a valid email
    event.preventDefault(); // This allows me stop the default reload of page when form is filled. I do this to open the login page as soon as instructions are sent
    let email = document.getElementById('email').value;
    if(!emailValidation.test(email)) { // Email validation using regex
        alert("Please enter a valid email address.");
        return;
    } else{
        alert("An email has been sent to you providing the instructions to reset your password.")
        location.replace("log-in.html");
    }
});