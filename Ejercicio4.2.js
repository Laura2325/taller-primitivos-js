const prompt = require("prompt-sync")();

let contrasena = prompt("Ingresa la contraseña:");

while (contrasena !== "1234") {
  contrasena = prompt("Contraseña incorrecta. Intenta otra vez:");
}

console.log("Contraseña correcta");