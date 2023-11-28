const { ListaDuplamenteEncadeada } = require("../scripts/doubleLinkedList.js");
const { recuperarDados, inserirDado } = require("../auxs/processCSV.js");
const criarIdUnico = require("../auxs/createUniqueId.js");

const listaUsers = new ListaDuplamenteEncadeada();

const userCSVPath = "database/tabelas/user.csv";

const popularListaUser = () => {
    const dados = recuperarDados(userCSVPath);

    dados.forEach((element) => {
        listaUsers.inserir_final(element);
    });
};

const create = (body) => {
    const new_body = body;

    let users = listaUsers.retorna_tudo();

    console.log(users);

    users.forEach((element) => {
        if (element.email == body.email) {
            throw new Error("Esse email já foi cadastrado na plataforma!");
        };
    });

    new_body["id"] = criarIdUnico();

    listaUsers.inserir_final(new_body);

    users = listaUsers.retorna_tudo();

    inserirDado(userCSVPath, users);

    return body;
};

module.exports = {
    create,
    popularListaUser
};
