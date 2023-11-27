const express = require('express');
const upload = require("./auxs/multer.js");

const app = express();

const porta = 3000;

app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.set('view engine', 'ejs');

app.set('views', './views');

const { lugarForm, cadastraLugar, feedLugares } = require("./controller/lugarController");
const { popularLista } = require("./services/lugarService.js");

app.get('/cadastrar-lugar', (req, res) => {
    lugarForm(req, res);
});

app.get('/feed', (req, res) => {
    feedLugares(req, res);
});

app.post('/cadastrar-lugar', upload.single("foto"), (req, res) => {
    cadastraLugar(req, res);
});

app.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}`);

    // Função para popular a lista duplamente encadeada assim que o servidor é iniciado
    popularLista();
});
