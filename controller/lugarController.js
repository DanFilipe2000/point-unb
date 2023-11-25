const lugarService = require("../services/lugarService.js");

const lugarForm = (_req, res) => {
    res.render("cadastrarLugar");
}

const cadastraLugar = (req, res) => {
    try {
        const lugar = lugarService.cadastraLugar(req.body);
        res.status(201).json(lugar);
    } catch (error) {
        res.status(400).send(error);
    }
}

module.exports = {
    lugarForm,
    cadastraLugar
}