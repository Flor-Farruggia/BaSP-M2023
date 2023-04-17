console.log ('EXERCISE 3: Arrays');
// Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
// "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los
// meses 5 y 11 (utilizar console.log).
console.log ('Exercise 3.a:');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
'Octuber', 'November', 'December'];
console.log(months);
console.log ('fifth month is: '+ months[4]+' /Eleventh month is: '+months[10]);

// Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
console.log ('Exercise 3.b:');

console.log(months);
var abcMonths = months.sort();
console.log ('Alphabetical order of months: ' + abcMonths);

// Agregar un elemento al principio y al final del array (utilizar unshift y push).
console.log ('Exercise 3.c:');

months.unshift ('Lupercalia');
months.push ('Saturnalia');
console.log (months);

// Quitar un elemento del principio y del final del array (utilizar shift y pop).
console.log ('Exercise 3.d:');

months.pop();
months.shift();
console.log (months);

// Invertir el orden del array (utilizar reverse).
console.log ('Exercise 3.e:');

console.log(months);
lastMonths = months.sort().reverse();
console.log ('Reverse months: ' + lastMonths);

// f. Unir todos los elementos del array en un único string donde cada mes este separado por
// un guión - (utilizar join).
console.log ('Exercise 3.f:');

var allMonths = months.join("-");
console.log (allMonths);

// g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar
// slice).
console.log ('Exercise 3.g:');

var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 
'Octuber', 'November', 'December'];
var shortYear = months.slice(4, 11);
console.log ('Months after may and before december: ' + shortYear);