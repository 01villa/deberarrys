'use strict'
//ejercicio 1  Ingresar un nombre con promp y verificar si el nombre ingresado se encuentra en el
// vector

let students = ["Juan", "Jose", "Pedro", "Maria", "Alejandra"];

// Ingresar un nombre con prompt
let nombreIngresado = prompt("Ingrese un nombre:");

// Verificar nombre ingresado si seencuentra
if (students.indexOf(nombreIngresado) !== -1) {
  alert("El nombre se encuentra en el vector.");
} else {
  alert("El nombre no se encuentra en el vector.");
}