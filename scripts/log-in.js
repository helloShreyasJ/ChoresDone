let loginSuccessful = false; // Login Success (Boolean)
let logIn_button = document.getElementById('logIn_button'); // Login button
let signUpPage_button = document.getElementById('signUp-page'); // Link to signup page button

logIn_button.addEventListener('click', () => { // When the login button is clicked, the username, password entered in the form gets compared to the username and password stored in the localStorage. If they match, then the login is successful. If not, then the login is unsuccessful
    event.preventDefault(); // This allows me stop the default reload of page when form is filled. I do this to open the dashboard as soon as the login is successful
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let storedUsername = localStorage.getItem("username");
    let storedPassword = localStorage.getItem("password");
    if (username == "" || password == "") {
        alert("Please enter your details to log-in");
    } else if(!(username === storedUsername && password === storedPassword)) {
        alert("Incorrect username or password. Try again!");
    } else {
        loginSuccessful = true;
        localStorage.setItem("loginSuccess","true"); // If the login is successful then the loginSuccess key gets the value true in localStorage
        alert("Log-in successful!");
        location.replace('dashboard.html'); // Takes the user to the dashboard if the login is successful
    }
});

let logo = document.getElementById('logo'); // ChoresDone logo

logo.addEventListener('click', () => { // When the logo is clicked, take the user to the Index page
    location.replace('../index.html');
});

signUpPage_button.addEventListener('click', () => { // When the signUpPage button is clicked, take the user to the sign up page
    location.replace('sign-up.html');
});