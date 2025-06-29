var loginForm = document.getElementById("loginForm");
var loginEmail = document.querySelector("#loginEmail");
var loginPassword = document.querySelector("#loginPassword");
var loginBtn = document.querySelector("#loginBtn");
var signUpAnchor = document.querySelector(".signUpAnchor");
var signInAnchor = document.querySelector(".signInAnchor");

loginBtn.addEventListener("click", function () {
  login();
});
Users = JSON.parse(localStorage.getItem("Users")) || [];
var userFound = false;
function login() {
  for (var i = 0; i < Users.length; i++) {
    if (
      Users[i].email === loginEmail.value &&
      Users[i].password === loginPassword.value
    ) {
      localStorage.setItem("loggedInUser", Users[i].name);
      window.location.href = "HTML/home.html";
      userFound = true;
      loginEmail.classList.remove("is-invalid");
      loginPassword.classList.remove("is-invalid");
      break;
    } else {
      loginPassword.classList.add("is-invalid");
      userFound = true;
    }
  }
  if (!userFound) {
    loginEmail.classList.add("is-invalid");
  }
}

// Sign In Anchor
signInAnchor.addEventListener("click", function () {
  signUpForm.classList.add("d-none");
  loginForm.classList.remove("d-none");
});
