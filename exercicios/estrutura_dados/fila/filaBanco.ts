import { Queue } from "./Queue";

const filaBanco = new Queue<string>();

console.log("\n---- Situacao inicial ----");
console.log("A fila esta vazia? " + filaBanco.isEmpty());

console.log("\nAdicionando clientes na fila...");
filaBanco.enqueue("Joao");
filaBanco.enqueue("Maria");
filaBanco.enqueue("Ana");

console.log("\nFila atual:");
filaBanco.printQueue();

console.log("\nLista de clientes na fila:");
filaBanco.printQueue();

console.log("\nChamando o primeiro cliente...");
const chamado = filaBanco.dequeue();
console.log("Cliente chamado: " + chamado);

console.log("\nFila atual apos chamar:");
filaBanco.printQueue();

console.log("\nAdicionando cliente: Carlos");
filaBanco.enqueue("Carlos");

console.log("\nFila atual:");
filaBanco.printQueue();

console.log("\nO cliente Maria esta na fila? " + filaBanco.contains("Maria"));
console.log("O cliente Joao esta na fila? " + filaBanco.contains("Joao"));

console.log("\nPrimeiro cliente da fila: " + filaBanco.peek());

console.log("Total de clientes na fila: " + filaBanco.count());

console.log("\nLimpando a fila...");
filaBanco.clear();

console.log("A fila está vazia? " + filaBanco.isEmpty());