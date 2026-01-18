// console.log("Bom dia!!");

// Declarando variáveis

// var - é chamada de variável global, porque está disponível para qualquer outro
// código no documento atual. Forma antiga de declarar variáveis e por isso não é
// mais tão usada.

// let - não existia antes do ECMAScript 6 e é usado principalmente para
// declarações em bloco (nosso foco).

// const - constante apenas de leitura que não pode alterar seu valor por meio de
// uma atribuição ou ser declarada novamente

// var  não usamos mais
// let nome = "vini";
// const cpf = 8888888888;

// Tipos de dados
// "" - String
// 25 - number
// true/false - Boolean
// let idade; - undefined
// let dia = null - Nulo
// NaN - não e um numero

// OPERADORES DE COMPARAÇÃO

// = atribuição de tipo
// == verificação de valor
// === verificação de tipo e valor
// != verifica se os valores comparados são diferentes
// !== verifica se o valor e o tipo comparado é diferente
// > maior que
// < menor que
// >= maior ou igual
// <= menor ou igual
// em valores binários, 0 é false e 1 é true

// Condicionais

// let primo = true;

// if (primo) {
//   console.log("Está aqui o leite");
// }

// let saldo = 90;

// if (saldo >= 100) {
//   console.log("Retire o diheiro!");
// } else {
//   console.log("Saldo insuficiente");
// }

// // com o ternario

// // let idade = 18;
// let mensagem = idade >= 18 ? `pode entrar na festa! ${idade}` : "Acesso negado";

// console.log(mensagem);

// OPERADORES LÓGICOS

// && (and) Seu resultado é true se ambos os valores forem verdadeiros.
// || (or) Produz um valor true se qualquer um dos valores for verdadeiro.
// ! (not) Inverte o valor que é dado à ele

//Exemplos
// console.log(true && false); // false
// console.log(true && true); // true
// console.log(false || true); // true
// console.log(false || false); // false
// console.log(!(3 > 2));

// getElementsBy
// const titulo = document.getElementById("titulo");
// const titulo = document.getElementsByClassName("titulo")[0];
// const titulo = document.getElementsByTagName("h1")[0];
// querySelector
// const titulo = document.querySelector("#titulo");
// const titulo = document.querySelector(".titulo");
// const titulo = document.querySelector("h1");

const resultado = document.getElementById("Resultado");

const nome = prompt("Digite seu nome:");
const idade = Number(prompt("Digite sua idade:"));

if (nome === "" || isNaN(idade)) {
  resultado.textContent = "Preencha os dados corretos.";
  resultado.style.background = "red";
} else if (idade < 12) {
  resultado.textContent = `Usuario: ${nome} -- Status criança`;
  resultado.style.background = "yellow";
} else if (idade < 18) {
  resultado.textContent = `Usuario: ${nome} -- Status Adolescente`;
  resultado.style.background = "blue";
} else {
  resultado.textContent = `Usuario: ${nome} -- Status Adulto`;
  resultado.style.background = "green";
}

// ATIVIDADE EXTRA

// 01 - crie uma condição composta com uma variável dia e a condição verifica
// se está de dia mostre 'claro' senão mostre está 'de noite'

// 02 - Crie uma condição de nota escolar, se o aluno tirou
// uma nota maior ou igual a 5 é aprovado, caso contrario reprovado.

// 03 crie uma condição com nome e senha e verifique se o acesso
// e negado ou liberado;

// 04 Crie 3 variaveis, dinheiroConta, salario e custoViagem, verifique de acordo
//com seu orçamento se e possivel fazer uma viagem.
