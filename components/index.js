
let form = document.querySelector(".form");
let userName = document.querySelector("#form__userName");
let email = document.querySelector("#form__email");
let password = document.querySelector("#form__password");
let confrimPassword = document.querySelector("#form__confrimPassword");
let errorUserName = document.querySelector("#form__userName_error");
let errorEmail = document.querySelector("#form__email_error");
let errorPassword = document.querySelector("#form__password_error");
let errorConfrimPassword = document.querySelector("#form__confrimPassword_error");
let patternEmail = /^([a-zA-Z](\.?[a-zA-Z0-9]{3,})*)@([a-zA-Z]+(\.?[a-zA-Z0-9]{3,}))\.([a-zA-Z]{2,6})$/;
let patternPassword = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;

// function userName:
form.addEventListener("submit", checkUsername);
function checkUsername(event) {
    if (userName.value === "") {
        errorUserName.innerHTML = "email is not valid!";
        userName.style.borderColor = "red";
        userName.focus();
        event.preventDefault();
    }
    else if (userName.value !== "") {
        errorUserName.innerHTML = " ";
        userName.style.borderColor = "green";
    }
}

// function email:
form.addEventListener("submit", checkEmail);
function checkEmail(event) {
    if (email.value === "" || !patternEmail.test(email.value)) {
        errorEmail.innerHTML = "email is not valid!";
        email.style.borderColor = "red";
        email.focus();
        event.preventDefault();
    }
    else if (patternEmail.test(email.value)) {
        errorEmail.innerHTML = " ";
        email.style.borderColor = "green";
        email.style.backgroundColor = "white";
    }
}

// function password:
form.addEventListener("submit", checkPassword);
function checkPassword(event) {
    if (password.value = "" || !patternPassword.test(password.value)) {
        errorPassword.innerHTML = "password is not valid!";
        password.style.borderColor = "red";
        password.focus();
        event.preventDefault();
    }
    else if (patternPassword.test(password.value)) {
        errorPassword.innerHTML = "";
        password.style.borderColor = "green";
    }
}

// function confrimPassword:
form.addEventListener("submit", checkConfrimPassword);
function checkConfrimPassword(event) {
    if (confrimPassword.value === "" || !confrimPassword.value.match(password.value)) {
        errorConfrimPassword.innerHTML = "confrimPassword is not valid!";
        confrimPassword.style.borderColor = "red";
        confrimPassword.focus();
        event.preventDefault();
    }
    else if (confrimPassword.value.match(password.value)) {
        errorConfrimPassword.innerHTML = "";
        password.style.borderColor = "green";
    }
}