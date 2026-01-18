
//                 0        1           2       3
let nomes = ["Guilherme", "Júlia", "Viviane", "Hiago"];
nomes.push("Vinicius"); // adiciona o elemento no final
nomes.unshift("Samuel");// adiciona o elemento no início
nomes.pop();// remove o último elemento
nomes.shift();// remove o primeiro elemento
//nomes.sort(); // coloca os elementos em ordem

// O último índice no slice nunca será incluído
const copiaNomes = nomes.slice(1, 3);
// console.log(copiaNomes);


// console.log(nomes[1]);

// console.log(nomes);
// console.log(nomes.length);

//              0       1       2           3           4
let alunos = ["Ana", "Bruno", "Carlos", "Danielle", "Samuel"]
// array.splice(index, quantidade a remover, elementos)

//Removendo
//alunos.splice(1, 2);
//console.log(alunos);

//Adcionando
//alunos.splice(4, 0, "Rafael")
//console.log(alunos);

alunos.splice(2, 1, "Patrícia", "Flávia");
//console.log(alunos);

alunos.splice(2);
//console.log(alunos);

// Objetos -> Nos permitem representar entidades reais com múltiplas características. É uma coleção de propriedades com chaves e valor.

let pessoa = {
//  chave   valor
    nome: "Jeferson",
    idade: 25,
    profissao: "Dev"
};

console.log(pessoa);
console.log(pessoa.profissao);

let livro = {
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    paginas: 256,
    ano: 1900
};

console.log(livro);
console.log(livro.autor);

//Adicionando no objeto
livro.genero = "Romance";
console.log(livro);

//Alterando no objeto
livro.ano = 1899;
console.log(livro);

//Removendo no objeto

delete livro.paginas;
console.log(livro);

// Objeto aninhado e com array
let aluno = {
    nome: "Ilana",
    idade: 20,
    endereco: {
        rua: "Av. Brasil",
        num: 100
    },
    notas: [8.5, 9.0, 7.5]
};

// Acessando objetos
console.log(aluno);
console.log(aluno.endereco.rua);
console.log(aluno.notas[0]);


// Exibindo produtos com DOM e com array de objetos
const produtos = [
    {nome: "Notebook", preco: 4500},
    {nome: "Mouse", preco: 80},
    {nome: "Teclado", preco: 120},
    {nome: "Monitor", preco: 900},
]

const container = document.querySelector("#produtos")

for (let i = 0; i < produtos.length; i++) {
    const item = produtos[i];

    const card = document.createElement("div");
    card.classList.add("card");

    card.innerHTML = `
        <h3>${item.nome}</h3>
        <p>${item.preco}</p>
    `;

    container.appendChild(card);
}




