/*************Email****************/
var emailError = document.createElement("div");
var inputEmail = document.getElementById("email");

 inputEmail.addEventListener("blur", function() {
    valMail (inputEmail.value);
})
function valMail (email) {
    var regex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;

    if (regex.test(email)) {
    } else {
        emailError.classList.add("errorBorder");
        inputEmail.parentNode.insertBefore(emailError, inputEmail.nextSibling);
        emailError.textContent = "e-mail is invalid";
    }
}
inputEmail.onfocus = function () {
    inputEmail.classList.remove("errorBorder");
    emailError.textContent = "";
}

/*************Password****************/

var inputPassword = document.getElementById("password");
var passwordError = document.createElement("div");
inputPassword.onblur = function () {
    var password = inputPassword.value;
    var capitalLetter = false;
    var smallLetter = false;
    var NumberChar = false;
    for (var i = 0; i < password.length; i++) {
        var char = password.charAt(i);
        if (char >= "0" && char <= "9") {
        NumberChar = true;
        } else if (char === char.toUpperCase()) {
        capitalLetter = true;
        } else if (char === char.toLowerCase()) {
        smallLetter = true;
        }
    }
    if (!capitalLetter || !smallLetter || !NumberChar) {
        passwordError.textContent ="Invalid password.(one capital, one lowercase and one number.)";
        passwordError.classList.add("errorBorder");
        inputPassword.parentNode.insertBefore(passwordError, inputPassword.nextSibling);
        return false;
    }
    if (password.length < 5) {
        passwordError.textContent ="Invalid Password. You need at least 8 characters.";
        passwordError.classList.add("errorBorder");
        inputPassword.parentNode.insertBefore(passwordError, inputPassword.nextSibling);
        return false;
    }
    if (capitalLetter && smallLetter && NumberChar && password.length >=5 ) {
        passwordError.textContent = "";
        return true;
    }
    };
    inputPassword.onfocus = function () {
    passwordError.classList.remove ("errorBorder");
    passwordError.textContent = "";
    };
/*************Login button****************/

var loginButton = document.getElementById("loginButton");

loginButton.addEventListener("click", function() {
    if ((inputEmail.value.trim().length !== 0) && (inputPassword.value.trim().length !== 0)) {
        if ((emailError.textContent  == "") && ( passwordError.textContent == "")) {
            alert("Email: " + inputEmail.value + "\n" + "Password: " + inputPassword.value)
        } else {
            if ((emailError.textContent !== "") && ( passwordError.textContent !== "")){
                alert("* Email and Password invalid")
            }else if (emailError.textContent !== ""){
                alert("* Email invalid")
            }else if ( passwordError.textContent !== ""){
                alert("* Password invalid")
            }
        }
    }else{
        alert("* Please complete all the fields")
    }
});