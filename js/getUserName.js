const USERNAME_KEY = "username";

const loginForm = document.querySelector("#login-form");
const inputUser = document.querySelector("#get-name");
const showUsername = document.querySelector("#show-name");
const savedUsername = localStorage.getItem(USERNAME_KEY);

function showUserName(username) {
  showUsername.innerHTML = `Hi ${username}`;
  showUsername.classList.remove("hidden");
}

function loginFormSubmit(event) {
  event.preventDefault();
  loginForm.classList.add("hidden");
  const username = inputUser.value;
  localStorage.setItem(USERNAME_KEY, username);
  showUserName(username);
}

if (savedUsername === null) {
  loginForm.classList.remove("hidden");
  loginForm.addEventListener("submit", loginFormSubmit);
} else {
  showUserName(savedUsername);
}
