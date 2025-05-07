/* VARIABLES */
let logo = document.getElementById('logo'); // ChoresDone logo
let button_signup = document.getElementById('signup'); // Signup button
let button_login = document.getElementById('login'); // Login button
let button_getstarted = document.getElementById('get-started'); // Get Started button
let questions = document.querySelectorAll('.question'); // FAQ
let answers = document.querySelectorAll('.answer'); // Answers for FAQ
let kofiContainer = document.querySelector('.kofi-container'); // Buy me a coffee container (I used kofi as the variable name because I thought that kofi and buymeacoffee are the same company. I was wrong.)

let replaceTo = 'pages/sign-up.html'; // replace location to pages

logo.addEventListener('click,', () => { // When logo is clicked, bring user to index.html (Literally the page that they're on. I guess this can act as a refresh page for them)
    location.replace('index.html');
});
button_login.addEventListener('click', () => { // When Login button is clicked, bring the user to the login page
    location.replace('pages/log-in.html');
});
button_signup.addEventListener('click', () => { // When Signup button is clicked, bring the user to the signup page
    location.replace('pages/sign-up.html')
});
button_getstarted.addEventListener('click', () => { // When the Get Started button is clicked, bring the user to the signup page. However this button also acts like the open dashboard button, when the user is logged in.
    location.replace(replaceTo);
})

let success = localStorage.getItem("loginSuccess"); // Retrieves a boolean value loginSuccess. If the user is logged in then loginSuccess is true. If they're logged out, then it is false.

if(success === "true") { // When Login success is true, 
    button_signup.style.visibility = "hidden"; // Hide the signup button
    button_login.textContent = "Log Out"; // Change the login button to logout
    button_getstarted.textContent = "Open Dashboard"; // Change the Get Started button to Open Dashboard
    replaceTo = "pages/dashboard.html"; //replace location to dashboard

    button_login.addEventListener('click',() => { // THIS IS THE LOGOUT BUTTON. If the user clicks this button then, from the local storage we remove username, password, email, chores, people, and make loginSuccess false. 
        localStorage.removeItem("username");
        localStorage.removeItem("password");
        localStorage.removeItem("email");
        localStorage.removeItem("chores");
        localStorage.removeItem("people");
        localStorage.loginSuccess = "false";
    }); 
}

for(let i = 0; i < questions.length; i++) { // Loop to hide and show the answers to questions
    questions[i].addEventListener('click', () => {
        if (answers[i].style.display === 'block') {
            answers[i].style.display = 'none';
        } else {
            answers[i].style.display = 'block';
        }
    });
}

kofiContainer.addEventListener('click', () => { // BUY ME A COFFEE !! This will redirect the user to a page where they can support me.
    location.replace('https://buymeacoffee.com/helloshreyasj');
});