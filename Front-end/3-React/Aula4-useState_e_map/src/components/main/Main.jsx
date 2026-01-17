import { useState } from "react";

// Componente principal
export default function Main() {
  // Estados para armazenar os valores digitados no formulário
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [cidade, setCidade] = useState("");

  // Estado que guarda a lista de usuários cadastrados
  const [usuario, setUsuario] = useState([]);

  // Função disparada ao enviar o formulário
  const enviar = (e) => {
    e.preventDefault(); // Impede o recarregamento da página

    // Cria um objeto com os dados preenchidos
    const usuariosObj = {
      nome: nome,
      idade: idade,
      cidade: cidade,
    };

    // Adiciona o novo usuário ao array existente
    setUsuario([...usuario, usuariosObj]);

    // Limpa os inputs após o envio
    setNome("");
    setIdade("");
    setCidade("");
  };

  return (
    <main>
      <h1>Cadastro</h1>

      {/* Formulário de cadastro */}
      <form onSubmit={enviar}>
        <input
          type="text"
          placeholder="Nome"
          onChange={(e) => setNome(e.target.value)} // Atualiza o estado nome
          value={nome}
        />

        <input
          type="text"
          placeholder="idade"
          onChange={(e) => setIdade(e.target.value)} // Atualiza o estado idade
          value={idade}
        />

        <input
          type="text"
          placeholder="cidade"
          onChange={(e) => setCidade(e.target.value)} // Atualiza o estado cidade
          value={cidade}
        />

        <button type="submit">Cadastrar</button>
      </form>

      {/* Lista de usuários cadastrados */}
      <section>
        {usuario.map((item, id) => (
          <div key={id}>
            <h2>NOME: {item.nome}</h2>
            <h3>Idade: {item.idade}</h3>
            <h3>Cidade: {item.cidade}</h3>
          </div>
        ))}
      </section>
    </main>
  );
}

// O que é o Método map? 🤔
// O método map é uma funcionalidade essencial dos arrays no JavaScript. Ele percorre cada item de um array, aplicando uma função especificada a cada elemento. Essa função pode modificar o item atual e/ou retornar um novo valor, resultando em um novo array com os valores modificados pela função aplicada.

// export default function Main() {
//   // Array simples com uma lista de tarefas
//   const tarefas = [
//     "limpar a casa",
//     "lavar os pratos",
//     "dobrar roupa",
//     "arrumar a cama",
//   ];

//   // Array de objetos representando cadastros de pessoas
//   const cadastro = [
//     {
//       nome: "Thiago",
//       idade: "23",
//       cidade: "RJ",
//     },
//     {
//       nome: "Madson",
//       idade: "20",
//       cidade: "RJ",
//     },
//     {
//       nome: "Eric",
//       idade: "22",
//       cidade: "Feira",
//     },
//   ];

//   return (
//     <main>
//       <h1>Boa noite!</h1>

//       {/* Lista simples usando map */}
//       <ul>
//         {tarefas.map((item, index) => (
//           // Sempre usar uma key quando renderiza listas
//           <li key={index}>{item}</li>
//         ))}
//       </ul>

//       {/* Renderizando lista de objetos */}
//       <div>
//         {cadastro.map((item, index) => (
//           <div key={index}>
//             <h2>Nome: {item.nome}</h2>
//             <h3>Idade: {item.idade}</h3>
//             <p>Cidade: {item.cidade}</p>
//           </div>
//         ))}
//       </div>
//     </main>
//   );
// }

// Hook useState é usado para criar variáveis de estado em componentes funcionais.
// Hooks são recursos especiais do React que permitem usar funcionalidades
// como estado, ciclo de vida e contexto sem precisar de classes.

// Exemplo de sintaxe:
// const [nome, setNome] = useState("valor inicial");

// import { useState } from "react";

// export default function Main() {

//   // Estado 'cantor' inicia com "Zeca pagodinho"
//   // setcantor é a função usada para atualizar esse valor
//   const [cantor, setcantor] = useState("Zeca pagodinho");

//   // Função que muda o estado cantor
//   function muda() {
//     setcantor("Bom dia!");
//   }

//   // Estado para cor de fundo
//   const [cor, setcor] = useState("red");

//   // Função que altera a cor para azul
//   function mudacor() {
//     setcor("blue");
//   }

//   // Estado 'like' inicia em 0
//   // like = valor atual / setlike = altera o valor
//   const [like, setlike] = useState(0);

//   // Estado simples para texto de saudação
//   const [oi, setoi] = useState("Bom dia!");

//   function ola() {
//     setoi("Boa noite");
//   }

//   return (
//     <>
//       {/* Mostra o valor atual de cantor */}
//       <h2>{cantor}</h2>

//       {/* Botão que altera o valor para "Bom dia!" */}
//       <button onClick={muda}>Clique aqui</button>

//       {/* Div que muda de cor conforme o estado "cor" */}
//       <div style={{ background: cor }}>
//         <p>oi</p>
//       </div>

//       {/* Botão que troca a cor para azul */}
//       <button onClick={mudacor}>muda cor</button>

//       {/* Exibe o número de likes */}
//       <h2>{like}</h2>

//       {/* Botão que incrementa o valor de like */}
//       <button
//         onClick={() => {
//           setlike(like + 1);
//         }}
//       >
//         Like
//       </button>

//       {/* Exibe o estado oi */}
//       <p>{oi}</p>

//       {/* Botão que muda o texto de oi */}
//       <button onClick={ola}>oiiiii</button>
//     </>
//   );
// }
