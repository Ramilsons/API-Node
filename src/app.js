const express = require('express');

const app = express();

// Carrega as routas
const indexRoute = require('../src/routes/index-route');
const portfolioRoute = require('../src/routes/portfolio-route');

// Aqui estamos utilizando um middleware(camada do meio de duas aplicações, nesse caso, a solicitação do usuario e o nosso servidor)
// Esse middleware irá análisar e validar o REQ.BODY enviado pelo usuário. Ou seja, só irá funcionar req.body se utilizarmos essas duas linhas abaixo
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(indexRoute);
app.use(portfolioRoute);

module.exports = app;