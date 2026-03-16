// importamos o express
const express = require('express');

// inicializando o servidor
const app = express();
const port = 3000;

// "/" é a rota princiapal (http://localhost:3000/)
app.get("/", (req, res) => {
// req = (request) é a requisição feita pelo cliente
// res = (response) é a resposta que o servidor irá enviar para o cliente
    res.send("Bem vindo! Esta é a primeira aula de back-end.");
})

app.listen(port, ( ) =>{
    console.log(`Servidor rodando em http://localhost:${port}/`);
})