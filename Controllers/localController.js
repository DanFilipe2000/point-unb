const { adicionar_local } = require("../auxs/funcs.js");

const cadastroLocalForm = (_req, res) => {
    res.status(200).render('cadastrar_local', { adicionar_local });
};

const armazenaLocal = (req, res) => {
};

module.exports = {
    cadastroLocalForm,
    armazenaLocal,
}