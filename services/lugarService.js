const { ListaDuplamenteEncadeada } = require("../scripts/doubleLinkedList.js");

const userTable = "../database/tabelas/local.csv";

const listaLocais = new ListaDuplamenteEncadeada();

const cadastraLugar = (body, file) => {
    const new_body = {body};

    if (file) {
        const fotoPath = file.path;

        new_body["foto"] = fotoPath;
    };

    listaLocais.inserir_final(new_body);

    listaLocais.travessia();

    listaLocais.ordena_por_nota();

    return new_body;
};

module.exports = {
    listaLocais,
    cadastraLugar,
};
