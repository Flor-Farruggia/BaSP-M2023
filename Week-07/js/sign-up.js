window.onload = function () {
  document.getElementById("homeIcon").addEventListener("click", function () {
      window.location.href = "index.html";
  });
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
    savedName = inputName.value;
    return true;
  } else {
    nameError.textContent = "Invalid. Must contains only letters.";
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
    savedLastName = inputLname.value;
    return true;
  } else {
    lnameError.textContent = "Invalid. Must contains only letters.";
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
    dniError.classList.remove("errorBorder");
    savedDni = inputDni.value;
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
  }
/***********Birth date Validation: *****************/
var dateInput = document.getElementById("bDate");
var dateError = document.createElement("div");
dateInput.addEventListener("blur", function() {
  validateDate(dateInput.value);
})
function validateDate() {
  var parts = dateInput.value.split('/');
  if (parts.length !== 3) {
    dateError.textContent = "the birth date format is mm/dd/aaaa";
    dateError.classList.add("errorBorder");
    dateInput.parentNode.insertBefore(dateError, dateInput.nextSibling);
    return false;
  }
  var mm = parseInt(parts[0], 10);
  var dd = parseInt(parts[1], 10);
  var yyyy = parseInt(parts[2], 10);
  if (isNaN(dd) || isNaN(mm) || isNaN(yyyy)) {
    dateError.textContent = "the birth date format is mm/dd/aaaa";
    dateError.classList.add("errorBorder");
    dateInput.parentNode.insertBefore(dateError, dateInput.nextSibling);
    return false;
  }
  if (dd < 1 || dd > 31 || mm < 1 || mm > 12) {
    dateError.textContent = "the birth date need to be a valid date";
    dateError.classList.add("errorBorder");
    dateInput.parentNode.insertBefore(dateError, dateInput.nextSibling);
    return false;
  }
  var currentDate = new Date();
  var currentYear = currentDate.getFullYear();
  var age = currentYear - yyyy;
  var minAge = 16;
  var maxAge = 70;
  if (age < minAge || age > maxAge) {
    dateError.textContent = "You are out of range.";
    dateError.classList.add("errorBorder");
    dateInput.parentNode.insertBefore(dateError, dateInput.nextSibling);
    return false;
  } else {
    dateError.textContent = "";
    savedDate =dateInput.value;
    return true;
  }
}
dateInput.onfocus = function () {
  dateError.classList.remove("errorBorder");
  dateError.textContent = "";
}
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
        savedTel=inputTel.value;
        return true;
    } else {
        telError.textContent ="Invalid. Must contain just ten numbers.";
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
    savedLocation = inputLocation.value;
    return true;
  } else {
    locationError.textContent = "Invalid. At least 3 alphanumeric character";
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
      savedPostalCode=postalCodeInput.value;
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
    addressError.textContent = "Invalid. At least 5 characters";
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
    savedAddress = inputAddress.value;
    return true;
  } else {
    addressError.textContent = "Invalid. 5 characters numbers, letters and space.";
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
      savedEmail= inputEmail.value;
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
        passwordError.textContent ="Invalid. At least one capital letter, one lowercase and one number.";
        passwordError.classList.add("errorBorder");
        inputPassword.parentNode.insertBefore(passwordError, inputPassword.nextSibling);
        return false;
    }
    if (password.length < 5) {
        passwordError.textContent ="Invalid. At least 8 characters";
        passwordError.classList.add("errorBorder");
        inputPassword.parentNode.insertBefore(passwordError, inputPassword.nextSibling);
        return false;
    }
    if (capitalLetter && smallLetter && NumberChar && password.length >=5 ) {
        passwordError.textContent = "";
        savedPassword = inputPassword.value;
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
registerButton.addEventListener('click', validateReg);

 function validateReg () {
  if ((inputName.length !== 0) && (inputLname.length !== 0) && (inputDni.length !== 0) &&
    (dateInput.length !== 0) && (inputTel.length !== 0) && (inputAddress.length !== 0) &&
    (inputLocation.length !== 0) && (postalCodeInput .length !== 0) && (inputEmail.length !== 0) &&
    (inputPassword.length !== 0) && (inputRepeat.length !== 0))
        if  ((nameError.textContent == "")&& (lnameError.textContent == "")&& (dniError.textContent == "")&&
            (dateError.textContent == "")&& (telError.textContent == "")&& (locationError.textContent == "")&&
            (postalCodeError.textContent == "")&& (addressError.textContent == "")&& (emailError.textContent == "")&&
            (passwordError.textContent == "")&& (repeatError.textContent == "")){
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
                      dataInfo ();
    } else {
      alert ('Error. Please check the information, you may have some invalid field or an empty one and all fields are required')
    }
    }
    function dataInfo() {
      var data = {
        name: inputName.value,
        lastName: inputLname.value,
        dni: inputDni.value,
        dob: dateInput.value,
        phone: inputTel.value,
        address: inputAddress.value,
        city: inputLocation.value,
        zip: postalCodeInput.value,
        email: inputEmail.value,
        password: inputPassword.value
      };
      var searchParams = new URLSearchParams(data);
      var url = 'https://api-rest-server.vercel.app/signup?' + searchParams.toString();
      fetch(url)
        .then(function (response) {
          if (response.ok) {
            return response.json();
          } else {
            return response.json().then(function(error){
              throw new Error (error);
            });
          }
        })
        .then(function (data) {
          if (data.success === false) {
            throw new Error('registration failed');
          } else {
            var message = "Employee created:\n";
            localStorage.setItem('data', JSON.stringify(data));
            alert(message);
          }
        })
        .catch(function (error) {
          var errorObj = JSON(error.message);
          var msg = errorObj.error;
          alert('Error');
        });
      }}
    var savedData = localStorage.getItem('data');
    if (savedData !== null) {
      var data = JSON.parse(savedData);
      inputName.value= data.name;
      inputLname.value= data.lastName;
      inputDni.value= data.dni;
      dateInput.value= data.birthdate;
      inputTel.value= data.phoneNumber;
      inputAddress.value= data.adress;
      inputLocation.value= data.city;
      postalCodeInput.value= data.zipCode;
      inputEmail.value= data.email;
      inputPassword.value= data.password;
      inputRepeat.value= data.password;
    }