let loginSuccessful = false;
        let logIn_button = document.getElementById('logIn_button');
        let signUpPage_button = document.getElementById('signUp-page');
        
        logIn_button.addEventListener('click', () => {
            event.preventDefault();
            let username = document.getElementById("username").value;
            let password = document.getElementById("password").value;

            let storedUsername = localStorage.getItem("username");
            let storedPassword = localStorage.getItem("password");

            if(!(username === storedUsername && password === storedPassword)) {
                alert("Incorrect username or password. Try again!");
            } else {
                loginSuccessful = true;
                localStorage.setItem("loginSuccess","true");
                alert("Log-in successful!");
                location.replace('dashboard.html');
            }
        });

        let logo = document.getElementById('logo');

        logo.addEventListener('click', () => {
            location.replace('../index.html');
        });

        signUpPage_button.addEventListener('click', () => {
            location.replace('sign-up.html');
        });