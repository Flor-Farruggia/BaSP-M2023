console.log ('EXERCISE 1: Variables and operators')
// Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la
// suma de ambos números en una 3er variable.
console.log ('Exercise 1.a:')

var first = 5;
var second = 10;
var result = first + second;
console.log ('the result of the sum between ' + first + ' and ' + second + ' is: ' + result);

// Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er
// variable.
console.log ('Exercise 1.b:')

var fName, lName, completeName;
fName = 'Pedro'
lName = 'Flores'
completeName = fName + ' ' + lName
console.log ('The user name is: ' + completeName); 

// Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras
// del string) guardando el resultado de la suma en una 3er variable (utilizar length).
console.log ('Exercise 1.c:')

var firstName, lastName, longWord
firstName = 'John';
lastName = 'Doe';
longWord = firstName + lastName; 
console.log ('Your name '+firstName+' '+lastName+' have ' + longWord.length + ' character');