/*

API -> Nos permite fazer integrações entre sistemas diferentes. Vai os dados no formato Json.

Axios -> É uma biblioteca muito usada para fazer requisicões HTTP. Simplifica o processo de comunicação com uma API.

npm install axios

*/

import { useEffect, useState } from "react";
import axios from "axios"
import Card from "./components/card/Card";

const App = () => {

  const [info, setInfo] =  useState([]);


  useEffect(()=>{

    const pegarDados = async () => {
    try {
      const dados = await axios.get("https://fakestoreapi.com/products")
      setInfo(dados.data)
    } catch (error) {
      console.log("Erro ao bucar dados da API", error);
    }

  }

    pegarDados()
  }, [])

  console.table(info);
  

  return (
    <>
      <h1>Aula de Consumo de API</h1>

      {
        info.map((item)=> (
          <Card 
            image = {item.image}
            title = {item.title}
            description = {item.description}
          />
        ))
      }
    </>
  )
}

export default App;