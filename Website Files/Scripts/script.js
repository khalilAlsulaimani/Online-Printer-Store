const username = document.getElementById("loginUsername");
const password = document.getElementById("loginPassword");
const loginMessage = document.getElementById("loginMessage");
const form = document.getElementById("indexForm");

form.addEventListener("submit", (e) => {
    if (username.value == "" || username.value == null) {
        loginMessage.style.color = "red";
        loginMessage.innerText = "Empty Username Detected";
        e.preventDefault();
    } else if (password.value === "" || password.value == null) {
        loginMessage.innerText = "Empty Password Detected";
        e.preventDefault();
    } else if (username.value.length < 4) {
        loginMessage.innerText = "Username Must Be At Least 4 characters Given Was " + username.value.length;
        e.preventDefault();
    } else if (password.value.length < 6) {
        loginMessage.innerText =
            "Password Must Be At Least 6 characters Given Was " +
            password.value.length;
        e.preventDefault();
    }
});