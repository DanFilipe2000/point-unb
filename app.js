const express = require('express');
const upload = require("./auxs/multer.js");
const session = require('express-session');

const app = express();

const porta = 3000;

app.use('/uploads', express.static('uploads'));

app.use(express.static('public'));

app.use(session({
    secret: 'seuSegredo',
    resave: false,
    saveUninitialized: true
}));

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.set('view engine', 'ejs');

app.set('views', './views');

const { lugarForm, cadastraLugar, feedLugares } = require("./controller/lugarController");
const { loginForm, registerForm, createUser, login, sair } = require("./controller/userController.js");

const { popularListaLocais } = require("./services/lugarService.js");
const { popularListaUser } = require("./services/userService.js");

app.get("/", loginForm);

app.get("/register", registerForm);

app.get('/cadastrar-lugar', (req, res) => {
    lugarForm(req, res);
});

app.get('/feed', (req, res) => {
    feedLugares(req, res);
});

app.get("/sair", (req, res) => {
    sair(req, res)
});

app.post('/cadastrar-lugar', upload.single("foto"), (req, res) => {
    cadastraLugar(req, res);
});

app.post('/register', (req, res) => {
    createUser(req, res);
});

app.post('/login', (req, res) => {
    login(req, res);
});

app.listen(porta, () => {
    console.log(`Servidor escutando na porta ${porta}`);

    // Função para popular a lista duplamente encadeada assim que o servidor é iniciado
    popularListaLocais();
    popularListaUser();
});
