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

const login = (req, res) => {
    try {
        const user = userService.getUser(req.body);
        
        req.session.user = user;

        res.redirect("/feed");
    } catch (error) {
        res.render("tela_login", { error });
    }
}

module.exports = {
    loginForm,
    registerForm,
    createUser,
    login,
};
