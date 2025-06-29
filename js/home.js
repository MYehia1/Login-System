var welcomeMsg = document.getElementById("welcomeMsg");
var userName = localStorage.getItem("loggedInUser");
if (userName) {
  welcomeMsg.innerText = `Welcome, ${userName}`;
} else {
  window.location.href = "../index.html";
}
