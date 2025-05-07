let signUp_button = document.getElementById('signUp_button'); // Sign up button
let logInPage_button = document.getElementById('logIn-page'); // Link to login page button

signUp_button.addEventListener('click', () => { // When the sign up button is clicked do input validation and store the users details onto localStorage
    event.preventDefault(); // This allows me stop the default reload of page when form is filled. I do this to open the login page as soon as sign up is done
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    const emailValidation = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/; //Regex for email validation. I got this regex from https://regexr.com
    if(username == "" || email == "") {
        alert("Enter your details create an account.")
    } else if (!emailValidation.test(email)) { // Email validation using regex
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

let logo = document.getElementById('logo'); // ChoresDone logo

logo.addEventListener('click', () => { // When logo is clicked, take user to index page
    location.replace('../index.html');
});

logInPage_button.addEventListener('click', () => { // When login page button is clicked then take user to login page
    location.replace('log-in.html');
});