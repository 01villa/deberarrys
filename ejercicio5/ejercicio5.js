'use strict'
// ejerccio5 Cada libro del ejercicio anterior se encuentra ubicado en una estantería diferente
// dentro de una biblioteca, el índice del vector indica el numero de la estantería.
// Mostrar el numero de la estantería donde se encuentra el libro “You Don’t Know JS”
const programmingBooks = [
    // ... (la lista completa de libros)
  ];
  
  // Encontrar el índice de "You Don't Know JS"
  let indiceLibro = programmingBooks.indexOf("You Don't Know JS");
  
  // Verificar si el libro se encontró y mostrar el número de estantería
  if (indiceLibro !== -1) {
    alert("El libro 'You Don't Know JS' se encuentra en la estantería número " + indiceLibro);
  } else {
    alert("El libro 'You Don't Know JS' no se encuentra en la biblioteca.");
  }
  