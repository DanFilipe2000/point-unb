const express = require('express');

const app = express();

const porta = 3000;

app.use(express.json());

app.set('view engine', 'ejs');

app.set('views', './views');

app.get('/cadastrar-lugar', (_req, res) => {
    res.render('cadastrarLugar');
});

app.post('/', (_req, res) => {
    res.send('Bem-vindo ao meu aplicativo Node.js!');
});

app.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}`);
});
