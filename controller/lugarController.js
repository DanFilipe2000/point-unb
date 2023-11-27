const lugarService = require("../services/lugarService.js");

const lugarForm = (_req, res) => {
    res.status(200).render("cadastrarLugar");
}

const feedLugares = (_req, res) => {
    const dados = lugarService.recuperarLugares();

    res.status(200).render("feedDeLocais", { dados });
}

const cadastraLugar = (req, res) => {
    try {
        const lugar = lugarService.cadastraLugar(req.body, req.file);
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
