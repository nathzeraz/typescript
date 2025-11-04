import readlinesync = require("readline-sync");
let contador = 0;
const cores: Array<string> = new Array<string>()

do {
    const cor: string = readlinesync.question("Digite uma cor: ");
    cores.push(cor);
    contador++
} while (contador<=4);

console.log(cores)
console.log(cores.sort())

