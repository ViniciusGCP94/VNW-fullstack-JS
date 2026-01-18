console.log('Olá, mundo!')

//var aluno = "Miguel"; //Não utilizem
let aluno = "Miguel";
aluno = "Débora"
let idade = 31;
let maiorIdade = 18;
//console.log(aluno);
//console.log(idade);
const CPF = 5555555555;
//CPF = 1234567889;
//console.log(CPF);

// Tipos de dados

// String -> sempre está entre aspas duplas ou simples, ou com template string
// number -> representa qualquer número, inteiro ou decimal
// boolean -> true e false / verdadeiro ou falso
// null -> nulo ou inexistente, é um valor intencionalmente vazio. Dizemos ao programa: "aqui não tem nada... por enquanto"
// undefined -> é quando uma variável foi criada, mas ainda não recebeu nenhum valor.
// NaN -> Não é um número

let diaLindo = 1;
let dia = '1';
//console.log(diaLindo == dia); Vai mostrar no console um boolean
//console.log(typeof(dia)); // Verificar o tipo

let vine = null;
vine = 10;
//console.log(vine);

//console.log( 5 / "oi"); // vai retorna um NaN

let escola;
//console.log(escola); // retorna undefined

// Operadores relacionais ou de comparação

// = operador de atribuição
// == igualdade
// === operador de igualdade restrita, compara valor e tipo
// != de diferente
// !== de diferente restrito, vai comparar valor e tipo. Ex.: 5 !== "5" -> retorna true
// > maior que
// < menor que
// >= maior ou igual que
// <= menor ou igual que

let number = 2;
let numero = "2"
console.log(number, numero);

console.log(numero == 2);
console.log(numero === 2);

console.log(number === '2');
console.log(number != numero);

console.log(number !== 2);
console.log(number > 0);
console.log(number < 5);
console.log(number >= 0);
console.log(number <= 8);

const titulo = document.getElementById("titulo");
//console.log(titulo); // papel do console.log, verificar para evitar e corrigir erros, neste caso vai mostrar no console do navegador que eu conseguir capturar o elemento HTML.
console.log(titulo.innerText); // Exibindo apenas o texto do título

titulo.textContent = "O prazo do desafio é até o dia 17/11"; // Alterando o texto do título

console.log(titulo.textContent); // Exibindo o texto do título alterado

// alterando estilo diretamente
titulo.style.color = "red"; // Colocando uma cor de font para o título;
titulo.style.fontSize = "50px"; // Aumantando o tamanho da fonte do título

const lista = document.getElementById("lista");
//console.log(lista);

const ul = document.createElement('ul'); // Criando elementos dinamicamente
lista.appendChild(ul) //Inserindo a ul dentro da div(lista)

let li1 = document.createElement("li"); // Criando elementos dinamicamente
li1.textContent = "item 1" // Inserindo o texto dentro da tag criada dinamicamente
ul.appendChild(li1) // Inserindo a li dentro da ul

let li2 = document.createElement("li");
li2.innerHTML = "<strong>item 2</strong>"  //Com o inner.HTML podemos colocar tags HTML
ul.appendChild(li2);


















