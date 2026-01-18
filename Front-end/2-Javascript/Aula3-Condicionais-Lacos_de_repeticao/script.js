// console.log('Bom dia');

// let nota = 4;

// com template string e fazendo a interpolação
// Template String -> É uma forma de definirmos string que nos permite colocar expressões nela, que nos permite fazer uma interpolação com ${}
// São comandos que permitem ao seu programa tomar decisões, escolhendo o que fazer dependendo de uma situação.

// if (nota >= 5) {
//     console.log(`Sua nota é ${nota}, então você foi aprovado!`);
// } else {
//     console.log(`Sua nota é ${nota}, então você foi reprovado!`);
// } // sem o else, condicional simples, com o else composta

//Condicional múltipla A principal utilidade prática do switch é simplificar e organizar o código quando se precisa comparar uma única variável ou expressão com uma longa lista de valores constantes e exatos. Ele oferece uma alternativa mais legível e, em muitos casos, mais eficiente do que múltiplos if...else if...else aninhados.

// let diaDeAula = Number(prompt("Digite um número de 1 a 4:"))

// switch (diaDeAula) {
//     case 1:
//         console.log('Segunda-feira');
//         break;
//     case 2:
//         console.log('Quarta-feira');
//         break;
//     case 3:
//         console.log('Quinta-feira');
//         break;
//     case 4:
//         console.log("Sexta-feira");
//         break;
//     default:
//         console.log('Número inválido');
        
// }

//Operadores de incremento (++) e decremento (--) são operadores unários que adicionam ou subtraem um de uma variável. Eles são frequentemente usados para controlar laços de repetição e manipulação de variáveis.

//let idade = 10;
// idade = idade + 1;
// idade += 1;
// ++idade

//console.log(++idade);

// Laços de repetição -> estruturas de controle que permitem executar um bloco de código repetidamente com base em uma condição especificada. Eles são essenciais para evitar a repetição manual de código e para processar conjuntos de dados de forma eficiente.

// Utilidade -> A principal utilidade dos laços de repetição é a automação de tarefas repetitivas. Em vez de escrever a mesma instrução várias vezes, um único laço pode executar a ação desejada enquanto uma determinada condição for satisfeita. Isso torna o código mais limpo, fácil de manter e mais poderoso.
// loop

//for(variável inicializadora; condição; iteração) {
// tarefa repititiva
//}

// for (let i = 1; i<=5; i++) {
//     console.log(`${i}: Bom diaaa!`);
// }


// for (let i = 10; i > 0; i--) {
//     console.log(i);
// }

// WHILE

// let num = 1;

// while (num <= 5) {
//     console.log("BOM DIAA!!!");
//     num++;
// }

// let numero;

// while (numero !== 5) {
//     numero = Number(prompt("Tente adivinhar o número de 1 a 10:"));
// }

// alert("Acertou!!!")

// Do/While EXECUTA O LOOP PRIMEIRO E DEPOIS VERIFICA A CONDIÇÃO.
// O do … while sempre executa o bloco de código pelo menos uma vez, mesmo que a condição seja falsa, pela fato de que ela é verificada por último.

// let num = 1;

// do {
//     console.log(`${num}: BOM DIAA!!!`);
//     num++;
// } while (num<=5);

// let senha;

// do {
//     senha = prompt("Digite a senha:");
// } while (senha !== '1234');
// alert("Acesso permitido!")

let soma = 0;

for (let i = 1; i <= 10; i++) {
    console.log(soma += i); // soma = soma + i
}
document.getElementById('resultado').textContent = `Soma total: ${soma}`

