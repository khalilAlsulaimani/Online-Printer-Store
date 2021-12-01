const username = document.getElementById("loginUsername");
const password = document.getElementById("loginPassword");
const loginMessage = document.getElementById("loginMessage");
const IndexForm = document.getElementById("indexForm");

// validation for the index form 
function signIn() {
    loginMessage.style.color = "red";
    loginMessage.style.fontSize = "20px";
    if (username.value == "" || username.value == null) {

        loginMessage.innerText = "Empty Username Detected";
        return false;
    } else if (password.value === "" || password.value == null) {
        loginMessage.innerText = "Empty Password Detected";
        return false;
    } else if (username.value.length < 4) {
        loginMessage.innerText = "Username Must Be At Least 4 Characters Given Was " + username.value.length;
        return false;
    } else if (password.value.length < 6) {
        loginMessage.innerText =
            "Password Must Be At Least 6 characters Given Was " +
            password.value.length;
        return false;
    }
    return true;
}


// validating feedback page

const fullName = document.getElementById("names");
const feedbackMessage = document.getElementById("feedbackMessage");
const keyUpMessage = document.getElementById("keyUpMessage");

function FeedbackForm() {
    feedbackMessage.style.color = "red";
    feedbackMessage.style.fontSize = "20px";
    if (fullName.value == "" || fullName.value == null) {
        feedbackMessage.innerText = "Empty Full Name";
        return false;
    } else if (fullName.value.length < 6) {
        feedbackMessage.innerText = "Full Name Must Be At Least 6 Characters Given Was " + fullName.value.length;
        return false;
    }else if(checkName){
        return false;
    }
    return true;
}

function checkName() {
    keyUpMessage.innerText="";
    keyUpMessage.style.color = "red";
    keyUpMessage.style.fontSize = "15";
    var regEx = new RegExp("\\d+");
    if (regEx.test(fullName.value)){
        keyUpMessage.innerText = "Numbers Cannot Be In Name";
        return false;
    }

}


// changing textBox/fields to yellow and white 
function focused(id) {
    id.style.backgroundColor = "yellow";
}


function blurred(id) {
    id.style.backgroundColor = "";
}