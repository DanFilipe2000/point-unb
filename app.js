const express = require('express');

const app = express();

const porta = 3000;

app.use(express.json());

app.set('view engine', 'ejs');

app.set('views', './views');

const { lugarForm, cadastraLugar } = require("");

app.get('/cadastrar-lugar', (req, res) => {
    lugarForm(req, res);
});

app.post('/cadastrar-lugar', (req, res) => {
    cadastraLugar(req, res);
});

app.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}`);
});
