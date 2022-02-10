const loginForm = document.querySelector("#login-form");
const inputUser = document.querySelector("#get-name");
const showUserName = document.querySelector("#show-name");

function showUserName(userName) {
  showUserName.innerText = `Hi ${username}`;
  showUserName.classList.remove("hidden");
}

// function loginFormSubmit((event) => {
//   event.preventDefault();
//   loginForm.classList.add('hidden');
//   const userName = inputUser.value;
//   showUserName(userName);
// });
