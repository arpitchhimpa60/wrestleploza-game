const signInButton = document.getElementById("sign-in");
const errorBox = document.getElementById("errorBox");


function showError(message) {
    errorBox.style.display = "block";
    errorBox.innerText = message;
}

function hideError() {
    errorBox.style.display = "none";
}


signInButton.addEventListener("click", function () {

    hideError(); 

    let firstName = document.getElementById("name").value;
    let lastName = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector("input[name='gender']:checked");
    let termsChecked = document.getElementById("terms-condition").checked;

    if (firstName === "") {
        showError("Please enter your first name.");
        return;
    }

    if (lastName === "") {
        showError("Please enter your last name.");
        return;
    }

    if (gender == null) {
        showError("Please select your gender.");
        return;
    }

    if (email === "") {
        showError("Please enter your email.");
        return;
    }


    if (email.indexOf("@") === -1) {
        showError("Email must contain '@'.");
        return;
    }

    if (dob === "") {
        showError("Please select date of birth.");
        return;
    }

    if (termsChecked != true) {
        showError("You must agree to the Terms & Conditions.");
        return;
    }


    alert("Sign-In Successful!");

    window.location.href = "index.html";
});
