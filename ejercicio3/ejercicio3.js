// //ejercicio 3  En base al resultado del ejercicio anterior agrupar en un array únicamente las
// palabras que tengan mas de 3 letras.


let phrase = 'La programación web es fundamental para el progreso';

// Separar la frase en palabras
let palabras = phrase.split(' ');

// Mostrar cuántas palabras tiene la frase
alert('La frase tiene ' + palabras.length + ' palabras.');


let otraFrase = 'La programación web es fundamental para el progreso';

// Separar la frase en palabras
let otrasPalabras = otraFrase.split(' ');

//palabras con más de 3 letras
let palabrasMasDeTresLetras = otrasPalabras.filter(palabra => palabra.length > 3);

// Mostrar el array resultante
alert('Palabras con más de 3 letras: ' + palabrasMasDeTresLetras.join(', '));