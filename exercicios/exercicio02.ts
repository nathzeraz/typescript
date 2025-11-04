import readlinesync = require("readline-sync");

const numeros: Set<number> = new Set<number>([2, 5, 1, 3, 4, 9, 7, 8, 10, 6]);

console.log("Indices:");
for (let i = 0; i < 10; i++) {
  console.log(i);
}

console.log("\nLista:");
console.log(Array.from(numeros).join(" "));

const numeroProcurado = readlinesync.questionInt("\nDigite o numero: ");

if (numeros.has(numeroProcurado)) {
  console.log(`\nO numero ${numeroProcurado} foi encontrado!`);
} else {
  console.log(`\nO numero ${numeroProcurado} não foi encontrado!`);
}