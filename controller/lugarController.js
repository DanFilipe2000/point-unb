const lugarService = require("../services/lugarService.js");

const lugarForm = (_req, res) => {
    res.render("cadastrarLugar");
}

const cadastraLugar = (req, res) => {
    try {
        const lugar = lugarService.cadastraLugar(req.body, req.file);
        res.status(201).json(lugar);
    } catch (error) {
        res.status(400).json(error);
    }
}

module.exports = {
    lugarForm,
    cadastraLugar
};
