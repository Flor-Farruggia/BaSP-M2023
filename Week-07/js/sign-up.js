/***********Name Validation: *****************/
var inputName = document.getElementById("name");
var nameError = document.createElement("div");
inputName.addEventListener("blur", function() {
    validateName(inputName.value);
})
function validateName(name) {
  var chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var nameComplete = name.split("");
  var validName = true;
  for (var i = 0; i < nameComplete.length; i++) {
    if (chars.indexOf(nameComplete[i]) === -1 && nameComplete[i] !== " ") {
      validName = false;
      break;
    }
  }
  if (validName && name.length >= 3) {
    nameError.textContent = "";
    return true;
  } else {
    nameError.textContent = "Invalid. Must contains only letters and at least 3 characters.";
    nameError.classList.add("errorBorder");
    inputName.parentNode.insertBefore(nameError, inputName.nextSibling);
    return false;
  }
}
  inputName.onfocus = function () {
    nameError.classList.remove("errorBorder");
    nameError.textContent = "";
}
/***********Last Name Validation: *****************/
var inputLname = document.getElementById("lname");
var lnameError = document.createElement("div");

inputLname.addEventListener("blur", function() {
    validateLastName(inputLname.value);
})
function validateLastName(lname) {
  var valChars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lnameArray = lname.split("");
  var validLname = true;

  for (var i = 0; i < lnameArray.length; i++) {
    if (valChars.indexOf(lnameArray[i]) === -1) {
      validLname = false;
      break;
    }
  }
  if (validLname && lname.length >= 3) {
    lnameError.textContent = "";
    return true;
  } else {
    lnameError.textContent = "Invalid. Must contains only letters and at least 3.";
    lnameError.classList.add("errorBorder");
    inputLname.parentNode.insertBefore(lnameError, inputLname.nextSibling);
    return false;
  }
}
  inputLname.onfocus = function () {
    lnameError.classList.remove("errorBorder");
    lnameError.textContent = "";
}
/***********DNI Validation: *****************/
var inputDni = document.getElementById("dni");
var dniError = document.createElement("div");
inputDni.addEventListener("blur", function() {
    validateDni(inputDni.value);
})
function validateDni(dni) {
  var numb = "0123456789";
  var dniArray = dni.split("");
  var validDni = true;

  for (var i = 0; i < dniArray.length; i++) {
    if (numb.indexOf(dniArray[i]) === -1) {
      validDni = false;
      break;
    }
  }
  if (validDni && dni.length >= 8) {
    dniError.textContent = "";
    inputDni.classList.remove("errorBorder");
    inputDni.classList.add("correctBorder");
    return true;
  } else {
    dniError.textContent = "Invalid. Only numbers and 8.";
    dniError.classList.add("errorBorder");
    inputDni.parentNode.insertBefore(dniError, inputDni.nextSibling);
    return false;
  }
}
  inputDni.onfocus = function () {
    dniError.classList.remove("errorBorder");
    dniError.textContent = "";
    inputDni.classList.add("correctBorder");
  }
/***********Birthdate Validation: *****************/
var dateInput = document.getElementById("bDate");
var dateError = document.createElement("div");
dateInput.addEventListener("blur", function() {
  function validateDate(num, min, max, acceptedChars) {
    for (var i = 0; i < num.length; i++) {
      if (acceptedChars.indexOf(num.charAt(i)) === -1) {
        return false;
      }
    }
    var value = parseInt(num, 10);
    return !isNaN(value) && value >= min && value <= max;
  }
  var dateValue = dateInput.value;
  var year = dateValue.substring(0, 4);
  var month = dateValue.substring(5, 7);
  var day = dateValue.substring(8, 10);
  var yyyy = validateDate(year, 1953, 2007, "0123456789");
  var mm = validateDate(month, 1, 12, "0123456789");
  var dd = validateDate(day, 1, 31, "0123456789");
  if (yyyy && mm && dd) {
    dateError.textContent = "";
    return true;
  } else {
    dateError.textContent = "Invalid. Please enter a valid date of birth.";
    dateError.classList.add("errorBorder");
    return false;
  }
});
dateInput.addEventListener("focus", function() {
  dateError.textContent = "";
  dateError.classList.remove("errorBorder");
});
/***********Telephone Validation: *****************/
var inputTel = document.getElementById("tel");
var telError = document.createElement("div");

 inputTel.addEventListener ("blur", function() {
    validateTel(inputTel.value);
});
function validateTel(tel) {
    var isValid = true;
    if (tel.length !== 10) {
        isValid = false;
    } else {
        for (var i = 0; i < tel.length; i++) {
            if (isNaN(parseInt(tel[i]))) {
                isValid = false;
                break;
            }
        }
    }    if (isValid) {
        telError.textContent = "";
        return true;
    } else {
        telError.textContent ="Invalid. Must contain just numbers and just 10.";
        telError.classList.add("errorBorder");
        inputTel.parentNode.insertBefore(telError, inputTel.nextSibling);
        return false;
    }
}
inputTel.onfocus = function () {
    inputTel.classList.remove("errorBorder");
    telError.textContent = "";
}

/***********Location Validation: *****************/

var inputLocation = document.getElementById("location");
var locationError = document.createElement("div");
  inputLocation.addEventListener("blur", function() {
    valLocation(inputLocation.value);
})
function valLocation(location) {
  var alphaNumChars = "0123456789 abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var isValid = true;
  if (location.trim().length < 3) {
    isValid = false;
  } else {
    for (var i = 0; i < location.length; i++) {
      if (alphaNumChars.indexOf(location[i]) === -1 && location[i] !== " ") {
        isValid = false;
        break;
      }
    }
  }
  if (isValid) {
    locationError.textContent = "";
    return true;
  } else {
    locationError.textContent = "Invalid. Must have at least 3 alphanumeric character";
    locationError.classList.add("errorBorder");
    inputLocation.parentNode.insertBefore(locationError, inputLocation.nextSibling);
    return false;
  }
}
  inputLocation.onfocus = function () {
    locationError.classList.remove("errorBorder");
    locationError.textContent = "";
  }
/***********Postal Validation: *****************/
var postalCodeError = document.createElement("div");
var postalCodeInput = document.getElementById("postalCode");
postalCodeInput.addEventListener("blur", function () {
  var postalCode = postalCodeInput.value;
  if (!isNaN(postalCode) && postalCode.length >= 4 && postalCode.length <= 5) {
      return true;
    } else {
      postalCodeError.classList.add("errorBorder");
      postalCodeError.textContent = "Invalid. Only 4 numbers.";
      postalCodeInput.parentNode.insertBefore(postalCodeError, postalCodeInput.nextSibling);
      return false;
    }
  }
);
    postalCodeInput.onfocus = function () {
    postalCodeError.classList.remove("errorBorder");
    postalCodeError.textContent = "";
    }
/***********Address Validation: *****************/
var inputAddress = document.getElementById("address");
var addressError = document.createElement("div");
  inputAddress.addEventListener("blur", function() {
    validateAddress(inputAddress.value);
})
function validateAddress(address) {
  var letterYes = false;
  var numberYes = false;
  var spaceYes = false;

  if (address.length < 5) {
    addressError.textContent = "Invalid. Must contain at least 5 characters";
    addressError.classList.add("errorBorder");
    inputAddress.parentNode.insertBefore(addressError, inputAddress.nextSibling);
    return false;
  }
  for (var i = 0; i < address.length; i++) {
    var char = address.charAt(i);
    if ((char >= 'A' && char <= 'Z') || (char >= 'a' && char <= 'z')) {
      letterYes = true;
    } else if (char >= '0' && char <= '9') {
      numberYes = true;
    } else if (char === ' ') {
      spaceYes = true;
    }
  }
  if (letterYes && numberYes && spaceYes && address.length >= 5) {
    addressError.textContent = "";
    return true;
  } else {
    addressError.textContent = "Invalid Address. Must contain at least 5 characters, with numbers, letters and a space between them";
    addressError.classList.add("errorBorder");
    inputAddress.parentNode.insertBefore(addressError, inputAddress.nextSibling);
    return false;
  }
}
  inputAddress.onfocus = function () {
    inputAddress.classList.remove("errorBorder");
    addressError.textContent = "";
  }
/***********Email Validation: *****************/
var inputEmail = document.getElementById("email");
var emailError = document.createElement("div");
  inputEmail.addEventListener("blur", function() {
    valEmail(inputEmail.value);
})
function valEmail(email) {
    var emailRegex = /^[^@]+@[^@]+.[a-zA-Z]{2,}$/;
    if (emailRegex.test(email)) {
      emailError.textContent = "";
      inputEmail.classList.add("correctBorder");
      return true;
    } else {
      emailError.textContent = "Invalid. Must be with a valid format.";
      emailError.classList.add("errorBorder");
      inputEmail.parentNode.insertBefore(emailError, inputEmail.nextSibling);  
      return false;
    }
  }
  inputEmail.onfocus = function () {
    emailError.classList.remove("errorBorder");
    emailError.textContent = "";
  }
/***********Password Validation: *****************/

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
        passwordError.textContent ="Invalid. Must contain at least one capital letter, one lowercase and one number.";
        passwordError.classList.add("errorBorder");
        inputPassword.parentNode.insertBefore(passwordError, inputPassword.nextSibling);
        return false;
    }
    if (password.length < 5) {
        passwordError.textContent ="Invalid Password. You need at least 8 characters (one capital letter, one lowercase and one number)";
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

/***********repeat Validation: *****************/
var inputRepeat = document.getElementById("repeatPassword");
var repeatError = document.createElement("div");
var repeatPassword = inputRepeat.value;

  inputRepeat.onblur = function () {
    var repeatPassword = inputRepeat.value;
    var password = inputPassword.value;
    if (repeatPassword !== password) {
      repeatError.textContent = "Passwords don't match, try again please.";
      repeatError.classList.add("errorBorder");
      inputRepeat.parentNode.insertBefore(repeatError, inputRepeat.nextSibling);
      return false;
    }
    repeatError.textContent = "";
    return true;
  };
  inputRepeat.onfocus = function () {
    repeatError.classList.remove("errorBorder");
    repeatError.textContent = "";
  };
/***********Button: *****************/
var registerButton = document.getElementById("buttonRegister");
registerButton.addEventListener("click", function() {
    alert('the entered data is: '+
            'Name: ' + inputName.value + ' ' +
            'Last name: ' + inputLname.value + ' ' +
            'Dni: ' + inputDni.value + ' ' +
            'Birth date: ' + dateInput.value + ' ' +
            'Telephone: ' + inputTel.value + ' ' +
            'Address: ' + inputAddress.value + ' ' +
            'Location: ' + inputLocation.value + ' ' +
            'Postal code: ' + postalCodeInput .value + ' ' +
            'Email: ' + inputEmail.value + ' ' +
            'Password: ' + inputPassword.value + ' ' +
            'Password repeat: ' + inputRepeat.value);
})