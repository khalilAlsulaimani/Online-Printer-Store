const username = document.getElementById("loginUsername");
const password = document.getElementById("loginPassword");
const loginMessage = document.getElementById("loginMessage");
const IndexForm = document.getElementById("indexForm");

// validation for the index form 
function signIn() {
    loginMessage.innerText ="";
    loginMessage.style.color = "red";
    loginMessage.style.fontSize = "20px";
    var bool = true;
    if (username.value == "" || username.value == null) {

        loginMessage.innerText += "Empty Username Detected\n";
        bool = false;
    } else if (username.value.length < 4) {
        loginMessage.innerText += "Username Must Be At Least 4 Characters Given Was " + username.value.length+"\n";
        bool = false;
    }

    if (password.value === "" || password.value == null) {
        loginMessage.innerText += "Empty Password Detected\n";
        bool = false;

    } else if (password.value.length < 6) {
        loginMessage.innerText +=
            "Password Must Be At Least 6 characters Given Was " +
            password.value.length+"\n";
        bool = false;
    }
    return bool;
}


// validating feedback page

const fullName = document.getElementById("names");
const feedbackMessage = document.getElementById("feedbackMessage");
const keyUpMessage = document.getElementById("keyUpMessage");
const phoneNumber = document.getElementById("phoneNumber");
const feedbackEmail = document.getElementById("feedbackEmail");
const topic = document.getElementById("topic");
const title = document.getElementById("title");
const messageBody = document.getElementById("messageBody");

function FeedbackForm() {
    feedbackMessage.innerText = "";
    feedbackMessage.style.color = "red";
    feedbackMessage.style.fontSize = "20px";
    var bool = true;

    // name validation
    if (fullName.value == "" || fullName.value == null) {
        feedbackMessage.innerText += "Empty Full Name\n";
        bool = false;
    } else if (fullName.value.length < 6) {
        feedbackMessage.innerText += "Full Name Must Be At Least 6 Characters Given Was " + fullName.value.length + "\n";
        bool = false;
    }
    // onkeyup test 
    if (isNameNotString()) {
        bool = false;

    }


    // number validation
    if (phoneNumber.value == "" || phoneNumber.value == null) {
        feedbackMessage.innerText += "Empty Phone Number\n";
        bool = false;
    } else if (phoneNumber.value.length != 12) {
        feedbackMessage.innerText += "Number Must Be At Least 12 Characters Given Was " + phoneNumber.value.length + "\n";
        bool = false;
    } else if (!(phoneNumber.value.startsWith("9665"))) {
        feedbackMessage.innerText += "Number Must Start With 9665\n";
        bool = false;
    }

    // email validation
    var emailRegEx = new RegExp("^[\\w!#$%&’*+/=?`{|}~^-]+(?:\\.[\\w!#$%&’*+/=?`{|}~^-]+)*@(?:[a-zA-Z0-9-]+\\.)+[a-zA-Z]{2,6}$");
    if (feedbackEmail.value == "" || feedbackEmail.value == null) {
        feedbackMessage.innerText += "Empty Email\n";
        bool = false;
    } else if (!emailRegEx.test(feedbackEmail.value)) {
        feedbackMessage.innerText += "Email  Is Invalid\n";
        bool = false;
    }

    // topic validation
    if (topic.value.length == 1) {
        feedbackMessage.innerText += "Empty Topic\n";
        bool = false;
    }

    // message  title and body validation 
    if (title.value == "" || title.value == null) {
        feedbackMessage.innerText += "Empty Title\n";
        bool = false;
    }

    if (messageBody.value.length < 1 || messageBody.value == null) {
        feedbackMessage.innerText += "Empty Message Body\n";
        bool = false;
    }
    //console.log(messageBody.value.length<1) ;
    return bool;
}

function isNameNotString() {
    keyUpMessage.innerText = "";
    keyUpMessage.style.color = "red";
    keyUpMessage.style.fontSize = "15";
    var regEx = new RegExp("\\d+");
    if (regEx.test(fullName.value)) {
        keyUpMessage.innerText = "Numbers Cannot Be In Name";
        return true;
    }
    return false;
}


// changing textBox/fields to yellow and white 
function focused(id) {
    id.style.backgroundColor = "yellow";
}


function blurred(id) {
    id.style.backgroundColor = "";
}