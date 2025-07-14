const prompt = require("prompt-sync")();

let anioNacimiento = prompt("¿En qué año naciste?");
let edadCalculada = 2025 - parseInt(anioNacimiento);

console.log("Tienes " + edadCalculada + " años");