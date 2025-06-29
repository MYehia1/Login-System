var signUpName = document.getElementById("signUpName");
var signUpEmail = document.getElementById("signUpEmail");
var signUpPassword = document.getElementById("signUpPassword");
var signUpBtn = document.querySelector("#signUpBtn");
var failedMsg = document.querySelector(".failed");
var userFound = document.querySelector(".userFound");
var regex;

var Users = JSON.parse(localStorage.getItem("Users")) || [];
function SignUp() {
  if (
    validation("signUpName") &&
    validation("signUpEmail") &&
    validation("signUpPassword")
  ) {
    var newUser = {
      name: signUpName.value,
      email: signUpEmail.value,
      password: signUpPassword.value,
    };
    var emailExists = false;
    for (var i = 0; i < Users.length; i++) {
      if (Users[i].email === signUpEmail.value) {
        emailExists = true;
        break;
      }
    }

    if (emailExists) {
      userFound.classList.replace("d-none", "d-block");
      signUpEmail.classList.add("is-invalid");
      return;
    } else {
      userFound.classList.add("d-none");
      signUpEmail.classList.remove("is-invalid");
    }

    Users.push(newUser);
    localStorage.setItem("Users", JSON.stringify(Users));
    window.location.href = "../index.html";
  } else if (!validation("signUpName")) {
    signUpName.classList.add("is-invalid");
  } else if (!validation("signUpEmail")) {
    signUpEmail.classList.add("is-invalid");
  } else if (!validation("signUpPassword")) {
    signUpPassword.classList.add("is-invalid");
  }
}

// Sign Up Form
signUpBtn.addEventListener("click", function () {
  SignUp();
});

// Validation

function validation(id) {
  var inputUsers = document.getElementById(id);
  var textString = inputUsers.value;
  if (textString === "") {
    inputUsers.classList.add("is-invalid");
    failedMsg.classList.replace("d-none", "d-block");
    return false;
  }
  switch (id) {
    case "signUpName":
      regex = /^[a-zA-Z ]{3,30}$/;
      break;
    case "signUpEmail":
      regex = /^[a-zA-Z0-9]{3,10}@(gmail|yahoo|outlook)\.com$/i;
      break;
    case "signUpPassword":
      regex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      break;
    default:
      break;
  }

  if (regex.test(textString)) {
    inputUsers.classList.remove("is-invalid");
    failedMsg.classList.add("d-none");
    return true;
  } else {
    inputUsers.classList.add("is-invalid");
    failedMsg.classList.replace("d-none", "d-block");
    return false;
  }
}
signUpName.addEventListener("input", function () {
  validation(this.id);
});
signUpEmail.addEventListener("input", function () {
  validation(this.id);
});
signUpPassword.addEventListener("input", function () {
  validation(this.id);
});
