import React, { useState } from "react";

export default function Main() {
  const [nome, setNome] = useState("Hoje é segunda");

  //   function mudarNome() {
  //     setNome("Bem Vindos!!!!!!");
  //   }

  const [like, setLike] = useState(0);

  return (
    <main>
      <h2>{nome}</h2>
      <button onClick={() => setNome("Bem Vindos!!!!!!")}>Mudar</button>
      <h1>{like}</h1>
      <button onClick={() => setLike(like + 1)}>Curtir</button>
    </main>
  );
}
