console.log ('EXERCISE 6: functions');
// Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
// la función y guardar el resultado en una variable, mostrando el valor de dicha variable en
// la consola del navegador.
console.log ('Exercise 6.a: ');
function sum (a,b) {
    return a + b;
}
var a = 5;
var b = 15;
var result = sum (a,b);
console.log ('The sum between '+a+' and '+b+' is: '+result);


// b. Copiar la función suma anterior y agregarle una validación para controlar si alguno de
// los parámetros no es un número; de no ser un número, mostrar un alert aclarando que
// uno de los parámetros tiene error y retornar el valor NaN como resultado.
console.log ('Exercise 6.b: ');

function numberValidation (numA,numB) {
    if (typeof numA !== "number" || typeof numB !== "number") {
    alert ("Error. Please enter only numbers");
    return NaN;
 } else {
    return numA + numB;
 }
}
console.log(numberValidation (20, 'toto'))

// c. Crear una función “validateInteger” que reciba un número como parámetro y devuelva
// verdadero si es un número entero.
console.log ('Exercise 6.c: ');

function validation (c) {
    if (Number.isInteger(c)) {
      return true;
    } else {
      return false;
    }
  }
  var c= 3.5;
  rest= validation (c);
  console.log (rest);

// d. Copiar y renombrar la función suma del ejercicio 6b) y agregarle una llamada a la función
// del ejercicio 6c. y que valide que los números sean enteros. En caso que haya decimales
// mostrar un alert con el error y retornar el número convertido a entero (redondeado).
console.log ('Exercise 6.d: ');

function otherValidation (d,e) {
    if (typeof d !== "number" || typeof e !== "number") {
    alert ('Error. Please enter only numbers');
    return NaN;
 } else {
   if (validation(d) === true && validation(e) === true ) {
    return d + e;
   } else {
    alert ('One of the parameters is not an integer');
    d = Math.round (d);
    e = Math.round (e);
    return d + e;
   }
 }
}
var d = 5;
var e = 5.75;
resultB = otherValidation (d,e);
console.log (resultB);

// e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de una
// nueva función probando que todo siga funcionando igual que en el apartado anterior.
console.log ('Exercise 6.e: ');

function realNumber(value) {
  return typeof value === "number";
}
function numberInteger(value) {
  return Number.isInteger(value);
}
function validateNumbers(d, e) {
  if (!realNumber(d) || !realNumber(e)) {
    alert("Error. Please enter only numbers");
    return NaN;
  } else if (!numberInteger(d) || !numberInteger(e)) {
    alert("One of the parameters is not an integer, is going to be fixed automatically");
    d = Math.round(d);
    e = Math.round(e);
    return d + e;
  } else {
    return d + e;
  }
}
function finalValidation(d, e) {
  return validateNumbers(d, e);
}
 var d= 5;
 var e= 11.5;
 finalSum= finalValidation (d,e);
 console.log ('result: '+finalSum);