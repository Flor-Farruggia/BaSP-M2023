console.log ('EXERCISE 2: Strings');
//Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
// mayúscula (utilizar toUpperCase).
console.log ('Exercise 2.a');

var first_phrase = 'technologies';
console.log (first_phrase.toUpperCase());

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
// substring).
console.log ('Exercise 2.b');

var second_phrase = 'development';
var five_charact = second_phrase.substring(0,5);
console.log (five_charact);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
// substring).
console.log ('Exercise 2.c');

var third_phrase = 'originality';
var three_last = third_phrase.substring(third_phrase.length -3);
console.log (three_last);

// Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
// con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
// una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
console.log ('Exercise 2.d');

 var fourPhrase = 'developing';
 var fourUpper = fourPhrase.substring(0,1).toUpperCase(0) + (fourPhrase.substring(1,10).toLowerCase(1,10)) ;
 console.log(fourUpper);

// Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
// Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
// indexOf).
console.log ('Exercise 2.e');

var phrase, blancSpace;
phrase = 'Happy day' ;
blancSpace = phrase.indexOf (' ');
console.log (blancSpace);

// Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
// espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
// nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
// letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador +).
console.log ('Exercise 2.f');

var words, spaceBlanc, firstWord, secondWord,firstLetter,secondLetter, fWordRest, sWordRest, completeWords
words = 'documenting technologies';
spaceBlanc = words.indexOf (' ');
firstWord = words.substring(0, spaceBlanc).toLowerCase ();
secondWord = words.substring(spaceBlanc + 1).toLowerCase();
firstLetter = firstWord.substring(0,1).toUpperCase();
secondLetter =secondWord.substring(0,1).toUpperCase();
fWordRest = firstWord.substring(1);
sWordRest = secondWord.substring(1);
completeWords = firstLetter+fWordRest+' '+secondLetter+sWordRest;
console.log(completeWords);