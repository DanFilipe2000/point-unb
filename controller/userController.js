const userService = require("../services/userService.js");

const loginForm = (_req, res) => {
    res.status(200).render("tela_login");
};

const registerForm = (_req, res) => {
    res.status(200).render("tela_registro");
};

const createUser = (req, res) => {
    try {
        userService.create(req.body);
        res.redirect("/feed");
    } catch (error) {
        res.status(401).json({ error: error.message });
    }
};

module.exports = {
    loginForm,
    registerForm,
    createUser,
};
