const express = require('express');
const multer = require('multer');
const bodyParser = require('body-parser');

const app = express();

const porta = 3000;

app.use(express.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.set('views', './views');

const { lugarForm, cadastraLugar } = require("./controller/lugarController");

// Configuração do Multer para armazenar arquivos no diretório 'public/images'
const upload = multer({ dest: 'public/images' });

app.get('/cadastrar-lugar', (req, res) => {
    lugarForm(req, res);
});

app.post('/cadastrar-lugar', upload.single('foto'),  (req, res) => {
    cadastraLugar(req, res);
});

app.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}`);
});
