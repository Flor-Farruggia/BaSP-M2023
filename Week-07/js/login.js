window.onload = function () {
    document.getElementById("homeIcon").addEventListener("click", function () {
        window.location.href = "index.html";
    });
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
    var email = inputEmail.value.trim();
    var password = inputPassword.value.trim();
    var emailErrorText = emailError.textContent.trim();
    var passwordErrorText = passwordError.textContent.trim();
    if (email.length !== 0 && password.length !== 0 && emailErrorText === "" && passwordErrorText === "") {
      var queryParams = "?email" + inputEmail.value + "&password=" + inputPassword.value;
              alert("Email: " + email + "\n" + "Password: " + password);
        checkUser ();
    } else {
        alert("E-mail or password invalid.");
      }
    })
    function checkUser(){
        fetch('https://api-rest-server.vercel.app/login'+queryParams)
        .then (function(response) {
            return response.json ();
        })
        .then (function(data) {
            if (data.success === true) {
                console.log (data.msg);
            }
            alert(data.msg);
        })
        .catch (function(errors) {
            return alert (errors.msg);})
 }
}
