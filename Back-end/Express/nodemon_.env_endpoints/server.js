const express = require('express');


const app = express();
const PORT = 3000;

app.get("/", (req, res) => {
    res.send("<h1>Olá Feiura!</h1>");
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});
