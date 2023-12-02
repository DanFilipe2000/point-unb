const lugarService = require("../services/lugarService.js");

const lugarForm = (req, res) => {
    if (req.session.user) {
        res.status(200).render("cadastrarLugar");
    } else {
        const data = {
            error: {message: "Faça login ou crie uma conta para cadastrar o lugar!"},

        }
        res.render("tela_login", data)
    }

};

const cadastraLugar = (req, res) => {
    try {
        lugarService.cadastraLugar(req.body, req.file, req.session.user);
        res.redirect('/feed');
    } catch (error) {
        res.status(400).json(error);
    }
};

const feedLugares = (req, res) => {
    const dados = lugarService.recuperarLugares();

    if (req.session.user) {
        const data = {
            lugares: dados,
            user: req.session.user
        };
        res.status(200).render("feedDeLocais", data);
    } else {
        const data = {
            lugares: dados,
        };
        res.status(200).render("feedDeLocais", data);
    }
};

const feedLugaresFiltrados = (req, res) => {
    const { nota } = req.body;

    const dados = lugarService.buscaBinaria(nota);

    if (req.session.user) {
        const data = {
            lugares: dados,
            user: req.session.user
        };
        res.status(200).render("feedDeLocais", data);
    } else {
        const data = {
            lugares: dados,
        };
        res.status(200).render("feedDeLocais", data);
    }
}

const apagarLugar = (req, res) => {
    const { id } = req.params;

    lugarService.removerLugar(id);

    res.redirect("/perfil");
};

module.exports = {
    lugarForm,
    cadastraLugar,
    feedLugares,
    feedLugaresFiltrados,
    apagarLugar
};
