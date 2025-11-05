import { Stack } from "./Stack";

const pilhaLivros = new Stack<string>();

console.log("\n---- Situacao inicial ----");
console.log("A pilha esta vazia? " + pilhaLivros.isEmpty());

console.log("\nAdicionando livros na pilha...");
pilhaLivros.push("Trono de Vidro");
pilhaLivros.push("Harry Potter");
pilhaLivros.push("Game Of Thrones");

console.log("\nPilha atual:");
pilhaLivros.printStack();
console.log("\nLivro adicionado com sucesso!");

console.log("\nLista de livros na pilha:");
pilhaLivros.printStack();

console.log("\nRetirando um livro da pilha...");
const retirado = pilhaLivros.pop();

if (retirado) {
  console.log(`O livro "${retirado}" foi retirado da pilha!`);
} else {
  console.log("A pilha está vazia! Nenhum livro para retirar.");
}

console.log("\nPilha atual:");
pilhaLivros.printStack();

console.log("\nAdicionando novo livro: Dom Casmurro");
pilhaLivros.push("Dom Casmurro");

console.log("\nPilha atual:");
pilhaLivros.printStack();

console.log("\nLivro no topo da pilha: " + pilhaLivros.peek());

console.log("Total de livros na pilha: " + pilhaLivros.count());

console.log("\nLimpando todos os livros da pilha...");
pilhaLivros.clear();

console.log("A pilha esta vazia? " + pilhaLivros.isEmpty());