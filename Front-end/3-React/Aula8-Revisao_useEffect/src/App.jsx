import React, { useEffect, useState } from "react";

export default function App() {
  // useEffect(() => {
  //   site ficar vermelho
  // });
  // useEffect(() => {
  //   alert("Estou de olho!");
  // }, []);

  // const [numero, setNumero] = useState(0);

  // useEffect(() => {
  //   alert("numero mudou");
  // }, [numero]);

  // useEffect(() => {
  //   if (numero === 1) {
  //     document.body.style.backgroundColor = "red";
  //   } else if (numero === 2) {
  //     document.body.style.backgroundColor = "green";
  //   } else if (numero === 3) {
  //     document.body.style.backgroundColor = "pink";
  //   }
  // }, [numero]);

  // const [mode, setMode] = useState("White");

  // useEffect(() => {
  //   if (mode === "Dark") {
  //     document.body.style.backgroundColor = "#333";
  //     document.body.style.color = "White";
  //   } else {
  //     document.body.style.backgroundColor = "White";
  //     document.body.style.color = "#333";
  //   }
  // }, [mode]);

  // function white() {
  //   setMode("White");

  // }

  // function dark() {
  //   setMode("Dark");
  // }

  const [hora, setHora] = useState(new Date());

  useEffect(() => {
    const intervalo = setInterval(() => {
      setHora(new Date());
      console.log("teste");
    }, 9000);

    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
      <div style={{ textAlign: "center" }}>
        <h1>Relógio em tempo real</h1>
        <p>{hora.toLocaleTimeString("pt-BR")}</p>
      </div>

      {/* <h2>{numero}</h2>
      <button onClick={() => setNumero(numero + 1)}>Like</button>
      <p>Aula</p>

      <button
        onClick={() => {
          if (mode == "Dark") {
            white();
          } else {
            dark();
          }
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkMqUn1DIK8IOsuT8gRbvvJvZwbs3ZQ2dVSw&s"
          alt=""
        />
      </button> */}
    </>
  );
}
