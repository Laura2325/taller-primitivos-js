const prompt = require("prompt-sync")();

let numero = Number(prompt("Ingresa un número:"));
let i = 1;

while (i <= numero) {
  console.log(i);
  i++;
}