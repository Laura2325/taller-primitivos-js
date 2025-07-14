const prompt = require("prompt-sync")();

let edad = Number(prompt("¿Cuántos años tienes?"));

if (edad >= 18) {
  console.log("Puedes entrar");
} else {
  console.log("No puedes entrar");
}