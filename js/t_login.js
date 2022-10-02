function checkForSymbolsUsername() {
  //let regexp = /^$|^[a-zA-Z0-9-_]+$/;   also works well
  let regexp = /^$|^[\w-]+$/;
  const usernameEntry = document.form.username.value;

  if (usernameEntry.search(regexp) === -1) {
    document.getElementById("username").value = "";
    userValidationMsg.innerHTML =
      "Only letters, numbers, hyphens, and underscores allowed.";
  }
}

function checkForSymbolsPasswords() {
  let regexp = /^$|^[a-zA-Z0-9!@$-_]+$/; //   /^\S*$/;
  const passwordEntry = document.form.password.value;

  if (passwordEntry.search(regexp) === -1) {
    document.getElementById("password").value = "";
    pwValidationMsg.innerHTML =
      "Only letters, numbers, and these symbols are allowed: ! @ $ - _";
  }
}

function clearUserValidation() {
  userValidationMsg.innerHTML = "";
}

function clearPwValidation() {
  pwValidationMsg.innerHTML = "";
}

function clearValidation() {
  validationMsg.innerHTML = "";
}

function checkUsernameInput() {
  const user = document.form.username.value;
  const validationMsg = document.getElementById("validation");

  if (user == undefined || user == "") {
    console.log("username empty");
    userValidationMsg.innerHTML = "Please enter your username.";
    return;
  } else {
    console.log("username entered");
    validationMsg.innerHTML = "";
    return;
  }
}

function checkPasswordInput() {
  const pw = document.form.password.value;
  const validationMsg = document.getElementById("validation");

  if (pw == undefined || pw == "") {
    console.log("password empty");
    pwValidationMsg.innerHTML = "Please enter your password.";
    return;
  } else {
    console.log("password entered");
    validationMsg.innerHTML = "";
    return;
  }
}

const userInput = document.querySelector("#username");
const pwInput = document.getElementById("password");
const loginBtn = document.getElementById("login");
const form = document.getElementById("form");
let invalid = true;
const userValidationMsg = document.getElementById("uservalidation");
const pwValidationMsg = document.getElementById("pwvalidation");
const validationMsg = document.getElementById("validation");

const userAllowed = "mistermagoo";
const pwAllowed = "test123";

form.addEventListener("submit", onSubmit);

function onSubmit(e) {
  e.preventDefault();

  if (
    document.getElementById("username").value.toUpperCase() ==
    userAllowed.toUpperCase()
  ) {
    console.log("username correct");
  } else {
    console.log("wrong username");
  }

  if (document.getElementById("password").value == pwAllowed) {
    console.log("password correct");
  } else {
    console.log("wrong password");
  }

  if (
    userInput.value.toUpperCase() == userAllowed.toUpperCase() &&
    pwInput.value == pwAllowed
  ) {
    console.log("success");
    window.open("/testing_example.html", "_self");
  } else {
    console.log("Trouble ahead, trouble behind");
    $(".invalidlogin").css("display", "block");
    console.log("Username/Password combination invalid");
    validationMsg.innerHTML =
      "Double-check your username and password...then try again.";
  }
}
