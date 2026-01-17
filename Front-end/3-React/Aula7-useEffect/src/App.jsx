import { useEffect, useState } from "react"
import Header from "./components/header/Header"

// O qué o useEffect? Permite executar um código dependendo de uma determinada situação do componente. Executa efeito colatéral em compoinentes funcionais. Tipo "faça algo depois que o componente renderizar."

//Exemplos
// Buscar dados de uma API
// Alterar o título da aba da página
//Salvar e buscar dados armazenados no localStorage
//Executar eventos (scroll, resize)
// usar setInterval, setTimout

/*
useEffect(()=>{
    função de efeito
  }, [array de dependência])

  O Array de dependencia é o segundo argumento que você passa para o useEffect, ele é usado para especificar quando o useEffect deve ser executado.

*/

const App = () => {
  // useEffect(()=> {
  //   console.log("Componente renderizado")
  // })

  // const [contador, setContador] = useState(0);
  // useEffect(()=>{
  //   console.log('Contador mudou para:', contador);
  // },[contador])

  const [nome, setNome] = useState("");
  const [mensagem, setMensagem] = useState("");

  useEffect(()=>{
    if (nome.trim() !== "") {
      setMensagem(`Olá, ${nome}! Seja bem vindo(a)!`)
    } else {
      setMensagem("")
    }
  }, [nome])

  return(
    <>
      <Header />
      <h1>Bom dia!</h1>
      <p>Bem vindo a aula</p>
      <p>Aula de useEffect</p>
      {/* <h2>{contador}</h2>
      <button onClick={()=> setContador(contador + 1)}>Incrementar</button> */}

      <input 
        type="text"
        placeholder="Digite seu nome"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
      />

      <p>{mensagem}</p>
    </>
  )
}

export default App
