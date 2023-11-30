const lugarService = require("../services/lugarService.js");

const lugarForm = (_req, res) => {
    res.status(200).render("cadastrarLugar");
}

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
}

const cadastraLugar = (req, res) => {
    try {
        lugarService.cadastraLugar(req.body, req.file);
        res.redirect('/feed');
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    lugarForm,
    cadastraLugar,
    feedLugares,
};
