const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

const { cadastroLocalForm, armazenaLocal } = require('./Controllers/localController.js');

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/cadastrar-local', (_req, res) => {
    cadastroLocalForm(_req, res);
});

app.post('/armazena-local', (req, res) => {
    armazenaLocal(req, res);
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
