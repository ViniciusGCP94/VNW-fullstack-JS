//O que é funções? São blocos de códigos reutilizáveis que executam uma tarefa específica. É um conjunto de instruções que realizam uma tarefa. As funções, também, podem aceitar parâmetros, que são valores passados para a função e podem retornar um valor.

// function nomeFuncao() {
//     console.log('Jeferson');
//     console.log('25');
//     console.log('Bahia');
// }

// Para execultar a função é preciso chamá-la. A função é importante para o agrupamento e reutilização de código, o que torna tudo mais organizado.
// nomeFuncao();

// Parametros e argumentos -> Parâmetros são variáveis que você declara na definição da função, e que vão receber valores quando a função for executada. Já os argumentos são os valores reais que você passa ao chamar essa função.

//  function info(nome, idade, estado) {
//      console.log(nome);
//     console.log(idade);
//      console.log(estado);
    
//      console.log(`O estudante ${nome}, tem ${idade} anos, e mora no estado de ${estado}`);
//  }

// info("Rennan", 26, "São Paulo");

// Variáveis passadas por argumento
// let meuNome = 'Miguel';

// function mostrarNome(nome) {
//     console.log(`Olá, ${nome}`);
// }

// mostrarNome(meuNome);

// Função com return -> é uma função que, depois de executar seu código, devolve um valor para quem a chamou. Esse valor pode ser usado em outras partes do programa, armazenado em variáveis, ou passado para outras funções.

// function soma(n1, n2) {
//     return n1 + n2;
// }

// console.log(soma(8, 2));

// const primeiraSoma = soma(10, 5);
// console.log(primeiraSoma);

// Funções anomimas e arrow function(função de seta)

// const multiplicacao = function (n1, n2) {
//  return n1 * n2;
// }

// console.log(multiplicacao(4, 2));

const divisao = (n1, n2) => n1 / n2;

console.log(divisao(8, 2));

//-----------------------------------------------------------
//Eventos -> Eventos são ações que acontecem na página, como cliques e digitação.

function mudarTexto() {
    const titulo = document.querySelector('#titulo');
    
    if(titulo.textContent === "O texto mudou!") {
        titulo.textContent = "Clique no botão";
    } else {
        titulo.textContent = "O texto mudou!"
    }
}

// addEventListener -> é um método em JavaScript que permite a um elemento (como um botão ou a página inteira) "ouvir" um evento específico, como um clique, e executar uma função quando esse evento ocorre.

const botao = document.querySelector("#btn");
botao.addEventListener("click", mudarTexto);

// Evento change

function mostrarNome() {
    const valor = document.querySelector('#nome').value;
    document.querySelector('#resultado').textContent = valor;
}

document.querySelector("#nome").addEventListener('change', mostrarNome);

// Evento de MOUSEOVER

function entrar() {
    document.querySelector("#caixa").style.backgroundColor = 'lightgreen';
}

// Evento de MOUSEOUT
function sair() {
    document.querySelector("#caixa").style.backgroundColor = 'lightgray';
}

//---------------------------------------------------------
// Palindromo - teste técnico


let palavra = "rua";

function palindromo(palavra) {
    let palavraDividida = palavra.split("");
    let palavraInvertida = palavraDividida.reverse();
    let palavraFormada = palavraInvertida.join("")

    if(palavraFormada == palavra) {
        console.log(`O nome ${palavra} é um palíndromo`);
    } else {
        console.log(`O nome ${palavra} não é um palíndromo`);
    }
}

palindromo(palavra);
