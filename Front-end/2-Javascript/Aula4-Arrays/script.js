// let nome = "vini";

// let alunos = ["Juliana", "Samuel", "Felipe", "Ilana", "Milton"];
// //   0          1         2         3         4
// console.log(alunos[2]); // Acessa o índice 2 → "Felipe"

// -----------------------
// MÉTODOS DE ARRAY
// -----------------------
// unshift() = adiciona no começo do array
// push()   = adiciona no final
// pop()    = remove o último elemento
// shift()  = remove o primeiro elemento
// splice() = remove, adiciona ou substitui elementos

// alunos.unshift("Luiz");   // Adiciona "Luiz" no início
// console.log(alunos);

// alunos.push("Alexania");  // Adiciona no final
// console.log(alunos);

// alunos.pop();             // Remove o último
// console.log(alunos);

// alunos.shift();           // Remove o primeiro
// console.log(alunos);

// splice(index, remove, adiciona)
// alunos.splice(-1, 0, "vini");  // Adiciona "vini" na penúltima posição
// console.log(alunos);

// console.log(alunos.indexOf("Samuel")); // Retorna o índice de "Samuel"

// alunos.slice(1, 2); // Recorta o array sem alterar o original
// console.log(alunos.slice(1, 2)); // Exibe somente do índice 1 até antes do 2

// let numero = [5, 8, 6, 3, 7, 9, 1, 90, 30, 50, 44];

// numero.sort(function (a, b) {
//   return a - b;            // Ordena números do menor para o maior
// });
// console.log(numero);

// -----------------------
// PARTE DO DOM
// -----------------------

// Array com nomes de frutas
const frutas = ["Maçã", "Banana", "Laranja", "Uva"];

// Pega o elemento UL onde as frutas serão adicionadas no HTML
const listaFrutas = document.getElementById("listaFrutas");

// Loop for para percorrer o array de frutas
for (let i = 0; i < frutas.length; i++) {
  const li = document.createElement("li"); // Cria um <li>
  li.textContent = frutas[i]; // Coloca o nome da fruta
  listaFrutas.appendChild(li); // Adiciona no UL do HTML
}

// Array de números
const numeros = [2, 5, 8, 11, 14, 19, 22];

// Pega a ul onde os números serão exibidos
const listaPares = document.getElementById("listaPares");

let i = 0; // contador do while

// Loop while para percorrer todos os números
while (i < numeros.length) {
  const li = document.createElement("li"); // Cria um <li>
  li.textContent = numeros[i]; // Adiciona o número dentro do li

  // Verifica se o número é par
  if (numeros[i] % 2 === 0) {
    li.className = "par"; // Se for par, adiciona classe CSS "par"
  } else {
    li.className = "impar"; // Se for ímpar, adiciona classe "impar"
  }

  listaPares.appendChild(li); // Adiciona o <li> dentro da UL

  i++; // incrementa o contador
}
