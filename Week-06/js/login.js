/**Validation: */
// console.log ('hola');

var email = document.getElementById('email');
email.addEventListener('keyup', isEmail);

function isEmail(e) {
    var text = e.target.value;
    var emailExpression = /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/;
    var result = emailExpression.test(text);
    return console.log(result);
}

function haveInteger(string) {
    var chars = [];
    for (var i = 0; i < string.length; i++) {
        chars.push(parseInt(string[i]));
    }
    for (var i = 0; i < chars.length; i++) {
        if (!Number.isInteger(chars[i])) {
        } else {
            return true;
        }
    }
}

var password = document.getElementById('password');
password.addEventListener('keyup', isPassword);

function isPassword(e) {
    var text = e.target.value;
    if (text.indexOf(' ') == -1 && text.toUpperCase() != text.toLowerCase() && haveInteger(text) && text.length >= 8) {
        return console.log(true);
    } else {
        return console.log(false);
    }
}






























//EMAIL VALIDATION
// var emailVal= document.getElementById('email');
// var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;

// function validationEmail() {
//   if (emailRegex.test(emailVal.value)) {
//     console.log('ok');
//   } else {
//     emailVal.classList.add('xError');
//   }
// }
// emailVal.addEventListener('blur', validationEmail);

// function removeEmailAlert() {

//     emailVal.classList.remove('xError');
// }
// emailVal.addEventListener('focus', removeEmailAlert);

// //PASSWORD VALIDATION
// var passwordVal = document.getElementById('password');
// var passwordRegex = /^(?=.*[a-zA-Z])(?=.*\d).+$/;

// function validationPassword() {
//   if (passwordVal.value.length <= 5) {
//     passwordVal.classList.add('xError');
//   }
// }
// passwordVal.addEventListener('blur', validationPassword)

// function removePasswordAlert() {
//     passwordVal.classList.remove('xError');
// }

// passwordVal.addEventListener('focus', removePasswordAlert);

// /*******BUTTON*******/
// var buttonLogin = document.getElementById('loginButton');

// function validationLogin() {
//   if (validationEmail === true && validationPassword === true) {
//     return alert('welcome');
//   } else {
//     alert('email or password is wrong');
//   }
// }
// buttonLogin.addEventListener('onclick', validationLogin);